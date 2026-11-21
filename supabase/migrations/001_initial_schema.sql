-- ============================================================
-- BioPortl — Initial Database Schema
-- supabase/migrations/001_initial_schema.sql
--
-- Run with:  supabase db push
-- Or apply via Supabase Dashboard → SQL Editor
-- ============================================================

-- ── 0. Extensions ───────────────────────────────────────────
-- pgcrypto ships with Supabase but ensure gen_random_uuid() works
create extension if not exists "pgcrypto";

-- ── 1. profiles ─────────────────────────────────────────────
create table public.profiles (
  id           uuid        primary key references auth.users on delete cascade,
  username     text        unique not null,
  display_name text,
  bio          text,
  avatar_url   text,
  theme        text        not null default 'glassmorphism',
  tier         text        not null default 'free',
  created_at   timestamptz not null default now()
);

comment on table public.profiles is
  'Public user profiles — one per auth.users row.';

-- Index for fast /@username lookups
create unique index profiles_username_idx on public.profiles (lower(username));

-- ── 2. widgets ──────────────────────────────────────────────
create table public.widgets (
  id              uuid        primary key default gen_random_uuid(),
  profile_id      uuid        not null references public.profiles(id) on delete cascade,
  widget_type     text        not null,                      -- 'spotify' | 'youtube' | 'social_icon' | 'custom_link' | 'poll'
  title           text,
  config          jsonb       not null default '{}'::jsonb,   -- type-specific payload
  desktop_layout  jsonb,                                      -- { x, y, w, h }
  mobile_layout   jsonb,                                      -- { x, y, w, h }
  order_index     integer     not null default 0,
  is_active       boolean     not null default true,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

comment on table public.widgets is
  'Bento grid widgets belonging to a profile.';

create index widgets_profile_id_idx   on public.widgets (profile_id);
create index widgets_active_idx       on public.widgets (profile_id, is_active) where is_active = true;

-- ── 3. user_integrations ────────────────────────────────────
create table public.user_integrations (
  id            uuid        primary key default gen_random_uuid(),
  user_id       uuid        not null references auth.users on delete cascade,
  provider      text        not null,                        -- 'spotify' | 'twitch' | 'google'
  access_token  text        not null,
  refresh_token text,
  expires_at    timestamptz,
  updated_at    timestamptz not null default now(),

  -- One integration per user × provider
  unique (user_id, provider)
);

comment on table public.user_integrations is
  'OAuth tokens for third-party services. Strict owner-only access.';

create index integrations_user_id_idx on public.user_integrations (user_id);

-- ── 4. Row Level Security (RLS) ─────────────────────────────

-- 4a. profiles — public read, owner write
alter table public.profiles enable row level security;

create policy "Profiles are publicly readable"
  on public.profiles for select
  using (true);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Users can delete their own profile"
  on public.profiles for delete
  using (auth.uid() = id);

-- 4b. widgets — public read (active only), owner write
alter table public.widgets enable row level security;

create policy "Active widgets are publicly readable"
  on public.widgets for select
  using (is_active = true);

create policy "Owners can read all their widgets (including inactive)"
  on public.widgets for select
  using (
    profile_id in (
      select id from public.profiles where id = auth.uid()
    )
  );

create policy "Owners can insert widgets"
  on public.widgets for insert
  with check (
    profile_id in (
      select id from public.profiles where id = auth.uid()
    )
  );

create policy "Owners can update their widgets"
  on public.widgets for update
  using (
    profile_id in (
      select id from public.profiles where id = auth.uid()
    )
  )
  with check (
    profile_id in (
      select id from public.profiles where id = auth.uid()
    )
  );

create policy "Owners can delete their widgets"
  on public.widgets for delete
  using (
    profile_id in (
      select id from public.profiles where id = auth.uid()
    )
  );

-- 4c. user_integrations — strict owner-only
alter table public.user_integrations enable row level security;

create policy "Users can read their own integrations"
  on public.user_integrations for select
  using (auth.uid() = user_id);

create policy "Users can insert their own integrations"
  on public.user_integrations for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own integrations"
  on public.user_integrations for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own integrations"
  on public.user_integrations for delete
  using (auth.uid() = user_id);

-- ── 5. Helper: auto-create profile on signup ────────────────
-- Trigger function that creates a profiles row when a new user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, username, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'username', replace(new.id::text, '-', '')),
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── 6. Updated-at triggers ──────────────────────────────────
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger widgets_updated_at
  before update on public.widgets
  for each row execute function public.set_updated_at();

create trigger integrations_updated_at
  before update on public.user_integrations
  for each row execute function public.set_updated_at();

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import type { Metadata } from "next";
import { BentoGrid, BentoCard } from "@/components/bento";
import { WatermarkOverlay } from "@/components/branding/WatermarkOverlay";
import { User } from "lucide-react";

// TODO: Replace with real Supabase lookup.
async function getProfile(username: string) {
  // Stub — returns a demo profile for any username.
  if (!username || username.startsWith("_")) return null;

  return {
    username,
    displayName: username.charAt(0).toUpperCase() + username.slice(1),
    bio: "Welcome to my BioPortl page ✨",
    avatarUrl: null as string | null,
  };
}

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const profile = await getProfile(username);

  if (!profile) return { title: "Not Found | BioPortl" };

  return {
    title: `${profile.displayName} | BioPortl`,
    description: profile.bio,
    openGraph: {
      title: `${profile.displayName} on BioPortl`,
      description: profile.bio,
      url: `https://bioportl.live/${profile.username}`,
    },
  };
}

async function ProfileContent({ params }: Props) {
  await connection();
  const { username } = await params;
  const profile = await getProfile(username);

  if (!profile) notFound();

  return (
    <>
      {/* ── Profile header ─────────────────────────────── */}
      <section className="mb-10 flex items-center gap-5">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-bp-border bg-bp-card">
          {profile.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.avatarUrl}
              alt={profile.displayName}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <User className="h-9 w-9 text-bp-muted" />
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-bp-text">
            {profile.displayName}
          </h1>
          <p className="text-sm text-bp-muted">@{profile.username}</p>
          {profile.bio && (
            <p className="mt-1 max-w-md text-sm text-bp-muted">
              {profile.bio}
            </p>
          )}
        </div>
      </section>

      {/* ── Bento widget grid ──────────────────────────── */}
      <BentoGrid>
        <BentoCard size="2x1">
          <h2 className="mb-2 text-lg font-semibold text-bp-text">
            🎵 Spotify
          </h2>
          <p className="text-sm text-bp-muted">
            Connect your Spotify to show what you&apos;re listening to.
          </p>
        </BentoCard>

        <BentoCard size="1x1">
          <h2 className="mb-2 text-lg font-semibold text-bp-text">🔗 Links</h2>
          <p className="text-sm text-bp-muted">Your important links here.</p>
        </BentoCard>

        <BentoCard size="1x1">
          <h2 className="mb-2 text-lg font-semibold text-bp-text">
            📊 Stats
          </h2>
          <p className="text-sm text-bp-muted">Analytics coming soon.</p>
        </BentoCard>

        <BentoCard size="2x2">
          <h2 className="mb-2 text-lg font-semibold text-bp-text">
            🎬 YouTube
          </h2>
          <p className="text-sm text-bp-muted">
            Latest videos from your channel.
          </p>
        </BentoCard>

        <BentoCard size="1x1">
          <h2 className="mb-2 text-lg font-semibold text-bp-text">
            📸 Gallery
          </h2>
          <p className="text-sm text-bp-muted">Photo highlights.</p>
        </BentoCard>

        <BentoCard size="1x1">
          <h2 className="mb-2 text-lg font-semibold text-bp-text">
            💬 Social
          </h2>
          <p className="text-sm text-bp-muted">Social media feeds.</p>
        </BentoCard>
      </BentoGrid>
    </>
  );
}

function ProfileSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="flex items-center gap-5">
        <div className="h-20 w-20 rounded-full bg-bp-border" />
        <div className="space-y-2">
          <div className="h-6 w-40 rounded bg-bp-border" />
          <div className="h-4 w-24 rounded bg-bp-border" />
        </div>
      </div>
      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl bg-bp-border/30" />
        ))}
      </div>
    </div>
  );
}

export default function ProfilePage({ params }: Props) {
  return (
    <main className="relative mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileContent params={params} />
      </Suspense>

      {/* ── Watermark ──────────────────────────────────── */}
      <WatermarkOverlay />
    </main>
  );
}

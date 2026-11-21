"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Radio,
  RefreshCw,
  ExternalLink,
  Users,
  Heart,
  Video,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Flame,
} from "lucide-react";
import { sound } from "@/lib/sound";
import type { SocialStatsResponse } from "@/lib/social-stats";

function YoutubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function XTwitterIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface LiveSocialRadarProps {
  initialData: SocialStatsResponse;
}

export function LiveSocialRadar({ initialData }: LiveSocialRadarProps) {
  const [data, setData] = useState<SocialStatsResponse>(initialData);
  const [refreshing, setRefreshing] = useState(false);
  const [lastSync, setLastSync] = useState<string>("Live API Connected");

  const handleRefresh = async () => {
    sound.playCyber();
    setRefreshing(true);
    try {
      const res = await fetch("/api/social-stats", { cache: "no-store" });
      if (res.ok) {
        const fresh = await res.json();
        setData(fresh);
        setLastSync(`Updated at ${new Date().toLocaleTimeString()}`);
      }
    } catch (err) {
      console.error("Refresh failed:", err);
    } finally {
      setTimeout(() => setRefreshing(false), 500);
    }
  };

  return (
    <section id="socials" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
              <Radio className="h-4 w-4 animate-pulse text-amber-400" />
              LIVE TELEMETRY COMMAND CENTER
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              OFFICIAL SOCIAL <span className="text-amber-400">RADAR</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Live APIs fetching Discord presence, YouTube media, TikTok & X accounts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-500 hidden sm:inline">
              {lastSync}
            </span>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 rounded-lg border border-[#1a2233] bg-[#0c1017] px-3.5 py-2 text-xs font-mono font-bold text-gray-300 hover:text-amber-400 hover:border-amber-500/40 transition-all disabled:opacity-50"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${refreshing ? "animate-spin text-amber-400" : ""}`}
              />
              <span>{refreshing ? "SYNCING..." : "SYNC TELEMETRY"}</span>
            </button>
          </div>
        </div>

        {/* 4 Social Platform Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Discord Card */}
          <div className="esports-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-[#5865F2]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#5865F2]">DISCORD HQ</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE SERVER
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-[#1a2233] bg-black shrink-0">
                  <Image
                    src={data.discord.iconUrl || "/images/branding/discord-guild-icon.png"}
                    alt="Republic of Golds Discord"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black font-mono text-white leading-tight">
                    {data.discord.guildName}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 font-semibold">
                    {data.discord.onlineCount} Online Now
                  </div>
                </div>
              </div>

              <div className="text-2xl font-black font-mono text-white mb-2">
                {data.discord.memberCount}{" "}
                <span className="text-xs font-normal text-gray-400">Members</span>
              </div>

              <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                {data.discord.description}
              </p>
            </div>

            <a
              href={data.discord.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHype()}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white py-2.5 text-xs font-mono font-bold transition-all shadow-md active:scale-95"
            >
              <span>JOIN DISCORD SERVER</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* YouTube Card */}
          <div className="esports-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-[#FF0000]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000]">
                    <YoutubeIcon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#FF0000]">YOUTUBE</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">OFFICIAL CHANNEL</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-[#1a2233] bg-black shrink-0">
                  <Image
                    src="/images/branding/rg-logo.jpg"
                    alt="RG Esports YouTube"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black font-mono text-white leading-tight">
                    RG Esports
                  </h3>
                  <div className="text-xs font-mono text-gray-400">
                    {data.youtube.handle}
                  </div>
                </div>
              </div>

              <div className="text-2xl font-black font-mono text-white mb-2">
                {data.youtube.subscribersDisplay}{" "}
                <span className="text-xs font-normal text-gray-400">Subscribers</span>
              </div>

              <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                The official YouTube channel of The Republic of Golds. Watch competitive shorts, recruitment videos, and RL highlights.
              </p>
            </div>

            <a
              href={data.youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#FF0000] hover:bg-[#cc0000] text-white py-2.5 text-xs font-mono font-bold transition-all shadow-md active:scale-95"
            >
              <span>SUBSCRIBE ON YOUTUBE</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* TikTok Card */}
          <div className="esports-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-[#FE2C55]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-[#FE2C55]/20 flex items-center justify-center text-[#FE2C55]">
                    <TikTokIcon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#FE2C55]">TIKTOK</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">SHORT FORM CLIPS</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-[#1a2233] bg-black shrink-0">
                  <Image
                    src="/images/branding/rg-logo.jpg"
                    alt="RG Esports TikTok"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black font-mono text-white leading-tight">
                    RG ESPORTS
                  </h3>
                  <div className="text-xs font-mono text-gray-400">
                    {data.tiktok.handle}
                  </div>
                </div>
              </div>

              <div className="text-2xl font-black font-mono text-white mb-2">
                {data.tiktok.followersDisplay}{" "}
                <span className="text-xs font-normal text-gray-400">Followers</span>
              </div>

              <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                {data.tiktok.bio}
              </p>
            </div>

            <a
              href={data.tiktok.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#FE2C55] hover:bg-[#e0244a] text-white py-2.5 text-xs font-mono font-bold transition-all shadow-md active:scale-95"
            >
              <span>FOLLOW ON TIKTOK</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* X / Twitter Card */}
          <div className="esports-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-white">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <XTwitterIcon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white">X / TWITTER</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">COMMUNITY DISPATCH</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-[#1a2233] bg-black shrink-0">
                  <Image
                    src="/images/branding/rg-logo.jpg"
                    alt="RG Esports X"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black font-mono text-white leading-tight">
                    Rg Esport
                  </h3>
                  <div className="text-xs font-mono text-gray-400">
                    {data.x.handle}
                  </div>
                </div>
              </div>

              <div className="text-2xl font-black font-mono text-white mb-2">
                Active{" "}
                <span className="text-xs font-normal text-gray-400">Managed by (EU) Iuw</span>
              </div>

              <p className="text-xs text-gray-400 line-clamp-3 mb-4 leading-relaxed">
                Official X account of Republic of Golds Esports. Match announcements, roster movements, and tournament updates.
              </p>
            </div>

            <a
              href={data.x.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-gray-200 text-black py-2.5 text-xs font-mono font-bold transition-all shadow-md active:scale-95"
            >
              <span>FOLLOW ON X (@RgEsportaq)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

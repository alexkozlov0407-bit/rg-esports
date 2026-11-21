"use client";

import { useState } from "react";
import {
  Radio,
  RefreshCw,
  ExternalLink,
  Users,
  Heart,
  Video,
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { sound } from "@/lib/sound";
import type { SocialStatsResponse } from "@/app/api/social-stats/route";

function YoutubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface LiveSocialRadarProps {
  initialData: SocialStatsResponse;
}

export function LiveSocialRadar({ initialData }: LiveSocialRadarProps) {
  const [data, setData] = useState<SocialStatsResponse>(initialData);
  const [refreshing, setRefreshing] = useState(false);
  const [lastSync, setLastSync] = useState<string>("Just now");

  const handleRefresh = async () => {
    sound.playCyber();
    setRefreshing(true);
    try {
      const res = await fetch("/api/social-stats", { cache: "no-store" });
      if (res.ok) {
        const fresh = await res.json();
        setData(fresh);
        setLastSync(new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.error("Refresh failed:", err);
    } finally {
      setTimeout(() => setRefreshing(false), 500);
    }
  };

  const totalReach =
    data.youtube.subscribers + data.tiktok.followers + data.discord.memberCount;

  return (
    <section id="socials" className="py-16 sm:py-20 border-b border-[#1e2230]/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1e2230]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase mb-2">
              <Radio className="h-4 w-4 animate-pulse text-[#00f0ff]" />
              OFFICIAL SOCIAL RADAR
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              LIVE SOCIAL <span className="text-[#ff1a53]">NETWORKS</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Direct telemetry from Arrogant Esports official platforms.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-500 hidden sm:inline">
              Last synced: {lastSync}
            </span>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 rounded-lg border border-[#1e2230] bg-[#0c0e14] px-3.5 py-2 text-xs font-mono font-bold text-gray-300 hover:border-[#ff1a53]/50 hover:text-white transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin text-[#ff1a53]" : ""}`} />
              <span>{refreshing ? "SYNCING..." : "SYNC LIVE COUNTERS"}</span>
            </button>
          </div>
        </div>

        {/* Aggregate Reach Banner */}
        <div className="mt-8 rounded-xl border border-[#ff1a53]/30 bg-gradient-to-r from-[#ff1a53]/10 via-[#0c0e14] to-[#00f0ff]/10 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff1a53]/20 border border-[#ff1a53]/40">
              <Sparkles className="h-5 w-5 text-[#ff1a53]" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                COMBINED COMMUNITY NETWORK
              </div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">
                {totalReach}+ ACTIVE MEMBERS & FOLLOWERS
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              TELEMETRY: VERIFIED
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="hidden sm:inline">3 OFFICIAL CHANNELS</span>
          </div>
        </div>

        {/* 3 Main Social Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 1. YOUTUBE CARD */}
          <div className="esports-card rounded-2xl p-6 flex flex-col justify-between border-t-2 border-t-[#FF0000]">
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/30 text-[#FF0000]">
                    <YoutubeIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">YouTube</h3>
                    <p className="text-xs font-mono text-gray-400">{data.youtube.handle}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-[#FF0000]/10 px-2 py-0.5 text-[10px] font-mono font-bold text-[#FF0000] border border-[#FF0000]/20">
                  <CheckCircle2 className="h-3 w-3" /> VERIFIED
                </span>
              </div>

              {/* YouTube Metrics */}
              <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl border border-[#1e2230] bg-[#08090d] p-3 text-center">
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    SUBSCRIBERS
                  </div>
                  <div className="text-2xl font-black font-mono text-white mt-0.5">
                    {data.youtube.subscribers}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    PUBLIC VIDEOS
                  </div>
                  <div className="text-2xl font-black font-mono text-white mt-0.5">
                    {data.youtube.videoCount}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                Official YouTube channel featuring tournament montages, regional debate breakdowns, and competitive Fortnite gameplay clips.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2230]">
              <a
                href={data.youtube.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FF0000]/15 hover:bg-[#FF0000]/25 text-[#FF0000] border border-[#FF0000]/40 px-4 py-2.5 text-xs font-mono font-bold transition-all hover:scale-101"
              >
                <YoutubeIcon className="h-4 w-4" />
                <span>SUBSCRIBE TO CHANNEL</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* 2. TIKTOK CARD */}
          <div className="esports-card rounded-2xl p-6 flex flex-col justify-between border-t-2 border-t-[#FE2C55]">
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FE2C55]/10 border border-[#FE2C55]/30 text-[#FE2C55]">
                    {/* TikTok SVG Icon */}
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.33 6.33 0 0 0 6.34-6.32V8.46a8.2 8.2 0 0 0 4.92 1.62v-3.39z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">TikTok</h3>
                    <p className="text-xs font-mono text-gray-400">{data.tiktok.handle}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-[#FE2C55]/10 px-2 py-0.5 text-[10px] font-mono font-bold text-[#FE2C55] border border-[#FE2C55]/20">
                  <CheckCircle2 className="h-3 w-3" /> CREATOR
                </span>
              </div>

              {/* TikTok Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-[#1e2230] bg-[#08090d] p-3 text-center">
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    FOLLOWERS
                  </div>
                  <div className="text-xl font-black font-mono text-white mt-0.5">
                    {data.tiktok.followers}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    LIKES
                  </div>
                  <div className="text-xl font-black font-mono text-[#FE2C55] mt-0.5">
                    {data.tiktok.hearts}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    POSTS
                  </div>
                  <div className="text-xl font-black font-mono text-white mt-0.5">
                    {data.tiktok.videosCount}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-400 leading-relaxed italic">
                &ldquo;{data.tiktok.bio}&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2230]">
              <a
                href={data.tiktok.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FE2C55]/15 hover:bg-[#FE2C55]/25 text-[#FE2C55] border border-[#FE2C55]/40 px-4 py-2.5 text-xs font-mono font-bold transition-all hover:scale-101"
              >
                <span>FOLLOW ON TIKTOK</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* 3. DISCORD CARD */}
          <div className="esports-card rounded-2xl p-6 flex flex-col justify-between border-t-2 border-t-[#5865F2]">
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/30 text-[#5865F2]">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">Discord</h3>
                    <p className="text-xs font-mono text-gray-400">Arrogant Esports</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-[#5865F2]/10 px-2 py-0.5 text-[10px] font-mono font-bold text-[#5865F2] border border-[#5865F2]/20">
                  <Users className="h-3 w-3" /> COMMUNITY
                </span>
              </div>

              {/* Discord Metrics */}
              <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl border border-[#1e2230] bg-[#08090d] p-3 text-center">
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    TOTAL MEMBERS
                  </div>
                  <div className="text-2xl font-black font-mono text-white mt-0.5">
                    {data.discord.memberCount}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    ONLINE NOW
                  </div>
                  <div className="text-2xl font-black font-mono text-emerald-400 mt-0.5 flex items-center justify-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {data.discord.onlineCount}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <span className="text-[11px] font-mono text-gray-500">HOST:</span>
                <span className="font-mono text-white font-bold">{data.discord.inviter.name}</span>
                <span className="text-[10px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-1 rounded">
                  [{data.discord.inviter.clanTag}]
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2230]">
              <a
                href={data.discord.inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playHype()}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white px-4 py-2.5 text-xs font-mono font-bold transition-all hover:scale-101 shadow-lg shadow-[#5865F2]/25"
              >
                <MessageSquare className="h-4 w-4" />
                <span>JOIN DISCORD GUILD</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

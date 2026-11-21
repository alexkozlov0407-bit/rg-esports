"use client";

import { motion } from "framer-motion";
import { Shield, Play, Trophy, Users, Award, ChevronRight, Sparkles, Flame } from "lucide-react";
import { sound } from "@/lib/sound";

interface HeroSectionProps {
  stats: {
    youtubeSubs: number;
    tiktokFollowers: number;
    discordMembers: number;
    videoCount: number;
  };
  onOpenVideo: (videoId: string) => void;
  onOpenTryout: () => void;
}

export function HeroSection({ stats, onOpenVideo, onOpenTryout }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[#1e2230]/60">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[700px] rounded-full bg-[#ff1a53]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-[#00f0ff]/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Status Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff1a53]/40 bg-[#ff1a53]/10 px-3 py-1 text-xs font-mono font-bold text-[#ff1a53]">
            <span className="h-2 w-2 rounded-full bg-[#ff1a53] animate-ping" />
            <span>HIGH IMPACT ESPORTS</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#1e2230] bg-[#0c0e14] px-3 py-1 text-xs font-mono text-gray-300">
            <span className="text-gray-500">EST.</span>
            <span className="font-semibold text-white">SUNDAY NOVEMBER 15, 2026</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 px-3 py-1 text-xs font-mono font-medium text-[#00f0ff]">
            <Sparkles className="h-3 w-3" />
            <span>FOUNDED BY ARGT CAKE2X</span>
          </div>
        </motion.div>

        {/* Main Title & Hero Messaging */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase"
          >
            ARROGANT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1a53] via-[#ff3366] to-[#ffb800]">
              ESPORTS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-xl font-medium text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            &ldquo;An esports team designed to make a change in the competitive scene.&rdquo;
          </motion.p>

          {/* Captain Spotlight Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#1e2230] bg-[#0c0e14]/90 px-4 py-2"
          >
            <span className="text-lg">🇯🇵🇺🇲</span>
            <span className="text-xs font-mono text-gray-400">TEAM CAPTAIN:</span>
            <span className="text-xs font-mono font-black text-white">ARGT Cake2x</span>
            <span className="text-xs font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/30">
              PR: 680
            </span>
            <span className="text-xs font-mono text-gray-400 hidden sm:inline">
              EARNINGS: $0
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {/* Join Discord button */}
            <a
              href="https://discord.com/invite/H6jcHyeDA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHype()}
              className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#ff1a53] to-[#e6003e] px-6 py-3.5 text-sm font-mono font-extrabold text-white shadow-xl shadow-[#ff1a53]/25 hover:shadow-[#ff1a53]/40 transition-all hover:scale-102"
            >
              <Shield className="h-4 w-4" />
              <span>JOIN OFFICIAL DISCORD</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Watch Montage button */}
            <button
              onClick={() => {
                sound.playCyber();
                onOpenVideo("_FjZiCt8a0U");
              }}
              className="flex items-center gap-2.5 rounded-xl border border-[#1e2230] bg-[#0c0e14] px-6 py-3.5 text-sm font-mono font-bold text-gray-200 hover:border-[#ff1a53]/50 hover:bg-[#141722] hover:text-white transition-all hover:scale-102"
            >
              <Play className="h-4 w-4 text-[#ff1a53] fill-[#ff1a53]" />
              <span>WATCH TEAM MONTAGE</span>
            </button>

            {/* Tryout Application CTA */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenTryout();
              }}
              className="flex items-center gap-2 rounded-xl border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-5 py-3.5 text-sm font-mono font-bold text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all hover:scale-102"
            >
              <Flame className="h-4 w-4" />
              <span>TRYOUT FOR SQUAD</span>
            </button>
          </motion.div>
        </div>

        {/* Live Metrics Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4"
        >
          {/* YouTube metric */}
          <div className="esports-card rounded-xl p-4 text-center">
            <div className="text-[11px] font-mono font-semibold tracking-wider text-gray-400 uppercase">
              YOUTUBE SUBSCRIBERS
            </div>
            <div className="mt-1 text-2xl sm:text-3xl font-black text-white font-mono flex items-center justify-center gap-1">
              <span className="text-[#FF0000]">●</span>
              {stats.youtubeSubs}
            </div>
            <div className="mt-1 text-[10px] font-mono text-gray-400">
              @arrogantesports • Live Sync
            </div>
          </div>

          {/* TikTok metric */}
          <div className="esports-card rounded-xl p-4 text-center">
            <div className="text-[11px] font-mono font-semibold tracking-wider text-gray-400 uppercase">
              TIKTOK FOLLOWERS
            </div>
            <div className="mt-1 text-2xl sm:text-3xl font-black text-white font-mono flex items-center justify-center gap-1">
              <span className="text-[#FE2C55]">●</span>
              {stats.tiktokFollowers}
            </div>
            <div className="mt-1 text-[10px] font-mono text-gray-400">
              @arrogantesports • 61 Likes
            </div>
          </div>

          {/* Discord metric */}
          <div className="esports-card rounded-xl p-4 text-center">
            <div className="text-[11px] font-mono font-semibold tracking-wider text-gray-400 uppercase">
              DISCORD COMMUNITY
            </div>
            <div className="mt-1 text-2xl sm:text-3xl font-black text-white font-mono flex items-center justify-center gap-1">
              <span className="text-[#5865F2]">●</span>
              {stats.discordMembers}
            </div>
            <div className="mt-1 text-[10px] font-mono text-emerald-400">
              Active Scrim Community
            </div>
          </div>

          {/* Power Ranking metric */}
          <div className="esports-card rounded-xl p-4 text-center">
            <div className="text-[11px] font-mono font-semibold tracking-wider text-gray-400 uppercase">
              CAPTAIN POWER RANKING
            </div>
            <div className="mt-1 text-2xl sm:text-3xl font-black text-[#00f0ff] font-mono flex items-center justify-center gap-1">
              <Trophy className="h-5 w-5 text-[#ffb800]" />
              680 PR
            </div>
            <div className="mt-1 text-[10px] font-mono text-gray-400">
              Estimated PR • Competitive
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

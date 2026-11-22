"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  Play,
  Trophy,
  Users,
  Award,
  ChevronRight,
  Sparkles,
  Flame,
  Gamepad2,
  ExternalLink,
  Target,
} from "lucide-react";
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
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[#1a2233]">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[700px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-[#ff2d78]/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-[#ef4444]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Status Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono font-bold text-amber-400">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span>REPUBLIC OF GOLDS ESPORTS</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#0c1017] px-3 py-1 text-xs font-mono text-gray-300">
            <span className="text-gray-500">DISCIPLINE:</span>
            <span className="font-semibold text-amber-400">COMPETITIVE ROCKET LEAGUE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#ff2d78]/30 bg-[#ff2d78]/10 px-3 py-1 text-xs font-mono font-medium text-[#ff2d78]">
            <Sparkles className="h-3 w-3" />
            <span>NA & EU REGIONAL DIVISIONS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-400">
            <Trophy className="h-3 w-3" />
            <span>TOP 185 EU RLCS OPEN HISTORIC MILESTONE</span>
          </div>
        </motion.div>

        {/* Main Title & Hero Messaging */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl shadow-amber-500/30 bg-black">
              <Image
                src="/images/branding/rg-logo.jpg"
                alt="Republic of Golds Official Crest"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase"
          >
            REPUBLIC OF{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              GOLDS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-xl font-medium text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            &ldquo;RG (Republic of golds) Esports is a server dedicated to the community, and to winning.
            Our goal is to one day be as big as other esports servers!&rdquo;
          </motion.p>

          {/* Subtitle Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono text-gray-400"
          >
            <span className="text-amber-400 font-bold">FOUNDED BY [NA] Vey †</span>
            <span>•</span>
            <span>7 MMR TIERS (D1 → SSL 2000+)</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">FREE ACADEMY COACHING</span>
            <span>•</span>
            <span>CAPTAINED AUTONOMOUS SQUADS</span>
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
              href="https://discord.gg/hKGrmywnks"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHype()}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-mono font-bold text-black hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/20 active:scale-95"
            >
              <Users className="h-4 w-4" />
              <span>JOIN 87+ MEMBERS ON DISCORD</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            {/* Submit Scouting Tryout */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenTryout();
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/50 bg-[#0e121a] px-6 py-3.5 text-sm font-mono font-bold text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 transition-all active:scale-95"
            >
              <Gamepad2 className="h-4 w-4" />
              <span>SUBMIT RL TRACKER TRYOUT</span>
            </button>

            {/* Watch Recruitment Video */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenVideo("8ScrrimxuFY");
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-[#1a2233] bg-[#0c1017] px-4 py-3.5 text-xs font-mono font-bold text-gray-300 hover:text-white hover:border-gray-600 transition-all"
            >
              <Play className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              <span>WATCH RECRUITMENT SHORT</span>
            </button>
          </motion.div>
        </div>

        {/* Featured Badges Carousel Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 max-w-4xl mx-auto rounded-2xl border border-[#1a2233] bg-[#090c13]/80 p-4 sm:p-6 backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-[#1a2233] pb-3 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              <Shield className="h-4 w-4 text-amber-400" />
              <span>OFFICIAL RG COMPETITIVE TEAM CRESTS</span>
            </div>
            <a
              href="#roster"
              onClick={() => sound.playClick()}
              className="text-xs font-mono text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <span>View All 10 Teams</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* RG Province */}
            <div className="group rounded-xl border border-[#ff2d78]/30 bg-[#0e111a] p-3 text-center transition-all hover:border-[#ff2d78] hover:shadow-lg hover:shadow-[#ff2d78]/20">
              <div className="relative mx-auto h-20 w-20 rounded-xl overflow-hidden border border-[#ff2d78]/40 mb-2 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/branding/rg-logo.jpg"
                  alt="RG Province Badge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs font-black font-mono text-white">RG PROVINCE</div>
              <div className="text-[10px] font-mono text-[#ff2d78] font-bold">D1 - D2 (NA)</div>
              <div className="text-[9px] font-mono text-gray-400">Captained 3v3 Lineup</div>
            </div>

            {/* RG Nightshift */}
            <div className="group rounded-xl border border-amber-500/30 bg-[#0e111a] p-3 text-center transition-all hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20">
              <div className="relative mx-auto h-20 w-20 rounded-xl overflow-hidden border border-amber-500/40 mb-2 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/branding/rg-logo.jpg"
                  alt="RG Nightshift Badge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs font-black font-mono text-white">RG NIGHTSHIFT</div>
              <div className="text-[10px] font-mono text-amber-400 font-bold">D3 - C1 (NA)</div>
              <div className="text-[9px] font-mono text-gray-400">Captained 3v3 Lineup</div>
            </div>

            {/* RG Ascension */}
            <div className="group rounded-xl border border-[#ef4444]/30 bg-[#0e111a] p-3 text-center transition-all hover:border-[#ef4444] hover:shadow-lg hover:shadow-[#ef4444]/20">
              <div className="relative mx-auto h-20 w-20 rounded-xl overflow-hidden border border-[#ef4444]/40 mb-2 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/branding/rg-logo.jpg"
                  alt="RG Ascension Badge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs font-black font-mono text-white">RG ASCENSION</div>
              <div className="text-[10px] font-mono text-[#ef4444] font-bold">D3 - C1 (NA)</div>
              <div className="text-[9px] font-mono text-gray-400">Captained 3v3 Lineup</div>
            </div>

            {/* RG Main / Academy */}
            <div className="group rounded-xl border border-amber-500/30 bg-[#0e111a] p-3 text-center transition-all hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20">
              <div className="relative mx-auto h-20 w-20 rounded-xl overflow-hidden border border-amber-500/40 mb-2 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/branding/rg-logo.jpg"
                  alt="RG Republic of Golds Official"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs font-black font-mono text-white">REPUBLIC OF GOLDS</div>
              <div className="text-[10px] font-mono text-amber-400 font-bold">SSL+ (2000+ MMR)</div>
              <div className="text-[9px] font-mono text-gray-400">Flagship & Academy</div>
            </div>
          </div>
        </motion.div>

        {/* Live Key Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="esports-card rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              {stats.discordMembers}+
            </div>
            <div className="mt-1 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              DISCORD MEMBERS
            </div>
            <div className="mt-0.5 text-[11px] font-mono text-emerald-400">
              ● Active & Growing
            </div>
          </div>

          <div className="esports-card rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              10
            </div>
            <div className="mt-1 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              COMPETITIVE ROSTERS
            </div>
            <div className="mt-0.5 text-[11px] font-mono text-gray-400">
              7 NA + 3 EU Squads
            </div>
          </div>

          <div className="esports-card rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              2
            </div>
            <div className="mt-1 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              ACADEMY TIERS
            </div>
            <div className="mt-0.5 text-[11px] font-mono text-gray-400">
              Diamond &amp; Platinum
            </div>
          </div>

          <div className="esports-card rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              #185
            </div>
            <div className="mt-1 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              RLCS MILESTONE
            </div>
            <div className="mt-0.5 text-[11px] font-mono text-amber-400">
              European Open Peak
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

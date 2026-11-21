"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  DollarSign,
  Crown,
  Gamepad2,
  ExternalLink,
  Target,
  Sparkles,
  Flame,
  UserPlus,
} from "lucide-react";
import { sound } from "@/lib/sound";

interface TeamRosterProps {
  onOpenTryout: () => void;
}

export function TeamRoster({ onOpenTryout }: TeamRosterProps) {
  const captainStats = [
    { label: "COMPETITIVE PR", value: "680 PR", highlight: true, note: "Estimated Power Ranking" },
    { label: "RECORDED EARNINGS", value: "$0", highlight: false, note: "Championship Quest" },
    { label: "PRIMARY DISCIPLINE", value: "FORTNITE COMP", highlight: false, note: "BR & Zero Build Cups" },
    { label: "CLAN IDENTIFIER", value: "fg", highlight: false, note: "Registered Guild Tag" },
  ];

  const skillBars = [
    { skill: "Tournament Comms (IGL)", rating: 94 },
    { skill: "Piece Control & Boxfights", rating: 90 },
    { skill: "Endgame Rotations", rating: 88 },
    { skill: "Clutch 1v2 Resilience", rating: 92 },
  ];

  return (
    <section id="roster" className="py-16 sm:py-20 border-b border-[#1e2230]/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1e2230]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ff1a53] uppercase mb-2">
              <Crown className="h-4 w-4 text-[#ff1a53]" />
              ACTIVE SQUAD LINEUP
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              TEAM <span className="text-[#ff1a53]">ROSTER</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              The high impact talent defining the future of Arrogant Esports.
            </p>
          </div>

          <div>
            <button
              onClick={() => {
                sound.playClick();
                onOpenTryout();
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-4 py-2 text-xs font-mono font-bold text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all"
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>SUBMIT SCOUTING APPLICATION</span>
            </button>
          </div>
        </div>

        {/* Roster Showcase Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Captain Card (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 esports-card rounded-2xl p-6 sm:p-8 border-l-4 border-l-[#ff1a53] relative overflow-hidden">
            {/* Background watermarked text */}
            <div className="absolute right-4 bottom-2 text-8xl font-black text-white/[0.02] select-none pointer-events-none font-mono">
              CAPTAIN
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1e2230] pb-6">
              <div className="flex items-center gap-4">
                {/* Avatar / Crest placeholder */}
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-[#ff1a53] bg-gradient-to-br from-[#1a1420] to-[#0a0b0e] shadow-lg shadow-[#ff1a53]/20">
                  <span className="text-3xl">🇯🇵</span>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#1e2230] bg-[#0c0e14] text-sm shadow">
                    🇺🇲
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-mono">
                      ARGT Cake2x
                    </span>
                    <span className="rounded bg-[#ff1a53] px-2 py-0.5 text-[10px] font-mono font-black text-white uppercase tracking-wider">
                      FOUNDER & IGL
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-3 text-xs font-mono text-gray-400">
                    <span>DISCORD: <strong className="text-gray-200">letha1cake</strong></span>
                    <span>•</span>
                    <span>EST. NOV 15, 2026</span>
                  </div>
                </div>
              </div>

              {/* Verified badge */}
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-[#ffb800]/30 bg-[#ffb800]/10 px-3 py-1 text-xs font-mono text-[#ffb800]">
                <Crown className="h-3.5 w-3.5" />
                <span>ORGANIZATION FOUNDER</span>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {captainStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#1e2230] bg-[#08090d] p-3 text-center"
                >
                  <div className="text-[10px] font-mono text-gray-400 uppercase">
                    {stat.label}
                  </div>
                  <div
                    className={`mt-1 text-xl sm:text-2xl font-black font-mono ${
                      stat.highlight ? "text-[#00f0ff]" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[9px] font-mono text-gray-500">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Matrix */}
            <div className="mt-6 pt-6 border-t border-[#1e2230]">
              <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-4">
                TACTICAL PROFILE & TOURNAMENT READINESS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillBars.map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between text-xs font-mono text-gray-300 mb-1">
                      <span>{item.skill}</span>
                      <span className="text-[#00f0ff] font-bold">{item.rating}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#151824] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#ff1a53] to-[#00f0ff]"
                        style={{ width: `${item.rating}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Biography & Vision */}
            <div className="mt-6 pt-6 border-t border-[#1e2230] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-gray-300 leading-relaxed italic max-w-xl">
                &ldquo;Arrogant esports was established to disrupt traditional competitive hierarchies. We play with aggression, pride, and relentless work ethic.&rdquo;
              </p>
              <a
                href="https://discord.com/invite/H6jcHyeDA"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#1e2230] bg-[#141722] hover:border-[#ff1a53]/50 px-3.5 py-2 text-xs font-mono font-bold text-gray-200 hover:text-white transition-colors shrink-0"
              >
                <span>CONTACT VIA DISCORD</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Recruitment & Scouting Card */}
          <div className="esports-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-t-2 border-t-[#00f0ff]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 px-3 py-1 text-[11px] font-mono font-bold text-[#00f0ff] mb-4">
                <Flame className="h-3.5 w-3.5 text-[#ff1a53]" />
                RECRUITMENT OPEN
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white uppercase">
                BECOME AN <span className="text-[#00f0ff]">ARROGANT</span> ATHLETE
              </h3>

              <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                Arrogant Esports is actively scouting ambitious players across North America (NA) and Japan/Asia (JP) regions for competitive duos, trios, and cash cup rosters.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-[#1e2230] bg-[#08090d] p-3 text-xs font-mono">
                  <div className="text-gray-400 uppercase text-[10px]">MINIMUM REQUIREMENT</div>
                  <div className="text-white font-bold mt-0.5">500+ Power Ranking (PR)</div>
                </div>

                <div className="rounded-xl border border-[#1e2230] bg-[#08090d] p-3 text-xs font-mono">
                  <div className="text-gray-400 uppercase text-[10px]">TARGET PLATFORMS</div>
                  <div className="text-white font-bold mt-0.5">PC 240Hz / Console 120Hz</div>
                </div>

                <div className="rounded-xl border border-[#1e2230] bg-[#08090d] p-3 text-xs font-mono">
                  <div className="text-gray-400 uppercase text-[10px]">ORGANIZATION PERKS</div>
                  <div className="text-white font-bold mt-0.5">Scrim Hosting • Social Exposure • VOD Reviews</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1e2230]">
              <button
                onClick={() => {
                  sound.playHype();
                  onOpenTryout();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#00b4d8] text-black px-4 py-3 text-xs font-mono font-black uppercase tracking-wider shadow-lg shadow-[#00f0ff]/20 hover:scale-102 transition-all"
              >
                <UserPlus className="h-4 w-4" />
                <span>SUBMIT TRYOUT APPLICATION</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

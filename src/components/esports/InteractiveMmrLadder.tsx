"use client";

import { useState } from "react";
import Image from "next/image";
import { Sliders, Trophy, Shield, ArrowRight, Sparkles, CheckCircle2, UserCheck, Flame } from "lucide-react";
import { sound } from "@/lib/sound";

interface InteractiveMmrLadderProps {
  onOpenTryoutWithTeam: (teamName: string, rank: string) => void;
}

interface TierInfo {
  minMmr: number;
  maxMmr: number;
  rankName: string;
  rankBadgeColor: string;
  matchedTeam: string;
  region: "NA" | "EU" | "Academy";
  captainOrLeader: string;
  coach: string;
  badgeImage?: string;
  description: string;
}

const MMR_TIERS: TierInfo[] = [
  {
    minMmr: 0,
    maxMmr: 749,
    rankName: "Sub-750 MMR (Gold & Below)",
    rankBadgeColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    matchedTeam: "Community Coaching Role",
    region: "Academy",
    captainOrLeader: "[NA] Tay (Academy Leader)",
    coach: "Jonh Magazoni (Community Coach)",
    description: "Gold Academy is no longer offered. Players below 750 MMR can access free community coaching sessions with Jonh Magazoni via the Movie/Game Night role to grind up to Platinum Academy!",
  },
  {
    minMmr: 750,
    maxMmr: 950,
    rankName: "Platinum (750 - 950 MMR)",
    rankBadgeColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    matchedTeam: "RG Platinum Academy",
    region: "Academy",
    captainOrLeader: "[NA] Tay (Academy Leader)",
    coach: "[NA] Vey † & [NA] Team Manager | Jody",
    description: "Official Academy Entry Tier. Intermediate development targeting fast aerials, wall hits, recovery speed, and competitive scrim discipline.",
  },
  {
    minMmr: 951,
    maxMmr: 1100,
    rankName: "Diamond 1 - Diamond 2 (950 - 1100 MMR)",
    rankBadgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    matchedTeam: "RG Province",
    region: "NA",
    captainOrLeader: "NA Competitive Division",
    coach: "Jonh Magazoni & Academy Mentors",
    badgeImage: "/images/branding/rg-logo.jpg",
    description: "Official competitive roster entry. Competing in organized leagues, bracket tournaments, and weekly scrims.",
  },
  {
    minMmr: 1101,
    maxMmr: 1250,
    rankName: "Diamond 3 - Champion 1 (1100 - 1250 MMR)",
    rankBadgeColor: "text-[#ef4444] border-[#ef4444]/30 bg-[#ef4444]/10",
    matchedTeam: "RG Ascension & RG Nightshift",
    region: "NA",
    captainOrLeader: "NA Mid-Tier Competitive Division",
    coach: "Jonh Magazoni",
    badgeImage: "/images/branding/rg-logo.jpg",
    description: "High-voltage competitive squads. RG Ascension and RG Nightshift field active 3v3 lineups for tournament play.",
  },
  {
    minMmr: 1251,
    maxMmr: 1450,
    rankName: "Champion 2 - Champion 3 (1250 - 1450 MMR)",
    rankBadgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    matchedTeam: "RG Dynasty (NA) / RG Twilight (EU)",
    region: "NA",
    captainOrLeader: "NA & EU Championship Division",
    coach: "Jonh Magazoni",
    description: "Elite Champion division. Fast mechanical pace, organized passing plays, and aggressive high-ranked scrim schedules.",
  },
  {
    minMmr: 1451,
    maxMmr: 1750,
    rankName: "Grand Champion 1 - GC2 (1450 - 1750 MMR)",
    rankBadgeColor: "text-rose-400 border-rose-400/30 bg-rose-400/10",
    matchedTeam: "RG Vanguard (NA) / RG Mainstream (EU)",
    region: "NA",
    captainOrLeader: "NA & EU Grand Champion Division",
    coach: "European & NA Management Staff",
    description: "High Grand Champion competitive play. Preparing for tournament brackets, league championships, and Open Qualifiers.",
  },
  {
    minMmr: 1751,
    maxMmr: 1950,
    rankName: "Grand Champion 3 - SSL (1750 - 1950 MMR)",
    rankBadgeColor: "text-amber-300 border-amber-300/30 bg-amber-300/10",
    matchedTeam: "RG Sovereign",
    region: "NA",
    captainOrLeader: "Captained Squad (Scouting)",
    coach: "[NA] Vey † & Jonh Magazoni",
    badgeImage: "/images/branding/rg-logo.jpg",
    description: "Pre-professional roster preparing for open tournament deep runs and top-tier community invitationals.",
  },
  {
    minMmr: 1951,
    maxMmr: 2300,
    rankName: "Supersonic Legend+ (2000+ MMR)",
    rankBadgeColor: "text-white border-amber-400 bg-gradient-to-r from-amber-500/20 to-purple-500/20",
    matchedTeam: "RG Esports (Flagship SSL)",
    region: "NA",
    captainOrLeader: "[NA] Vey † (Founder & Manager)",
    coach: "Pro Tier Strategic Staff",
    badgeImage: "/images/branding/rg-logo.jpg",
    description: "The pinnacle of Republic of Golds. 2000+ MMR players competing in RLCS Open brackets, top prize-pool leagues, and elite scrims.",
  },
];

export function InteractiveMmrLadder({ onOpenTryoutWithTeam }: InteractiveMmrLadderProps) {
  const [mmr, setMmr] = useState<number>(1180);

  // Find active tier
  const activeTier =
    MMR_TIERS.find((tier) => mmr >= tier.minMmr && mmr <= tier.maxMmr) || MMR_TIERS[3];

  const handleSliderChange = (newVal: number) => {
    setMmr(newVal);
    sound.playClick();
  };

  const handlePresetClick = (presetMmr: number) => {
    setMmr(presetMmr);
    sound.playCyber();
  };

  return (
    <section id="ladder" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
              <Sliders className="h-4 w-4 text-amber-400" />
              INTERACTIVE RL TRACKER QUALIFIER
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              MMR & TEAM <span className="text-amber-400">CALCULATOR</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Slide your Rocket League Tracker MMR to see which RG squad or Academy tier matches your skill level.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#0e111a] px-3.5 py-1.5 rounded-lg border border-[#1a2233]">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Captained Not Managed • Promotion via Ticket</span>
          </div>
        </div>

        {/* Interactive Calculator Box */}
        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#0e111a] to-[#07090e] p-6 sm:p-8 shadow-2xl">
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <span className="text-xs font-mono text-gray-400 font-bold uppercase">
              QUICK RANK JUMP:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "Plat Academy (850)", mmr: 850 },
                { label: "Province D1 (1050)", mmr: 1050 },
                { label: "Nightshift D3 (1180)", mmr: 1180 },
                { label: "Dynasty C2 (1350)", mmr: 1350 },
                { label: "Vanguard GC1 (1550)", mmr: 1550 },
                { label: "Sovereign GC3 (1850)", mmr: 1850 },
                { label: "Flagship SSL (2050)", mmr: 2050 },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => handlePresetClick(btn.mmr)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all ${
                    mmr >= btn.mmr - 50 && mmr <= btn.mmr + 50
                      ? "border-amber-400 bg-amber-500/20 text-amber-300 font-bold shadow-sm"
                      : "border-[#1a2233] bg-[#0c0f16] text-gray-400 hover:text-white hover:border-gray-600"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slider Row */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                YOUR ROCKET LEAGUE MMR:
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black font-mono text-amber-400">
                  {mmr}
                </span>
                <span className="text-xs font-mono text-gray-400">MMR</span>
              </div>
            </div>

            <input
              type="range"
              min={400}
              max={2250}
              step={10}
              value={mmr}
              onChange={(e) => handleSliderChange(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-[#131926] rounded-lg appearance-none cursor-pointer accent-amber-500"
            />

            <div className="flex justify-between text-[11px] font-mono text-gray-500">
              <span>Bronze / Silver (400)</span>
              <span>Diamond (1000)</span>
              <span>Champion (1300)</span>
              <span>Grand Champ (1500)</span>
              <span>SSL (1900+)</span>
              <span>2250+ Pro</span>
            </div>
          </div>

          {/* Matched Squad Display Card */}
          <div className="mt-8 rounded-xl border border-amber-500/40 bg-[#090c13] p-5 sm:p-7 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Badge thumbnail if available */}
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-xl overflow-hidden border-2 border-amber-500/50 bg-black shadow-lg">
                  <Image
                    src={activeTier.badgeImage || "/images/branding/rg-logo.jpg"}
                    alt={activeTier.matchedTeam}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border uppercase tracking-wider ${activeTier.rankBadgeColor}`}
                    >
                      {activeTier.rankName}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      MATCH FOUND
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-mono text-white">
                    {activeTier.matchedTeam}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-gray-300 max-w-xl">
                    {activeTier.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                    <div>
                      <strong className="text-gray-200">Leadership:</strong>{" "}
                      <span className="text-amber-400">{activeTier.captainOrLeader}</span>
                    </div>
                    <div>
                      <strong className="text-gray-200">Assigned Coach:</strong>{" "}
                      <span className="text-cyan-400">{activeTier.coach}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action for this team */}
              <div className="w-full md:w-auto shrink-0 flex flex-col gap-2">
                <button
                  onClick={() => {
                    sound.playHype();
                    onOpenTryoutWithTeam(activeTier.matchedTeam, activeTier.rankName);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-xs font-mono font-bold text-black hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                >
                  <Flame className="h-4 w-4" />
                  <span>CLAIM SPOT ON {activeTier.matchedTeam.toUpperCase()}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <div className="text-[10px] font-mono text-center text-gray-500">
                  Pre-populates Discord scouting ticket
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

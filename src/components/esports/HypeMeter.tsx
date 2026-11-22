"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Trophy, Sparkles, Volume2, Heart, Zap, Award } from "lucide-react";
import { sound } from "@/lib/sound";

interface CheerSquad {
  id: string;
  name: string;
  badge: string;
  region: string;
  cheerCount: number;
  color: string;
  badgeBorder: string;
  badgeBg: string;
}

export function HypeMeter() {
  const [squads, setSquads] = useState<CheerSquad[]>([
    {
      id: "province",
      name: "RG Province",
      badge: "/images/branding/rg-logo.jpg",
      region: "NA D1-D2",
      cheerCount: 142,
      color: "text-[#ff2d78]",
      badgeBorder: "border-[#ff2d78]/60",
      badgeBg: "bg-[#ff2d78]/10",
    },
    {
      id: "nightshift",
      name: "RG Nightshift",
      badge: "/images/branding/rg-logo.jpg",
      region: "NA D3-C1",
      cheerCount: 198,
      color: "text-amber-400",
      badgeBorder: "border-amber-400/60",
      badgeBg: "bg-amber-400/10",
    },
    {
      id: "ascension",
      name: "RG Ascension",
      badge: "/images/branding/rg-logo.jpg",
      region: "NA D3-C1",
      cheerCount: 176,
      color: "text-[#ef4444]",
      badgeBorder: "border-[#ef4444]/60",
      badgeBg: "bg-[#ef4444]/10",
    },
    {
      id: "dynasty",
      name: "RG Dynasty",
      badge: "/images/branding/rg-logo.jpg",
      region: "NA C2-C3",
      cheerCount: 165,
      color: "text-purple-400",
      badgeBorder: "border-purple-400/60",
      badgeBg: "bg-purple-400/10",
    },
  ]);

  const [regionVotes, setRegionVotes] = useState({ na: 384, eu: 295 });
  const [goalExplosion, setGoalExplosion] = useState<string | null>(null);

  const handleCheerSquad = (id: string, name: string) => {
    sound.playGoalHorn();
    setSquads((prev) =>
      prev.map((s) => (s.id === id ? { ...s, cheerCount: s.cheerCount + 1 } : s))
    );
    setGoalExplosion(`GOAL EXPLOSION! +1 CHEER FOR ${name.toUpperCase()}!`);
    setTimeout(() => setGoalExplosion(null), 1800);
  };

  const handleVoteRegion = (region: "na" | "eu") => {
    sound.playHype();
    setRegionVotes((prev) => ({
      ...prev,
      [region]: prev[region] + 1,
    }));
  };

  const totalRegionVotes = regionVotes.na + regionVotes.eu;
  const naPercent = Math.round((regionVotes.na / totalRegionVotes) * 100);
  const euPercent = 100 - naPercent;

  return (
    <section className="py-16 sm:py-20 border-b border-[#1a2233] relative overflow-hidden">
      {/* Background ambient flares */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-80 w-80 rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-80 w-80 rounded-full bg-[#ff2d78]/10 blur-[130px] pointer-events-none" />

      {/* Goal Explosion Banner Animation */}
      <AnimatePresence>
        {goalExplosion && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: -20 }}
            animate={{ scale: 1.1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="rounded-2xl border-2 border-amber-400 bg-black/90 px-6 py-3 text-center shadow-2xl shadow-amber-500/50 backdrop-blur-xl">
              <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase animate-bounce">
                ⚡ ROCKET LEAGUE GOAL HORN ⚡
              </div>
              <div className="text-base sm:text-xl font-black font-mono text-white mt-0.5">
                {goalExplosion}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
            <Flame className="h-4 w-4 text-amber-400" />
            FAN STADIUM & INTERACTIVE CHEER ZONE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            COMMUNITY <span className="text-amber-400">HYPE ARENA</span>
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Cheer for your favorite RG squad or vote in the North America vs Europe rivalry to trigger authentic goal explosions!
          </p>
        </div>

        {/* Rivalry Battle Bar: NA vs EU */}
        <div className="rounded-2xl border border-[#1a2233] bg-[#090c13] p-6 mb-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-400 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-black">TEAM NORTH AMERICA</span>
              <span className="text-gray-500">({regionVotes.na} Cheers • {naPercent}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">({euPercent}% • {regionVotes.eu} Cheers)</span>
              <span className="text-cyan-400 font-black">TEAM EUROPE</span>
            </div>
          </div>

          {/* Tug of war bar */}
          <div className="h-4 w-full rounded-full bg-[#131926] overflow-hidden flex shadow-inner">
            <div
              style={{ width: `${naPercent}%` }}
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500 shadow-md shadow-amber-500/50"
            />
            <div
              style={{ width: `${euPercent}%` }}
              className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all duration-500 shadow-md shadow-cyan-500/50"
            />
          </div>

          {/* Cheer Buttons */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              onClick={() => handleVoteRegion("na")}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2.5 text-xs font-mono font-bold text-amber-400 hover:bg-amber-500/20 active:scale-95 transition-all shadow-sm"
            >
              <Heart className="h-4 w-4 fill-amber-400" />
              <span>CHEER FOR NA (+1)</span>
            </button>

            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest hidden sm:inline">
              ⚡ LIVE STADIUM CLASH ⚡
            </span>

            <button
              onClick={() => handleVoteRegion("eu")}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-xs font-mono font-bold text-cyan-400 hover:bg-cyan-500/20 active:scale-95 transition-all shadow-sm"
            >
              <Heart className="h-4 w-4 fill-cyan-400" />
              <span>CHEER FOR EU (+1)</span>
            </button>
          </div>
        </div>

        {/* Squad Fan Cards with Goal Horn Trigger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {squads.map((squad) => (
            <div
              key={squad.id}
              className="esports-card rounded-2xl p-6 flex flex-col justify-between border border-[#1a2233] text-center relative overflow-hidden group hover:border-amber-500/60 transition-all"
            >
              <div>
                <div className="relative mx-auto h-24 w-24 rounded-2xl overflow-hidden border-2 border-[#1a2233] mb-4 group-hover:scale-105 transition-transform bg-black shadow-lg">
                  <Image
                    src={squad.badge}
                    alt={squad.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-xs font-mono font-bold text-gray-400 mb-1">
                  {squad.region}
                </div>

                <h3 className="text-xl font-black font-mono text-white mb-2">
                  {squad.name}
                </h3>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-black border mb-4 bg-[#0a0d14] text-white">
                  <Flame className="h-3.5 w-3.5 text-amber-400" />
                  <span>{squad.cheerCount} Stadium Cheers</span>
                </div>
              </div>

              <button
                onClick={() => handleCheerSquad(squad.id, squad.name)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black py-2.5 text-xs font-mono font-bold transition-all shadow-md active:scale-95"
              >
                <Zap className="h-3.5 w-3.5" />
                <span>BLAST GOAL HORN</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

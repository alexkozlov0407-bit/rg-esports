"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Crown,
  Gamepad2,
  ExternalLink,
  Shield,
  Sparkles,
  Flame,
  UserPlus,
  Users,
  Eye,
  X,
  Filter,
} from "lucide-react";
import { sound } from "@/lib/sound";

interface TeamRosterProps {
  onOpenTryoutWithTeam: (teamName: string, rank: string) => void;
}

export interface TeamData {
  id: string;
  name: string;
  region: "NA" | "EU";
  mmr: string;
  tier: "SSL" | "GC" | "Champ" | "Diamond";
  badgeImage: string;
  badgeGlow: string;
  accentColor: string;
  status: "Active Roster" | "Scouting Starters" | "In Development";
  captain: string;
  player2: string;
  player3: string;
  subs: string[];
  description: string;
}

const TEAMS: TeamData[] = [
  {
    id: "rg-esports-ssl",
    name: "RG Esports",
    region: "NA",
    mmr: "SSL+ (2000+ MMR)",
    tier: "SSL",
    badgeImage: "/images/branding/rg-logo.jpg",
    badgeGlow: "rgba(245, 158, 11, 0.5)",
    accentColor: "border-amber-400 text-amber-300",
    status: "Scouting Starters",
    captain: "Scouting SSL Captain",
    player2: "Scouting Starter",
    player3: "Scouting Starter",
    subs: ["Open Sub Slots"],
    description: "The flagship elite lineup of Republic of Golds. Competing in RLCS Open Qualifiers and high-tier competitive leagues.",
  },
  {
    id: "rg-sovereign",
    name: "RG Sovereign",
    region: "NA",
    mmr: "GC3 - SSL",
    tier: "SSL",
    badgeImage: "/images/branding/rg-logo.jpg",
    badgeGlow: "rgba(245, 158, 11, 0.4)",
    accentColor: "border-amber-500/60 text-amber-400",
    status: "In Development",
    captain: "Captained Lineup (Forming)",
    player2: "Scouting Starter",
    player3: "Scouting Starter",
    subs: ["Open Sub Slots"],
    description: "High Grand Champion 3 to SSL squad preparing for tournament bracket play and regional opens.",
  },
  {
    id: "rg-vanguard",
    name: "RG Vanguard",
    region: "NA",
    mmr: "GC1 - GC2",
    tier: "GC",
    badgeImage: "/images/branding/rg-logo.jpg",
    badgeGlow: "rgba(168, 85, 247, 0.4)",
    accentColor: "border-purple-500/60 text-purple-400",
    status: "Active Roster",
    captain: "Scouting Captain",
    player2: "[NA] Smurfyopeak",
    player3: "[NA] Bez",
    subs: ["Open Sub Slots"],
    description: "Grand Champion NA squad featuring starters Smurfyopeak & Bez. High mechanical speed and organized scrim focus.",
  },
  {
    id: "rg-dynasty",
    name: "RG Dynasty",
    region: "NA",
    mmr: "C2 - C3",
    tier: "Champ",
    badgeImage: "/images/branding/rg-logo.jpg",
    badgeGlow: "rgba(99, 102, 241, 0.4)",
    accentColor: "border-indigo-400 text-indigo-300",
    status: "Active Roster",
    captain: "stinkyman221",
    player2: "[NA] 2023rto",
    player3: "Kxursh.",
    subs: ["Sub Slot Open"],
    description: "Full active 3v3 Champion roster captained by stinkyman221 with 2023rto and Kxursh. Regular league contenders.",
  },
  {
    id: "rg-ascension",
    name: "RG Ascension",
    region: "NA",
    mmr: "D3 - C1",
    tier: "Diamond",
    badgeImage: "/images/teams/rg-ascension.jpg",
    badgeGlow: "rgba(239, 68, 68, 0.5)",
    accentColor: "border-[#ef4444] text-[#ef4444]",
    status: "Active Roster",
    captain: "Comphlexity",
    player2: "Kelssius",
    player3: "foulxyz",
    subs: ["Carter_Rl", "[NA] X!N0"],
    description: "Heavyweight competitive squad with full 5-player roster and custom crest. Captained by Comphlexity with deep sub bench.",
  },
  {
    id: "rg-nightshift",
    name: "RG Nightshift",
    region: "NA",
    mmr: "D3 - C1",
    tier: "Diamond",
    badgeImage: "/images/teams/rg-nightshift.jpg",
    badgeGlow: "rgba(245, 158, 11, 0.5)",
    accentColor: "border-amber-400 text-amber-400",
    status: "Active Roster",
    captain: "[NA] Team Manager | Jody",
    player2: "Apierson",
    player3: "[NAE] F0C4L",
    subs: ["[NAC] Glitxh.", "ll Xzcvo ll"],
    description: "Cosmic gold squad led by Team Manager Jody. Complete 5-man roster with Apierson, F0C4L, Glitxh., and Xzcvo.",
  },
  {
    id: "rg-province",
    name: "RG Province",
    region: "NA",
    mmr: "D1 - D2",
    tier: "Diamond",
    badgeImage: "/images/teams/rg-province.jpg",
    badgeGlow: "rgba(255, 45, 120, 0.5)",
    accentColor: "border-[#ff2d78] text-[#ff2d78]",
    status: "Scouting Starters",
    captain: "(NAE) tjdagoat.",
    player2: "Scouting Starter",
    player3: "Scouting Starter",
    subs: ["Open Sub Slots"],
    description: "Neon pink crown badge squad. Captained by (NAE) tjdagoat., looking for 2 starters to complete the D1-D2 squad.",
  },
  {
    id: "rg-mainstream",
    name: "RG Mainstream",
    region: "EU",
    mmr: "GC1 - GC2",
    tier: "GC",
    badgeImage: "/images/branding/rg-logo.jpg",
    badgeGlow: "rgba(6, 182, 212, 0.4)",
    accentColor: "border-cyan-400 text-cyan-300",
    status: "Scouting Starters",
    captain: "Scouting EU Captain",
    player2: "Recruiting",
    player3: "Recruiting",
    subs: ["Open Sub Slots"],
    description: "European Grand Champion division squad. Targeting European community leagues and scrim ladders.",
  },
  {
    id: "rg-twilight",
    name: "RG Twilight",
    region: "EU",
    mmr: "C1 - C3 (EU)",
    tier: "Champ",
    badgeImage: "/images/branding/rg-logo.jpg",
    badgeGlow: "rgba(168, 85, 247, 0.4)",
    accentColor: "border-purple-400 text-purple-300",
    status: "Active Roster",
    captain: "[EU] Admin | | Donat",
    player2: "KlinKer07",
    player3: "Recruiting Starter",
    subs: ["EU | TheArtistRnG"],
    description: "Captained by EU Admin Donat, featuring starter KlinKer07 and substitute TheArtistRnG. Regular European scrim squad.",
  },
  {
    id: "rg-rush",
    name: "RG Rush",
    region: "EU",
    mmr: "D3 - C1 (EU)",
    tier: "Diamond",
    badgeImage: "/images/branding/rg-logo.jpg",
    badgeGlow: "rgba(14, 165, 233, 0.4)",
    accentColor: "border-sky-400 text-sky-300",
    status: "Scouting Starters",
    captain: "Scouting EU Captain",
    player2: "Recruiting",
    player3: "Recruiting",
    subs: ["Open Sub Slots"],
    description: "European Diamond 3 to Champion 1 squad bridging the Academy pipeline to the EU competitive division.",
  },
];

export function TeamRoster({ onOpenTryoutWithTeam }: TeamRosterProps) {
  const [selectedRegion, setSelectedRegion] = useState<"ALL" | "NA" | "EU">("ALL");
  const [selectedTier, setSelectedTier] = useState<"ALL" | "SSL" | "GC" | "Champ" | "Diamond">("ALL");
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null);

  const filteredTeams = TEAMS.filter((team) => {
    if (selectedRegion !== "ALL" && team.region !== selectedRegion) return false;
    if (selectedTier !== "ALL" && team.tier !== selectedTier) return false;
    return true;
  });

  return (
    <section id="roster" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
              <Crown className="h-4 w-4 text-amber-400" />
              THE REAL MEAT AND POTATOES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              COMPETITIVE <span className="text-amber-400">ROSTERS</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              10 Rocket League squads split across MMR tiers. Captained not managed.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                sound.playClick();
                onOpenTryoutWithTeam("Republic of Golds", "General Competitive");
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-mono font-bold text-amber-400 hover:bg-amber-500/20 transition-all shadow-sm"
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>SUBMIT SCOUTING TICKET</span>
            </button>
          </div>
        </div>

        {/* Philosophy Callout Card */}
        <div className="mt-6 rounded-xl border border-amber-500/30 bg-[#0b0e16] p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Shield className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                CORE ROSTER GOVERNANCE
              </div>
              <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                Teams are <strong>CAPTAINED NOT MANAGED</strong>. Captains control lineups, handle teammate disputes in VC, and can bench or remove players with Team Manager approval. Improving players request move-ups via tickets.
              </p>
            </div>
          </div>

          <a
            href="https://discord.gg/hKGrmywnks"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playHype()}
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>View Discord Roster Channel</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Interactive Filter Bars */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Region Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
              <Filter className="h-3 w-3 text-amber-400" />
              REGION:
            </span>
            <div className="flex gap-1 bg-[#0c1017] p-1 rounded-lg border border-[#1a2233]">
              {(["ALL", "NA", "EU"] as const).map((reg) => (
                <button
                  key={reg}
                  onClick={() => {
                    sound.playClick();
                    setSelectedRegion(reg);
                  }}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all ${
                    selectedRegion === reg
                      ? "bg-amber-500 text-black shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {reg === "ALL" ? "All Regions (10)" : reg === "NA" ? "North America (7)" : "Europe (3)"}
                </button>
              ))}
            </div>
          </div>

          {/* Tier Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-gray-400">RANK:</span>
            {(
              [
                { label: "All Ranks", key: "ALL" },
                { label: "SSL+", key: "SSL" },
                { label: "GC1-3", key: "GC" },
                { label: "Champ", key: "Champ" },
                { label: "Diamond", key: "Diamond" },
              ] as const
            ).map((t) => (
              <button
                key={t.key}
                onClick={() => {
                  sound.playClick();
                  setSelectedTier(t.key);
                }}
                className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all ${
                  selectedTier === t.key
                    ? "border-amber-400 bg-amber-500/20 text-amber-300 font-bold"
                    : "border-[#1a2233] bg-[#0c1017] text-gray-400 hover:text-white hover:border-gray-600"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team) => (
            <div
              key={team.id}
              className="esports-card rounded-2xl p-6 flex flex-col justify-between border border-[#1a2233] group hover:border-amber-500/50 transition-all relative overflow-hidden"
            >
              {/* Card Header with Badge */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setPreviewImage({ src: team.badgeImage, title: team.name });
                      }}
                      className="relative h-14 w-14 shrink-0 rounded-xl overflow-hidden border border-amber-500/40 bg-black group-hover:scale-105 transition-transform"
                      title="Click to view badge"
                    >
                      <Image
                        src={team.badgeImage}
                        alt={team.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Eye className="h-4 w-4 text-white" />
                      </div>
                    </button>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono font-bold text-gray-400">
                          {team.region === "NA" ? "🇺🇸 NORTH AMERICA" : "🇪🇺 EUROPE"}
                        </span>
                      </div>
                      <h3 className="text-xl font-black font-mono text-white group-hover:text-amber-400 transition-colors">
                        {team.name}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${team.accentColor}`}
                  >
                    {team.mmr}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {team.description}
                </p>

                {/* Lineup Breakdown */}
                <div className="space-y-1.5 rounded-xl border border-[#1a2233] bg-[#07090f] p-3 text-xs font-mono">
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <Crown className="h-3 w-3 text-amber-400" />
                      CAPTAIN:
                    </span>
                    <span className="font-semibold text-white truncate max-w-[170px]">
                      {team.captain}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-gray-400">PLAYER 2:</span>
                    <span className="text-gray-200 truncate max-w-[170px]">{team.player2}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-gray-400">PLAYER 3:</span>
                    <span className="text-gray-200 truncate max-w-[170px]">{team.player3}</span>
                  </div>

                  {team.subs.length > 0 && (
                    <div className="flex items-center justify-between text-gray-400 pt-1 border-t border-[#1a2233]/60 text-[11px]">
                      <span>SUBS:</span>
                      <span className="text-gray-300 truncate max-w-[170px]">
                        {team.subs.join(" / ")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-5 pt-4 border-t border-[#1a2233] flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      team.status === "Active Roster"
                        ? "bg-emerald-400 animate-pulse"
                        : "bg-amber-400"
                    }`}
                  />
                  {team.status}
                </span>

                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenTryoutWithTeam(team.name, team.mmr);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-mono font-bold text-amber-400 hover:bg-amber-500/20 transition-colors"
                >
                  <UserPlus className="h-3 w-3" />
                  <span>APPLY</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badge Fullscreen Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-md w-full rounded-2xl border border-amber-500/50 bg-[#0c1017] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#1a2233] mb-4">
                <h4 className="text-sm font-black font-mono uppercase text-white">
                  {previewImage.title} Official Crest
                </h4>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="h-7 w-7 rounded-lg border border-[#1a2233] bg-[#141824] flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-amber-500/30">
                <Image
                  src={previewImage.src}
                  alt={previewImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-xs font-mono text-gray-400">
                  Official Republic of Golds Team Asset
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

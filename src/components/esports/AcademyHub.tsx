"use client";

import { useState } from "react";
import {
  GraduationCap,
  Rocket,
  Shield,
  Award,
  Users,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Film,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { sound } from "@/lib/sound";

interface AcademyHubProps {
  onOpenTryoutWithTeam: (teamName: string, rank: string) => void;
}

export function AcademyHub({ onOpenTryoutWithTeam }: AcademyHubProps) {
  const [activeTab, setActiveTab] = useState<"diamond" | "plat">("plat");

  const academyTiers = {
    diamond: {
      name: "Diamond Academy",
      rankBadge: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      description: "Fast-track pipeline into RG Province (D1-D2) & RG Ascension (D3-C1). Intensive aerial speed, recoveries, and rotational training.",
      players: [
        { name: "[EU] Titanfall", tag: "Diamond Competitor", note: "European Division" },
      ],
      coaches: ["[NA] Vey †", "[NA] Tay"],
    },
    plat: {
      name: "Platinum Academy",
      rankBadge: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
      description: "Mechanical refinement: bounce dribbles, half-flips, backboard reads, and 3v3 team pacing.",
      players: [
        { name: "𝗖𝗵𝗼𝗱𝗻𝗶𝗸𝟬𝟬", tag: "Plat Academy", note: "Active Squad" },
        { name: "[EU] Dannon", tag: "Plat Academy", note: "European Division" },
        { name: "[EU] Recruiter | Toast", tag: "Staff & Player", note: "Recruitment Team" },
        { name: "[NA] Jose", tag: "Plat Academy", note: "North America" },
        { name: "Nixus_eclipse", tag: "Plat Freestyler", note: "Freestyle Mechanics" },
        { name: "Mason", tag: "Plat Academy", note: "North America" },
        { name: "[NA] Pedro", tag: "Plat Academy", note: "North America" },
      ],
      coaches: ["[NA] Tay", "[NA] Team Manager | Jody"],
    },
  };

  const currentTier = academyTiers[activeTab];

  return (
    <section id="academy" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-2">
              <GraduationCap className="h-4 w-4 text-cyan-400" />
              DEVELOPMENT PIPELINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              THE RG <span className="text-cyan-400">ACADEMY</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Free coaching & structured rank tiers for players aspiring to reach Champion, GC, and SSL.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sound.playClick();
                onOpenTryoutWithTeam("RG Academy", "Academy Development");
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-mono font-bold text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-sm"
            >
              <Rocket className="h-3.5 w-3.5" />
              <span>JOIN THE ACADEMY</span>
            </button>
          </div>
        </div>

        {/* Leadership & Free Coaching Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Academy Leadership */}
          <div className="esports-card rounded-2xl p-6 border border-[#1a2233]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
              <Rocket className="h-4 w-4" />
              <span>ACADEMY LEADERSHIP</span>
            </div>
            <h3 className="text-xl font-black text-white font-mono">
              [NA] Tay
            </h3>
            <div className="text-xs font-mono text-cyan-400 font-bold mb-2">
              Official Academy Leader
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              The Academy is led by <strong>[NA] Tay</strong> (in charge) and managed by the Academy Manager. Directing curriculums, tracking student progression, and approving promotions to competitive rosters.
            </p>
          </div>

          {/* Academy Exclusive Coaches */}
          <div className="esports-card rounded-2xl p-6 border border-[#1a2233]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Award className="h-4 w-4" />
              <span>ACADEMY COACHES</span>
            </div>
            <div className="space-y-1 mb-2">
              <div className="text-sm font-bold font-mono text-white">[NA] Vey † (Founder)</div>
              <div className="text-sm font-bold font-mono text-white">[NA] Tay (Academy Leader)</div>
              <div className="text-sm font-bold font-mono text-white">[NA] Team Manager | Jody</div>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Exclusive 1-on-1 and small group replay analysis reserved exclusively for enrolled Academy members.
            </p>
          </div>

          {/* Community & Team Coaching */}
          <div className="esports-card rounded-2xl p-6 border border-[#1a2233]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3">
              <Film className="h-4 w-4" />
              <span>COMMUNITY COACHING ROLE</span>
            </div>
            <h3 className="text-xl font-black text-white font-mono">
              Jonh Magazoni
            </h3>
            <div className="text-xs font-mono text-emerald-400 font-bold mb-2">
              Official Community & Team Coach
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Available to anyone in teams & community. Simply opt into the <em>&ldquo;Movie / Game night pings&rdquo;</em> role in Discord to unlock free coaching sessions!
            </p>
          </div>
        </div>

        {/* Public Academy Rosters */}
        <div className="mt-10 rounded-2xl border border-cyan-500/30 bg-[#0a0d14] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1a2233]">
            <div>
              <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                OFFICIAL PUBLIC ROSTER
              </div>
              <h3 className="text-2xl font-black font-mono text-white mt-1">
                ACADEMY SQUADS & TALENT
              </h3>
            </div>

            {/* Tier Tabs */}
            <div className="flex gap-1.5 bg-[#0e121a] p-1.5 rounded-xl border border-[#1a2233]">
              {(
                [
                  { key: "plat", label: "Plat Academy (7)", count: 7 },
                  { key: "diamond", label: "Diamond Academy (1)", count: 1 },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(tab.key);
                  }}
                  className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                    activeTab === tab.key
                      ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tier Overview */}
          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0e121a] p-4 rounded-xl border border-[#1a2233]">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border uppercase tracking-wider ${currentTier.rankBadge}`}
                >
                  {currentTier.name}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {currentTier.players.length} Registered Players
                </span>
              </div>
              <p className="mt-1.5 text-xs text-gray-300 max-w-2xl">
                {currentTier.description}
              </p>
            </div>

            <div className="text-xs font-mono text-gray-400">
              <span className="text-gray-500">Dedicated Mentors:</span>{" "}
              <strong className="text-cyan-400">{currentTier.coaches.join(", ")}</strong>
            </div>
          </div>

          {/* Player Cards Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentTier.players.map((player) => (
              <div
                key={player.name}
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#1a2233] bg-[#07090f] hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-black text-cyan-400 text-sm">
                    RL
                  </div>
                  <div>
                    <div className="text-sm font-mono font-bold text-white">
                      {player.name}
                    </div>
                    <div className="text-[11px] font-mono text-gray-400">
                      {player.note}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#131824] text-cyan-300 border border-[#1a2233]">
                  {player.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Join Instructions Banner */}
          <div className="mt-8 pt-6 border-t border-[#1a2233] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-gray-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>
                To enroll: Open a ticket in Discord and submit your <strong>RL Tracker URL</strong>. You will be assigned to either Diamond or Plat Academy based on your MMR!
              </span>
            </div>

            <a
              href="https://discord.gg/hKGrmywnks"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHype()}
              className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 text-xs font-mono font-bold transition-all"
            >
              <span>OPEN TICKET IN DISCORD</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

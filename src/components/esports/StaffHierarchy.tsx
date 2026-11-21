"use client";

import { useState } from "react";
import {
  Shield,
  Crown,
  Users,
  Briefcase,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Ticket,
  ExternalLink,
} from "lucide-react";
import { sound } from "@/lib/sound";

interface StaffMember {
  role: string;
  name: string;
  rosterType: "Staff Roster" | "Community Roster";
  powerTier: number; // Higher number = higher authority
  badge: string;
  notes?: string;
  isRecruiting?: boolean;
}

const STAFF_LIST: StaffMember[] = [
  {
    role: "Founder",
    name: "[NA] Vey †",
    rosterType: "Staff Roster",
    powerTier: 5,
    badge: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    notes: "Founded Revenge (2022) → Dash (2026) → Republic of Golds. Team Manager & Coach.",
  },
  {
    role: "Co-Founder",
    name: "[NA] Mizman",
    rosterType: "Staff Roster",
    powerTier: 5,
    badge: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    notes: "Executive co-founder and organizational strategy.",
  },
  {
    role: "Co-Owner",
    name: "west †",
    rosterType: "Staff Roster",
    powerTier: 4,
    badge: "text-amber-300 border-amber-300/40 bg-amber-300/10",
    notes: "Executive management, high-level appeal VC resolution.",
  },
  {
    role: "🛠️ Admin",
    name: "[EU] Admin | | Donat",
    rosterType: "Staff Roster",
    powerTier: 3,
    badge: "text-purple-400 border-purple-400/40 bg-purple-400/10",
    notes: "Lead EU Admin, Team Manager, RG Twilight Captain, & Official Video Editor.",
  },
  {
    role: "💼 Team Manager",
    name: "[NA] Team Manager | Jody",
    rosterType: "Staff Roster",
    powerTier: 3,
    badge: "text-blue-400 border-blue-400/40 bg-blue-400/10",
    notes: "NA Team Manager, RG Nightshift Captain, Academy Coach.",
  },
  {
    role: "👨🏻‍💻 Community Manager",
    name: "[NAC] Glitxh.",
    rosterType: "Staff Roster",
    powerTier: 2,
    badge: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    notes: "Community events, onboarding & member engagement. RG Nightshift Sub.",
  },
  {
    role: "🛡️ Community Moderator",
    name: "[NA] Tay",
    rosterType: "Community Roster",
    powerTier: 1,
    badge: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    notes: "Active chat moderation, server safety & community support.",
  },
  {
    role: "🚀 Academy Leader",
    name: "[NA] Tay",
    rosterType: "Staff Roster",
    powerTier: 2,
    badge: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    notes: "Head of the Academy development pipeline & Academy Coach.",
  },
  {
    role: "🕵🏻‍♂️ Recruiter",
    name: "[EU] Recruiter | Toast",
    rosterType: "Staff Roster",
    powerTier: 2,
    badge: "text-blue-400 border-blue-400/40 bg-blue-400/10",
    notes: "EU talent scout, tryout evaluation & recruitment.",
  },
  {
    role: "👨‍💼 Community & Team Coach",
    name: "Jonh Magazoni",
    rosterType: "Community Roster",
    powerTier: 1,
    badge: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    notes: "Available to anyone in community & teams with the movie/game night role.",
  },
  {
    role: "👔 Social Media Manager",
    name: "(EU) Iuw",
    rosterType: "Community Roster",
    powerTier: 1,
    badge: "text-pink-400 border-pink-400/40 bg-pink-400/10",
    notes: "Managing official X (@RgEsportaq) and cross-platform presence.",
  },
  {
    role: "🎬 Content Creator",
    name: "Open Position",
    rosterType: "Community Roster",
    powerTier: 1,
    badge: "text-gray-400 border-gray-600 bg-gray-800/40",
    notes: "Actively scouting creators for TikTok, YouTube Shorts & Twitch.",
    isRecruiting: true,
  },
  {
    role: "🎨 GFX Artist",
    name: "Open Position",
    rosterType: "Community Roster",
    powerTier: 1,
    badge: "text-gray-400 border-gray-600 bg-gray-800/40",
    notes: "Designing team badges, stream overlays, match cards & roster assets.",
    isRecruiting: true,
  },
  {
    role: "💻 Comp Clip Hitter",
    name: "Open Position",
    rosterType: "Community Roster",
    powerTier: 1,
    badge: "text-gray-400 border-gray-600 bg-gray-800/40",
    notes: "Hitting clip sequences, montage freestyle & tournament clutch plays.",
    isRecruiting: true,
  },
  {
    role: "🎓 Academy Manager",
    name: "Open Position",
    rosterType: "Staff Roster",
    powerTier: 2,
    badge: "text-gray-400 border-gray-600 bg-gray-800/40",
    notes: "Assisting Academy Leader Tay with daily roster checks and news postings.",
    isRecruiting: true,
  },
];

interface DisputeScenario {
  id: string;
  title: string;
  question: string;
  ruleExcerpt: string;
  correctPath: string;
  whoToContact: string;
  isTicket: boolean;
  color: string;
}

const DISPUTE_SCENARIOS: DisputeScenario[] = [
  {
    id: "sub-playtime",
    title: "Substitute Playtime / Lineup Dispute",
    question: "I am a substitute player on a competitive team and I want more play time in upcoming scrims or leagues. Should I open a ticket?",
    ruleExcerpt: "Teams are CAPTAINED NOT MANAGED. A player who didn't like being a sub would NOT make a ticket; they talk to their Team Captain.",
    correctPath: "Do NOT make a Discord ticket. Direct message or hop in a VC call with your specific Team Captain. Captains control rosters and lineups.",
    whoToContact: "Your Team Captain (e.g., Jody, Comphlexity, tjdagoat, stinkyman221, Donat)",
    isTicket: false,
    color: "border-amber-400 text-amber-400",
  },
  {
    id: "rank-moveup",
    title: "MMR Rank Promotion Request",
    question: "I have been grinding with the coaches and my Rocket League Tracker MMR reached the next rank tier. How do I move up?",
    ruleExcerpt: "If you are getting better with the coaches then a player must request to be moved up in a team via a ticket.",
    correctPath: "Open a ticket in Discord and submit your updated RL Tracker link. The Team Managers will review your MMR and promote you to the higher squad.",
    whoToContact: "Team Managers (Vey, Jody, Donat) via Discord Ticket",
    isTicket: true,
    color: "border-emerald-400 text-emerald-400",
  },
  {
    id: "staff-conflict",
    title: "Conflict with a Staff Member / Moderator",
    question: "I have a dispute or disagreement with a Moderator in chat. How does the Power Ranking resolve it?",
    ruleExcerpt: "A member with a dispute with a Mod would ask an Admin to sort it out. If the Admin cannot, they escalate to a Team Manager, and so on.",
    correctPath: "Follow the Power Ranking chain: Speak to an Admin ([EU] Admin | Donat). If unresolved, it escalates to Team Managers and Executive Leadership.",
    whoToContact: "Admin → Team Manager → Co-Owner / Founder",
    isTicket: true,
    color: "border-purple-400 text-purple-400",
  },
  {
    id: "punishment-appeal",
    title: "Rule Punishment Dispute & Appeal",
    question: "I received a punishment for a rule break in the Discord. Can I appeal it?",
    ruleExcerpt: "All punishment is disputable via a VC call with a Co-Owner or Founder.",
    correctPath: "You are entitled to an appeal! Request a VC call with Co-Owner west † or Founder [NA] Vey † to review the action taken.",
    whoToContact: "Co-Owner (west †) or Founder ([NA] Vey †) via VC Call",
    isTicket: false,
    color: "border-[#ef4444] text-[#ef4444]",
  },
  {
    id: "coaching-access",
    title: "Unlocking Free Community Coaching",
    question: "How do I get free coaching from Jonh Magazoni without being in the Academy?",
    ruleExcerpt: "Community coaching is available to anyone in teams / community via the 'movie / game night pings' role.",
    correctPath: "Navigate to the Discord channels and say YES to the prompt asking 'Do you want movie / game night pings?'. You will automatically receive the role for coaching pings!",
    whoToContact: "Jonh Magazoni & Discord Onboarding",
    isTicket: false,
    color: "border-cyan-400 text-cyan-400",
  },
];

export function StaffHierarchy() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("sub-playtime");
  const [filterRoster, setFilterRoster] = useState<"ALL" | "Staff Roster" | "Community Roster">("ALL");

  const activeScenario =
    DISPUTE_SCENARIOS.find((s) => s.id === activeScenarioId) || DISPUTE_SCENARIOS[0];

  const filteredStaff = STAFF_LIST.filter((s) => {
    if (filterRoster !== "ALL" && s.rosterType !== filterRoster) return false;
    return true;
  });

  return (
    <section id="hierarchy" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
              <Shield className="h-4 w-4 text-purple-400" />
              GOVERNANCE & RESOLUTION PROTOCOLS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              STAFF & <span className="text-purple-400">POWER RANKING</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Two specialized rosters: Staff (moderation & management) and Community (equal worth).
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#0c1017] px-3.5 py-1.5 rounded-lg border border-[#1a2233]">
            <Crown className="h-3.5 w-3.5 text-amber-400" />
            <span>Power Ranking Structure • Zero Ego Hierarchy</span>
          </div>
        </div>

        {/* Interactive Dispute Simulator */}
        <div className="mt-8 rounded-2xl border border-purple-500/30 bg-gradient-to-b from-[#0e0f17] to-[#07090e] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2">
            <HelpCircle className="h-4 w-4 text-purple-400" />
            <span>INTERACTIVE DISPUTE & RULE RESOLVER</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-mono text-white mb-2">
            HOW DISPUTES & REQUESTS ARE RESOLVED IN RG
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-6 max-w-3xl">
            Choose your scenario below to see the exact protocol according to the Republic of Golds constitution.
          </p>

          {/* Scenario Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-6">
            {DISPUTE_SCENARIOS.map((scen) => (
              <button
                key={scen.id}
                onClick={() => {
                  sound.playClick();
                  setActiveScenarioId(scen.id);
                }}
                className={`p-3 text-left rounded-xl border text-xs font-mono transition-all ${
                  activeScenarioId === scen.id
                    ? "border-purple-400 bg-purple-500/20 text-white font-bold shadow-md shadow-purple-500/10"
                    : "border-[#1a2233] bg-[#0c0f16] text-gray-400 hover:text-white hover:border-gray-700"
                }`}
              >
                <div className="font-bold text-[11px] mb-1">{scen.title}</div>
                <div className="text-[10px] text-gray-500 line-clamp-1">{scen.question}</div>
              </button>
            ))}
          </div>

          {/* Active Resolution Box */}
          <div className="rounded-xl border border-purple-500/40 bg-[#090b12] p-5 sm:p-7">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border uppercase tracking-wider ${activeScenario.color}`}
                  >
                    PROTOCOL FOR: {activeScenario.title}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    {activeScenario.isTicket ? "Ticket Required" : "No Ticket • Direct VC / DM"}
                  </span>
                </div>

                <div className="text-sm font-medium text-white italic bg-[#111420] p-3 rounded-lg border-l-2 border-purple-400">
                  &ldquo;{activeScenario.ruleExcerpt}&rdquo;
                </div>

                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <strong>Standard Operating Procedure:</strong> {activeScenario.correctPath}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                  <span className="text-gray-400">Primary Contact:</span>
                  <strong>{activeScenario.whoToContact}</strong>
                </div>
              </div>

              {/* Call to action */}
              <div className="shrink-0 w-full lg:w-auto">
                <a
                  href="https://discord.gg/hKGrmywnks"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playHype()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-3 text-xs font-mono font-bold text-white transition-all shadow-lg shadow-purple-600/20 active:scale-95 w-full"
                >
                  {activeScenario.isTicket ? (
                    <>
                      <Ticket className="h-4 w-4" />
                      <span>OPEN DISCORD TICKET</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="h-4 w-4" />
                      <span>HOP IN DISCORD VC</span>
                    </>
                  )}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Directory */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                OFFICIAL PERSONNEL
              </div>
              <h3 className="text-2xl font-black font-mono text-white mt-1">
                STAFF & COMMUNITY ROSTER DIRECTORY
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-1.5 bg-[#0c1017] p-1.5 rounded-xl border border-[#1a2233]">
              {(
                [
                  { key: "ALL", label: "All Roles (15)" },
                  { key: "Staff Roster", label: "Staff Roster (Moderation/Mgmt)" },
                  { key: "Community Roster", label: "Community Roster (Media/Mods)" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    sound.playClick();
                    setFilterRoster(tab.key);
                  }}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all ${
                    filterRoster === tab.key
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStaff.map((staff, idx) => (
              <div
                key={`${staff.role}-${idx}`}
                className={`esports-card rounded-xl p-4.5 border border-[#1a2233] flex flex-col justify-between ${
                  staff.isRecruiting ? "border-dashed border-gray-600" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border uppercase tracking-wider ${staff.badge}`}
                    >
                      {staff.role}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      {staff.rosterType}
                    </span>
                  </div>

                  <div className="text-lg font-black font-mono text-white mb-1">
                    {staff.name}
                  </div>

                  {staff.notes && (
                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                      {staff.notes}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-[#1a2233] flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>Power Tier: {staff.powerTier}</span>
                  {staff.isRecruiting ? (
                    <a
                      href="https://discord.gg/hKGrmywnks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 font-bold"
                    >
                      Apply in Discord →
                    </a>
                  ) : (
                    <span className="text-emerald-400 font-bold">Active Staff</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

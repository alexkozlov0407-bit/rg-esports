"use client";

import { useState } from "react";
import {
  History,
  Trophy,
  Flame,
  ShieldAlert,
  Sparkles,
  ChevronRight,
  Target,
  ArrowRight,
  Award,
} from "lucide-react";
import { sound } from "@/lib/sound";

interface Era {
  id: string;
  year: string;
  name: string;
  badge: string;
  badgeColor: string;
  memberCount: string;
  headline: string;
  quote: string;
  milestones: string[];
  setback: string;
  outcome: string;
}

const ERAS: Era[] = [
  {
    id: "revenge",
    year: "2022",
    name: "Revenge Esports",
    badge: "THE FOUNDATIONAL ERA",
    badgeColor: "text-rose-400 border-rose-400/30 bg-rose-400/10",
    memberCount: "~1,000 Members",
    headline: "The Birth of the Community & European RLCS Open Top 185",
    quote:
      "This organization's history dates back to 2022, when a friend and I decided to create a Rocket League community under the name Revenge Esports. What started as a simple idea grew into nearly 1,000 members and one of our biggest milestones: reaching Top 185 in a European RLCS Open.",
    milestones: [
      "Grew organic Rocket League community to ~1,000 members.",
      "Achieved historic Top 185 placement in European RLCS Open.",
      "Assembled initial cross-region competitive rosters.",
    ],
    setback: "Original owner abruptly raided the server, threatening to destroy the community.",
    outcome: "[NA] Vey † took full executive ownership and spearheaded the rescue operation to rebuild.",
  },
  {
    id: "dash",
    year: "2026 Early",
    name: "Dash Esports",
    badge: "THE EXPANSION ERA",
    badgeColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    memberCount: "~250 Members",
    headline: "Transatlantic NA & EU Rocket League Expansion",
    quote:
      "In 2026, the organization entered its next chapter as Dash Esports. We rebuilt the community, expanded into both North American and European Rocket League, and reached approximately 250 members while developing multiple competitive rosters.",
    milestones: [
      "Established dual North American & European divisions.",
      "Structured competitive tryouts and multiple tournament rosters.",
      "Re-established core community culture and active scrimmage lobbies.",
    ],
    setback: "A second server raid caused major disruption to the community.",
    outcome: "Rather than surrendering, Vey committed to a completely unified, permanent identity.",
  },
  {
    id: "rg",
    year: "2026 Present",
    name: "Republic of Golds (RG)",
    badge: "THE GOLDEN ERA",
    badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    memberCount: "87+ & Growing Fast",
    headline: "The Republic of Golds: Dedicated to the Community & Winning",
    quote:
      "That identity became Republic of Golds (RG Esports). With this rebrand came a renewed vision focused on building a stronger competitive organization and a more active community. Today, RG continues growing rapidly. Our goal isn't simply to participate; we want to improve, earn respect, achieve strong placements, and ultimately win.",
    milestones: [
      "Launched 7 MMR-based competitive squads (Province, Nightshift, Ascension, Dynasty, Vanguard, Sovereign, SSL+).",
      "Founded The RG Academy with free coaching pipelines.",
      "Official entry into organized competitive leagues and upcoming RLCS opens.",
      "Established permanent community governance and power ranking.",
    ],
    setback: "Past raid trauma overcome through robust security & dedicated staff.",
    outcome: "Thriving, active, and united esports organization with permanent roots.",
  },
  {
    id: "future",
    year: "2027 & Beyond",
    name: "The Horizon",
    badge: "THE FUTURE VISION",
    badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    memberCount: "Global Presence",
    headline: "League Championships & Standing the Test of Time",
    quote:
      "Looking toward the future, we want RG to become much larger than it is today. We aim to establish successful competitive rosters, expand our presence in the Rocket League scene, win league titles, and build a recognizable name within the esports community.",
    milestones: [
      "Winning major community and semi-pro league titles.",
      "Advancing RG squads through RLCS Open main event brackets.",
      "Cultivating home-grown Academy players into Grand Champion and SSL competitors.",
      "Building an enduring, recognizable legacy that stands the test of time.",
    ],
    setback: "High competitive bar required in elite lobbies.",
    outcome: "Consistent daily grind, structured scrims, and disciplined coaching.",
  },
];

export function HistoryTimeline() {
  const [selectedEraIndex, setSelectedEraIndex] = useState(2); // Default to Republic of Golds

  const era = ERAS[selectedEraIndex];

  return (
    <section id="history" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
              <History className="h-4 w-4 text-amber-400" />
              OUR JOURNEY & RESILIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              FROM REVENGE TO <span className="text-amber-400">REPUBLIC</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              The history, setbacks, and relentless vision of founder [NA] Vey †.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#0c1017] px-3.5 py-1.5 rounded-lg border border-[#1a2233]">
            <Trophy className="h-3.5 w-3.5 text-amber-400" />
            <span>Top 185 EU RLCS Open Milestone • Established 2022</span>
          </div>
        </div>

        {/* Interactive Era Timeline Steps */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {ERAS.map((e, idx) => (
            <button
              key={e.id}
              onClick={() => {
                sound.playClick();
                setSelectedEraIndex(idx);
              }}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                selectedEraIndex === idx
                  ? "border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/10"
                  : "border-[#1a2233] bg-[#0c1017] hover:border-gray-700"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-gray-400 font-bold">{e.year}</span>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded-full border uppercase font-bold ${e.badgeColor}`}
                >
                  {e.memberCount}
                </span>
              </div>
              <div className="text-base font-black font-mono text-white mb-1">
                {e.name}
              </div>
              <div className="text-[11px] font-mono text-gray-400 line-clamp-1">
                {e.headline}
              </div>

              {selectedEraIndex === idx && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
              )}
            </button>
          ))}
        </div>

        {/* Detailed Era Spotlight Card */}
        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#0e111a] to-[#07090e] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-[#1a2233]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border uppercase tracking-wider ${era.badgeColor}`}
                >
                  {era.badge}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {era.year} • {era.memberCount}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-mono text-white">
                {era.name}: {era.headline}
              </h3>
            </div>
          </div>

          {/* Founder Quote */}
          <div className="mt-6 p-4.5 rounded-xl border-l-4 border-l-amber-400 bg-[#0c1017] text-gray-200 text-sm italic leading-relaxed">
            &ldquo;{era.quote}&rdquo;
            <div className="mt-2 text-xs font-mono font-bold text-amber-400 not-italic">
              — [NA] Vey † [God†], Founder of RG Esports
            </div>
          </div>

          {/* Breakdown: Milestones vs Overcoming Setbacks */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Milestones */}
            <div className="rounded-xl border border-[#1a2233] bg-[#07090f] p-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3">
                <Trophy className="h-4 w-4" />
                <span>KEY ACHIEVEMENTS & MOMENTUM</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                {era.milestones.map((ms, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{ms}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Setback & Resilience */}
            <div className="rounded-xl border border-[#1a2233] bg-[#07090f] p-5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-3">
                <Flame className="h-4 w-4" />
                <span>SETBACK & HOW WE OVERCAME IT</span>
              </div>
              <div className="text-xs text-gray-300 space-y-2">
                <p>
                  <strong className="text-rose-400">The Challenge:</strong> {era.setback}
                </p>
                <p>
                  <strong className="text-amber-400">The Response:</strong> {era.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Trophy,
  Crosshair,
  Clock,
  ShieldCheck,
  Zap,
  ExternalLink,
  Flame,
  Gamepad2,
} from "lucide-react";
import { sound } from "@/lib/sound";

interface MatchEvent {
  title: string;
  type: "RLCS Qualifier" | "Organized League" | "Community Scrims" | "Academy Gauntlet";
  schedule: string;
  status: "REGISTRATION ACTIVE" | "ROSTER PREPARATION" | "OPEN SCRIM LOBBY";
  region: "NA & EU" | "North America" | "Europe";
  format: string;
  badgeColor: string;
  description: string;
}

const EVENTS: MatchEvent[] = [
  {
    title: "European RLCS Open Qualifiers",
    type: "RLCS Qualifier",
    schedule: "Saturday 14:00 CET",
    status: "ROSTER PREPARATION",
    region: "Europe",
    format: "3v3 Double Elimination Bracket",
    badgeColor: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    description: "Honoring our historic Top 185 EU RLCS Open milestone. RG European rosters (Mainstream, Twilight, Rush) preparing for next open circuit.",
  },
  {
    title: "Organized Competitive League Matchday",
    type: "Organized League",
    schedule: "Thursday & Sunday 20:00 EST",
    status: "REGISTRATION ACTIVE",
    region: "North America",
    format: "Bo5 Series • RG Dynasty & Ascension",
    badgeColor: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    description: "Official weekly league schedule pitting RG competitive squads against rival North American esports organizations.",
  },
  {
    title: "Friday Night RG Customs & Scrims",
    type: "Community Scrims",
    schedule: "Friday 20:30 EST",
    status: "OPEN SCRIM LOBBY",
    region: "NA & EU",
    format: "Captained 3v3 & 2v2 Scrims",
    badgeColor: "text-[#ff2d78] border-[#ff2d78]/40 bg-[#ff2d78]/10",
    description: "Open to all verified Discord members and competitive squad substitutes. Coached and casted by RG staff.",
  },
  {
    title: "Academy 1v1 & 2v2 Replay Review Gauntlet",
    type: "Academy Gauntlet",
    schedule: "Wednesday 19:00 EST",
    status: "REGISTRATION ACTIVE",
    region: "North America",
    format: "Free Coaching with Jonh Magazoni & Tay",
    badgeColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    description: "Hands-on replay analysis and mechanics coaching for Diamond and Platinum Academy members.",
  },
];

export function CompetitiveHub() {
  const [countdown, setCountdown] = useState({ hours: 14, minutes: 22, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="scrims" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-2">
              <Crosshair className="h-4 w-4 text-cyan-400" />
              TOURNAMENT & LEAGUE RADAR
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              COMPETITIVE <span className="text-cyan-400">ITINERARY</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              RLCS open brackets, organized league campaigns, and weekly captained scrims.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 bg-[#0c1017] px-4 py-2 rounded-xl border border-[#1a2233]">
            <Clock className="h-4 w-4 text-amber-400 animate-pulse" />
            <div className="text-xs font-mono">
              <span className="text-gray-400">NEXT SCRIM LOBBY IN:</span>{" "}
              <strong className="text-amber-400 font-black">
                {String(countdown.hours).padStart(2, "0")}h :{" "}
                {String(countdown.minutes).padStart(2, "0")}m :{" "}
                {String(countdown.seconds).padStart(2, "0")}s
              </strong>
            </div>
          </div>
        </div>

        {/* Schedule Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((evt) => (
            <div
              key={evt.title}
              className="esports-card rounded-2xl p-6 flex flex-col justify-between border border-[#1a2233] group hover:border-cyan-500/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider ${evt.badgeColor}`}
                  >
                    {evt.type}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-gray-400">
                    <Clock className="h-3 w-3" />
                    {evt.schedule}
                  </div>
                </div>

                <h3 className="text-lg font-black font-mono text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {evt.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {evt.description}
                </p>

                <div className="space-y-1.5 rounded-xl border border-[#1a2233] bg-[#07090f] p-3 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">REGION:</span>
                    <span className="text-gray-200 font-semibold">{evt.region}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">FORMAT:</span>
                    <span className="text-amber-400 font-semibold">{evt.format}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#1a2233] flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {evt.status}
                </span>

                <a
                  href="https://discord.gg/hKGrmywnks"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-400 hover:text-white transition-colors"
                >
                  <span>RSVP</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

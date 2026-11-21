"use client";

import { Calendar, Trophy, Crosshair, Clock, ShieldCheck, Zap, ExternalLink } from "lucide-react";
import { sound } from "@/lib/sound";

export function CompetitiveHub() {
  const events = [
    {
      title: "Friday Night Bragging Rights",
      type: "Weekly Tournament",
      date: "Friday 19:00 EST",
      status: "ACTIVE SCRIM REGISTRATION",
      region: "NA-East / NA-Central",
      format: "Trios Battle Royale",
      badgeColor: "text-[#00f0ff] border-[#00f0ff]/30 bg-[#00f0ff]/10",
    },
    {
      title: "Solo Victory Cash Cup",
      type: "Official Cash Tournament",
      date: "Saturday 15:00 EST",
      status: "PR QUALIFICATION PREP",
      region: "Global Competitive",
      format: "Solo Battle Royale",
      badgeColor: "text-[#ffb800] border-[#ffb800]/30 bg-[#ffb800]/10",
    },
    {
      title: "Arrogant Customs: Boxfights & Zone Wars",
      type: "Community Scrimmage",
      date: "Daily 20:00 EST",
      status: "OPEN TO DISCORD MEMBERS",
      region: "NA / JP Cross-Region",
      format: "1v1 & 2v2 Scrim Lobbies",
      badgeColor: "text-[#ff1a53] border-[#ff1a53]/30 bg-[#ff1a53]/10",
    },
  ];

  return (
    <section id="scrims" className="py-16 sm:py-20 border-b border-[#1e2230]/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1e2230]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase mb-2">
              <Crosshair className="h-4 w-4 text-[#00f0ff]" />
              TOURNAMENT RADAR
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              SCRIMS & <span className="text-[#00f0ff]">SCHEDULE</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Weekly competitive itinerary and custom tournament scrimmage lobbies.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#1e2230] bg-[#0c0e14] px-3.5 py-1.5 text-xs font-mono text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              LOBBIES HOSTED ON DISCORD
            </span>
          </div>
        </div>

        {/* Schedule Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt) => (
            <div
              key={evt.title}
              className="esports-card rounded-2xl p-6 flex flex-col justify-between border border-[#1e2230]"
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
                    {evt.date}
                  </div>
                </div>

                <h3 className="text-lg font-black text-white">{evt.title}</h3>

                <div className="mt-4 space-y-2 rounded-xl border border-[#1e2230] bg-[#08090d] p-3 text-xs font-mono">
                  <div className="flex justify-between text-gray-400">
                    <span>REGION:</span>
                    <span className="text-white font-semibold">{evt.region}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>FORMAT:</span>
                    <span className="text-[#00f0ff] font-semibold">{evt.format}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>STATUS:</span>
                    <span className="text-emerald-400 font-semibold">{evt.status}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e2230]">
                <a
                  href="https://discord.com/invite/H6jcHyeDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#141722] hover:bg-[#1f2436] text-xs font-mono font-bold text-gray-200 hover:text-white px-4 py-2.5 border border-[#1e2230] transition-colors"
                >
                  <Zap className="h-3.5 w-3.5 text-[#00f0ff]" />
                  <span>JOIN SCRIM LOBBY</span>
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

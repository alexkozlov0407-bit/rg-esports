"use client";

import { useState } from "react";
import { Flame, Sparkles, Trophy } from "lucide-react";
import { sound } from "@/lib/sound";

export function HypeMeter() {
  const [hypeCount, setHypeCount] = useState<number>(342);
  const [ripples, setRipples] = useState<number[]>([]);

  const handleHype = () => {
    sound.playHype();
    setHypeCount((prev) => prev + 1);
    setRipples((prev) => [...prev.slice(-4), Date.now()]);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-[#ff1a53]/5 to-transparent border-b border-[#1e2230]/60 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ff1a53]/40 bg-[#ff1a53]/10 px-3 py-1 text-xs font-mono font-bold text-[#ff1a53] mb-4">
          <Flame className="h-3.5 w-3.5 animate-bounce" />
          COMMUNITY HYPE GENERATOR
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          HYPE <span className="text-[#ff1a53]">ARROGANT ESPORTS</span>
        </h2>

        <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
          Every click fuels our scrim training and tournament morale. Smash the hype button to back the roster!
        </p>

        {/* Big Hype Button */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="relative">
            {ripples.map((id) => (
              <span
                key={id}
                className="absolute inset-0 rounded-full border-2 border-[#ff1a53] animate-ping pointer-events-none opacity-75"
              />
            ))}

            <button
              onClick={handleHype}
              className="group relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-gradient-to-tr from-[#ff1a53] via-[#ff3366] to-[#ffb800] p-1 text-white shadow-2xl shadow-[#ff1a53]/50 transition-transform active:scale-90 hover:scale-105"
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#0c0e14] transition-colors group-hover:bg-[#0c0e14]/80">
                <Flame className="h-8 w-8 sm:h-10 sm:w-10 text-[#ff1a53] group-hover:text-[#ff3366] transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-mono font-black tracking-widest uppercase text-white mt-1">
                  HYPE SQUAD
                </span>
              </div>
            </button>
          </div>

          <div className="mt-4 font-mono">
            <span className="text-3xl sm:text-4xl font-black text-white">{hypeCount}</span>
            <span className="ml-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              HYPE LEVEL BOOSTS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

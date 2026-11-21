"use client";

import { useState } from "react";
import { Handshake, Shield, Sparkles, Check, Copy, ExternalLink, Mail, Award } from "lucide-react";
import { sound } from "@/lib/sound";

export function PartnershipPortal() {
  const [copied, setCopied] = useState(false);

  const perks = [
    {
      title: "Jersey & Asset Placement",
      description: "Prominent logo placement on team graphics, stream overlays, and future tournament jerseys.",
    },
    {
      title: "Content & Video Integration",
      description: "Dedicated sponsor shoutouts in official YouTube montages and TikTok competitive highlight reels.",
    },
    {
      title: "Direct Discord Community Access",
      description: "Custom role, sponsored tournament channels, and giveaways directly to our active Discord members.",
    },
    {
      title: "Social Amplification",
      description: "Cross-platform promotion across YouTube, TikTok, and team member social media channels.",
    },
  ];

  const handleCopyInquiry = () => {
    sound.playClick();
    const text = "Hello ARGT Cake2x, I am interested in exploring a sponsorship/partnership with Arrogant Esports.";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="partnerships" className="py-16 sm:py-20 border-b border-[#1e2230]/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1e2230]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#ffb800] uppercase mb-2">
              <Handshake className="h-4 w-4 text-[#ffb800]" />
              COMMERCIAL OPPORTUNITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              ORGANIZATION <span className="text-[#ffb800]">PARTNERSHIPS</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Align your brand with high-impact competitive gaming and next-generation esports talent.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-[#ffb800]/30 bg-[#ffb800]/10 px-3.5 py-1.5 text-xs font-mono font-bold text-[#ffb800]">
            <span>STATUS: INAUGURAL TIERS AVAILABLE</span>
          </div>
        </div>

        {/* Current Partner Status Notice */}
        <div className="mt-8 rounded-2xl border border-[#ffb800]/30 bg-gradient-to-r from-[#ffb800]/10 via-[#0c0e14] to-black p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                <span className="h-2 w-2 rounded-full bg-[#ffb800] animate-ping" />
                CURRENT OFFICIAL PARTNERS: NONE
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                BECOME THE <span className="text-[#ffb800]">FOUNDING PARTNER</span> OF ARROGANT ESPORTS
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                As an up-and-coming esports organization founded in November 2026, Arrogant Esports offers unprecedented ground-floor sponsorship value for gaming peripherals, energy drinks, apparel, and hardware brands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href="https://discord.com/invite/H6jcHyeDA"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playHype()}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ffb800] to-[#f59e0b] px-6 py-3.5 text-xs font-mono font-black text-black shadow-lg shadow-[#ffb800]/20 hover:scale-102 transition-all shrink-0"
              >
                <Handshake className="h-4 w-4" />
                <span>INQUIRE VIA DISCORD</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <button
                onClick={handleCopyInquiry}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#1e2230] bg-[#141722] hover:bg-[#1f2436] px-4 py-3.5 text-xs font-mono font-bold text-gray-200 hover:text-white transition-all shrink-0"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "COPIED MESSAGE!" : "COPY INQUIRY PITCH"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map((perk, i) => (
            <div
              key={perk.title}
              className="esports-card rounded-xl p-5 border border-[#1e2230]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffb800]/10 border border-[#ffb800]/30 text-[#ffb800] mb-3">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="font-extrabold text-white text-sm">{perk.title}</h4>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

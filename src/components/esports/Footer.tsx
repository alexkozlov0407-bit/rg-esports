"use client";

import { Shield, ExternalLink, Flame, MessageSquare, ArrowUp, Globe, Code2 } from "lucide-react";
import { sound } from "@/lib/sound";

function DiscordIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[#1e2230] bg-[#050608] text-gray-400 py-12 sm:py-16 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#1e2230]">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#ff1a53]/40 bg-[#ff1a53]/10 font-mono font-black text-[#ff1a53]">
                ARGT
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight uppercase">
                  ARROGANT <span className="text-[#ff1a53]">ESPORTS</span>
                </span>
                <p className="text-[11px] font-mono text-gray-500">
                  EST. 2026 SUNDAY NOVEMBER 15 • FOUNDED BY ARGT CAKE2X
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              &ldquo;An esports team designed to make a change in the competitive scene.&rdquo; Competing in high-impact tournament circuits across North America and Asia.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/30">
                CAPTAIN: ARGT CAKE2X (PR: 680)
              </span>
              <span className="text-[10px] font-mono text-gray-500">
                PARTNERSHIPS: OPEN
              </span>
            </div>
          </div>

          {/* Col 2: Official Social Links */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
              OFFICIAL CHANNELS
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="https://discord.com/invite/H6jcHyeDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#5865F2] transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Discord Community (18+)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@arrogantesports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FE2C55] transition-colors"
                >
                  {/* TikTok Icon */}
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.33 6.33 0 0 0 6.34-6.32V8.46a8.2 8.2 0 0 0 4.92 1.62v-3.39z" />
                  </svg>
                  <span>TikTok (@arrogantesports)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@arrogantesports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FF0000] transition-colors"
                >
                  <YoutubeIcon className="h-3.5 w-3.5" />
                  <span>YouTube Official (27+ Subs)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Archives & Quick Links */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
              LEGACY ARCHIVES
            </div>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="https://sites.google.com/view/arrogant-esports/home?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                >
                  <span>Google Sites Foundation</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="#roster"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team Roster & PR Stats
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI Video Summaries
                </a>
              </li>
              <li>
                <a
                  href="#partnerships"
                  className="text-gray-400 hover:text-[#ffb800] transition-colors"
                >
                  Partnership Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Watermark Section */}
        <div className="my-8 relative overflow-hidden rounded-2xl border border-[#1e2738] bg-gradient-to-r from-[#07090e] via-[#0c101a] to-[#07090e] p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-[#00f0ff]/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group">
          {/* Top subtle cyber neon line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-[#ff1a53] opacity-70 group-hover:opacity-100 transition-opacity" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Left Brand Details */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00f0ff]/40 bg-gradient-to-br from-[#00f0ff]/15 via-black to-[#ff1a53]/20 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Code2 className="h-6 w-6 text-[#00f0ff]" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0ff]"></span>
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#00f0ff]">
                    DEVELOPER WATERMARK
                  </span>
                  <span className="text-[10px] text-gray-500">•</span>
                  <span className="font-mono text-[10px] text-gray-400">
                    ENGINEERED BY ALEXCODES
                  </span>
                </div>
                <p className="text-xs text-gray-300 mt-1 max-w-xl leading-relaxed">
                  Custom high-impact esports portals, real-time social telemetry & gaming community architecture built by{" "}
                  <a
                    href="https://alexcodes.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="font-semibold text-white hover:text-[#00f0ff] underline decoration-[#00f0ff]/50 underline-offset-2 transition-colors"
                  >
                    AlexCodes
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right Action Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              {/* Portfolio Link */}
              <a
                href="https://alexcodes.me"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center gap-2 rounded-xl border border-[#00f0ff]/35 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 px-4 py-2 font-mono text-xs font-semibold text-[#00f0ff] hover:text-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-102"
              >
                <Globe className="h-4 w-4" />
                <span>alexcodes.me</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>

              {/* Discord Link */}
              <a
                href="https://discord.gg/fjSCWKTyAB"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center gap-2 rounded-xl border border-[#5865F2]/40 bg-[#5865F2]/15 hover:bg-[#5865F2]/25 px-4 py-2 font-mono text-xs font-semibold text-[#a5b4fc] hover:text-white transition-all shadow-[0_0_15px_rgba(88,101,242,0.15)] hover:shadow-[0_0_20px_rgba(88,101,242,0.35)] hover:scale-102"
              >
                <DiscordIcon className="h-4 w-4 text-[#5865F2]" />
                <span>Alex&apos;s Discord</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <div>
            © 2026 Arrogant Esports (ARGT). All rights reserved. High Impact Competitive Organization.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-[#1e2230] bg-[#0c0e14] px-3 py-1.5 text-gray-400 hover:text-white hover:border-[#ff1a53]/50 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}

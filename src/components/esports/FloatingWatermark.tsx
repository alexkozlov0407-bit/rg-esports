"use client";

import { useState } from "react";
import { sound } from "@/lib/sound";
import { Globe, ExternalLink, X, Code2 } from "lucide-react";

function DiscordIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function FloatingWatermark() {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClick = () => {
    sound.playClick();
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => {
            sound.playClick();
            setIsMinimized(false);
          }}
          title="Designed by Alex · alexcodes.me"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080b12]/90 border border-[#00f0ff]/40 text-[#00f0ff] hover:text-white hover:border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] backdrop-blur-md transition-all duration-300 group"
        >
          <Code2 className="h-4 w-4 transition-transform group-hover:scale-110" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0ff]"></span>
          </span>
        </button>
      </div>
    );
  }

  return (
    <aside aria-label="Developer watermark" className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 select-none">
      <div className="flex items-center gap-2.5 rounded-full bg-[#07090e]/85 backdrop-blur-md border border-[#1e2738]/90 pl-3 pr-2 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:border-[#00f0ff]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 text-xs font-mono group">
        {/* Glowing pulse indicator */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
        </span>

        {/* Brand label */}
        <span className="text-gray-400 font-medium tracking-tight flex items-center gap-1.5">
          <span className="text-gray-500 hidden sm:inline">Built by</span>
          <a
            href="https://alexcodes.me"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="text-white hover:text-[#00f0ff] font-semibold transition-colors flex items-center gap-1"
          >
            <span>AlexCodes</span>
            <ExternalLink className="h-2.5 w-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </span>

        <span className="text-[#1e2738] font-thin">|</span>

        {/* Website pill */}
        <a
          href="https://alexcodes.me"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          title="Visit alexcodes.me"
          className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 px-2 py-0.5 rounded-full border border-transparent hover:border-[#00f0ff]/30 transition-all"
        >
          <Globe className="h-3 w-3" />
          <span className="hidden md:inline">alexcodes.me</span>
        </a>

        {/* Discord pill */}
        <a
          href="https://discord.gg/fjSCWKTyAB"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          title="Join Alex's Discord Community"
          className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#8ea1e1] hover:bg-[#5865F2]/15 px-2 py-0.5 rounded-full border border-transparent hover:border-[#5865F2]/40 transition-all"
        >
          <DiscordIcon className="h-3 w-3" />
          <span className="hidden md:inline">Discord</span>
        </a>

        {/* Minimize button */}
        <button
          onClick={() => {
            sound.playClick();
            setIsMinimized(true);
          }}
          title="Minimize watermark"
          className="text-gray-500 hover:text-gray-300 p-0.5 rounded-full hover:bg-white/5 transition-colors ml-0.5"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </aside>
  );
}

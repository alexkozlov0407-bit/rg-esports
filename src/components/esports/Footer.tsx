"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, ExternalLink, Heart, Crown, ArrowUp } from "lucide-react";
import { sound } from "@/lib/sound";

export function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1a2233] bg-[#040508] py-12 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1a2233]">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-amber-500/40 bg-black shrink-0">
              <Image
                src="/images/branding/rg-logo.jpg"
                alt="Republic of Golds Official Crest"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-white uppercase text-base sm:text-lg font-mono">
                  REPUBLIC OF <span className="text-amber-400">GOLDS</span>
                </span>
                <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-400 border border-amber-500/30">
                  RG ESPORTS
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 font-mono">
                A server dedicated to the community, and to winning. Established 2022 / 2026.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="https://discord.gg/hKGrmywnks"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHype()}
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              Discord (87+ Members)
            </a>
            <span>•</span>
            <a
              href="https://www.youtube.com/@National-IREPG"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="text-gray-300 hover:text-[#FF0000] transition-colors"
            >
              YouTube
            </a>
            <span>•</span>
            <a
              href="https://www.tiktok.com/@rg.esports5"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="text-gray-300 hover:text-[#FE2C55] transition-colors"
            >
              TikTok
            </a>
            <span>•</span>
            <a
              href="https://x.com/rgesportaq?s=11"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="text-gray-300 hover:text-white transition-colors"
            >
              X (@RgEsportaq)
            </a>
            <span>•</span>
            <a
              href="https://rgesports.carrd.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              Carrd Portal
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-amber-400 transition-colors border border-[#1a2233] bg-[#0c1017] px-3 py-1.5 rounded-lg"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Republic of Golds (RG Esports). All rights reserved.
          </div>
          <div>
            Rocket League is a registered trademark of Psyonix LLC / Epic Games. Republic of Golds is an independent competitive esports organization.
          </div>
        </div>
      </div>
    </footer>
  );
}

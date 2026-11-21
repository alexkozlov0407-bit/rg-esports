"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Volume2, VolumeX, Menu, X, Shield, ExternalLink, Zap, Users, Crown } from "lucide-react";
import { sound } from "@/lib/sound";

interface NavbarProps {
  memberCount?: number;
  onlineCount?: number;
  onOpenTryout: () => void;
}

export function Navbar({
  memberCount = 87,
  onlineCount = 29,
  onOpenTryout,
}: NavbarProps) {
  const [soundActive, setSoundActive] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSound = () => {
    const nextState = sound.toggle();
    setSoundActive(nextState);
    if (nextState) sound.playClick();
  };

  const navLinks = [
    { label: "ROSTERS", href: "#roster" },
    { label: "ACADEMY", href: "#academy" },
    { label: "MMR LADDER", href: "#ladder" },
    { label: "HIERARCHY", href: "#hierarchy" },
    { label: "LORE & ROOTS", href: "#history" },
    { label: "LIVE RADAR", href: "#socials" },
    { label: "PARTNERSHIPS", href: "#partnerships" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a2233] bg-[#06070a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Crest */}
        <Link
          href="/"
          onClick={() => sound.playCyber()}
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
        >
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-500/20 to-black transition-transform group-hover:scale-105 shadow-md shadow-amber-500/20">
            <Image
              src="/images/branding/rg-logo.jpg"
              alt="RG Esports Crest"
              width={44}
              height={44}
              className="object-cover h-full w-full"
            />
            <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white uppercase text-base sm:text-lg">
                REPUBLIC OF <span className="text-amber-400">GOLDS</span>
              </span>
              <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-mono font-bold text-amber-400 border border-amber-500/30 hidden sm:inline-block">
                RG ESPORTS
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-gray-400">
              <span className="text-amber-400/90 font-semibold">ROCKET LEAGUE</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {memberCount}+ MEMBERS
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.playClick()}
              className="px-2.5 py-1.5 text-xs font-mono font-semibold tracking-wider text-gray-300 hover:text-amber-400 hover:bg-amber-500/10 rounded-md transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound FX Toggle Button */}
          <button
            onClick={toggleSound}
            aria-label="Toggle UI Sound Effects"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1a2233] bg-[#0c1017] text-gray-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
            title={soundActive ? "Mute UI Sound Effects" : "Enable UI Sound Effects"}
          >
            {soundActive ? (
              <Volume2 className="h-4 w-4 text-amber-400" />
            ) : (
              <VolumeX className="h-4 w-4 text-gray-500" />
            )}
          </button>

          {/* Scouting / Tryout Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenTryout();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3.5 py-2 text-xs font-mono font-bold text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all shadow-sm"
          >
            <Crown className="h-3.5 w-3.5" />
            <span>SCOUTING TRYOUT</span>
          </button>

          {/* Join Discord CTA */}
          <a
            href="https://discord.gg/hKGrmywnks"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playHype()}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-2 text-xs font-mono font-bold text-black hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 active:scale-95"
          >
            <Users className="h-3.5 w-3.5" />
            <span>DISCORD</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileOpen(!mobileOpen);
            }}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[#1a2233] bg-[#0c1017] text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#1a2233] bg-[#06070a]/95 px-4 pt-3 pb-6 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileOpen(false);
                }}
                className="px-3 py-2 text-sm font-mono font-semibold text-gray-300 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                sound.playClick();
                setMobileOpen(false);
                onOpenTryout();
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 py-2.5 text-xs font-mono font-bold text-amber-400"
            >
              <Crown className="h-4 w-4" />
              <span>SUBMIT SCOUTING TICKET</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

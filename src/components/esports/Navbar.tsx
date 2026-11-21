"use client";

import { useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Menu, X, Shield, ExternalLink, Zap } from "lucide-react";
import { sound } from "@/lib/sound";

interface NavbarProps {
  memberCount?: number;
}

export function Navbar({ memberCount = 18 }: NavbarProps) {
  const [soundActive, setSoundActive] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSound = () => {
    const nextState = sound.toggle();
    setSoundActive(nextState);
    if (nextState) sound.playClick();
  };

  const navLinks = [
    { label: "ROSTER", href: "#roster" },
    { label: "LIVE RADAR", href: "#socials" },
    { label: "VIDEO VAULT", href: "#videos" },
    { label: "SCRIMS & SCHEDULE", href: "#scrims" },
    { label: "PARTNERSHIPS", href: "#partnerships" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e2230] bg-[#060709]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Crest */}
        <Link
          href="/"
          onClick={() => sound.playCyber()}
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#ff1a53]/40 bg-gradient-to-br from-[#ff1a53]/20 to-black transition-transform group-hover:scale-105">
            <span className="font-mono text-sm font-black tracking-widest text-[#ff1a53]">
              ARGT
            </span>
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#00f0ff] animate-ping" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white uppercase text-base sm:text-lg">
                ARROGANT <span className="text-[#ff1a53]">ESPORTS</span>
              </span>
              <span className="rounded bg-[#ff1a53]/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-[#ff1a53] border border-[#ff1a53]/30 hidden sm:inline-block">
                EST. 2026
              </span>
            </div>
            <span className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">
              HIGH IMPACT COMPETITIVE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.playClick()}
              className="text-xs font-mono font-bold tracking-wider text-gray-300 transition-colors hover:text-[#ff1a53]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* Audio toggle button */}
          <button
            onClick={toggleSound}
            title={soundActive ? "Mute UI sounds" : "Enable UI sounds"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2230] bg-[#0c0e14] text-gray-400 hover:border-[#ff1a53]/50 hover:text-white transition-colors"
          >
            {soundActive ? (
              <Volume2 className="h-4 w-4 text-[#00f0ff]" />
            ) : (
              <VolumeX className="h-4 w-4 text-gray-500" />
            )}
          </button>

          {/* Join Discord CTA */}
          <a
            href="https://discord.com/invite/H6jcHyeDA"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playCyber()}
            className="relative hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#ff1a53] to-[#e6003e] px-4 py-2 text-xs font-mono font-extrabold tracking-wider text-white shadow-lg shadow-[#ff1a53]/25 transition-all hover:scale-102 hover:shadow-[#ff1a53]/40 active:scale-98"
          >
            <Shield className="h-3.5 w-3.5 text-white" />
            <span>JOIN DISCORD</span>
            <span className="flex items-center gap-1 rounded bg-black/30 px-1.5 py-0.5 text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {memberCount}
            </span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e2230] bg-[#0c0e14] text-gray-300 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#1e2230] bg-[#090b10] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileOpen(false);
                }}
                className="rounded-lg px-3 py-2 text-sm font-mono font-bold tracking-wider text-gray-200 hover:bg-[#151824] hover:text-[#ff1a53]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://discord.com/invite/H6jcHyeDA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#ff1a53] px-4 py-2.5 text-xs font-mono font-extrabold text-white"
              >
                <Zap className="h-4 w-4" />
                JOIN DISCORD SERVER ({memberCount} MEMBERS)
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

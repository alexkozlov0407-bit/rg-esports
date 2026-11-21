"use client";

import { useState } from "react";
import { X, Check, Copy, Flame, ExternalLink, ShieldAlert } from "lucide-react";
import { sound } from "@/lib/sound";

interface TryoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TryoutModal({ isOpen, onClose }: TryoutModalProps) {
  const [epicName, setEpicName] = useState("");
  const [pr, setPr] = useState("");
  const [region, setRegion] = useState("NA-East");
  const [inputDevice, setInputDevice] = useState("Controller");
  const [discordTag, setDiscordTag] = useState("");
  const [trackerLink, setTrackerLink] = useState("");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generatedApplication = `[ARROGANT ESPORTS SCOUTING APPLICATION]
Epic ID: ${epicName || "N/A"}
Power Ranking: ${pr || "0"} PR
Region: ${region}
Input Device: ${inputDevice}
Discord: ${discordTag || "N/A"}
Tracker/Clips: ${trackerLink || "N/A"}
Target Team: Arrogant Esports (ARGT)`;

  const handleCopyAndGo = () => {
    sound.playHype();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generatedApplication);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        window.open("https://discord.com/invite/H6jcHyeDA", "_blank");
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg rounded-2xl border border-[#00f0ff]/40 bg-[#0c0e14] shadow-2xl p-6 overflow-hidden max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1e2230] pb-4">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-[#00f0ff]" />
            <h3 className="text-lg font-black text-white font-mono uppercase">
              ARROGANT SCOUTING PORTAL
            </h3>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e2230] bg-[#141722] text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Instructions */}
        <p className="mt-4 text-xs text-gray-400 leading-relaxed">
          Fill in your competitive stats below. We will format your application to paste into the official Arrogant Esports Discord <strong className="text-white">#tryouts</strong> channel.
        </p>

        {/* Form Fields */}
        <div className="mt-5 space-y-3 font-mono text-xs">
          <div>
            <label className="block text-gray-400 mb-1">EPIC GAMES / IN-GAME NAME</label>
            <input
              type="text"
              value={epicName}
              onChange={(e) => setEpicName(e.target.value)}
              placeholder="e.g. ARGT_Player1"
              className="w-full rounded-lg border border-[#1e2230] bg-[#08090d] px-3 py-2 text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-400 mb-1">ESTIMATED PR</label>
              <input
                type="text"
                value={pr}
                onChange={(e) => setPr(e.target.value)}
                placeholder="e.g. 680"
                className="w-full rounded-lg border border-[#1e2230] bg-[#08090d] px-3 py-2 text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">COMPETITIVE REGION</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-lg border border-[#1e2230] bg-[#08090d] px-3 py-2 text-white focus:border-[#00f0ff] focus:outline-none"
              >
                <option value="NA-East">NA-East (US)</option>
                <option value="NA-Central">NA-Central (US)</option>
                <option value="NA-West">NA-West (US)</option>
                <option value="Japan/Asia">Japan / Asia (JP)</option>
                <option value="Europe">Europe (EU)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-400 mb-1">INPUT HARDWARE</label>
              <select
                value={inputDevice}
                onChange={(e) => setInputDevice(e.target.value)}
                className="w-full rounded-lg border border-[#1e2230] bg-[#08090d] px-3 py-2 text-white focus:border-[#00f0ff] focus:outline-none"
              >
                <option value="Controller">Controller (PS5/Xbox/PC)</option>
                <option value="Keyboard & Mouse">Keyboard & Mouse (PC)</option>
                <option value="Hybrid">Hybrid Input</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">DISCORD USERNAME</label>
              <input
                type="text"
                value={discordTag}
                onChange={(e) => setDiscordTag(e.target.value)}
                placeholder="e.g. yourname"
                className="w-full rounded-lg border border-[#1e2230] bg-[#08090d] px-3 py-2 text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">TRACKER / CLIPS LINK</label>
            <input
              type="text"
              value={trackerLink}
              onChange={(e) => setTrackerLink(e.target.value)}
              placeholder="e.g. fortnitetracker.com/profile/..."
              className="w-full rounded-lg border border-[#1e2230] bg-[#08090d] px-3 py-2 text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none"
            />
          </div>
        </div>

        {/* Live Preview of formatted application */}
        <div className="mt-4 rounded-lg border border-[#1e2230] bg-[#08090d] p-3 text-[11px] font-mono text-gray-300">
          <div className="text-[10px] text-gray-500 uppercase mb-1">CLIPBOARD PREVIEW:</div>
          <pre className="whitespace-pre-wrap">{generatedApplication}</pre>
        </div>

        {/* Submit Action */}
        <div className="mt-6 flex flex-col gap-2">
          <button
            onClick={handleCopyAndGo}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#00b4d8] text-black px-4 py-3 text-xs font-mono font-black uppercase tracking-wider shadow-lg shadow-[#00f0ff]/20 hover:scale-102 transition-all"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? "COPIED! OPENING DISCORD..." : "COPY APPLICATION & OPEN DISCORD"}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </button>

          <p className="text-[10px] text-center text-gray-500 font-mono mt-1">
            After clicking, paste into the #tryouts channel on the Arrogant Esports Discord server.
          </p>
        </div>
      </div>
    </div>
  );
}

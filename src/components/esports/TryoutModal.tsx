"use client";

import { useState, useEffect } from "react";
import { X, Check, Copy, Flame, ExternalLink, ShieldAlert, Gamepad2, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

interface TryoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTeam?: string;
  defaultRank?: string;
}

export function TryoutModal({
  isOpen,
  onClose,
  defaultTeam = "RG Ascension",
  defaultRank = "Diamond 3 - Champion 1",
}: TryoutModalProps) {
  const [epicName, setEpicName] = useState("");
  const [trackerLink, setTrackerLink] = useState("");
  const [rank, setRank] = useState(defaultRank);
  const [peakMmr, setPeakMmr] = useState("1200");
  const [region, setRegion] = useState("North America (NA)");
  const [targetTeam, setTargetTeam] = useState(defaultTeam);
  const [preferredRole, setPreferredRole] = useState("3v3 Rotation & Striker");
  const [discordTag, setDiscordTag] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultTeam) setTargetTeam(defaultTeam);
    if (defaultRank) setRank(defaultRank);
  }, [defaultTeam, defaultRank]);

  if (!isOpen) return null;

  const generatedApplication = `[REPUBLIC OF GOLDS (RG ESPORTS) SCOUTING TICKET]
Epic Games ID: ${epicName || "N/A"}
Rocket League Tracker: ${trackerLink || "https://rocketleague.tracker.network/..."}
Current 3v3 Rank: ${rank}
Peak Competitive MMR: ${peakMmr} MMR
Region: ${region}
Target Squad: ${targetTeam}
Preferred Style/Role: ${preferredRole}
Discord Tag: ${discordTag || "N/A"}
Application Type: Roster Tryout / Academy Placement
Submission: Verified via RG Esports Official Portal`;

  const handleCopyAndGo = () => {
    sound.playHype();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generatedApplication);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        window.open("https://discord.gg/hKGrmywnks", "_blank");
      }, 700);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-amber-500/50 bg-[#0c1017] shadow-2xl p-6 overflow-hidden max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1a2233] pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-amber-400" />
            <h3 className="text-lg font-black text-white font-mono uppercase">
              RG ESPORTS SCOUTING PORTAL
            </h3>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1a2233] bg-[#141824] text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Instructions */}
        <div className="mb-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-200 leading-relaxed font-mono">
          <p>
            <strong>SUBMISSION REQUIREMENT:</strong> RG Esports rosters are split into 7 MMR tiers. To try out for competitive squads or join the free Academy, you must submit your <strong>Rocket League Tracker URL</strong> in a ticket.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
              Epic Games ID / Gamertag:
            </label>
            <input
              type="text"
              placeholder="e.g. VeyOnTop"
              value={epicName}
              onChange={(e) => setEpicName(e.target.value)}
              className="w-full rounded-xl border border-[#1a2233] bg-[#07090e] px-3.5 py-2 text-xs font-mono text-white placeholder-gray-600 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
              RL Tracker Profile Link:
            </label>
            <input
              type="text"
              placeholder="https://rocketleague.tracker.network/..."
              value={trackerLink}
              onChange={(e) => setTrackerLink(e.target.value)}
              className="w-full rounded-xl border border-[#1a2233] bg-[#07090e] px-3.5 py-2 text-xs font-mono text-white placeholder-gray-600 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
              Current Rank:
            </label>
            <select
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="w-full rounded-xl border border-[#1a2233] bg-[#07090e] px-3.5 py-2 text-xs font-mono text-white focus:border-amber-400 focus:outline-none"
            >
              <option value="Platinum (Academy)">Platinum (Academy Entry)</option>
              <option value="Diamond 1 - Diamond 2">Diamond 1 - Diamond 2</option>
              <option value="Diamond 3 - Champion 1">Diamond 3 - Champion 1</option>
              <option value="Champion 2 - Champion 3">Champion 2 - Champion 3</option>
              <option value="Grand Champion 1 - GC2">Grand Champion 1 - GC2</option>
              <option value="Grand Champion 3 - SSL">Grand Champion 3 - SSL</option>
              <option value="Supersonic Legend (2000+ MMR)">Supersonic Legend (2000+ MMR)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
              Peak MMR:
            </label>
            <input
              type="text"
              placeholder="e.g. 1180"
              value={peakMmr}
              onChange={(e) => setPeakMmr(e.target.value)}
              className="w-full rounded-xl border border-[#1a2233] bg-[#07090e] px-3.5 py-2 text-xs font-mono text-white placeholder-gray-600 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
              Region:
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full rounded-xl border border-[#1a2233] bg-[#07090e] px-3.5 py-2 text-xs font-mono text-white focus:border-amber-400 focus:outline-none"
            >
              <option value="North America (NA)">North America (NA)</option>
              <option value="Europe (EU)">Europe (EU)</option>
              <option value="Other / Global">Other / Global</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
              Target Squad / Division:
            </label>
            <select
              value={targetTeam}
              onChange={(e) => setTargetTeam(e.target.value)}
              className="w-full rounded-xl border border-[#1a2233] bg-[#07090e] px-3.5 py-2 text-xs font-mono text-white focus:border-amber-400 focus:outline-none"
            >
              <option value="RG Esports (SSL+ 2000+) - NA">RG Esports (SSL+ 2000+) - NA</option>
              <option value="RG Sovereign (GC3-SSL) - NA">RG Sovereign (GC3-SSL) - NA</option>
              <option value="RG Vanguard (GC1-GC2) - NA">RG Vanguard (GC1-GC2) - NA</option>
              <option value="RG Dynasty (C2-C3) - NA">RG Dynasty (C2-C3) - NA</option>
              <option value="RG Ascension (D3-C1) - NA">RG Ascension (D3-C1) - NA</option>
              <option value="RG Nightshift (D3-C1) - NA">RG Nightshift (D3-C1) - NA</option>
              <option value="RG Province (D1-D2) - NA">RG Province (D1-D2) - NA</option>
              <option value="RG Mainstream (GC1-GC2) - EU">RG Mainstream (GC1-GC2) - EU</option>
              <option value="RG Twilight (C1-C3) - EU">RG Twilight (C1-C3) - EU</option>
              <option value="RG Rush (D3-C1) - EU">RG Rush (D3-C1) - EU</option>
              <option value="The RG Academy (Diamond &amp; Platinum)">The RG Academy (Diamond &amp; Platinum)</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
              Your Discord Username:
            </label>
            <input
              type="text"
              placeholder="e.g. alex_rl or username#0000"
              value={discordTag}
              onChange={(e) => setDiscordTag(e.target.value)}
              className="w-full rounded-xl border border-[#1a2233] bg-[#07090e] px-3.5 py-2 text-xs font-mono text-white placeholder-gray-600 focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Live Preview Box */}
        <div className="mt-5 rounded-xl border border-[#1a2233] bg-[#07090f] p-3.5">
          <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1">
            GENERATED DISCORD TICKET CONTENT:
          </div>
          <pre className="text-[11px] font-mono text-gray-300 whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-36">
            {generatedApplication}
          </pre>
        </div>

        {/* Actions */}
        <div className="mt-5 pt-4 border-t border-[#1a2233] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-gray-400">
            * Teams are captained not managed. Captains & Managers evaluate tickets.
          </div>

          <button
            onClick={handleCopyAndGo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-xs font-mono font-bold text-black hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>COPIED! OPENING DISCORD...</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>COPY & OPEN DISCORD TICKET</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Handshake,
  Shield,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  Users,
  AlertCircle,
  Trophy,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { sound } from "@/lib/sound";

export function PartnershipPortal() {
  const [serverName, setServerName] = useState("");
  const [memberCount, setMemberCount] = useState<number>(75);
  const [communityType, setCommunityType] = useState("Rocket League & Gaming");
  const [hasEvents, setHasEvents] = useState(true);
  const [discordLink, setDiscordLink] = useState("");
  const [copied, setCopied] = useState(false);

  const isEligible = memberCount >= 50;

  const generatedPartnershipApplication = `[RG ESPORTS PARTNERSHIP APPLICATION]
Organization / Server Name: ${serverName || "Your Community Name"}
Discord Member Count: ${memberCount}
Community Focus: ${communityType}
Host Regular Events / Scrims: ${hasEvents ? "Yes" : "No"}
Discord Invite Link: ${discordLink || "https://discord.gg/..."}
Partnership Intent: Mutual announcements, cross-community tournaments, scrim collaborations, and professional long-term growth with Republic of Golds (RG Esports).
Confirmed 50+ Member Requirement: ${memberCount >= 50 ? "YES (Verified)" : "NO"}`;

  const handleCopyAndOpenTicket = () => {
    sound.playHype();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generatedPartnershipApplication);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        window.open("https://discord.gg/hKGrmywnks", "_blank");
      }, 700);
    }
  };

  return (
    <section id="partnerships" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
              <Handshake className="h-4 w-4 text-amber-400" />
              COMMUNITY ALLIANCES & GROWTH
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              ORGANIZATION <span className="text-amber-400">PARTNERSHIPS</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Partner with Republic of Golds for joint tournaments, scrims, and reciprocal community reach.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-mono font-bold text-amber-400">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span>PARTNERSHIP APPLICATIONS OPEN</span>
          </div>
        </div>

        {/* Requirements & What RG Offers */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="esports-card rounded-2xl p-6 border border-[#1a2233]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
              <Users className="h-4 w-4" />
              <span>1. SERVER STANDARD</span>
            </div>
            <h4 className="text-base font-black font-mono text-white mb-2">
              50+ Member Minimum
            </h4>
            <ul className="text-xs text-gray-300 space-y-1.5 leading-relaxed">
              <li>• Minimum of 50 active Discord members.</li>
              <li>• Organized, professional Discord channels.</li>
              <li>• Strict zero-tolerance for toxicity & drama.</li>
              <li>• Clear identity and gaming purpose.</li>
            </ul>
          </div>

          <div className="esports-card rounded-2xl p-6 border border-[#1a2233]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Sparkles className="h-4 w-4" />
              <span>2. ACTIVITY LEVEL</span>
            </div>
            <h4 className="text-base font-black font-mono text-white mb-2">
              Active Community
            </h4>
            <ul className="text-xs text-gray-300 space-y-1.5 leading-relaxed">
              <li>• Consistent daily or weekly conversation.</li>
              <li>• Responsive, dedicated staff team.</li>
              <li>• Regular events, tournaments or scrims.</li>
              <li>• Active engagement in partnership ties.</li>
            </ul>
          </div>

          <div className="esports-card rounded-2xl p-6 border border-[#1a2233]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">
              <Handshake className="h-4 w-4" />
              <span>3. MUTUAL BENEFIT</span>
            </div>
            <h4 className="text-base font-black font-mono text-white mb-2">
              Shared Growth
            </h4>
            <ul className="text-xs text-gray-300 space-y-1.5 leading-relaxed">
              <li>• Reciprocal announcement pings.</li>
              <li>• Joint community tournaments & scrims.</li>
              <li>• Respect between staff teams and rosters.</li>
              <li>• Meaningful collaboration over vanity numbers.</li>
            </ul>
          </div>

          <div className="esports-card rounded-2xl p-6 border border-[#1a2233]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2">
              <Trophy className="h-4 w-4" />
              <span>4. WHAT RG OFFERS</span>
            </div>
            <h4 className="text-base font-black font-mono text-white mb-2">
              High Impact Reach
            </h4>
            <ul className="text-xs text-gray-300 space-y-1.5 leading-relaxed">
              <li>• Verified partnership announcement to 87+ members.</li>
              <li>• Collaborative scrim opportunities for your teams.</li>
              <li>• Cross-platform spotlight on YouTube & socials.</li>
              <li>• Long-term allied standing with RG.</li>
            </ul>
          </div>
        </div>

        {/* Interactive Partnership Eligibility Checker & Pre-Generator */}
        <div className="mt-10 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#0e111a] to-[#07090e] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-[#1a2233] mb-6">
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                INTERACTIVE ELIGIBILITY EVALUATOR
              </div>
              <h3 className="text-2xl font-black font-mono text-white mt-1">
                CHECK YOUR COMMUNITY & PRE-GENERATE TICKET
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Important: Do NOT ask in DMs; staff will not respond. Open a ticket in Discord for an Admin or Team Manager.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {isEligible ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>ELIGIBLE (MEETS 50+ MINIMUM)</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-500/40 bg-rose-500/10 text-rose-400 text-xs font-mono font-bold">
                  <XCircle className="h-4 w-4" />
                  <span>BELOW 50 MEMBER MINIMUM</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1.5">
                  YOUR COMMUNITY / ORG NAME:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Velocity Esports, Phoenix Gaming"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  className="w-full rounded-xl border border-[#1a2233] bg-[#090c13] px-3.5 py-2.5 text-xs font-mono text-white placeholder-gray-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">
                    DISCORD SERVER MEMBER COUNT:
                  </label>
                  <span className={`text-xs font-mono font-bold ${isEligible ? "text-emerald-400" : "text-rose-400"}`}>
                    {memberCount} Members
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={1000}
                  step={5}
                  value={memberCount}
                  onChange={(e) => setMemberCount(parseInt(e.target.value, 10))}
                  className="w-full h-2.5 bg-[#131926] rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                  <span>10 members</span>
                  <span className="text-amber-400 font-bold">50 Req</span>
                  <span>500</span>
                  <span>1,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1.5">
                  COMMUNITY DISCORD INVITE LINK:
                </label>
                <input
                  type="text"
                  placeholder="https://discord.gg/yourinvite"
                  value={discordLink}
                  onChange={(e) => setDiscordLink(e.target.value)}
                  className="w-full rounded-xl border border-[#1a2233] bg-[#090c13] px-3.5 py-2.5 text-xs font-mono text-white placeholder-gray-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="hasEvents"
                  checked={hasEvents}
                  onChange={(e) => setHasEvents(e.target.checked)}
                  className="rounded border-[#1a2233] bg-[#090c13] text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor="hasEvents" className="text-xs font-mono text-gray-300 cursor-pointer">
                  We host regular tournaments, leagues, or community gaming nights
                </label>
              </div>
            </div>

            {/* Generated Discord Application Preview */}
            <div className="flex flex-col justify-between rounded-xl border border-[#1a2233] bg-[#07090f] p-4.5">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1a2233] text-xs font-mono text-gray-400">
                  <span>PRE-FORMATTED TICKET MESSAGE</span>
                  <span className="text-amber-400 font-bold">READY TO SEND</span>
                </div>
                <pre className="text-[11px] font-mono text-gray-300 whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-48">
                  {generatedPartnershipApplication}
                </pre>
              </div>

              <div className="pt-4 mt-3 border-t border-[#1a2233]">
                <button
                  onClick={handleCopyAndOpenTicket}
                  disabled={!isEligible}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-mono font-bold transition-all shadow-lg ${
                    isEligible
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black active:scale-95 shadow-amber-500/20"
                      : "bg-gray-800 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>COPIED! OPENING DISCORD TICKET...</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>COPY & OPEN DISCORD PARTNERSHIP TICKET</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
                <div className="text-[10px] font-mono text-gray-500 text-center mt-2">
                  * Opens ticket channel in Republic of Golds Discord server
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

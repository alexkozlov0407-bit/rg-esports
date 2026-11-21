"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { InteractiveMmrLadder } from "./InteractiveMmrLadder";
import { TeamRoster } from "./TeamRoster";
import { AcademyHub } from "./AcademyHub";
import { StaffHierarchy } from "./StaffHierarchy";
import { HistoryTimeline } from "./HistoryTimeline";
import { LiveSocialRadar } from "./LiveSocialRadar";
import { VideoVault } from "./VideoVault";
import { CompetitiveHub } from "./CompetitiveHub";
import { PartnershipPortal } from "./PartnershipPortal";
import { HypeMeter } from "./HypeMeter";
import { Footer } from "./Footer";
import { FloatingWatermark } from "./FloatingWatermark";
import { VideoModal } from "./VideoModal";
import { TryoutModal } from "./TryoutModal";
import type { SocialStatsResponse } from "@/lib/social-stats";

interface EsportsMainPageProps {
  initialData: SocialStatsResponse;
}

export function EsportsMainPage({ initialData }: EsportsMainPageProps) {
  const [data] = useState<SocialStatsResponse>(initialData);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isTryoutOpen, setIsTryoutOpen] = useState(false);
  const [tryoutTeam, setTryoutTeam] = useState("RG Ascension");
  const [tryoutRank, setTryoutRank] = useState("Diamond 3 - Champion 1");

  const handleOpenTryoutWithTeam = (teamName: string, rank: string) => {
    setTryoutTeam(teamName);
    setTryoutRank(rank);
    setIsTryoutOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06070a] text-gray-100 selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar
        memberCount={data.discord.memberCount}
        onlineCount={data.discord.onlineCount}
        onOpenTryout={() => handleOpenTryoutWithTeam("Republic of Golds", "General Tryout")}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* High-Impact Hero Section */}
        <HeroSection
          stats={{
            youtubeSubs: data.youtube.subscribers,
            tiktokFollowers: data.tiktok.followers,
            discordMembers: data.discord.memberCount,
            videoCount: data.youtube.videoCount,
          }}
          onOpenVideo={(id) => setSelectedVideoId(id)}
          onOpenTryout={() => handleOpenTryoutWithTeam("Republic of Golds", "General Tryout")}
        />

        {/* Interactive Rocket League MMR & Team Ladder Qualifier */}
        <InteractiveMmrLadder
          onOpenTryoutWithTeam={handleOpenTryoutWithTeam}
        />

        {/* 10 Competitive Teams Roster (Captained Not Managed) */}
        <TeamRoster
          onOpenTryoutWithTeam={handleOpenTryoutWithTeam}
        />

        {/* The RG Academy & Free Coaching Pipeline */}
        <AcademyHub
          onOpenTryoutWithTeam={handleOpenTryoutWithTeam}
        />

        {/* Staff Directory & Interactive Dispute Power Ranking Simulator */}
        <StaffHierarchy />

        {/* History & Resilience Timeline: Revenge (2022) → Dash (2026) → Republic of Golds */}
        <HistoryTimeline />

        {/* Live Social Command Radar (Discord, YouTube, TikTok, X) */}
        <LiveSocialRadar initialData={data} />

        {/* Media Vault & Strategic Video Summaries */}
        <VideoVault
          videos={data.youtube.videos}
          onOpenVideo={(id) => setSelectedVideoId(id)}
        />

        {/* Tournament & Scrims Itinerary */}
        <CompetitiveHub />

        {/* Partnerships & Commercial Portal (50+ Member Requirements) */}
        <PartnershipPortal />

        {/* Fan Engagement, Goal Explosion & Stadium Hype Meter */}
        <HypeMeter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Watermark */}
      <FloatingWatermark />

      {/* Modals */}
      <VideoModal
        videoId={selectedVideoId}
        videos={data.youtube.videos}
        onClose={() => setSelectedVideoId(null)}
      />

      <TryoutModal
        isOpen={isTryoutOpen}
        defaultTeam={tryoutTeam}
        defaultRank={tryoutRank}
        onClose={() => setIsTryoutOpen(false)}
      />
    </div>
  );
}

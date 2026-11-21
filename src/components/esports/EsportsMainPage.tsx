"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { LiveSocialRadar } from "./LiveSocialRadar";
import { TeamRoster } from "./TeamRoster";
import { VideoVault } from "./VideoVault";
import { CompetitiveHub } from "./CompetitiveHub";
import { PartnershipPortal } from "./PartnershipPortal";
import { HypeMeter } from "./HypeMeter";
import { Footer } from "./Footer";
import { FloatingWatermark } from "./FloatingWatermark";
import { VideoModal } from "./VideoModal";
import { TryoutModal } from "./TryoutModal";
import type { SocialStatsResponse } from "@/app/api/social-stats/route";

interface EsportsMainPageProps {
  initialData: SocialStatsResponse;
}

export function EsportsMainPage({ initialData }: EsportsMainPageProps) {
  const [data] = useState<SocialStatsResponse>(initialData);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isTryoutOpen, setIsTryoutOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#060709] text-gray-100 selection:bg-[#ff1a53] selection:text-white">
      {/* Top Navigation */}
      <Navbar memberCount={data.discord.memberCount} />

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
          onOpenTryout={() => setIsTryoutOpen(true)}
        />

        {/* Live Social Command Radar */}
        <LiveSocialRadar initialData={data} />

        {/* Official Team Roster & Founder Profile */}
        <TeamRoster onOpenTryout={() => setIsTryoutOpen(true)} />

        {/* Media Vault & Strategic AI Video Summaries */}
        <VideoVault
          videos={data.youtube.videos}
          onOpenVideo={(id) => setSelectedVideoId(id)}
        />

        {/* Tournament & Scrims Itinerary */}
        <CompetitiveHub />

        {/* Partnerships & Commercial Portal */}
        <PartnershipPortal />

        {/* Fan Engagement & Hype Meter */}
        <HypeMeter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Subtle Watermark */}
      <FloatingWatermark />

      {/* Modals */}
      <VideoModal
        videoId={selectedVideoId}
        videos={data.youtube.videos}
        onClose={() => setSelectedVideoId(null)}
      />

      <TryoutModal
        isOpen={isTryoutOpen}
        onClose={() => setIsTryoutOpen(false)}
      />
    </div>
  );
}

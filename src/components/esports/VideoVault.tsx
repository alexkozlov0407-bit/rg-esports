"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Video, Eye, Calendar, Award, ExternalLink } from "lucide-react";
import { sound } from "@/lib/sound";
import type { VideoItem } from "@/lib/social-stats";

interface VideoVaultProps {
  videos: VideoItem[];
  onOpenVideo: (videoId: string) => void;
}

export function VideoVault({ videos, onOpenVideo }: VideoVaultProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "Recruitment", "Analysis", "Montage", "Highlights"];

  const filteredVideos =
    activeCategory === "ALL"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="py-16 sm:py-20 border-b border-[#1a2233] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1a2233]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF0000] uppercase mb-2">
              <Video className="h-4 w-4 text-[#FF0000]" />
              MEDIA VAULT & STRATEGIC CONTENT
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              OFFICIAL <span className="text-[#FF0000]">MEDIA VAULT</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Recruitment clips, tactical analysis, and competitive Rocket League montages.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1 text-xs font-mono rounded-md border transition-all ${
                  activeCategory === cat
                    ? "border-[#FF0000] bg-[#FF0000]/20 text-white font-bold"
                    : "border-[#1a2233] bg-[#0c1017] text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="esports-card rounded-2xl overflow-hidden border border-[#1a2233] flex flex-col justify-between group hover:border-[#FF0000]/60 transition-all"
            >
              <div>
                {/* Thumbnail Container */}
                <div
                  className="relative aspect-video w-full bg-black cursor-pointer overflow-hidden"
                  onClick={() => {
                    sound.playClick();
                    onOpenVideo(video.id);
                  }}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute top-2 left-2 rounded bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-400 border border-white/10 uppercase">
                    {video.category}
                  </span>

                  <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-[10px] font-mono text-gray-300">
                    {video.views} views
                  </span>
                </div>

                <div className="p-4">
                  <h3
                    onClick={() => {
                      sound.playClick();
                      onOpenVideo(video.id);
                    }}
                    className="text-sm font-bold font-mono text-white group-hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer mb-2"
                  >
                    {video.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-3">
                    {video.summary}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2 border-t border-[#1a2233] flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-500">
                  {new Date(video.published).toLocaleDateString()}
                </span>

                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenVideo(video.id);
                  }}
                  className="text-xs font-mono font-bold text-[#FF0000] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>WATCH</span>
                  <Play className="h-3 w-3 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

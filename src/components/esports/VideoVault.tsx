"use client";

import { useState } from "react";
import {
  Play,
  Film,
  Eye,
  Star,
  Calendar,
  Sparkles,
  ExternalLink,
  Share2,
  Check,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { sound } from "@/lib/sound";
import type { VideoItem } from "@/app/api/social-stats/route";

interface VideoVaultProps {
  videos: VideoItem[];
  onOpenVideo: (videoId: string) => void;
}

export function VideoVault({ videos, onOpenVideo }: VideoVaultProps) {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["ALL", "Montage", "Analysis", "Recruitment", "Highlights", "Milestone"];

  const filteredVideos =
    activeFilter === "ALL"
      ? videos
      : videos.filter((v) => v.category.toLowerCase() === activeFilter.toLowerCase());

  const handleShare = (id: string, url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="videos" className="py-16 sm:py-20 border-b border-[#1e2230]/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#1e2230]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF0000] uppercase mb-2">
              <Film className="h-4 w-4 text-[#FF0000]" />
              OFFICIAL TEAM BROADCASTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
              VIDEO VAULT & <span className="text-[#ff1a53]">AI SUMMARIES</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Recent videos produced by Arrogant Esports squad members, enhanced with executive AI summaries and key takeaways.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@arrogantesports"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 rounded-lg border border-[#FF0000]/40 bg-[#FF0000]/10 px-4 py-2 text-xs font-mono font-bold text-[#FF0000] hover:bg-[#FF0000]/20 transition-all shrink-0"
          >
            <span>VISIT @ARROGANTESPORTS</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-gray-500 mr-2 flex items-center gap-1.5">
            <Filter className="h-3.5 w-3.5" />
            FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setActiveFilter(cat);
              }}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-mono font-bold transition-all ${
                activeFilter === cat
                  ? "bg-[#ff1a53] text-white shadow-md shadow-[#ff1a53]/25 scale-102"
                  : "bg-[#0c0e14] text-gray-400 hover:bg-[#151824] hover:text-white border border-[#1e2230]"
              }`}
            >
              {cat === "ALL" ? `ALL VIDEOS (${videos.length})` : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="esports-card group rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer border border-[#1e2230] hover:border-[#ff1a53]/60 transition-all"
              onClick={() => {
                sound.playCyber();
                onOpenVideo(video.id);
              }}
            >
              <div>
                {/* Thumbnail Header */}
                <div className="relative aspect-video w-full bg-[#050608] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-black/30 to-transparent" />

                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff1a53] text-white shadow-xl shadow-[#ff1a53]/50 transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="h-6 w-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Badges on thumbnail */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded bg-black/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono font-bold text-white border border-white/10 uppercase">
                      {video.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-gray-300">
                    <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded">
                      <Eye className="h-3 w-3 text-[#00f0ff]" />
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded">
                      <Star className="h-3 w-3 text-[#ffb800] fill-[#ffb800]" />
                      5.0 rating
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(video.published).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-white text-base leading-snug line-clamp-2 group-hover:text-[#ff1a53] transition-colors">
                    {video.title}
                  </h3>

                  {/* AI Summary Box */}
                  <div className="mt-4 rounded-xl border border-[#ff1a53]/20 bg-[#ff1a53]/5 p-3.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#ff1a53] uppercase mb-1.5">
                      <Sparkles className="h-3 w-3" />
                      AI STRATEGIC SUMMARY
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {video.summary}
                    </p>

                    {/* Key takeaways */}
                    {video.keyTakeaways && video.keyTakeaways.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-[#ff1a53]/15 space-y-1">
                        <div className="text-[10px] font-mono font-semibold text-gray-400 uppercase">
                          KEY TAKEAWAYS:
                        </div>
                        {video.keyTakeaways.map((takeaway, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-1.5 text-[11px] text-gray-300"
                          >
                            <span className="text-[#00f0ff] mt-0.5 font-bold">›</span>
                            <span>{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#1e2230]/60 mt-4">
                <span className="text-xs font-mono font-bold text-[#ff1a53] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <Play className="h-3 w-3 fill-current" />
                  WATCH THEATER
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleShare(video.id, video.url, e)}
                    title="Copy video link"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e2230] bg-[#0c0e14] text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                  >
                    {copiedId === video.id ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Share2 className="h-3.5 w-3.5" />
                    )}
                  </button>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playClick();
                    }}
                    title="Open on YouTube"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e2230] bg-[#0c0e14] text-gray-400 hover:text-[#FF0000] hover:border-[#FF0000]/50 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

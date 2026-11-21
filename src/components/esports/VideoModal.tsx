"use client";

import { useEffect } from "react";
import { X, Sparkles, ExternalLink, Calendar, Eye, Star } from "lucide-react";
import { sound } from "@/lib/sound";
import type { VideoItem } from "@/app/api/social-stats/route";

interface VideoModalProps {
  videoId: string | null;
  videos: VideoItem[];
  onClose: () => void;
}

export function VideoModal({ videoId, videos, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (videoId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  const currentVideo = videos.find((v) => v.id === videoId) || videos[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-[#1e2230] bg-[#0c0e14] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-[#1e2230] px-4 py-3 bg-[#08090d]">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#ff1a53] animate-ping" />
            <span className="text-xs font-mono font-bold text-gray-300 uppercase">
              ARROGANT THEATER // {currentVideo.category.toUpperCase()}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e2230] bg-[#141722] text-gray-400 hover:text-white hover:border-[#ff1a53]/50 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&rel=0`}
            title={currentVideo.title}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Meta & Summary Details (Scrollable if tall) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                {currentVideo.title}
              </h3>
              <div className="mt-1 flex items-center gap-4 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5 text-[#00f0ff]" />
                  {currentVideo.views} views
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-[#ffb800] fill-[#ffb800]" />
                  5.0 rating
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(currentVideo.published).toLocaleDateString()}
                </span>
              </div>
            </div>

            <a
              href={currentVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF0000] hover:bg-[#cc0000] text-white px-4 py-2 text-xs font-mono font-bold transition-all shrink-0"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* AI Strategic Summary Box */}
          <div className="rounded-xl border border-[#ff1a53]/30 bg-[#ff1a53]/10 p-4">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#ff1a53] uppercase mb-2">
              <Sparkles className="h-4 w-4" />
              AI STRATEGIC SUMMARY
            </div>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {currentVideo.summary}
            </p>

            {currentVideo.keyTakeaways && currentVideo.keyTakeaways.length > 0 && (
              <div className="mt-3 pt-3 border-t border-[#ff1a53]/20 space-y-1.5">
                <div className="text-[11px] font-mono font-bold text-gray-300 uppercase">
                  KEY STRATEGIC TAKEAWAYS:
                </div>
                {currentVideo.keyTakeaways.map((takeaway, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-gray-300"
                  >
                    <span className="text-[#00f0ff] font-bold">›</span>
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { X, Play, Sparkles, ExternalLink } from "lucide-react";
import type { VideoItem } from "@/lib/social-stats";
import { sound } from "@/lib/sound";

interface VideoModalProps {
  videoId: string | null;
  videos: VideoItem[];
  onClose: () => void;
}

export function VideoModal({ videoId, videos, onClose }: VideoModalProps) {
  if (!videoId) return null;

  const video = videos.find((v) => v.id === videoId) || videos[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-amber-500/40 bg-[#0c1017] shadow-2xl p-4 sm:p-6 overflow-hidden max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1a2233] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#FF0000] px-2 py-0.5 text-[10px] font-mono font-bold text-white uppercase">
              {video.category}
            </span>
            <h3 className="text-sm sm:text-base font-bold font-mono text-white truncate max-w-md sm:max-w-xl">
              {video.title}
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

        {/* Embedded Player */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#1a2233] shadow-inner">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        {/* Video Breakdown Details */}
        <div className="mt-4 space-y-3">
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              STRATEGIC RECAP & OVERVIEW
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {video.summary}
            </p>
          </div>

          {video.keyTakeaways && video.keyTakeaways.length > 0 && (
            <div className="rounded-xl border border-[#1a2233] bg-[#07090f] p-3.5">
              <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                KEY COMPETITIVE TAKEAWAYS:
              </div>
              <ul className="space-y-1 text-xs text-gray-300">
                {video.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-[#1a2233] text-xs font-mono">
            <span className="text-gray-400">{video.views} Verified Views</span>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:text-white flex items-center gap-1 font-bold"
            >
              <span>Watch directly on YouTube</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

interface WatermarkOverlayProps {
  className?: string;
}

/**
 * Fixed-position watermark displayed on public profile pages.
 */
export function WatermarkOverlay({ className }: WatermarkOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-center justify-center pb-4",
        className,
      )}
    >
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-[#07090e]/90 px-3.5 py-1.5 text-xs text-gray-400 backdrop-blur-xl shadow-2xl font-mono hover:border-[#00f0ff]/50 transition-all">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
        </span>
        <span>Crafted by</span>
        <a
          href="https://alexcodes.me"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white hover:text-[#00f0ff] transition-colors"
        >
          alexcodes.me
        </a>
        <span className="text-white/20">|</span>
        <a
          href="https://discord.gg/fjSCWKTyAB"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a5b4fc] hover:text-white transition-colors"
        >
          Discord
        </a>
      </div>
    </div>
  );
}

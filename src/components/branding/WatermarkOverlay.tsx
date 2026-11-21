import { cn } from "@/lib/utils";

interface WatermarkOverlayProps {
  className?: string;
}

/**
 * Fixed-position watermark displayed on every public profile page.
 */
export function WatermarkOverlay({ className }: WatermarkOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-center justify-center pb-4",
        className,
      )}
    >
      <a
        href="https://bioportl.live"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto rounded-full border border-bp-border bg-bp-base/90 px-4 py-1.5 text-xs text-bp-muted backdrop-blur-md transition-colors hover:text-bp-text"
      >
        Powered by{" "}
        <span className="font-semibold text-bp-text">bioportl.live</span> •
        Build Yours Free
      </a>
    </div>
  );
}

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

/**
 * Responsive bento grid — 1 col on mobile, 2 on sm+, 4 on lg+.
 */
export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

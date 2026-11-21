"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Widget size presets mapped to CSS grid spans.
 *
 * - "1x1" → 1 col × 1 row  (square)
 * - "2x1" → 2 cols × 1 row (wide)
 * - "2x2" → 2 cols × 2 rows (hero)
 */
type WidgetSize = "1x1" | "2x1" | "2x2";

const sizeClasses: Record<WidgetSize, string> = {
  "1x1": "col-span-1 row-span-1",
  "2x1": "col-span-1 sm:col-span-2 row-span-1",
  "2x2": "col-span-1 sm:col-span-2 row-span-2",
};

interface BentoCardProps {
  size?: WidgetSize;
  className?: string;
  children: ReactNode;
}

export function BentoCard({
  size = "1x1",
  className,
  children,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "glass-card p-5 transition-shadow hover:shadow-lg hover:shadow-bp-accent/10",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

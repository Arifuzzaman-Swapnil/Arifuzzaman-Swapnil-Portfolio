import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Retained for API compatibility — no longer applies 3D tilt. */
  tilt?: boolean;
  ring?: boolean;
  tiltIntensity?: number;
}

/**
 * Flat surface card: card background, hairline border, subtle hover elevation.
 * (The old glass/tilt/glow treatment was removed for the minimal design.)
 */
const GlassCard = ({ children, className }: GlassCardProps) => (
  <div className={cn("surface hover-lift relative h-full rounded-xl", className)}>{children}</div>
);

export default GlassCard;

import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Retained for API compatibility — no longer applies 3D tilt. */
  tilt?: boolean;
  ring?: boolean;
  tiltIntensity?: number;
}

/** Feed the pointer position to the `.spotlight` glow via CSS vars (no re-render). */
const trackPointer = (e: MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/**
 * Surface card: soft gradient fill, gradient hairline, subtle hover elevation
 * and a neutral pointer-following glow.
 */
const GlassCard = ({ children, className }: GlassCardProps) => (
  <div
    onMouseMove={trackPointer}
    className={cn("surface spotlight hover-lift relative h-full rounded-xl", className)}
  >
    {children}
  </div>
);

export default GlassCard;

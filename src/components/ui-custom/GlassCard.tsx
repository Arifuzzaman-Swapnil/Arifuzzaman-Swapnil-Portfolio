import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import TiltCard from "./TiltCard";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Apply 3D mouse tilt */
  tilt?: boolean;
  /** Show the animated aurora hairline ring */
  ring?: boolean;
  tiltIntensity?: number;
}

/**
 * Reusable frosted-glass surface with an optional aurora gradient ring and
 * 3D tilt. The base of every premium card in the portfolio.
 */
const GlassCard = ({
  children,
  className,
  tilt = false,
  ring = true,
  tiltIntensity = 8,
}: GlassCardProps) => {
  const inner = (
    <div
      className={cn(
        "glass card-accent hover-lift relative h-full rounded-2xl",
        ring && "glow-ring",
        className
      )}
    >
      {children}
    </div>
  );

  if (tilt) {
    return (
      <TiltCard intensity={tiltIntensity} className="h-full rounded-2xl">
        {inner}
      </TiltCard>
    );
  }

  return inner;
};

export default GlassCard;

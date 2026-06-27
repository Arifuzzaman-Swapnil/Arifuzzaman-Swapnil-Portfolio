import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index — multiplied into the delay */
  index?: number;
  delay?: number;
  y?: number;
}

/**
 * Standardized entrance-reveal wrapper used across all sections.
 * Animates on mount (each deck page mounts fresh). Respects reduced-motion.
 */
const Reveal = ({ children, className, index = 0, delay = 0, y = 28 }: RevealProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.18 + delay + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

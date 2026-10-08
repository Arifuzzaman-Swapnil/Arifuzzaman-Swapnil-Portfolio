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
 * Animates once when scrolled into view. Respects reduced-motion.
 */
const Reveal = ({ children, className, index = 0, delay = 0, y = 16 }: RevealProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, delay: 0.05 + delay + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

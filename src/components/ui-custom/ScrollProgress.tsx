import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin aurora progress bar pinned to the top of the viewport, tracking
 * overall page scroll.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-primary via-primary to-violet shadow-glow"
    />
  );
};

export default ScrollProgress;

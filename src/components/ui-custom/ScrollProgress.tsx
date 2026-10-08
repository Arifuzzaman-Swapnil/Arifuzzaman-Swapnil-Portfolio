import { motion, useScroll, useSpring } from "framer-motion";

/** Slim accent progress line pinned to the top of the viewport, tracking page scroll. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-primary/40 via-primary to-primary"
    />
  );
};

export default ScrollProgress;

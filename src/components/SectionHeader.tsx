import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  /** Two-digit section index, e.g. "01" — renders a mono label + faint numeral */
  index?: string;
}

const Bracket = ({ className }: { className: string }) => (
  <span className={`pointer-events-none absolute h-3 w-3 border-primary/40 ${className}`} />
);

const SectionHeader = ({ tag, title, subtitle, index }: SectionHeaderProps) => (
  <motion.div
    className="relative mb-8 text-center md:mb-10"
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Faint oversized section numeral */}
    {index && (
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-[55%] select-none font-head text-[6.5rem] font-bold leading-none text-foreground/[0.035] md:text-[10rem]"
      >
        {index}
      </span>
    )}

    <div className="relative">
      <span className="glass mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {index && <span className="text-muted-foreground">{index}</span>}
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow animate-glow-pulse" />
        {tag}
      </span>

      <div className="relative mx-auto inline-block px-7 py-2">
        <Bracket className="left-0 top-0 border-l border-t" />
        <Bracket className="right-0 top-0 border-r border-t" />
        <Bracket className="bottom-0 left-0 border-b border-l" />
        <Bracket className="bottom-0 right-0 border-b border-r" />
        <h2 className="font-head text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      </div>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">{subtitle}</p>
      )}

      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  </motion.div>
);

export default SectionHeader;

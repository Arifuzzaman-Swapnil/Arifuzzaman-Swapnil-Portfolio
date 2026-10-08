import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  /** Two-digit section index, e.g. "01" */
  index?: string;
}

const SectionHeader = ({ tag, title, subtitle, index }: SectionHeaderProps) => {
  const label = tag.replace(/^\/\/\s*/, "");
  return (
    <motion.div
      className="mb-9 md:mb-11"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-4 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {index && (
          <span className="tnum rounded-md border border-border bg-white/[0.02] px-1.5 py-0.5 text-primary">
            {index}
          </span>
        )}
        {label}
      </p>
      <h2 className="text-fade pb-1 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}
      <div className="relative mt-6 h-px bg-border">
        <span className="absolute left-0 top-0 h-px w-14 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>
    </motion.div>
  );
};

export default SectionHeader;

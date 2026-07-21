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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {index && <span className="text-primary">{index}</span>}
        {index && <span className="mx-1.5 text-border">/</span>}
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}
      <div className="rule mt-6" />
    </motion.div>
  );
};

export default SectionHeader;

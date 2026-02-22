import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
}

const SectionHeader = ({ tag, title }: SectionHeaderProps) => (
  <motion.div
    className="mb-12 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">{tag}</p>
    <h2 className="text-3xl md:text-4xl font-bold font-display">{title}</h2>
  </motion.div>
);

export default SectionHeader;

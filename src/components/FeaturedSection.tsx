import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const FeaturedSection = () => (
  <section className="py-12 px-6">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.p
        className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured On
      </motion.p>
      <motion.a
        href="https://www.intelleqt.ai/about"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-border bg-card-gradient shadow-card hover:border-glow transition-all group"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="text-xl font-bold font-display tracking-tight">
          Intelleqt<span className="text-primary">.ai</span>
        </span>
        <span className="text-sm text-muted-foreground">— Backend AI Engineer</span>
        <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.a>
    </div>
  </section>
);

export default FeaturedSection;

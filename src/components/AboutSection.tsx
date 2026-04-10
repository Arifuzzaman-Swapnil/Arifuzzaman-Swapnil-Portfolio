import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <SectionHeader tag="// about me" title="Who I Am" />
      <motion.div
        className="text-muted-foreground text-lg leading-relaxed space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-xl font-semibold text-foreground">
          I don't just write code — I build systems that think.
        </p>
        <p>
          As a <span className="text-primary font-semibold">Backend AI Engineer</span> and <span className="text-primary font-semibold">Full Stack Python Developer</span>, I architect intelligent backends powered by RAG pipelines, LLMs, and agentic workflows — turning complex AI research into production-ready products people actually use.
        </p>
        <p>
          From real-time conversational agents to intelligent document processing, my work lives at the intersection of <span className="text-primary">Django</span>, <span className="text-primary">FastAPI</span>, <span className="text-primary">LangChain</span>, and cutting-edge AI — deployed at scale, built to last.
        </p>
        <p>
          Ranked <span className="text-primary font-semibold">30th in Bangladesh</span> at ITEE Japan among ~600,000 applicants. Not just a developer — <span className="text-primary font-semibold">an engineer who ships</span>.
        </p>
        <p className="text-primary font-medium">
          📌 Open to collaborations and opportunities in AI/ML engineering.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

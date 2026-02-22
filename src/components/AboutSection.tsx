import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <SectionHeader tag="// about me" title="Who I Am" />
      <motion.p
        className="text-muted-foreground text-lg leading-relaxed text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Backend AI Engineer and Full Stack Python Developer with a strong foundation in
        AI, ML, NLP, and Retrieval-Augmented Generation (RAG). Experienced in building
        scalable backend systems using Django and FastAPI, designing RESTful APIs, and
        integrating production-ready AI models for real-world applications such as
        intelligent document processing, sentiment analysis, and AI-powered automation.
        Proficient in Python, Django, FastAPI, Flask, and LangChain. Passionate about
        architecting intelligent backend systems and driving AI innovation.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;

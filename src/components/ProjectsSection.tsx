import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { ScanEye, Hand, BriefcaseBusiness, ShieldAlert, Globe, Newspaper, ExternalLink } from "lucide-react";

const projects = [
  { icon: ScanEye, title: "Animal Image Classification Using CNN", desc: "Custom dataset of 30 animal classes (3,000 images), achieved 99% accuracy, deployed via Flask web app.", link: "https://github.com/Arifuzzaman-Swapnil/Animal-Classification-CNN" },
  { icon: Hand, title: "Bangla Sign Language Sentiment Analysis", desc: "Built hybrid CNN+NLP model for Bangla sign language text dataset.", link: "" },
  { icon: BriefcaseBusiness, title: "LLM-Based Career Guidance System", desc: "Career-focused chatbot, resume evaluation, AI interview questions, and smart CV builder.", link: "https://github.com/Arifuzzaman-Swapnil/AiCareerAgent" },
  { icon: ShieldAlert, title: "Cyberbullying Detection Using NLP", desc: "Designed sentiment analysis system to detect cyberbullying from online text.", link: "https://github.com/Arifuzzaman-Swapnil/Cyber-Bullying-Sentimental-Analysis-" },
  { icon: Globe, title: "RAG Multilingual Bangla AI", desc: "Real-time Bangla Q&A system using NLP + FAISS + LLM, 95%+ accuracy.", link: "https://github.com/Arifuzzaman-Swapnil/Rag-Bangla-AI" },
  { icon: Newspaper, title: "Bangla News Classification System", desc: "NLP-based classifier for Bangla news articles.", link: "https://github.com/Arifuzzaman-Swapnil/Bangladesh-News-Classification-using-NLP" },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <SectionHeader tag="// projects" title="Personal Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-card-gradient border border-border rounded-lg p-6 shadow-card hover:border-glow hover:shadow-glow transition-all group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <project.icon size={28} className="text-primary" />
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

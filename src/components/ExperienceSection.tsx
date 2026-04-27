import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Teaching Assistant (TA)",
    company: "BUBT",
    companyUrl: "https://www.bubt.edu.bd/",
    period: "Jan 2025 – Dec 2025",
    points: [
      "Conducted lectures and labs on Machine Learning (ML)",
      "Object-Oriented Programming (C++)",
      "Advanced Programming (Java)",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "Abedin Tech",
    companyUrl: "https://abedintech.com/our-team/",
    period: "May 2025 – February 2026",
    points: [
      "Built and deployed full-stack web applications using Python Flask, handling routing, templating, and REST API development",
      "Developed Django-based AI-powered websites integrating machine learning models for intelligent features and data-driven functionalities",
      "Designed and implemented AI automation pipelines to streamline repetitive business workflows, improving efficiency and reducing manual effort",
      "Built intelligent AI agents, chatbots, and AI-powered calling systems to automate customer interactions and enhance user engagement",
    ],
  },
  {
    title: "Backend AI Developer",
    company: "Intelleqt AI",
    companyUrl: "https://www.intelleqt.ai/about",
    period: "Feb 2026 – Present",
    points: [
      "Architected and maintained scalable Django backend systems powering AI-driven applications with robust API endpoints and data management",
      "Developed and integrated production-ready AI models with a strong focus on Retrieval-Augmented Generation (RAG) pipelines for intelligent document processing and knowledge retrieval",
      "Built end-to-end data ingestion and preprocessing pipelines for large-scale document corpora, enabling efficient vector search and semantic retrieval",
      "Designed RESTful and WebSocket APIs to serve real-time AI predictions and conversational agents to enterprise clients",
      "Collaborated with cross-functional teams to translate business requirements into technical AI solutions deployed safely at scale",
    ],
  },
  {
    title: "Lead AI Solutions Architect",
    company: "Aesthetic Logic",
    companyUrl: "https://aestheticlogic.com/about-us",
    period: "Apr 2026 – Present",
    points: [
      "Leading AI initiatives and architecting intelligent solutions that address complex, real-world business challenges across multiple domains",
      "Designing and implementing end-to-end AI system architectures — from data pipelines to model serving — for scalable, production-grade applications",
      "Evaluating and integrating state-of-the-art LLMs, embedding models, and agentic frameworks into client-facing products",
      "Defining AI strategy and technical roadmaps, ensuring alignment between business goals and engineering execution",
      "Mentoring junior developers on best practices in AI/ML engineering, code quality, and system design",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeader tag="// experience" title="Work Experience" />
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-card-gradient border border-border rounded-lg p-6 shadow-card hover:border-glow transition-colors"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-primary/10 text-primary mt-1">
                <Briefcase size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-lg font-semibold">
                    {exp.title}{" "}
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-normal hover:text-primary transition-colors">@ {exp.company}</a>
                  </h3>
                  <span className="font-mono text-xs text-primary">{exp.period}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Lead AI Solutions Architect",
    company: "Aesthetic Logic",
    companyUrl: "https://aestheticlogic.com/about-us",
    period: "Apr 2026 – Present",
    current: true,
    points: [
      "Leading AI initiatives and architecting intelligent solutions to complex, real-world business challenges across multiple domains",
      "Designing end-to-end AI system architectures — from data pipelines to model serving — for scalable, production-grade applications",
      "Evaluating and integrating state-of-the-art LLMs, embedding models, and agentic frameworks into client-facing products",
      "Defining AI strategy and technical roadmaps; mentoring developers on AI/ML engineering, code quality, and system design",
    ],
    tags: ["AI Strategy", "LLMs", "Agentic AI", "System Design"],
  },
  {
    title: "Backend AI Engineer",
    company: "Intelleqt AI",
    companyUrl: "https://www.intelleqt.ai/about",
    period: "Feb 2026 – Present",
    current: true,
    points: [
      "Build and scale Python backend services and REST APIs powering live SaaS products — HomePlus, TradePilot, and BaseLinq",
      "Design RAG pipelines that answer questions over construction contracts and property documents with clause-level cited references",
      "Develop custom chat models and LLM-powered AI agents, and engineer backend caching & scalability strategies (Redis) for high-traffic endpoints",
      "Build intelligent chatbots and AI automation workflows integrated directly into customer-facing products",
    ],
    tags: ["Python", "Django REST", "RAG", "Redis", "LLM Agents"],
  },
  {
    title: "Full-Stack Python Web Developer · AI Engineer",
    company: "Abedin Tech",
    companyUrl: "https://abedintech.com/our-team/",
    period: "Jan 2025 – Feb 2026",
    points: [
      "Built and maintained full-stack Python web applications and scalable backend services end to end",
      "Developed Python REST APIs, automation scripts, and background job pipelines (Celery)",
      "Created AI automations, AI agents, chatbots, and AI calling systems integrating GPT-4o, Claude, and Gemini",
      "Integrated Stripe payments with a token-based billing system and built responsive React + TypeScript frontends for customer-facing SaaS products",
    ],
    tags: ["Django", "Celery", "GPT-4o", "Stripe", "React + TS"],
  },
  {
    title: "Teaching Assistant",
    company: "BUBT",
    companyUrl: "https://www.bubt.edu.bd/",
    period: "Oct 2024 – Dec 2025",
    points: [
      "Delivered lectures and hands-on labs in Object-Oriented Programming (C++), Artificial Intelligence, Machine Learning, and Neural Networks",
      "Mentored undergraduate students through assignments, projects, and exam preparation",
    ],
    tags: ["C++ / OOP", "AI", "Machine Learning", "Mentoring"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative flex min-h-full w-full items-center justify-center px-6 py-8 md:py-10">
    <SectionDecor />
    <div className="container mx-auto max-w-4xl">
      <SectionHeader
        index="03"
        tag="// experience"
        title="Work Experience"
        subtitle="Shipping production AI across proptech, construction tech, and live SaaS."
      />

      <div className="relative space-y-5 before:absolute before:left-[27px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:block">
        {experiences.map((exp, i) => (
          <Reveal key={i} index={i}>
            <GlassCard className="p-5 md:p-6 md:pl-20">
              {/* Timeline node */}
              <div className="absolute left-[14px] top-6 hidden h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground ring-4 ring-background md:flex">
                <Briefcase size={14} />
              </div>

              {/* Header: icon sits beside the title only */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-lg bg-secondary p-2 text-muted-foreground md:hidden">
                  <Briefcase size={18} />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 md:flex-row md:items-start md:justify-between">
                  <h3 className="font-head text-base font-semibold md:text-lg">
                    {exp.title}{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-normal text-muted-foreground transition-colors hover:text-foreground"
                    >
                      @ {exp.company}
                      <ExternalLink size={13} />
                    </a>
                  </h3>
                  <span className="tnum flex w-fit shrink-0 items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    {exp.current && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullets — full width, minimal left padding */}
              <ul className="mt-3 space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import PreviewLink from "./site-preview/PreviewLink";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
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
  <section id="experience" className="relative w-full px-6 py-20 md:py-28">
    <SectionDecor />
    <div className="container mx-auto grid max-w-6xl 2xl:max-w-7xl gap-2 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeader
          index="03"
          tag="// experience"
          title="Work Experience"
          subtitle="Shipping production AI across proptech, construction tech, and live SaaS."
        />
      </div>

      <div className="relative space-y-5 before:absolute before:left-[27px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent md:before:block">
        {experiences.map((exp, i) => (
          <Reveal key={i} index={i}>
            <GlassCard className="p-5 md:p-6 md:pl-20">
              {/* Timeline node */}
              <div
                className={`absolute left-[14px] top-6 hidden h-7 w-7 items-center justify-center rounded-full border bg-card ring-4 ring-background md:flex ${
                  exp.current
                    ? "border-primary/40 text-primary shadow-[0_0_0_1px_hsl(217_91%_60%/0.12),0_0_16px_-4px_hsl(217_91%_60%/0.5)]"
                    : "border-border text-muted-foreground"
                }`}
              >
                <Briefcase size={14} />
              </div>

              {/* Header: icon sits beside the title only */}
              <div className="flex items-start gap-3">
                <div className="icon-tile h-9 w-9 shrink-0 md:hidden">
                  <Briefcase size={16} />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 md:flex-row md:items-start md:justify-between">
                  <h3 className="font-head text-base font-semibold md:text-lg">
                    {exp.title}{" "}
                    <PreviewLink
                      href={exp.companyUrl}
                      title={exp.company}
                      className="inline-flex items-center gap-1 font-normal text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
                    >
                      @ {exp.company}
                      <ExternalLink size={13} />
                    </PreviewLink>
                  </h3>
                  <span className="chip tnum w-fit shrink-0">
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
                  <span key={t} className="chip">
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

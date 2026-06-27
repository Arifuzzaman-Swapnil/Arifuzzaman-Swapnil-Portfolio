import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import {
  Building2,
  Megaphone,
  Hammer,
  Palette,
  ScanEye,
  Hand,
  BriefcaseBusiness,
  ShieldAlert,
  Globe,
  Newspaper,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

const professional = [
  {
    icon: Building2,
    title: "BaseLinq AI",
    subtitle: "Construction Project Management Platform · Intelleqt AI",
    desc: "Full-stack platform (React + TypeScript / Django REST + JWT) for projects, tasks, and contractual workflows — Variation Orders, RFIs, Site Instructions, Delay Claims — with automated numbering, financial calculations, and approval flows. Added RBAC, cost tracking, web-push, and AI meeting transcription/summarisation (Recall.ai + Claude). Built Linq AI, a RAG chatbot answering project & contract questions with clause-level cited references.",
    tags: ["React + TS", "Django REST", "JWT", "RAG", "Recall.ai", "Claude"],
    links: [{ label: "baselinq.ai", url: "https://www.baselinq.ai/" }],
  },
  {
    icon: Megaphone,
    title: "Sellanto",
    subtitle: "AI-Powered Social Media Automation · Abedin Tech",
    desc: "SaaS platform that automates AI-driven content creation, scheduling, and publishing across 9 social networks — GPT-4o, Claude, and Gemini for caption, image, and video generation, plus a RAG Messenger chatbot. Django REST (JWT, Celery scheduling) with a React 19 + TypeScript frontend, a “Brand DNA” engine, engagement analytics, and dual billing (Stripe + token economy).",
    tags: ["Django", "Celery", "GPT-4o", "React 19", "Stripe"],
    links: [{ label: "yourbrandstar.com", url: "https://www.yourbrandstar.com/" }],
  },
  {
    icon: Hammer,
    title: "HomePlus & TradePilot",
    subtitle: "Homeowners ↔ Trusted Tradespeople · Intelleqt AI",
    desc: "HomePlus (React + Django/DRF) lets homeowners request, manage, and track home-improvement jobs with quote generation, job categorisation, and document uploads — plus a GPT-4o Vision pipeline that reads property documents and produces AI-driven EPC energy ratings. TradePilot is the companion app for tradespeople to receive, quote, and manage jobs in real time over a shared backend and component library.",
    tags: ["React", "Django REST", "GPT-4o Vision", "EPC AI"],
    links: [
      { label: "HomePlus", url: "https://www.myhomeplus.io/" },
      { label: "TradePilot", url: "https://www.mytradepilot.io/" },
    ],
  },
  {
    icon: Palette,
    title: "TechStyles",
    subtitle: "AI Design Studio & Procurement · Intelleqt AI",
    desc: "Full-stack platform managing the complete interior-design lifecycle — project phases, room-level planning, product procurement, contractor coordination, and client approvals. Dedicated client & contractor portals, a built-in CRM, and finance modules integrated with Xero and AWS S3. Django REST backend with a Next.js (TypeScript, Tailwind) frontend, OpenAI-driven features, time tracking, meetings, and reporting.",
    tags: ["Next.js", "Django REST", "Xero", "AWS S3", "OpenAI"],
    links: [{ label: "techstyles.ai", url: "https://www.techstyles.ai/" }],
  },
];

const academic = [
  { icon: Globe, title: "RAG Multilingual Bangla AI", desc: "Real-time Bangla Q&A system using NLP + FAISS + LLM, 95%+ accuracy.", link: "https://github.com/Arifuzzaman-Swapnil/Rag-Bangla-AI" },
  { icon: BriefcaseBusiness, title: "LLM-Based Career Guidance System", desc: "Career chatbot with resume evaluation, AI interview questions, and a smart CV builder.", link: "https://github.com/Arifuzzaman-Swapnil/AiCareerAgent" },
  { icon: ScanEye, title: "Animal Image Classification (CNN)", desc: "Custom dataset of 30 animal classes (3,000 images), 99% accuracy, deployed via Flask.", link: "https://github.com/Arifuzzaman-Swapnil/Animal-Classification-CNN" },
  { icon: ShieldAlert, title: "Cyberbullying Detection (NLP)", desc: "Sentiment-analysis system to detect cyberbullying from online text.", link: "https://github.com/Arifuzzaman-Swapnil/Cyber-Bullying-Sentimental-Analysis-" },
  { icon: Hand, title: "Bangla Sign Language Sentiment", desc: "Hybrid CNN + NLP model for a Bangla sign-language text dataset.", link: "" },
  { icon: Newspaper, title: "Bangla News Classification", desc: "NLP-based classifier for Bangla news articles.", link: "https://github.com/Arifuzzaman-Swapnil/Bangladesh-News-Classification-using-NLP" },
];

const ProjectsSection = () => (
  <section id="projects" className="relative flex min-h-full w-full items-center justify-center px-6 py-8 md:py-10">
    <SectionDecor />
    <div className="container mx-auto max-w-6xl">
      <SectionHeader
        index="04"
        tag="// projects"
        title="Selected Work"
        subtitle="Production SaaS shipped at work, plus open-source & academic ML projects."
      />

      {/* Professional */}
      <Reveal>
        <div className="mb-6 flex items-center gap-3">
          <Sparkles size={18} className="text-primary" />
          <h3 className="font-head text-xl font-semibold">Professional Projects</h3>
          <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
            Live SaaS
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>

      <div className="mb-16 grid gap-6 md:grid-cols-2">
        {professional.map((p, i) => (
          <Reveal key={p.title} index={i}>
            <GlassCard tilt tiltIntensity={6} className="flex h-full flex-col p-7">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-violet/20 text-primary ring-1 ring-primary/20">
                  <p.icon size={24} />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                </span>
              </div>
              <h4 className="font-head text-xl font-bold text-foreground">{p.title}</h4>
              <p className="mt-0.5 font-mono text-xs text-primary">{p.subtitle}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-foreground/[0.06]"
                  >
                    {l.label}
                    <ExternalLink size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Academic / Open-source */}
      <Reveal>
        <div className="mb-6 flex items-center gap-3">
          <Github size={18} className="text-primary" />
          <h3 className="font-head text-xl font-semibold">Open-Source &amp; Academic</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {academic.map((p, i) => (
          <Reveal key={p.title} index={i}>
            <GlassCard tilt tiltIntensity={7} className="flex h-full flex-col p-6">
              <div className="mb-4 flex items-center justify-between">
                <p.icon size={26} className="text-primary" />
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
              <h4 className="font-head text-base font-semibold text-foreground">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

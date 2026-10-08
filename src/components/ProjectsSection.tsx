import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import PreviewLink from "./site-preview/PreviewLink";
import {
  Building2,
  Megaphone,
  House,
  Wrench,
  Palette,
  Truck,
  ScanEye,
  Hand,
  BriefcaseBusiness,
  ShieldAlert,
  Globe,
  Newspaper,
  ArrowUpRight,
  Github,
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
    links: [{ label: "saleanto.com", url: "https://saleanto.com/" }],
  },
  {
    icon: House,
    title: "HomePlus",
    subtitle: "Home Maintenance Platform for UK Homeowners · Intelleqt AI",
    desc: "Free home-maintenance platform for UK homeowners (React + Django/DRF) — request, track, and manage home-improvement jobs with quote generation and job categorisation, a document vault for certificates and warranties, safety reminders, and a personalised maintenance plan. Includes a GPT-4o Vision pipeline that reads property documents and produces AI-driven EPC energy ratings.",
    tags: ["React", "Django REST", "GPT-4o Vision", "EPC AI", "Document Vault"],
    links: [{ label: "myhomeplus.io", url: "https://www.myhomeplus.io/" }],
  },
  {
    icon: Wrench,
    title: "TradePilot",
    subtitle: "Trades Marketplace & CRM · Intelleqt AI",
    desc: "Companion platform to HomePlus that connects UK homeowners with vetted local tradespeople — a homeowner posts a job once and up to 3 local trades can quote. Trades receive, quote, and manage jobs in real time through a Trades CRM and mobile app, with a credit-based lead system and reviews tied to invoiced jobs. Built on a backend and component library shared with HomePlus.",
    tags: ["React", "Django REST", "Real-time Jobs", "Trades CRM", "Credit System"],
    links: [{ label: "mytradepilot.io", url: "https://www.mytradepilot.io/" }],
  },
  {
    icon: Palette,
    title: "TechStyles",
    subtitle: "AI Design Studio & Procurement · Intelleqt AI",
    desc: "Full-stack platform managing the complete interior-design lifecycle — project phases, room-level planning, product procurement, contractor coordination, and client approvals. Dedicated client & contractor portals, a built-in CRM, and finance modules integrated with Xero and AWS S3. Django REST backend with a Next.js (TypeScript, Tailwind) frontend, OpenAI-driven features, time tracking, meetings, and reporting.",
    tags: ["Next.js", "Django REST", "Xero", "AWS S3", "OpenAI"],
    links: [{ label: "techstyles.ai", url: "https://www.techstyles.ai/" }],
  },
  {
    icon: Truck,
    title: "TruckWys",
    subtitle: "Load-to-Cash Platform for Transporters · Intelleqt AI",
    desc: "Load-to-cash SaaS for South African road-freight transporters — prices every load from live diesel, toll, and running costs with below-cost warnings, raises VAT invoices automatically on delivery, tracks debtors by age with statements and reminders, and reports P&L, VAT, and margin by lane. Integrates with Cartrack and CtrlFleet (API + CSV), ships iOS and Android apps, and includes an AI Copilot that answers questions about the numbers — every change user-approved.",
    tags: ["AI Copilot", "Invoicing & VAT", "Debtor Tracking", "Cartrack", "CtrlFleet", "iOS + Android"],
    links: [{ label: "truckwys.com", url: "https://www.truckwys.com/" }],
  },
];

const academic = [
  { icon: Globe, title: "RAG Multilingual Bangla AI", desc: "Real-time Bangla Q&A system using NLP + FAISS + LLM, 95%+ accuracy.", link: "https://github.com/Arifuzzaman-Swapnil/Rag-Bangla-AI" },
  { icon: BriefcaseBusiness, title: "LLM-Based Career Guidance System", desc: "Career chatbot with resume evaluation, AI interview questions, and a smart CV builder.", link: "https://github.com/Arifuzzaman-Swapnil/AiCareerAgent" },
  { icon: ScanEye, title: "Animal Image Classification (CNN)", desc: "Custom dataset of 30 animal classes (3,000 images), 99% accuracy, deployed via Flask. Paper accepted at IEEE CSDE 2026.", link: "https://github.com/Arifuzzaman-Swapnil/Animal-Classification-CNN" },
  { icon: ShieldAlert, title: "Cyberbullying Detection (NLP)", desc: "Sentiment-analysis system to detect cyberbullying from online text.", link: "https://github.com/Arifuzzaman-Swapnil/Cyber-Bullying-Sentimental-Analysis-" },
  { icon: Hand, title: "Bangla Sign Language Sentiment", desc: "Hybrid CNN + NLP model for a Bangla sign-language text dataset.", link: "" },
  { icon: Newspaper, title: "Bangla News Classification", desc: "NLP-based classifier for Bangla news articles.", link: "https://github.com/Arifuzzaman-Swapnil/Bangladesh-News-Classification-using-NLP" },
];

const ProjectsSection = () => (
  <section id="projects" className="relative w-full px-6 py-20 md:py-28">
    <SectionDecor />
    <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
      <SectionHeader
        index="04"
        tag="// projects"
        title="Selected Work"
        subtitle="Production SaaS shipped at work, plus open-source & academic ML projects."
      />

      {/* Professional */}
      <Reveal>
        <div className="mb-5 flex items-center gap-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
            Professional Projects
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>

      <div className="mb-14 grid gap-5 md:grid-cols-2">
        {professional.map((p, i) => (
          <Reveal
            key={p.title}
            index={i}
            className={professional.length % 2 && i === professional.length - 1 ? "md:col-span-2" : undefined}
          >
            <GlassCard className="flex h-full flex-col p-6">
              <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="mb-4 flex items-start justify-between">
                <div className="icon-tile h-10 w-10">
                  <p.icon size={19} />
                </div>
                <span className="chip !rounded-full !px-2.5 uppercase tracking-wider !text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                </span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">{p.title}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{p.subtitle}</p>
              <p className="mt-3 max-w-3xl flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                {p.links.map((l) => (
                  <PreviewLink
                    key={l.url}
                    href={l.url}
                    title={p.title}
                    className="press inline-flex items-center gap-1.5 rounded-lg border border-border bg-white/[0.02] px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                  >
                    {l.label}
                    <ArrowUpRight size={14} />
                  </PreviewLink>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Academic / Open-source */}
      <Reveal>
        <div className="mb-5 flex items-center gap-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
            Open-Source &amp; Academic
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {academic.map((p, i) => (
          <Reveal key={p.title} index={i}>
            <GlassCard className="flex h-full flex-col p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="icon-tile h-9 w-9">
                  <p.icon size={17} />
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="press inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-muted-foreground transition-colors hover:border-white/15 hover:bg-white/[0.05] hover:text-foreground"
                  >
                    <Github size={14} />
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
              <h4 className="text-sm font-semibold text-foreground">{p.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import { Trophy, GraduationCap, Rocket, BrainCircuit } from "lucide-react";

const stats = [
  { icon: Trophy, value: "30th", label: "in Bangladesh — ITEE, Japan" },
  { icon: GraduationCap, value: "3.92", label: "CGPA / 4.00 — B.Sc. CSE" },
  { icon: Rocket, value: "6+", label: "live SaaS products shipped" },
  { icon: BrainCircuit, value: "3", label: "LLM providers in production — GPT-4o · Claude · Gemini" },
];

const AboutSection = () => (
  <section id="about" className="relative flex min-h-full w-full items-center justify-center px-6 py-8 md:py-10">
    <SectionDecor />
    <div className="container mx-auto max-w-5xl">
      <SectionHeader index="01" tag="// about me" title="Who I Am" />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Bio */}
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p className="text-xl font-medium text-foreground md:text-2xl">
            I don&apos;t just write code — I build systems that think.
          </p>
          <p>
            I&apos;m a <span className="font-medium text-foreground">Backend AI Engineer</span>{" "}
            specialising in <span className="font-medium text-primary">production RAG pipelines</span> and
            LLM-powered applications. I design and ship scalable Python backends — REST APIs, AI agents,
            and intelligent chatbots — for live SaaS products across proptech and construction tech.
          </p>
          <p>
            Recent work includes RAG systems that answer questions over contracts and property documents
            with clause-level cited references, GPT-4o Vision document analysis, and end-to-end AI
            automation workflows — built on Django, FastAPI, and LangChain, deployed at scale.
          </p>
          <p>
            Ranked <span className="font-medium text-foreground">30th in Bangladesh</span> at ITEE Japan.
            Comfortable across the full stack, with a focus on turning LLMs into reliable,
            production-ready features.
          </p>
        </Reveal>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i}>
              <GlassCard className="flex h-full flex-col p-5">
                <div className="mb-6 flex items-start justify-between">
                  <s.icon className="text-muted-foreground/70" size={16} />
                </div>
                <p className="tnum mt-auto text-2xl font-semibold leading-tight tracking-tight text-foreground">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted-foreground">{s.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

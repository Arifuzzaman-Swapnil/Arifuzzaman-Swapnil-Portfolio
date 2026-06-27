import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import { Trophy, GraduationCap, Rocket, BrainCircuit } from "lucide-react";

const stats = [
  { icon: Trophy, value: "30th", label: "in Bangladesh — ITEE, Japan" },
  { icon: GraduationCap, value: "3.92", label: "CGPA / 4.00 — B.Sc. CSE" },
  { icon: Rocket, value: "6+", label: "live SaaS products shipped" },
  { icon: BrainCircuit, value: "GPT-4o · Claude · Gemini", label: "LLMs in production" },
];

const AboutSection = () => (
  <section id="about" className="relative flex min-h-full w-full items-center justify-center px-6 py-8 md:py-10">
    <SectionDecor />
    <div className="container mx-auto max-w-5xl">
      <SectionHeader index="01" tag="// about me" title="Who I Am" />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Bio */}
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p className="text-2xl font-semibold text-foreground">
            I don&apos;t just write code — I build systems that think.
          </p>
          <p>
            I&apos;m a <span className="font-semibold text-primary">Backend AI Engineer</span>{" "}
            specialising in <span className="font-semibold text-primary">production RAG pipelines</span>{" "}
            and <span className="font-semibold text-primary">LLM-powered applications</span>. I design and
            ship scalable Python backends — REST APIs, AI agents, and intelligent chatbots — for live SaaS
            products across <span className="text-foreground">proptech</span> and{" "}
            <span className="text-foreground">construction tech</span>.
          </p>
          <p>
            Recent work includes RAG systems that answer questions over contracts and property documents
            with <span className="text-primary">clause-level cited references</span>,{" "}
            <span className="text-primary">GPT-4o Vision</span> document analysis, and end-to-end AI
            automation workflows — built on{" "}
            <span className="text-foreground">Django, FastAPI, LangChain</span> and deployed at scale.
          </p>
          <p>
            Ranked <span className="font-semibold text-primary">30th in Bangladesh</span> at ITEE Japan —
            comfortable across the full stack, with a focus on turning LLMs into reliable,
            production-ready features.{" "}
            <span className="font-semibold text-foreground">An engineer who ships.</span>
          </p>
          <p className="font-medium text-primary">
            📌 Open to collaborations and opportunities in AI/ML engineering.
          </p>
        </Reveal>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i}>
              <GlassCard tilt className="h-full p-5">
                <s.icon className="mb-3 text-primary" size={24} />
                <p className="font-head text-xl font-bold leading-tight text-foreground md:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

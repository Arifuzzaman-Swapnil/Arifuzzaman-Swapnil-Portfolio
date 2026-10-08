import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import { Award, BookOpen, Trophy, Medal, Star, ScrollText, FlaskConical, Code, GraduationCap, Sparkles, FileText } from "lucide-react";

const featured = {
  value: "30th",
  title: "Rank in Bangladesh — ITEE, Japan (2024)",
  detail: "Among ~600,000 applicants",
};

const awards = [
  { icon: FileText, text: "Research Paper – IEEE CSDE 2026: “An End-to-End Deep Learning Framework for Animal Classification with Ensemble CNNs and Web Deployment” (co-author)" },
  { icon: Medal, text: "2nd Prize – IoT Project Showcase, BUBT (2023)" },
  { icon: Star, text: "5th Place – Senior Intra-University Competitive Programming Contest (BUBT)" },
  { icon: Code, text: "ICPC Regional Contest – Participated representing BUBT" },
  { icon: GraduationCap, text: "Dean's List – Recognized for academic excellence at BUBT" },
  { icon: Sparkles, text: "Merit Scholarship – Awarded for outstanding academic performance" },
  { icon: Award, text: "Best Project Award – Achieved for top semester project at BUBT" },
];

const certifications = [
  "Fullstack Laravel Developer – InteractiveCares",
  "Software Quality Controller – FastFlowUp",
  "Natural Language Processing – InnovativeSkillsBD",
];

const researchInterests = [
  "Artificial Intelligence", "Machine Learning", "Deep Learning",
  "Computer Vision", "Natural Language Processing", "CNN", "RAG", "Image Processing",
];

const AwardsSection = () => (
  <section id="awards" className="relative w-full px-6 py-20 md:py-28">
    <SectionDecor />
    <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
      <SectionHeader index="06" tag="// achievements" title="Awards & Certifications" />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Awards */}
        <Reveal>
          <GlassCard className="h-full p-6">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="icon-tile h-8 w-8">
                <Award size={15} />
              </div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">Awards</h3>
            </div>

            {/* Featured */}
            <div className="mb-4 flex items-center gap-4 rounded-xl border border-border bg-white/[0.02] p-4 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.05)]">
              <div className="flex flex-col items-center">
                <Trophy size={14} className="mb-1 text-primary" />
                <span className="tnum text-fade text-3xl font-semibold leading-none tracking-tight">
                  {featured.value}
                </span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-sm font-medium text-foreground">{featured.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{featured.detail}</p>
              </div>
            </div>

            <ul className="divide-y divide-border">
              {awards.map((a, i) => (
                <li key={i} className="flex items-start gap-3 py-2.5 text-sm text-muted-foreground first:pt-1 last:pb-0">
                  <a.icon size={14} className="mt-[3px] shrink-0 text-muted-foreground/80" />
                  {a.text}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        {/* Certifications */}
        <Reveal index={1}>
          <GlassCard className="h-full p-6">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="icon-tile h-8 w-8">
                <BookOpen size={15} />
              </div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((c, i) => {
                const [name, issuer] = c.split(" – ");
                return (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-border bg-white/[0.015] px-3 py-2.5 text-sm"
                  >
                    <ScrollText size={14} className="shrink-0 text-muted-foreground/80" />
                    <div className="min-w-0">
                      <p className="text-foreground">{name}</p>
                      {issuer && <p className="mt-0.5 text-xs text-muted-foreground">{issuer}</p>}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 border-t border-border pt-5">
              <h3 className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
                <FlaskConical size={14} className="text-muted-foreground" /> Research Interests
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {researchInterests.map((r) => (
                  <span key={r} className="chip !px-2.5 !font-sans !text-xs">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AwardsSection;

import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import { Award, BookOpen, Trophy, Medal, Star, ScrollText, FlaskConical, Code, GraduationCap, Sparkles } from "lucide-react";

const awards = [
  { icon: Trophy, text: "30th Rank (Bangladesh) – ITEE, Japan (2024) among ~600,000 applicants" },
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
  <section id="awards" className="relative flex min-h-full w-full items-center justify-center px-6 py-8 md:py-10">
    <SectionDecor />
    <div className="container mx-auto max-w-5xl">
      <SectionHeader index="06" tag="// achievements" title="Awards & Certifications" />

      <div className="mb-12 grid gap-6 lg:grid-cols-2">
        {/* Awards */}
        <Reveal>
          <GlassCard tilt tiltIntensity={4} className="h-full p-6">
            <div className="mb-5 flex items-center gap-2">
              <Award size={16} className="text-muted-foreground" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Awards</h3>
            </div>
            <ul className="space-y-3.5">
              {awards.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground">
                    <a.icon size={14} />
                  </span>
                  {a.text}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        {/* Certifications */}
        <Reveal index={1}>
          <GlassCard tilt tiltIntensity={4} className="h-full p-6">
            <div className="mb-5 flex items-center gap-2">
              <BookOpen size={16} className="text-muted-foreground" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3.5">
              {certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground">
                    <ScrollText size={14} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-border pt-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <FlaskConical size={15} className="text-muted-foreground" /> Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((r) => (
                  <span
                    key={r}
                    className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
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

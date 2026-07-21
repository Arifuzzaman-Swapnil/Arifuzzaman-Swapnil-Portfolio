import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    detail: "Software Engineering Major",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    year: "2021 – 2025",
    grade: "CGPA: 3.92 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Science College",
    year: "2018 – 2020",
    grade: "GPA: 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shaheed Police Smrity College",
    year: "2017 – 2018",
    grade: "GPA: 5.00 / 5.00",
  },
];

const EducationSection = () => (
  <section id="education" className="relative flex min-h-full w-full items-center justify-center px-6 py-8 md:py-10">
    <SectionDecor />
    <div className="container mx-auto max-w-4xl">
      <SectionHeader index="02" tag="// education" title="Academic Background" />

      <div className="relative space-y-5 before:absolute before:left-[27px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:block">
        {educationData.map((edu, i) => (
          <Reveal key={i} index={i}>
            <GlassCard className="p-5 md:p-6 md:pl-20">
              {/* Timeline node */}
              <div className="absolute left-[14px] top-6 hidden h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground ring-4 ring-background md:flex">
                <GraduationCap size={15} />
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-secondary p-2 text-muted-foreground md:hidden">
                  <GraduationCap size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-base font-semibold text-foreground md:text-lg">{edu.degree}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{edu.year}</span>
                  </div>
                  {edu.detail && <p className="text-sm text-muted-foreground">{edu.detail}</p>}
                  <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="tnum mt-2.5 inline-block rounded-md border border-border px-2 py-0.5 text-sm font-medium text-foreground">
                    {edu.grade}
                  </p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;

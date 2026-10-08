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
  <section id="education" className="relative w-full px-6 py-20 md:py-28">
    <SectionDecor />
    <div className="container mx-auto grid max-w-6xl 2xl:max-w-7xl gap-2 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeader index="02" tag="// education" title="Academic Background" />
      </div>

      <div className="relative space-y-5 before:absolute before:left-[27px] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent md:before:block">
        {educationData.map((edu, i) => (
          <Reveal key={i} index={i}>
            <GlassCard className="p-5 md:p-6 md:pl-20">
              {/* Timeline node */}
              <div className="absolute left-[14px] top-6 hidden h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground ring-4 ring-background md:flex">
                <GraduationCap size={15} />
              </div>
              <div className="flex items-start gap-3">
                <div className="icon-tile h-9 w-9 shrink-0 md:hidden">
                  <GraduationCap size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-base font-semibold text-foreground md:text-lg">{edu.degree}</h3>
                    <span className="chip tnum w-fit shrink-0">{edu.year}</span>
                  </div>
                  {edu.detail && <p className="text-sm text-muted-foreground">{edu.detail}</p>}
                  <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="tnum mt-3 inline-block rounded-md border border-border bg-secondary/70 px-2.5 py-1 text-sm font-medium text-foreground shadow-[inset_0_1px_0_hsl(0_0%_100%/0.05)]">
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

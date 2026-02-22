import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
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
  <section id="education" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <SectionHeader tag="// education" title="Academic Background" />
      <div className="space-y-6">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            className="bg-card-gradient border border-border rounded-lg p-6 shadow-card hover:border-glow transition-colors"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-primary/10 text-primary mt-1">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <span className="font-mono text-xs text-primary">{edu.year}</span>
                </div>
                {edu.detail && <p className="text-sm text-muted-foreground">{edu.detail}</p>}
                <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                <p className="text-sm font-semibold text-primary mt-1">{edu.grade}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;

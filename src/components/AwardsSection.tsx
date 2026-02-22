import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
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
  <section id="awards" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto max-w-4xl">
      <SectionHeader tag="// achievements" title="Awards & Certifications" />

      <div className="space-y-6 mb-12">
        {/* Awards */}
        <motion.div
          className="bg-card-gradient border border-border rounded-lg p-6 shadow-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-primary" />
            <h3 className="font-mono text-sm text-primary">Awards</h3>
          </div>
          <ul className="space-y-3">
            {awards.map((a, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <a.icon size={16} className="text-primary mt-0.5 shrink-0" /> {a.text}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="bg-card-gradient border border-border rounded-lg p-6 shadow-card"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-primary" />
            <h3 className="font-mono text-sm text-primary">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((c, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <ScrollText size={16} className="text-primary mt-0.5 shrink-0" /> {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Research Interests */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-mono text-sm text-primary mb-4 flex items-center justify-center gap-2"><FlaskConical size={16} /> Research Interests</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {researchInterests.map((r) => (
            <span
              key={r}
              className="px-4 py-1.5 text-xs rounded-full border border-glow text-primary bg-primary/5"
            >
              {r}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AwardsSection;

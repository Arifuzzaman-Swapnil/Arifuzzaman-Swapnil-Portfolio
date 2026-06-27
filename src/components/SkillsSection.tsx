import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import GlassCard from "./ui-custom/GlassCard";
import { SectionDecor } from "./ui-custom/SectionDecor";
import {
  BrainCircuit,
  Server,
  LayoutDashboard,
  Database,
  LineChart,
  Workflow,
  Cloud,
  Code2,
} from "lucide-react";

const skillCategories = [
  {
    icon: BrainCircuit,
    title: "AI & LLM Engineering",
    skills: ["RAG Pipelines", "LLM App Development", "OpenAI GPT-4o", "Anthropic Claude", "Google Gemini", "AI Agents", "Chatbots", "AI Calling Systems", "Prompt Engineering", "Embeddings & Vector Search", "LangChain", "FAISS", "ChromaDB", "Hugging Face"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["Python (Advanced)", "Django", "Django REST Framework", "FastAPI", "Flask", "Celery", "JWT Auth", "REST API Design", "Redis", "Scalable Architecture"],
  },
  {
    icon: LayoutDashboard,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase"],
  },
  {
    icon: LineChart,
    title: "ML & Data",
    skills: ["Data Preprocessing", "EDA", "Feature Engineering", "Model Training", "Model Evaluation", "Hyperparameter Tuning", "Transfer Learning", "Fine-Tuning", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "spaCy", "Pandas", "NumPy", "MoviePy"],
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    skills: ["n8n", "Zapier", "Make", "Activepieces", "CrewAI", "Flowise", "LangFlow", "API Automation", "Stripe", "Recall.ai", "Xero"],
  },
  {
    icon: Cloud,
    title: "Cloud / DevOps & Tools",
    skills: ["AWS", "AWS S3", "GCP", "Vercel", "Railway", "Render", "GitHub Actions", "Git", "VS Code", "Jupyter", "Google Colab", "Kaggle", "Postman"],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "C", "C++", "Java (OOP)", "PHP", "TypeScript", "Node.js"],
  },
];

const marquee = [
  "Python", "Django", "FastAPI", "RAG", "LangChain", "GPT-4o", "Claude", "Gemini",
  "React", "Next.js", "TypeScript", "Redis", "Celery", "PostgreSQL", "FAISS",
  "Hugging Face", "PyTorch", "TensorFlow", "Stripe", "AWS",
];

const SkillsSection = () => (
  <section id="skills" className="relative flex min-h-full w-full items-center justify-center px-6 py-8 md:py-10">
    <SectionDecor />
    <div className="container mx-auto max-w-6xl">
      <SectionHeader
        index="05"
        tag="// skills"
        title="Technical Proficiencies"
        subtitle="The stack I use to take LLMs from research to production."
      />

      {/* Marquee band */}
      <Reveal>
        <div className="group relative mb-8 overflow-hidden rounded-2xl border border-border bg-background/30 py-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
            {[...marquee, ...marquee].map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Categories */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} index={i % 3}>
            <GlassCard tilt tiltIntensity={5} className="h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cat.icon size={18} />
                </div>
                <h3 className="font-head text-sm font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground transition-colors hover:border-foreground/25 hover:bg-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

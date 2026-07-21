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

      {/* Categories */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} index={i % 3}>
            <GlassCard className="h-full p-5">
              <div className="mb-4 flex items-center gap-2.5">
                <cat.icon size={15} className="shrink-0 text-muted-foreground/70" />
                <h3 className="shrink-0 text-sm font-semibold text-foreground">{cat.title}</h3>
                <div className="rule flex-1" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
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

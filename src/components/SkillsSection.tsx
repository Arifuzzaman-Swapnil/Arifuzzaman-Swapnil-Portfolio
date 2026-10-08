import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
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
    core: ["RAG Pipelines", "OpenAI GPT-4o", "Anthropic Claude", "AI Agents", "LangChain"],
    skills: ["RAG Pipelines", "LLM App Development", "OpenAI GPT-4o", "Anthropic Claude", "Google Gemini", "AI Agents", "Chatbots", "AI Calling Systems", "Prompt Engineering", "Embeddings & Vector Search", "LangChain", "FAISS", "ChromaDB", "Hugging Face"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    core: ["Python (Advanced)", "Django REST Framework", "FastAPI", "Celery", "Redis"],
    skills: ["Python (Advanced)", "Django", "Django REST Framework", "FastAPI", "Flask", "Celery", "JWT Auth", "REST API Design", "Redis", "Scalable Architecture"],
  },
  {
    icon: LayoutDashboard,
    title: "Frontend",
    core: ["React", "TypeScript"],
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Databases",
    core: ["PostgreSQL"],
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase"],
  },
  {
    icon: LineChart,
    title: "ML & Data",
    core: ["PyTorch", "TensorFlow", "Scikit-learn"],
    skills: ["Data Preprocessing", "EDA", "Feature Engineering", "Model Training", "Model Evaluation", "Hyperparameter Tuning", "Transfer Learning", "Fine-Tuning", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "spaCy", "Pandas", "NumPy", "MoviePy"],
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    core: ["n8n", "Stripe"],
    skills: ["n8n", "Zapier", "Make", "Activepieces", "CrewAI", "Flowise", "LangFlow", "API Automation", "Stripe", "Recall.ai", "Xero"],
  },
  {
    icon: Cloud,
    title: "Cloud / DevOps & Tools",
    core: ["AWS", "Git"],
    skills: ["AWS", "AWS S3", "GCP", "Vercel", "Railway", "Render", "GitHub Actions", "Git", "VS Code", "Jupyter", "Google Colab", "Kaggle", "Postman"],
  },
  {
    icon: Code2,
    title: "Languages",
    core: ["Python", "TypeScript"],
    skills: ["Python", "C", "C++", "Java (OOP)", "PHP", "TypeScript", "Node.js"],
  },
];

/** Core skills first, the rest in their original order. */
const ordered = ({ skills, core }: { skills: string[]; core: string[] }) => [
  ...skills.filter((s) => core.includes(s)),
  ...skills.filter((s) => !core.includes(s)),
];

const CHIP = "chip !px-2.5 !py-1 !font-sans !text-xs";
const CORE_CHIP = `${CHIP} !border-white/[0.14] !bg-white/[0.06] !text-foreground`;
const MUTED_CHIP = `${CHIP} hover:!border-white/15 hover:text-foreground`;

const SkillsSection = () => (
  <section id="skills" className="relative w-full px-6 py-20 md:py-28">
    <SectionDecor />
    <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
      <SectionHeader
        index="05"
        tag="// skills"
        title="Technical Proficiencies"
        subtitle="The stack I use to take LLMs from research to production."
      />

      {/* Legend */}
      <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-muted-foreground md:justify-end">
        <span className="flex items-center gap-2">
          <span className="h-3 w-5 rounded-[4px] border border-white/[0.14] bg-white/[0.06]" /> Core stack
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-5 rounded-[4px] border border-border bg-white/[0.02]" /> Also used
        </span>
      </div>

      {/* Spec sheet: one row per category */}
      <div className="surface relative rounded-2xl">
        {skillCategories.map((cat, i) => (
          <Reveal
            key={cat.title}
            index={i}
            className="border-t border-border transition-colors first:rounded-t-2xl first:border-t-0 last:rounded-b-2xl hover:bg-white/[0.015]"
          >
            <div className="grid gap-4 px-5 py-5 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-8 md:px-7 md:py-6">
              <div className="flex items-center gap-3 md:items-start">
                <div className="icon-tile h-9 w-9 shrink-0">
                  <cat.icon size={16} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-tight text-foreground">{cat.title}</h3>
                  <p className="tnum mt-1 font-mono text-[11px] text-muted-foreground/70">
                    {cat.skills.length} skills
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap content-start gap-1.5">
                {ordered(cat).map((skill) => (
                  <span key={skill} className={cat.core.includes(skill) ? CORE_CHIP : MUTED_CHIP}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

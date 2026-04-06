import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java (OOP)", "Python", "PHP", "TypeScript"],
  },
  {
    title: "Web",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Laravel", "Flask", "Django", "FastAPI", "REST API"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "SQLite (Django)"],
  },
  {
    title: "Tools",
    skills: ["Git", "Google Colab", "Jupyter Notebook", "Kaggle", "VS Code", "Google Antigravity"],
  },
  {
    title: "Model Development",
    skills: ["Dataset Preparation", "EDA", "Data Preprocessing", "Feature Engineering", "Model Training", "Hyperparameter Tuning", "Model Evaluation", "Transfer Learning", "Fine-Tuning"],
  },
  {
    title: "AI Automation",
    skills: ["AI Agents", "AI Chatbots", "AI Calling Systems", "API Automation", "n8n", "Zapier", "Make", "CrewAI", "Flowise", "LangFlow", "Activepieces"],
  },
  {
    title: "AI / ML Libraries",
    skills: [
      "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV",
      "Hugging Face", "NLTK", "spaCy", "Pandas", "NumPy",
      "MoviePy", "LangChain", "FAISS", "ChromaDB", "RAG",
    ],
  },
  {
    title: "Cloud / DevOps",
    skills: ["AWS", "GCP", "Vercel", "Railway", "Render", "GitHub Actions"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <SectionHeader tag="// skills" title="Technical Proficiencies" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-card-gradient border border-border rounded-lg p-6 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="font-mono text-sm text-primary mb-4">{`{ ${cat.title} }`}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border hover:border-glow transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

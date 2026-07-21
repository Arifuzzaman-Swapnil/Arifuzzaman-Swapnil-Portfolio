import { Suspense, lazy, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, FileDown } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

const CV_URL = "/Md_Arifuzzaman_Swapnil_CV.pdf";

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    setEnable3D(!reduce && supportsWebGL());
  }, [reduce]);

  return (
    <section
      id="home"
      className="relative flex min-h-full w-full items-center px-6 py-10"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="max-w-xl"
        >
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Backend AI Engineer
            </span>
            <span className="h-px w-12 bg-border" />
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-7xl">
            Md Arifuzzaman
            <br />
            Swapnil
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            I build <span className="font-medium text-foreground">production RAG pipelines</span> and{" "}
            <span className="font-medium text-foreground">LLM-powered applications</span> — scalable
            Python backends and AI features for live SaaS products across proptech and
            construction tech.
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Dhaka, Bangladesh
            </span>
            <span className="hidden text-border sm:inline">·</span>
            <a
              href="mailto:md.arifuzzamanswapnil@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail size={14} /> md.arifuzzamanswapnil@gmail.com
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CV_URL}
              download
              className="press inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <FileDown size={16} /> Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/arifuzzaman-swapnil"
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-10 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/Arifuzzaman-Swapnil"
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-10 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for AI/ML opportunities
          </p>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-xs"
        >
          {/* Subtle calm 3D accent behind the photo */}
          {enable3D && (
            <div className="pointer-events-none absolute -inset-6 -z-10 opacity-40">
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
            </div>
          )}

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card ring-1 ring-inset ring-white/[0.04]">
            <img
              src={profileImg}
              alt="Md Arifuzzaman Swapnil"
              className="w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

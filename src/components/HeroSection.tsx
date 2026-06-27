import { Suspense, lazy, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, FileDown } from "lucide-react";
import profileImg from "@/assets/profile.png";
import heroBg from "@/assets/hero-bg.jpg";
import TiltCard from "@/components/ui-custom/TiltCard";

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

const badges = [
  { label: "Python", className: "left-[-12%] top-[14%]" },
  { label: "RAG", className: "right-[-10%] top-[26%]" },
  { label: "LLM Agents", className: "left-[-16%] bottom-[26%]" },
  { label: "Django", className: "right-[-14%] bottom-[16%]" },
  { label: "FastAPI", className: "left-[6%] top-[-7%]" },
];

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
      className="relative flex min-h-full w-full items-center overflow-hidden bg-hero-gradient"
    >
      {/* 3D / fallback backdrop */}
      <div className="absolute inset-0 -z-10">
        {enable3D ? (
          <Suspense
            fallback={
              <div className="h-full w-full bg-[radial-gradient(60%_60%_at_70%_30%,hsl(175_82%_52%/0.12),transparent_70%)]" />
            }
          >
            <HeroScene />
          </Suspense>
        ) : (
          <>
            <img
              src={heroBg}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,hsl(265_85%_66%/0.14),transparent_70%)]" />
          </>
        )}
        {/* readability scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(70%_70%_at_50%_40%,#000,transparent)]" />
      </div>

      {/* Engineering corner frame + readouts */}
      <div aria-hidden className="pointer-events-none absolute bottom-5 left-4 right-4 top-5 z-0 md:left-8 md:right-8 md:top-7">
        <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-primary/30" />
        <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/30" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/30" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-primary/30" />
        <span className="absolute left-9 top-1 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 md:block">
          // backend-ai-engineer
        </span>
        <span className="absolute right-9 top-1 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 md:block">
          23.81°N · 90.41°E
        </span>
        <span className="absolute bottom-1 left-9 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 md:block">
          sys / online
        </span>
      </div>

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-center lg:text-left"
        >
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
            &lt;hello world /&gt;
          </span>

          <h1 className="font-head text-5xl font-bold leading-[1.05] md:text-7xl">
            Md Arifuzzaman
            <br />
            <span className="text-aurora animate-aurora">Swapnil</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground md:text-2xl lg:mx-0">
            Backend AI Engineer
            <span className="text-primary"> · </span>
            Full-Stack Python Developer
            <span className="text-primary"> · </span>
            AI Engineer
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground/80 md:text-base lg:mx-0">
            I build production RAG pipelines and LLM-powered features — turning
            cutting-edge AI into reliable products that ship.
          </p>

          {/* Contact row */}
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start">
            {[
              { icon: MapPin, text: "Ibrahimpur, Dhaka" },
              {
                icon: Mail,
                text: "md.arifuzzamanswapnil@gmail.com",
                href: "mailto:md.arifuzzamanswapnil@gmail.com",
              },
              { icon: Phone, text: "+880 1722-569839", href: "tel:+8801722569839" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href || undefined}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <item.icon size={15} className="text-primary" />
                {item.text}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href={CV_URL}
              download
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <FileDown size={18} /> Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/arifuzzaman-swapnil"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-foreground transition-colors hover:text-foreground"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/Arifuzzaman-Swapnil"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-foreground transition-colors hover:text-foreground"
            >
              <Github size={18} /> GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Right: photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="perspective relative mx-auto w-full max-w-sm"
        >
          {/* Floating tech badges */}
          {badges.map((b, i) => (
            <motion.span
              key={b.label}
              className={`glass absolute z-20 hidden rounded-full px-3 py-1.5 font-mono text-xs text-primary shadow-glow sm:block ${b.className}`}
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {b.label}
            </motion.span>
          ))}

          <TiltCard intensity={12} className="rounded-[1.75rem]">
            <div className="glow-ring glass-strong relative overflow-hidden rounded-[1.75rem] p-3">
              {/* aurora wash behind the photo */}
              <div className="absolute inset-0 bg-[conic-gradient(from_140deg_at_50%_50%,hsl(175_82%_52%/0.18),hsl(265_85%_66%/0.18),transparent_70%)]" />
              <div className="relative overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-secondary/40 to-background/60">
                <img
                  src={profileImg}
                  alt="Md Arifuzzaman Swapnil"
                  className="relative z-10 mx-auto w-full max-w-[320px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                  loading="eager"
                />
                {/* base glow under the figure */}
                <div className="absolute inset-x-6 bottom-0 z-0 h-24 rounded-full bg-primary/30 blur-2xl" />
              </div>
            </div>
          </TiltCard>

          {/* status chip */}
          <div className="glass absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground shadow-glow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to AI/ML opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

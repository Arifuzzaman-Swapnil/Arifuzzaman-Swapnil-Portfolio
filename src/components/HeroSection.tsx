import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, FileDown, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.png";
import bannerLg from "@/assets/hero-banner.webp";
import bannerSm from "@/assets/hero-banner-sm.webp";

const CV_URL = "/Md_Arifuzzaman_Swapnil_CV.pdf";

const ease = [0.22, 1, 0.36, 1] as const;

// Fade all four banner edges into the page (intersection of two gradients)
const BANNER_MASK = {
  maskImage:
    "linear-gradient(to right, transparent 0%, #000 38%, #000 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 70%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, #000 38%, #000 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 70%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
} as const;

const heroStats = [
  { value: "30th", label: "ITEE Japan" },
  { value: "3.92", label: "CGPA / 4.00" },
  { value: "6+", label: "SaaS shipped" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] w-full items-center overflow-hidden px-6 py-16 md:py-20 lg:pb-44 lg:pt-6"
    >
      <div className="container relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 2xl:max-w-7xl">
        {/* Desktop banner. Sized in rem and pinned to the content container (not the viewport),
            so the composition stays exactly as at 100% when the browser zooms in or out.
            Shifted so the head lines up with the top of the text; edges masked into the page. */}
        <img
          src={bannerLg}
          srcSet={`${bannerSm} 960w, ${bannerLg} 1671w`}
          sizes="60rem"
          alt=""
          aria-hidden
          fetchPriority="high"
          style={BANNER_MASK}
          className="pointer-events-none absolute right-0 top-0 -z-10 hidden aspect-[1671/941] h-[40rem] max-w-none -translate-y-[14%] translate-x-[10%] object-cover lg:block xl:h-[46rem] 2xl:h-[50rem]"
        />
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="max-w-2xl lg:relative lg:top-10 lg:max-w-xl xl:max-w-2xl"
        >
          <p className="mb-7 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-white/[0.02] py-1 pl-2.5 pr-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground shadow-[inset_0_1px_0_hsl(0_0%_100%/0.04)]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Backend AI Engineer
            <span className="hidden text-border sm:inline">/</span>
            <span className="hidden sm:inline">Full-Stack Python</span>
          </p>

          <h1 className="text-fade pb-2 text-5xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl xl:text-7xl 2xl:text-[5.5rem]">
            Md Arifuzzaman
            <br />
            Swapnil
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg 2xl:max-w-2xl 2xl:text-xl">
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
            <a href={CV_URL} download className="btn-primary">
              <FileDown size={16} /> Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/arifuzzaman-swapnil"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/Arifuzzaman-Swapnil"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-500/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for AI/ML roles
          </p>

          {/* Stat strip */}
          <dl className="mt-5 grid max-w-md 2xl:max-w-lg grid-cols-3 divide-x divide-border border-t border-border pt-5">
            {heroStats.map((s) => (
              <div key={s.label} className="px-3 first:pl-0 last:pr-0 sm:px-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="tnum text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {s.value}
                </dd>
                <dd className="mt-0.5 whitespace-nowrap text-[11px] text-muted-foreground sm:text-xs">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Mobile / tablet: the framed portrait */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="relative isolate mx-auto w-full max-w-[19rem] lg:hidden"
        >
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,hsl(217_91%_60%/0.22),transparent)] blur-2xl" />
          <div className="surface relative rounded-[1.4rem] p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
            <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
              <img src={profileImg} alt="Md Arifuzzaman Swapnil" className="w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded-full border border-border bg-popover/95 px-3.5 py-1.5 text-xs text-muted-foreground shadow-[0_12px_32px_-12px_rgba(0,0,0,0.9)]">
            <Sparkles size={12} className="text-primary" />
            Now @ <span className="font-medium text-foreground">Intelleqt AI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

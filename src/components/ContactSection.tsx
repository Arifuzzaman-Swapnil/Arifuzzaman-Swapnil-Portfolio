import { Mail, LinkedinIcon, GithubIcon, FileDown, Globe, ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import Reveal from "./ui-custom/Reveal";
import { SectionDecor } from "./ui-custom/SectionDecor";

const CV_URL = "/Md_Arifuzzaman_Swapnil_CV.pdf";

const socials = [
  { icon: Mail, href: "mailto:md.arifuzzamanswapnil@gmail.com", title: "Email" },
  { icon: FaWhatsapp, href: "https://wa.me/8801722569839", title: "WhatsApp", external: true },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/arifuzzaman-swapnil", title: "LinkedIn", external: true },
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100014180013753", title: "Facebook", external: true },
  { icon: GithubIcon, href: "https://github.com/Arifuzzaman-Swapnil", title: "GitHub", external: true },
];

const ContactSection = () => (
  <section id="contact" className="relative flex min-h-full w-full items-center justify-center px-6 py-8 md:py-10">
    <SectionDecor />
    <div className="container mx-auto max-w-3xl text-center">
      <SectionHeader index="07" tag="// contact" title="Let's Build Something" />

      <Reveal>
        <div className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,hsl(175_82%_52%/0.12),transparent_70%)]" />
          <h3 className="relative mx-auto max-w-2xl font-head text-2xl font-bold md:text-3xl">
            Have an AI product to ship?{" "}
            <span className="text-aurora animate-aurora">Let&apos;s talk.</span>
          </h3>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Backend AI Engineer specialising in production RAG pipelines and LLM-powered products.
            Open to collaborations and opportunities in AI/ML engineering.
          </p>

          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:md.arifuzzamanswapnil@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Mail size={18} /> Get in touch
            </a>
            <a
              href={CV_URL}
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-foreground transition-colors hover:text-foreground"
            >
              <FileDown size={18} /> Download CV
            </a>
          </div>

          <div className="relative mt-8 flex justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="glass rounded-xl p-2.5 text-muted-foreground transition-colors hover:text-foreground"
                title={s.title}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal index={1}>
        <div className="mt-8 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Md Arifuzzaman Swapnil. All rights reserved.</span>
          <a
            href="https://arifuzzaman-swapnil-portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Globe size={13} /> arifuzzaman-swapnil-portfolio.com
            <ArrowUpRight size={12} />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ContactSection;

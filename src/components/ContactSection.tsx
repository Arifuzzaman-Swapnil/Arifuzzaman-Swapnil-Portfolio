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
  <section id="contact" className="relative w-full px-6 pb-10 pt-20 md:pt-28">
    <SectionDecor />
    <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader index="07" tag="// contact" title="Let's Build Something" />

        <Reveal>
          <div className="surface relative rounded-2xl p-8 md:p-12">
            {/* Soft static spotlight from the top edge */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
              <div className="absolute inset-x-0 -top-24 mx-auto h-48 w-[80%] rounded-full bg-[radial-gradient(closest-side,hsl(217_91%_60%/0.16),transparent)] blur-2xl" />
              <span className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>

            <div className="relative">
              <h3 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                <span className="text-fade">Have an AI product to ship?</span>{" "}
                <span className="text-primary">Let&apos;s talk.</span>
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Backend AI Engineer specialising in production RAG pipelines and LLM-powered products.
                Open to collaborations and opportunities in AI/ML engineering.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="mailto:md.arifuzzamanswapnil@gmail.com" className="btn-primary">
                  <Mail size={16} /> Get in touch
                </a>
                <a href={CV_URL} download className="btn-ghost">
                  <FileDown size={16} /> Download CV
                </a>
              </div>

              <div className="rule-fade mx-auto mt-9 max-w-md" />

              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    className="press inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.02] px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-white/15 hover:bg-white/[0.06] hover:text-foreground"
                  >
                    <s.icon size={14} />
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="mt-20 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
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
      </footer>
    </div>
  </section>
);

export default ContactSection;

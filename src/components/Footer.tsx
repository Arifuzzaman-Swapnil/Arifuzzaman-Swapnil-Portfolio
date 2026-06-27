import { Mail, LinkedinIcon, GithubIcon, FileDown, Globe, ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

const CV_URL = "/Md_Arifuzzaman_Swapnil_CV.pdf";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
];

const socials = [
  { icon: Mail, href: "mailto:md.arifuzzamanswapnil@gmail.com", title: "Email" },
  { icon: FaWhatsapp, href: "https://wa.me/8801722569839", title: "WhatsApp", external: true },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/arifuzzaman-swapnil", title: "LinkedIn", external: true },
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100014180013753", title: "Facebook", external: true },
  { icon: GithubIcon, href: "https://github.com/Arifuzzaman-Swapnil", title: "GitHub", external: true },
];

const Footer = () => (
  <footer className="relative border-t border-border">
    <div className="container mx-auto max-w-6xl px-6 py-16">
      {/* CTA band */}
      <div className="glass-strong glow-ring mb-14 overflow-hidden rounded-3xl p-8 text-center md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,hsl(175_82%_52%/0.12),transparent_70%)]" />
        <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-primary">// let&apos;s build</p>
        <h2 className="relative mx-auto mt-3 max-w-2xl font-head text-3xl font-bold md:text-4xl">
          Have an AI product to ship?{" "}
          <span className="text-aurora animate-aurora">Let&apos;s talk.</span>
        </h2>
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
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {/* Brand */}
        <div>
          <a href="#home" className="font-mono text-lg font-bold text-primary">
            {"<AS"}
            <span className="text-violet">{" /"}</span>
            {">"}
          </a>
          <h3 className="mt-3 font-head text-2xl font-bold">
            Md Arifuzzaman <span className="text-aurora">Swapnil</span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Backend AI Engineer · Full-Stack Python Developer · AI Engineer
          </p>
          <a
            href="https://arifuzzaman-swapnil-portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Globe size={15} /> arifuzzaman-swapnil-portfolio.com
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">Connect</h4>
          <div className="mb-4 flex gap-3">
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
          <a
            href="mailto:md.arifuzzamanswapnil@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            md.arifuzzamanswapnil@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 md:flex-row">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Md Arifuzzaman Swapnil. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">{"// built with passion & AI"}</p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

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
  <footer className="border-t border-border bg-card-gradient">
    <div className="container mx-auto max-w-5xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <a href="#" className="font-mono text-primary font-bold text-lg">
            {"<AS />"}
          </a>
          <h3 className="text-2xl font-bold font-display mt-3">
            Md Arifuzzaman{" "}
            <span className="text-gradient">Swapnil</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Backend AI Engineer &bull; Full Stack Python Developer &bull; AI Developer
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
            Connect
          </h4>
          <div className="flex gap-3 mb-4">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-primary hover:border-glow border border-transparent transition-all"
                title={s.title}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
          <a
            href="mailto:md.arifuzzamanswapnil@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            md.arifuzzamanswapnil@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Md Arifuzzaman Swapnil. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {"// built with passion"}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

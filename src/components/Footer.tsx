import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="container mx-auto max-w-4xl text-center">
      <p className="font-mono text-primary text-sm mb-4">{"// let's connect"}</p>
      <div className="flex justify-center gap-6 mb-6">
        <a href="mailto:md.arifuzzamanswapnil@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" title="Email">
          <Mail size={20} />
        </a>
        <a href="https://wa.me/8801722569839" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="WhatsApp">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.linkedin.com/in/arifuzzaman-swapnil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
          <LinkedinIcon size={20} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100014180013753" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Facebook">
          <FaFacebookF size={20} />
        </a>
        <a href="https://github.com/Arifuzzaman-Swapnil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="GitHub">
          <GithubIcon size={20} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2025 Md Arifuzzaman Swapnil. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

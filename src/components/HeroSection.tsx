import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            &lt;hello world /&gt;
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">
            Md Arifuzzaman{" "}
            <span className="text-gradient">Swapnil</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-display">
            Backend AI Engineer • Full Stack Python Developer • AI Developer
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: MapPin, text: "Ibrahimpur, Dhaka" },
            { icon: Mail, text: "md.arifuzzamanswapnil@gmail.com", href: "mailto:md.arifuzzamanswapnil@gmail.com" },
            { icon: Phone, text: "+880 1722-569839" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href || "#"}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon size={16} className="text-primary" />
              {item.text}
            </a>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/arifuzzaman-swapnil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/Arifuzzaman-Swapnil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-glow text-foreground hover:bg-secondary transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

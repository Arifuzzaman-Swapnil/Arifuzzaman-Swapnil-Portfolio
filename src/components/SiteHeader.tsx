import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Menu, X } from "lucide-react";

const CV_URL = "/Md_Arifuzzaman_Swapnil_CV.pdf";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

/** Tracks whether the page has scrolled and which section sits under the header. */
const useScrollSpy = () => {
  const [active, setActive] = useState(NAV_ITEMS[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 8);

      const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }
      // Last section whose top has passed ~35% of the viewport
      const line = window.innerHeight * 0.35;
      let current = NAV_ITEMS[0].id;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { active, scrolled };
};

const SiteHeader = () => {
  const { active, scrolled } = useScrollSpy();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-40 px-6 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled || open ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex max-w-6xl 2xl:max-w-7xl items-center justify-between py-3">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="icon-tile h-7 w-7 rounded-lg font-mono text-[11px] font-medium tracking-normal text-foreground">
            AS
          </span>
          <span>
            Md Arifuzzaman <span className="text-muted-foreground">Swapnil</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 rounded-xl border border-border bg-white/[0.015] p-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === active;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg border border-white/[0.07] bg-secondary shadow-[inset_0_1px_0_hsl(0_0%_100%/0.06)]"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={CV_URL} download className="btn-primary !hidden !h-9 !px-4 sm:!inline-flex">
            <FileDown size={15} /> Résumé
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-lg p-1.5 text-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Bottom hairline, shown once the page scrolls */}
      <div
        className={`rule-fade absolute inset-x-0 bottom-0 transition-opacity duration-300 ${
          scrolled || open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-x-0 top-full z-50 border-b border-border bg-popover px-4 py-2 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)] lg:hidden"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-left text-sm transition-colors ${
                  item.id === active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="font-mono text-xs text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            ))}
            <a
              href={CV_URL}
              download
              onClick={() => setOpen(false)}
              className="btn-primary mb-1 mt-1 w-full justify-center"
            >
              <FileDown size={15} /> Download Résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;

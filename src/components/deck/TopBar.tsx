import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Menu, X } from "lucide-react";
import { useDeck } from "./deckContext";

const CV_URL = "/Md_Arifuzzaman_Swapnil_CV.pdf";

const TopBar = () => {
  const { pages, page, goTo } = useDeck();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 shrink-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <button onClick={() => goTo(0)} className="font-mono text-lg font-bold text-primary">
          {"<AS"}
          <span className="text-violet">{" /"}</span>
          {">"}
        </button>

        {/* Desktop page nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {pages.map((p, i) => {
            const active = i === page;
            return (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="topbar-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10 ring-1 ring-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {p.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CV_URL}
            download
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04] sm:inline-flex"
          >
            <FileDown size={15} /> Résumé
          </a>
          <button
            aria-label="Open page menu"
            className="rounded-lg p-1.5 text-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet page list */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="glass-strong absolute inset-x-4 top-full z-50 overflow-hidden rounded-2xl p-2 lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {pages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  goTo(i);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  i === page ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.label}
              </button>
            ))}
            <a
              href={CV_URL}
              download
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <FileDown size={15} /> Download Résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopBar;

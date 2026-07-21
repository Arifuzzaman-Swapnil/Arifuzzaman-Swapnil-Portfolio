import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Menu, X } from "lucide-react";
import { useDeck } from "./deckContext";

const CV_URL = "/Md_Arifuzzaman_Swapnil_CV.pdf";

const TopBar = () => {
  const { pages, page, goTo } = useDeck();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 shrink-0 border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <button
          onClick={() => goTo(0)}
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          Md Arifuzzaman <span className="text-muted-foreground">Swapnil</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {pages.map((p, i) => {
            const active = i === page;
            return (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                className={`relative px-3 py-1.5 text-sm transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-[15px] h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CV_URL}
            download
            className="press hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            <FileDown size={15} /> Résumé
          </a>
          <button
            aria-label="Open menu"
            className="rounded-lg p-1.5 text-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-x-0 top-full z-50 border-b border-border bg-card px-5 py-2 lg:hidden"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            {pages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  goTo(i);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-md px-2 py-2.5 text-left text-sm transition-colors ${
                  i === page ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="font-mono text-xs text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.label}
              </button>
            ))}
            <a
              href={CV_URL}
              download
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground"
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

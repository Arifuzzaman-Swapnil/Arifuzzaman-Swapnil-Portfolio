import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDeck } from "./deckContext";

const pad = (n: number) => String(n).padStart(2, "0");

const PagerBar = () => {
  const { pages, page, count, goTo, next, prev } = useDeck();
  const atStart = page === 0;
  const atEnd = page === count - 1;

  return (
    <footer className="relative z-40 shrink-0 px-3 pb-4 pt-1 sm:pb-5">
      <div className="mx-auto flex max-w-2xl items-center gap-1.5 rounded-2xl border border-white/10 bg-background/40 px-1.5 py-1.5 shadow-card backdrop-blur-xl sm:gap-3 sm:px-2.5 sm:py-2">
        {/* Previous */}
        <button
          onClick={prev}
          disabled={atStart}
          aria-label="Previous page"
          className="group flex shrink-0 items-center gap-2 rounded-xl px-2.5 py-2 text-sm transition-[opacity,background-color] hover:bg-foreground/[0.05] disabled:pointer-events-none disabled:opacity-25 sm:px-3"
        >
          <ChevronLeft
            size={18}
            className="shrink-0 text-primary transition-transform group-hover:-translate-x-0.5"
          />
          <span className="hidden min-w-0 flex-col text-left leading-tight sm:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              Prev
            </span>
            <span className="truncate text-xs font-medium">{atStart ? "—" : pages[page - 1].label}</span>
          </span>
        </button>

        {/* Center — section + progress segments */}
        <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
          <div className="flex items-baseline gap-2 font-mono text-[11px] tracking-wide">
            <span className="text-primary">{pad(page + 1)}</span>
            <span className="text-muted-foreground/50">/ {pad(count)}</span>
            <span className="hidden text-muted-foreground sm:inline">·</span>
            <span className="hidden font-head text-xs font-semibold text-foreground sm:inline">
              {pages[page].label}
            </span>
          </div>
          <div className="flex w-full max-w-[260px] items-center gap-1">
            {pages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.label}`}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  i === page
                    ? "bg-primary shadow-glow"
                    : i < page
                      ? "bg-primary/60"
                      : "bg-foreground/15 hover:bg-foreground/35"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={next}
          disabled={atEnd}
          aria-label="Next page"
          className="group flex shrink-0 items-center gap-2 rounded-xl px-2.5 py-2 text-sm transition-[opacity,background-color] hover:bg-foreground/[0.05] disabled:pointer-events-none disabled:opacity-25 sm:px-3"
        >
          <span className="hidden min-w-0 flex-col text-right leading-tight sm:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              Next
            </span>
            <span className="truncate text-xs font-medium">{atEnd ? "—" : pages[page + 1].label}</span>
          </span>
          <ChevronRight
            size={18}
            className="shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </footer>
  );
};

export default PagerBar;

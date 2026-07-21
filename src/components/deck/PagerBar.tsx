import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDeck } from "./deckContext";

const pad = (n: number) => String(n).padStart(2, "0");

const PagerBar = () => {
  const { pages, page, count, next, prev } = useDeck();
  const atStart = page === 0;
  const atEnd = page === count - 1;
  const progress = ((page + 1) / count) * 100;

  return (
    <footer className="relative z-40 shrink-0 border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        {/* Previous */}
        <button
          onClick={prev}
          disabled={atStart}
          aria-label="Previous page"
          className="press group flex shrink-0 items-center gap-1.5 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          <span className="hidden underline-offset-4 group-hover:underline sm:inline">
            {atStart ? "Previous" : pages[page - 1].label}
          </span>
          <span className="sm:hidden">Prev</span>
        </button>

        {/* Center — counter + slim progress + keyboard hint */}
        <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="tnum font-mono text-xs text-muted-foreground">
              <span className="text-foreground">{pad(page + 1)}</span> / {pad(count)}
            </span>
            <span className="hidden items-center gap-1 font-mono text-[10px] text-muted-foreground/60 md:flex">
              <kbd className="rounded border border-border px-1 py-px">←</kbd>
              <kbd className="rounded border border-border px-1 py-px">→</kbd>
            </span>
          </div>
          <div className="h-0.5 w-full max-w-[220px] overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Next */}
        <button
          onClick={next}
          disabled={atEnd}
          aria-label="Next page"
          className="press group flex shrink-0 items-center gap-1.5 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
        >
          <span className="hidden underline-offset-4 group-hover:underline sm:inline">
            {atEnd ? "Contact" : pages[page + 1].label}
          </span>
          <span className="sm:hidden">Next</span>
          <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </footer>
  );
};

export default PagerBar;

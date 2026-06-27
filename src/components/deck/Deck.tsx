import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DeckContext, type DeckPage } from "./deckContext";
import TopBar from "./TopBar";
import PagerBar from "./PagerBar";

interface DeckProps {
  pages: (DeckPage & { node: ReactNode })[];
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? "-100%" : "100%", opacity: 0 }),
};

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const WHEEL_COOLDOWN = 700;

const Deck = ({ pages }: DeckProps) => {
  const reduce = useReducedMotion();
  const count = pages.length;
  const [[page, direction], setState] = useState<[number, number]>([0, 0]);

  const goTo = useCallback(
    (i: number) =>
      setState(([cur]) => {
        const clamped = Math.max(0, Math.min(count - 1, i));
        return clamped === cur ? [cur, direction] : [clamped, clamped > cur ? 1 : -1];
      }),
    [count, direction]
  );
  const next = useCallback(
    () => setState(([cur]) => (cur < count - 1 ? [cur + 1, 1] : [cur, 1])),
    [count]
  );
  const prev = useCallback(
    () => setState(([cur]) => (cur > 0 ? [cur - 1, -1] : [cur, -1])),
    []
  );

  // Keyboard — ANY key advances to the next page; a few keys go back / jump.
  // Browser shortcuts (Ctrl/Cmd/Alt combos, F-keys), modifier keys, typing in
  // fields, and activating a focused button/link are all left untouched.
  useEffect(() => {
    const BACK = ["ArrowLeft", "ArrowUp", "PageUp", "Backspace"];
    const IGNORE = [
      "Shift", "Control", "Alt", "Meta", "CapsLock", "Tab", "Escape",
      "ContextMenu", "NumLock", "ScrollLock", "Pause", "Insert", "PrintScreen",
      "Dead", "Unidentified",
    ];
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return; // one press = one page (no holding to spam)
      if (e.ctrlKey || e.metaKey || e.altKey) return; // don't hijack shortcuts
      const k = e.key;
      if (IGNORE.includes(k)) return;
      if (/^F\d{1,2}$/.test(k)) return; // F1–F12

      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      // Let Enter/Space activate a focused button or link instead of paging
      const onControl = !!t?.closest?.("button, a, [role='button']");
      if (onControl && (k === "Enter" || k === " " || k === "Spacebar")) return;

      e.preventDefault();
      if (k === "Home") goTo(0);
      else if (k === "End") goTo(count - 1);
      else if (BACK.includes(k)) prev();
      else next(); // any other key → next page
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, count]);

  // Wheel paging — but let the panel scroll its own overflow first
  const scrollRef = useRef<HTMLDivElement>(null);
  const wheelLock = useRef(false);
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const el = scrollRef.current;
      if (!el) return;
      const dy = e.deltaY;
      if (Math.abs(dy) < 4) return;
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      const canScroll = el.scrollHeight > el.clientHeight + 1;
      // If inner content can absorb the scroll, let it.
      if (canScroll && ((dy > 0 && !atBottom) || (dy < 0 && !atTop))) return;
      if (wheelLock.current) return;
      wheelLock.current = true;
      window.setTimeout(() => (wheelLock.current = false), WHEEL_COOLDOWN);
      if (dy > 0) next();
      else prev();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  // Touch — horizontal swipe pages; vertical scrolls inner content
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      if (dx < 0) next();
      else prev();
    }
  };

  const meta = useMemo<DeckPage[]>(() => pages.map(({ id, label }) => ({ id, label })), [pages]);
  const ctx = useMemo(
    () => ({ page, count, pages: meta, goTo, next, prev }),
    [page, count, meta, goTo, next, prev]
  );

  const variants = reduce ? fadeVariants : slideVariants;

  return (
    <DeckContext.Provider value={ctx}>
      <div className="flex h-[100dvh] w-full flex-col overflow-hidden">
        <TopBar />

        <div
          className="relative min-h-0 flex-1"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              ref={scrollRef}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={
                reduce
                  ? { duration: 0.25 }
                  : {
                      x: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.55 },
                      opacity: { duration: 0.35 },
                    }
              }
              className="absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain"
            >
              {pages[page].node}
            </motion.div>
          </AnimatePresence>
        </div>

        <PagerBar />
      </div>
    </DeckContext.Provider>
  );
};

export default Deck;

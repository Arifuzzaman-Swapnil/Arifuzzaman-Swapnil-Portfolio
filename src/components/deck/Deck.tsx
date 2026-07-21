import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { DeckContext, type DeckPage } from "./deckContext";
import TopBar from "./TopBar";

interface DeckProps {
  pages: (DeckPage & { node: ReactNode })[];
}

/** Wheel gesture is considered finished after this quiet period. Long enough
 *  that casual notch-by-notch mouse scrolling keeps accumulating. */
const IDLE_MS = 420;
/** Scroll/drag distance (× viewport height) for a full pull. */
const PULL_FACTOR = 0.9;
/** On a SCROLLABLE page, its content must have been resting at the edge this
 *  long before a pull can start — a continuous scrolling rhythm (wheel clicks
 *  ~250ms apart, or touch inertia) that just reached the bottom must die out
 *  first; only a clearly separate, later gesture pulls the next page in. */
const SETTLE_MS = 600;
/** A pull may only START on a fresh gesture — wheel input must have paused
 *  this long first (filters out momentum from the scroll that reached the edge). */
const WHEEL_REST_MS = 160;

interface Incoming {
  idx: number;
  dir: 1 | -1; // 1 = next page rises from the bottom, -1 = previous descends
}

const Deck = ({ pages }: DeckProps) => {
  const reduce = useReducedMotion();
  const count = pages.length;

  const [current, setCurrent] = useState(0);
  const [trans, setTrans] = useState<Incoming | null>(null);
  const transRef = useRef<Incoming | null>(null);
  const busy = useRef(false); // commit/cancel animation in flight
  const lastSettle = useRef(0); // wheel momentum must not chain-pull pages

  // 0 → incoming sheet fully offscreen · 1 → fully covering the viewport.
  // `progress` is the raw gesture target; `smooth` springs after it so notchy
  // mouse-wheel steps render as one fluid glide.
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 300, damping: 34, mass: 0.8 });
  const dirRef = useRef<1 | -1>(1);
  const incomingY = useTransform(smooth, (p) => `${(1 - p) * 100 * dirRef.current}%`);
  const sheetRadius = useTransform(smooth, (p) => Math.max(0, (1 - p) * 18));
  const dimOpacity = useTransform(smooth, (p) => Math.min(0.4, Math.max(0, p * 0.4)));
  const currentScale = useTransform(smooth, (p) => 1 - Math.max(0, p) * 0.03);

  // Reset the pull before paint once the incoming layer is gone, so the
  // (now-current) panel never flashes mid-transition values.
  useLayoutEffect(() => {
    if (!trans) {
      progress.jump(0);
      smooth.jump(0);
    }
  }, [trans, progress, smooth]);

  const setIncoming = useCallback((inc: Incoming | null) => {
    transRef.current = inc;
    if (inc) dirRef.current = inc.dir;
    setTrans(inc);
  }, []);

  /** Finish the active pull: commit to the target page or spring back. */
  const settle = useCallback(
    (commit: boolean) => {
      const t = transRef.current;
      if (!t || busy.current) return;
      busy.current = true;
      animate(progress, commit ? 1 : 0, {
        duration: reduce ? 0.15 : commit ? 0.35 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }).then(() => {
        smooth.jump(commit ? 1 : 0); // land the spring exactly before the swap
        if (commit) setCurrent(t.idx);
        setIncoming(null);
        busy.current = false;
        lastSettle.current = performance.now();
      });
    },
    [progress, smooth, reduce, setIncoming]
  );

  /** Jump (top menu / keyboard): same sheet animation, driven automatically. */
  const goTo = useCallback(
    (i: number) => {
      const target = Math.max(0, Math.min(count - 1, i));
      if (target === current || busy.current || transRef.current) return;
      setIncoming({ idx: target, dir: target > current ? 1 : -1 });
      busy.current = true;
      progress.set(0);
      animate(progress, 1, {
        duration: reduce ? 0.15 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }).then(() => {
        smooth.jump(1); // land the spring exactly before the swap
        setCurrent(target);
        setIncoming(null);
        busy.current = false;
        lastSettle.current = performance.now();
      });
    },
    [count, current, progress, smooth, reduce, setIncoming]
  );
  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  // Keyboard — ANY key advances; a few keys go back / jump. Shortcuts,
  // typing, and focused controls are left alone.
  useEffect(() => {
    const BACK = ["ArrowLeft", "ArrowUp", "PageUp", "Backspace"];
    const IGNORE = [
      "Shift", "Control", "Alt", "Meta", "CapsLock", "Tab", "Escape",
      "ContextMenu", "NumLock", "ScrollLock", "Pause", "Insert", "PrintScreen",
      "Dead", "Unidentified",
    ];
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const k = e.key;
      if (IGNORE.includes(k)) return;
      if (/^F\d{1,2}$/.test(k)) return;

      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const onControl = !!t?.closest?.("button, a, [role='button']");
      if (onControl && (k === "Enter" || k === " " || k === "Spacebar")) return;

      e.preventDefault();
      if (k === "Home") goTo(0);
      else if (k === "End") goTo(count - 1);
      else if (BACK.includes(k)) prev();
      else next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, count]);

  // Panel ref — AnimatePresence-style unmount nulling is avoided by ignoring
  // null assignments (the newest panel always wins).
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const attachPanel = useCallback((node: HTMLDivElement | null) => {
    if (node) scrollRef.current = node;
  }, []);
  const panelH = () => scrollRef.current?.clientHeight || window.innerHeight;

  // Track when the panel's own content last scrolled ("scroll" doesn't
  // bubble — listen in capture and match the panel).
  const lastInnerScroll = useRef(0);
  useEffect(() => {
    const onScroll = (e: Event) => {
      if (e.target === scrollRef.current) lastInnerScroll.current = performance.now();
    };
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, []);

  const edgeState = () => {
    const el = scrollRef.current;
    if (!el) return { atTop: true, atBottom: true, canScroll: false };
    return {
      atTop: el.scrollTop <= 0,
      atBottom: el.scrollTop + el.clientHeight >= el.scrollHeight - 1,
      canScroll: el.scrollHeight > el.clientHeight + 1,
    };
  };

  // ---- Wheel: scroll content first; at the edge, further scrolling PULLS the
  // next page in. >50% pulled when the gesture ends → commit, else spring back.
  const acc = useRef(0);
  const idleTimer = useRef<number | undefined>(undefined);
  const lastWheel = useRef(0);
  const lastMag = useRef(0);
  useEffect(() => {
    const endGesture = () => settle(progress.get() > 0.5);
    const onWheel = (e: WheelEvent) => {
      const now = performance.now();
      const prevWheel = lastWheel.current;
      const prevMag = lastMag.current;
      lastWheel.current = now;
      lastMag.current = Math.abs(e.deltaY);
      if (busy.current) return;
      const dy = e.deltaY;
      if (Math.abs(dy) < 2) return;

      const active = transRef.current;
      if (active) {
        // Pull in progress — follow the wheel in either direction
        acc.current += dy * active.dir;
        const p = Math.min(1, Math.max(0, acc.current / (panelH() * PULL_FACTOR)));
        progress.set(p);
        window.clearTimeout(idleTimer.current);
        if (p >= 1) return settle(true);
        if (p <= 0) return settle(false);
        idleTimer.current = window.setTimeout(endGesture, IDLE_MS);
        return;
      }

      // Wheel momentum from a just-finished transition must not chain-pull
      if (now - lastSettle.current < 400) return;

      const { atTop, atBottom, canScroll } = edgeState();
      // Content absorbs the scroll first
      if (canScroll && ((dy > 0 && !atBottom) || (dy < 0 && !atTop))) return;
      // Let the reaching-the-edge gesture finish before a pull can start
      if (canScroll && now - lastInnerScroll.current < SETTLE_MS) return;
      // Only a FRESH gesture may start a pull. Momentum tails decay, so either
      // a pause in wheel input OR a clear jump in delta strength (a new flick
      // mid-tail) counts as fresh; a decaying tail never does.
      const fresh = now - prevWheel > WHEEL_REST_MS || Math.abs(dy) > prevMag * 1.5;
      if (!fresh) return;

      const dir: 1 | -1 = dy > 0 ? 1 : -1;
      const target = current + dir;
      if (target < 0 || target > count - 1) return;

      setIncoming({ idx: target, dir });
      acc.current = Math.abs(dy);
      progress.set(Math.min(1, acc.current / (panelH() * PULL_FACTOR)));
      window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(endGesture, IDLE_MS);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.clearTimeout(idleTimer.current);
    };
  }, [current, count, progress, settle, setIncoming]);

  // ---- Touch: same pull with the finger. Edge state is captured at touch
  // start, so a tall page scrolls naturally first and the NEXT swipe pulls.
  const touch = useRef<{
    x: number;
    y: number;
    atTop: boolean;
    atBottom: boolean;
    canScroll: boolean;
    pulling: boolean;
  } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    touch.current = { x: t.clientX, y: t.clientY, ...edgeState(), pulling: false };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const s = touch.current;
    if (!s || busy.current) return;
    const t = e.touches[0];
    const pull = s.y - t.clientY; // >0 = finger up = pulling the NEXT page in

    if (!transRef.current) {
      if (Math.abs(pull) < 12) return;
      const dir: 1 | -1 = pull > 0 ? 1 : -1;
      const edgeOk = dir === 1 ? !s.canScroll || s.atBottom : !s.canScroll || s.atTop;
      if (!edgeOk) return;
      // Same settle rule as the wheel: if inertia only just carried the
      // content to this edge, this swipe belongs to the old scroll — ignore.
      if (s.canScroll && performance.now() - lastInnerScroll.current < SETTLE_MS) return;
      const target = current + dir;
      if (target < 0 || target > count - 1) return;
      setIncoming({ idx: target, dir });
      s.pulling = true;
    }

    const active = transRef.current;
    if (active && s.pulling) {
      const p = Math.min(1, Math.max(0, (pull * active.dir) / (panelH() * PULL_FACTOR)));
      progress.set(p);
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const s = touch.current;
    touch.current = null;
    if (!s || busy.current) return;

    if (transRef.current && s.pulling) {
      settle(progress.get() > 0.5);
      return;
    }

    // Horizontal swipe still pages (uses the same sheet animation)
    const t = e.changedTouches[0];
    const dx = t.clientX - s.x;
    const dy = t.clientY - s.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      if (dx < 0) next();
      else prev();
    }
  };

  const meta = useMemo<DeckPage[]>(() => pages.map(({ id, label }) => ({ id, label })), [pages]);
  const ctx = useMemo(
    () => ({ page: current, count, pages: meta, goTo, next, prev }),
    [current, count, meta, goTo, next, prev]
  );

  return (
    <DeckContext.Provider value={ctx}>
      <div className="page-light flex h-[100dvh] w-full flex-col overflow-hidden">
        <TopBar />

        <div
          className="relative min-h-0 flex-1 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Layers live in ONE keyed array so that on commit the pulled-in
              sheet (same key) BECOMES the current panel — no remount, no
              replayed entrance animation, no flash. */}
          {[
            // Current page (scroll container). While a pull is active it
            // locks so the gesture drives the sheet, not the content.
            <motion.div
              key={`p-${current}`}
              ref={attachPanel}
              style={trans ? { scale: currentScale } : undefined}
              className={`absolute inset-0 overflow-x-hidden overscroll-contain ${
                trans ? "overflow-y-hidden" : "overflow-y-auto"
              }`}
            >
              {pages[current].node}
            </motion.div>,

            // Dim under the arriving sheet
            ...(trans
              ? [
                  <motion.div
                    key="dim"
                    className="pointer-events-none absolute inset-0 z-10 bg-black"
                    style={{ opacity: dimOpacity }}
                  />,
                  // Incoming page — the sheet being pulled in
                  <motion.div
                    key={`p-${trans.idx}`}
                    style={{
                      y: incomingY,
                      borderTopLeftRadius: trans.dir === 1 ? sheetRadius : 0,
                      borderTopRightRadius: trans.dir === 1 ? sheetRadius : 0,
                      borderBottomLeftRadius: trans.dir === -1 ? sheetRadius : 0,
                      borderBottomRightRadius: trans.dir === -1 ? sheetRadius : 0,
                    }}
                    className={`page-light absolute inset-0 z-20 overflow-hidden bg-background ${
                      trans.dir === 1
                        ? "border-t border-border shadow-[0_-16px_48px_-12px_rgba(0,0,0,0.55)]"
                        : "border-b border-border shadow-[0_16px_48px_-12px_rgba(0,0,0,0.55)]"
                    }`}
                  >
                    {pages[trans.idx].node}
                  </motion.div>,
                ]
              : []),
          ]}
        </div>
      </div>
    </DeckContext.Provider>
  );
};

export default Deck;

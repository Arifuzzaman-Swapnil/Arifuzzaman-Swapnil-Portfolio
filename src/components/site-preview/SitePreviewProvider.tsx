import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Loader2, Maximize2, Minus, ShieldOff, X, ExternalLink } from "lucide-react";
import { SitePreviewContext, type PreviewTarget } from "./context";

/**
 * Hosts that refuse to be framed (X-Frame-Options DENY, checked
 * 2026-10-09). They get an explanation + "Open in new tab" instead of a blank frame.
 */
const BLOCKED_HOSTS = ["saleanto.com"];

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const openInNewTab = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

const WindowButton = ({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) => (
  <button
    type="button"
    aria-label={label}
    title={label}
    onClick={onClick}
    className="press flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/[0.07] hover:text-foreground"
  >
    {children}
  </button>
);

const SitePreviewProvider = ({ children }: { children: ReactNode }) => {
  const [target, setTarget] = useState<PreviewTarget | null>(null);
  const [minimized, setMinimized] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = useCallback((t: PreviewTarget) => {
    setTarget((prev) => (prev?.url === t.url ? prev : t));
    setMinimized(false);
  }, []);

  // A new site starts in the loading state
  useEffect(() => setLoaded(false), [target?.url]);

  const close = useCallback(() => {
    setTarget(null);
    setMinimized(false);
  }, []);

  const visible = !!target && !minimized;
  const host = target ? hostOf(target.url) : "";
  const blocked = BLOCKED_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));

  // Esc closes; page behind doesn't scroll while the window is up
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, close]);

  return (
    <SitePreviewContext.Provider value={open}>
      {children}

      {target && (
        <>
          {/* Backdrop */}
          <motion.div
            aria-hidden
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            style={{ pointerEvents: visible ? "auto" : "none" }}
            onClick={close}
          />

          {/* Window — stays mounted while minimized so the site doesn't reload */}
          <div
            className="pointer-events-none fixed inset-0 z-[71] flex items-center justify-center sm:p-6 md:p-10"
            role="dialog"
            aria-modal={visible}
            aria-label={`${target.title} preview`}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={
                visible
                  ? { opacity: 1, y: 0, scale: 1, visibility: "visible" }
                  : { opacity: 0, y: 60, scale: 0.94, transitionEnd: { visibility: "hidden" } }
              }
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ pointerEvents: visible ? "auto" : "none" }}
              className="surface relative flex h-full w-full max-w-6xl flex-col shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)] sm:max-h-[880px] sm:rounded-2xl"
            >
              {/* Title bar */}
              <div className="flex shrink-0 items-center gap-3 border-b border-border py-2 pl-4 pr-2">
                <Globe size={15} className="shrink-0 text-muted-foreground" />
                <div className="flex min-w-0 flex-1 items-baseline gap-2">
                  <span className="truncate text-sm font-medium text-foreground">{target.title}</span>
                  <span className="hidden truncate font-mono text-[11px] text-muted-foreground sm:inline">
                    {host}
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-0.5">
                  <WindowButton label="Minimize" onClick={() => setMinimized(true)}>
                    <Minus size={16} />
                  </WindowButton>
                  <WindowButton label="Open full screen in a new tab" onClick={() => openInNewTab(target.url)}>
                    <Maximize2 size={14} />
                  </WindowButton>
                  <button
                    ref={closeRef}
                    type="button"
                    aria-label="Close"
                    title="Close"
                    onClick={close}
                    className="press flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/[0.07] hover:text-foreground"
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative min-h-0 flex-1 overflow-hidden bg-background sm:rounded-b-2xl">
                {blocked ? (
                  <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                    <div className="icon-tile mb-5 h-12 w-12">
                      <ShieldOff size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">This site can&apos;t be shown here</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      <span className="font-mono text-foreground">{host}</span> doesn&apos;t allow being
                      embedded in other websites. Open it in a new tab to view it.
                    </p>
                    <button type="button" onClick={() => openInNewTab(target.url)} className="btn-primary mt-6">
                      <ExternalLink size={15} /> Open in new tab
                    </button>
                  </div>
                ) : (
                  <>
                    {!loaded && (
                      <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Loader2 size={16} className="animate-spin" /> Loading {host}…
                      </div>
                    )}
                    <iframe
                      key={target.url}
                      src={target.url}
                      title={target.title}
                      onLoad={() => setLoaded(true)}
                      referrerPolicy="strict-origin-when-cross-origin"
                      className={`h-full w-full border-0 bg-white transition-opacity duration-300 ${
                        loaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </>
                )}
              </div>
            </motion.div>
          </div>

          {/* Minimized dock chip */}
          <AnimatePresence>
            {minimized && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                className="fixed bottom-4 right-4 z-[72] flex items-center gap-1 rounded-xl border border-border bg-popover py-1 pl-1 pr-1 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.9)]"
              >
                <button
                  type="button"
                  onClick={() => setMinimized(false)}
                  className="press flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-white/[0.07]"
                  title="Restore"
                >
                  <Globe size={14} className="text-muted-foreground" />
                  <span className="max-w-[12rem] truncate">{target.title}</span>
                </button>
                <WindowButton label="Close" onClick={close}>
                  <X size={15} />
                </WindowButton>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </SitePreviewContext.Provider>
  );
};

export default SitePreviewProvider;

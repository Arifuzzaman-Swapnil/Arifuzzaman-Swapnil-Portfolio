/**
 * Fixed, non-interactive ambient layer: soft aurora glow blobs + film grain.
 * Mounted once at the app root, sits behind all content.
 */
const NOISE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter>
      <rect width='100%' height='100%' filter='url(#n)' opacity='0.5'/>
    </svg>`
  );

const GrainOverlay = () => (
  <>
    {/* Aurora glow blobs */}
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-primary/10 blur-[140px] animate-glow-pulse" />
      <div
        className="absolute top-1/3 -right-32 h-[40rem] w-[40rem] rounded-full bg-violet/10 blur-[150px] animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-primary/[0.06] blur-[140px] animate-glow-pulse"
        style={{ animationDelay: "3s" }}
      />
    </div>

    {/* Film grain */}
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.035] mix-blend-soft-light"
      style={{ backgroundImage: `url("${NOISE}")`, backgroundSize: "160px 160px" }}
    />
  </>
);

export default GrainOverlay;

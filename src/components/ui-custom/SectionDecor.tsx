/**
 * Decorative backdrops were removed for the minimal design. Kept as no-ops so
 * existing imports/usages don't break.
 */
export const SectionDecor = () => null;

export const SectionDivider = () => (
  <div className="container mx-auto max-w-6xl px-6">
    <div className="divider-blueprint" />
  </div>
);

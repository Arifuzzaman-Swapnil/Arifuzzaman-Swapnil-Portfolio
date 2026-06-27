/**
 * Faint engineering-blueprint grid that sits behind a section's content.
 * Drop as the first child of a `relative` section.
 */
export const SectionDecor = () => (
  <div aria-hidden className="bg-blueprint pointer-events-none absolute inset-0 -z-10" />
);

/**
 * Hairline divider with a small diamond node, used between major sections.
 */
export const SectionDivider = () => (
  <div className="container mx-auto max-w-6xl px-6">
    <div className="divider-blueprint" />
  </div>
);

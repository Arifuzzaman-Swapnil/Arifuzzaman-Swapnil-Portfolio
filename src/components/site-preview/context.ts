import { createContext, useContext } from "react";

export interface PreviewTarget {
  url: string;
  title: string;
}

export const SitePreviewContext = createContext<((target: PreviewTarget) => void) | null>(null);

/** Returns a function that opens a URL in the in-page site preview window. */
export const useSitePreview = () => {
  const open = useContext(SitePreviewContext);
  if (!open) throw new Error("useSitePreview must be used within <SitePreviewProvider>");
  return open;
};

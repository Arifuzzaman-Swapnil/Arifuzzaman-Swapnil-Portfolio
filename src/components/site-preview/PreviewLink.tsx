import type { MouseEvent, ReactNode } from "react";
import { useSitePreview } from "./context";

interface PreviewLinkProps {
  href: string;
  title: string;
  className?: string;
  children: ReactNode;
}

/**
 * A normal external link that opens in the preview window on a plain click.
 * Modified clicks (Ctrl/⌘/Shift, middle button) keep the browser's default
 * new-tab behaviour.
 */
const PreviewLink = ({ href, title, className, children }: PreviewLinkProps) => {
  const open = useSitePreview();

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    open({ url: href, title });
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
      {children}
    </a>
  );
};

export default PreviewLink;

import type { ReactNode } from "react";

/** Small mono-font pill used for tech stack chips and metadata. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-border bg-surface-1 px-2 py-0.5 font-mono text-xs text-ink-dim transition-colors duration-[140ms] hover:border-border-lit">
      {children}
    </span>
  );
}

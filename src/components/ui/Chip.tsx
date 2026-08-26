import type { ReactNode } from "react";

/** Small mono-font pill used for tech stack chips and metadata. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
      {children}
    </span>
  );
}

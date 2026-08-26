import { Users } from "lucide-react";

/** Status badge, e.g. "In progress". */
export function StatusBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-500/10 dark:text-amber-400">
      {children}
    </span>
  );
}

/** Team-size badge, e.g. "Team of 4". */
export function TeamBadge({ size }: { size: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
      <Users className="h-3 w-3" />
      Team of {size}
    </span>
  );
}

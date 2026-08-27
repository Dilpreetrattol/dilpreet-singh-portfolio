import { Clock, Users } from "lucide-react";

/**
 * Status badge, e.g. "In progress". Neutral, not accent — amber is now the
 * site's one interactive color, so a status label can't borrow it without
 * reading as a link or an active filter.
 */
export function StatusBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-ink-mute px-2.5 py-0.5 text-xs font-medium text-ink-dim">
      <Clock className="h-3 w-3" />
      {children}
    </span>
  );
}

/** Team-size badge, e.g. "Team of 4". Outline, not filled — a group-project
 * signal should read as a fact, not a decoration. */
export function TeamBadge({ size }: { size: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-ink-mute px-2.5 py-0.5 text-xs font-medium text-ink-dim">
      <Users className="h-3 w-3" />
      Team of {size}
    </span>
  );
}

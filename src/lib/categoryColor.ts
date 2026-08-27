import type { ProjectTag } from "@/content/types";

// Maps each project tag to its category-hue Tailwind classes (see the
// `cat-*` tokens in tailwind.config.ts / globals.css — same chroma and
// lightness per theme, hue varies per category, so the set reads as one
// system). Used only as a 2px card-top border and a small dot — never as
// text or a fill, so it never competes with `accent` as an interactive cue.
// The border sits at 70% opacity at rest and brightens to full opacity on
// hover/keyboard-focus (Stage 4's "brightens on hover").
// Written as full literal class names (not built from string fragments) so
// Tailwind's content scanner can find them.
export const categoryColor: Record<
  ProjectTag,
  { border: string; borderActive: string; dot: string }
> = {
  Algorithms: {
    border: "border-t-cat-algorithms/70",
    borderActive: "hover:border-t-cat-algorithms focus-within:border-t-cat-algorithms",
    dot: "bg-cat-algorithms",
  },
  "ML / AI": {
    border: "border-t-cat-ml/70",
    borderActive: "hover:border-t-cat-ml focus-within:border-t-cat-ml",
    dot: "bg-cat-ml",
  },
  Web: {
    border: "border-t-cat-web/70",
    borderActive: "hover:border-t-cat-web focus-within:border-t-cat-web",
    dot: "bg-cat-web",
  },
  "Embedded / IoT": {
    border: "border-t-cat-embedded/70",
    borderActive: "hover:border-t-cat-embedded focus-within:border-t-cat-embedded",
    dot: "bg-cat-embedded",
  },
};

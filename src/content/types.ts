// Shared content types for projects and site config.
// Edit src/content/projects.ts and src/content/site.ts to change site content —
// these type definitions should rarely need to change.

export type ProjectTag = "Algorithms" | "ML / AI" | "Web" | "Embedded / IoT";

export type ProjectStatus = "In progress";

export interface ProjectDetail {
  /** What needed solving, and why it was non-trivial. */
  problem: string;
  /** Design decisions, stated as decisions with reasons. */
  approach: string;
  /** What actually went wrong and how it was resolved. */
  challenges: string;
  /** What works now, honestly scoped. */
  outcome: string;
  /**
   * Required (and rendered prominently) when `team` is set.
   * Describe this person's specific contribution — avoid "I built" phrasing
   * for group work; be precise about what was individually owned.
   */
  contribution?: string;
}

export interface ProjectTeam {
  size: number;
}

export interface Project {
  slug: string;
  title: string;
  tags: ProjectTag[];
  /** Featured projects are sorted first and render in a larger card. */
  featured?: boolean;
  status?: ProjectStatus;
  /** Primary language/runtime shown as metadata (e.g. "C++", "Flask"). */
  language: string;
  oneLiner: string;
  /** Short tech chips shown on the card, e.g. ["C++", "Minimax"]. */
  stack: string[];
  /** Omit if there is no public repo yet. */
  repoUrl?: string;
  /** Freeform note shown instead of/alongside the repo link, e.g. a TODO. */
  repoNote?: string;
  team?: ProjectTeam;
  /** Present only for projects that get a /projects/[slug] detail page. */
  details?: ProjectDetail;
}

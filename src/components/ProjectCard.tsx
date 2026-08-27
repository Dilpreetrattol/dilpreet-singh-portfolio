import { ArrowRight, Github } from "lucide-react";
import type { Project } from "@/content/types";
import { categoryColor } from "@/lib/categoryColor";
import { Chip } from "./ui/Chip";
import { StatusBadge, TeamBadge } from "./ui/Badge";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasLinks = Boolean(project.repoUrl || project.details);
  const primaryTag = project.tags[0];
  const cat = categoryColor[primaryTag];

  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-lg border border-t-2 border-border bg-surface-1 transition-[transform,background-color,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-1 hover:border-border-lit hover:bg-surface-2 hover:shadow-lg focus-within:-translate-y-1 focus-within:border-border-lit focus-within:bg-surface-2 focus-within:shadow-lg ${cat.border} ${cat.borderActive} ${
        featured ? "p-7" : "p-6"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${cat.dot}`} aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">{primaryTag}</span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3
          className={`font-display font-semibold leading-snug text-ink ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        <div className="flex flex-wrap items-center gap-1.5">
          {project.status && <StatusBadge>{project.status}</StatusBadge>}
          {project.team && <TeamBadge size={project.team.size} />}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-ink-dim">{project.oneLiner}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>

      {hasLinks && (
        <div className="mt-auto flex items-center gap-4 pt-1 text-sm font-medium">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-dim transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.details && (
            <a
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-ink-dim transition-colors hover:text-accent"
            >
              Details
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

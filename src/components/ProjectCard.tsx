import { ArrowRight, Github } from "lucide-react";
import type { Project } from "@/content/types";
import { Chip } from "./ui/Chip";
import { StatusBadge, TeamBadge } from "./ui/Badge";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasLinks = Boolean(project.repoUrl || project.details);

  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-lg border border-neutral-200 bg-white transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700 ${
        featured ? "p-7" : "p-6"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3
          className={`font-display font-semibold leading-snug text-neutral-900 dark:text-neutral-50 ${
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

      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {project.oneLiner}
      </p>

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
              className="inline-flex items-center gap-1.5 text-neutral-700 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-accent-hover"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.details && (
            <a
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-neutral-700 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-accent-hover"
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

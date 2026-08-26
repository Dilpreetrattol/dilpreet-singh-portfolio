"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import type { ProjectTag } from "@/content/types";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "./FadeIn";

const FILTERS: Array<ProjectTag | "All"> = ["All", "Algorithms", "ML / AI", "Web", "Embedded / IoT"];

// Featured projects first, otherwise preserve authored order.
const sortedProjects = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectTag | "All">("All");

  const visible = useMemo(
    () => sortedProjects.filter((project) => active === "All" || project.tags.includes(active)),
    [active]
  );

  return (
    <section id="projects" aria-label="Projects" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <FadeIn as="h2" className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-50 sm:text-3xl">
        Projects
      </FadeIn>

      <div role="group" aria-label="Filter projects by category" className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((tag) => {
          const isActive = tag === active;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(tag)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive
                  ? "border-accent bg-accent text-white"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-white"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <FadeIn key={project.slug} delay={Math.min(index, 4) * 60}>
            <ProjectCard project={project} featured={project.featured} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

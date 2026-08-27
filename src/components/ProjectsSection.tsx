"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/content/projects";
import type { Project, ProjectTag } from "@/content/types";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/lib/useReveal";

const FILTERS: Array<ProjectTag | "All"> = ["All", "Algorithms", "ML / AI", "Web", "Embedded / IoT"];

// Featured projects first, otherwise preserve authored order.
const sortedProjects = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

function matchesFilter(project: Project, tag: ProjectTag | "All") {
  return tag === "All" || project.tags.includes(tag);
}

// Filter-change transition — deliberately fast, separate from the 520ms
// scroll-reveal used for the grid's first appearance. "A filter that feels
// slow feels broken."
const FILTER_MS = 200;

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectTag | "All">("All");
  const { ref: gridRef, isVisible: revealed, skipAnimation } = useReveal<HTMLDivElement>();

  // Lags `revealed` by one render so the transition that actually plays
  // when the grid first scrolls into view still gets the slow duration —
  // only transitions *after* that one should snap to the fast filter timing.
  const [revealedOnce, setRevealedOnce] = useState(false);
  useEffect(() => {
    if (revealed) setRevealedOnce(true);
  }, [revealed]);

  // Slugs currently fading out (still occupying grid space) and slugs
  // currently fading in (unhidden, but not yet flipped to visible — see
  // selectFilter: you can't transition out of display:none in one step).
  const [exiting, setExiting] = useState<Set<string>>(new Set());
  const [entering, setEntering] = useState<Set<string>>(new Set());
  const [settled, setSettled] = useState<Set<string>>(new Set());
  const exitTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function selectFilter(next: ProjectTag | "All") {
    if (next === active) return;

    const goingAway = sortedProjects
      .filter((p) => matchesFilter(p, active) && !matchesFilter(p, next))
      .map((p) => p.slug);
    const comingIn = sortedProjects
      .filter((p) => !matchesFilter(p, active) && matchesFilter(p, next))
      .map((p) => p.slug);

    setActive(next);
    setExiting(new Set(goingAway));
    setEntering(new Set(comingIn));
    setSettled((prev) => {
      const next = new Set(prev);
      comingIn.forEach((slug) => next.delete(slug));
      return next;
    });

    // One frame so the "just unhidden, still faded out" style actually
    // commits before flipping to visible — otherwise there's nothing for
    // the browser to transition from.
    requestAnimationFrame(() => {
      setSettled((prev) => new Set([...prev, ...comingIn]));
    });

    clearTimeout(exitTimer.current);
    exitTimer.current = setTimeout(() => {
      setExiting(new Set());
      setEntering(new Set());
    }, FILTER_MS);
  }

  useEffect(() => () => clearTimeout(exitTimer.current), []);

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="mx-auto max-w-content scroll-mt-16 px-6 py-20 sm:py-28"
    >
      <SectionHeading>Projects</SectionHeading>

      <div role="group" aria-label="Filter projects by category" className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((tag) => {
          const isActive = tag === active;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isActive}
              onClick={() => selectFilter(tag)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive
                  ? "border-accent bg-accent text-bg"
                  : "border-border text-ink-mute hover:border-border-lit hover:text-ink"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Every card stays mounted; filtering toggles visibility via CSS so
          leaving/entering cards can animate instead of just vanishing.
          Grid reflow itself (a hidden card's space closing up) is instant,
          not animated — only the card's own opacity/scale is. */}
      <div ref={gridRef} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project, index) => {
          const isMatch = matchesFilter(project, active);
          const isExiting = exiting.has(project.slug);
          const isEntering = entering.has(project.slug);
          const stayInFlow = isMatch || isExiting;
          const stagger = Math.min(index, 5) * 60; // capped at 300ms

          let motionClass: string;
          if (isExiting || (isEntering && !settled.has(project.slug))) {
            motionClass = "scale-[0.97] opacity-0";
          } else if (revealed) {
            motionClass = "translate-y-0 scale-100 opacity-100";
          } else {
            motionClass = "translate-y-4 scale-100 opacity-0";
          }

          // Already in view at load: settle instantly, no transition at all
          // (not even the fast one) — only the hero gets an unconditional
          // on-load entrance.
          const motion = skipAnimation
            ? ""
            : `transition-[opacity,transform] ease-reveal ${
                revealedOnce ? "duration-[200ms]" : "duration-[520ms]"
              }`;

          return (
            <div
              key={project.slug}
              aria-hidden={!isMatch}
              className={`${motion} ${stayInFlow ? "" : "hidden"} ${motionClass}`}
              style={
                !skipAnimation && revealed && !isExiting && !isEntering
                  ? { transitionDelay: `${stagger}ms` }
                  : undefined
              }
            >
              <ProjectCard project={project} featured={project.featured} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

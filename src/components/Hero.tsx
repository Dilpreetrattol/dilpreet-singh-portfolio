import { ArrowRight, Github } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="flex min-h-[calc(100svh-56px)] flex-col justify-center gap-8 px-6 py-16"
    >
      <div className="mx-auto w-full max-w-content animate-fade-in-up">
        <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl md:text-6xl">
          {site.headline}
        </h1>

        <p className="mt-5 font-mono text-sm text-neutral-500 dark:text-neutral-400">
          {site.degreeLine}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-100"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <Button href={site.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button href={site.resumePath} target="_blank" rel="noopener noreferrer" variant="primary">
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Github } from "lucide-react";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3.5">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-ink">
          {site.name}
        </a>
        <div className="flex items-center gap-1">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on GitHub`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-mute transition-colors hover:bg-surface-2 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

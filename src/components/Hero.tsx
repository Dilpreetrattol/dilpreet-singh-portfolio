import { ArrowRight, Github } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "./ui/Button";

// Hero entrance stagger — eyebrow → name → tagline → metadata → actions,
// 80ms apart. This is the one entrance animation that isn't scroll-gated
// (the hero is already in view at load), so it's plain CSS animation-delay
// rather than the IntersectionObserver-driven reveal everything else uses.
const STAGGER_MS = 80;
const delayStyle = (step: number) => ({ animationDelay: `${step * STAGGER_MS}ms` });

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="flex min-h-[calc(100svh-56px)] flex-col justify-center gap-8 px-6 py-12"
    >
      <div className="mx-auto w-full max-w-content">
        <p
          className="animate-fade-in-up font-mono text-sm uppercase tracking-[0.22em] text-accent"
          style={delayStyle(0)}
        >
          {site.eyebrow}
        </p>

        <h1
          className="animate-fade-in-up mt-4 font-display text-[clamp(3.5rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-ink"
          style={delayStyle(1)}
        >
          {site.name}
        </h1>

        <p
          className="animate-fade-in-up mt-6 max-w-[46ch] text-pretty text-[clamp(1.25rem,2.2vw,1.6rem)] text-ink-dim"
          style={delayStyle(2)}
        >
          {site.tagline}
        </p>

        <p className="animate-fade-in-up mt-5 font-mono text-sm text-ink-mute" style={delayStyle(3)}>
          {site.degreeLine}
        </p>

        <div className="animate-fade-in-up mt-9 flex flex-wrap items-center gap-3" style={delayStyle(4)}>
          <Button href="#projects" variant="primary">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={site.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button href={site.resumePath} target="_blank" rel="noopener noreferrer" variant="secondary">
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}

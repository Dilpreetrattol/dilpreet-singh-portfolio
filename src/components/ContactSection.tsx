import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <SectionHeading>Contact</SectionHeading>

        <FadeIn as="p" delay={60} className="mt-4 max-w-[55ch] text-ink-dim">
          The fastest way to reach me is email.
        </FadeIn>

        <FadeIn as="div" delay={120} className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-dim transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-dim transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-dim transition-colors hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

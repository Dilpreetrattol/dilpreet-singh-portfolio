import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { FadeIn } from "./FadeIn";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <FadeIn as="h2" className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-50 sm:text-3xl">
          Contact
        </FadeIn>

        <FadeIn as="p" delay={60} className="mt-4 max-w-[55ch] text-neutral-600 dark:text-neutral-400">
          The fastest way to reach me is email.
        </FadeIn>

        <FadeIn as="div" delay={120} className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-colors hover:text-accent dark:text-neutral-200 dark:hover:text-accent-hover"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-colors hover:text-accent dark:text-neutral-200 dark:hover:text-accent-hover"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-colors hover:text-accent dark:text-neutral-200 dark:hover:text-accent-hover"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

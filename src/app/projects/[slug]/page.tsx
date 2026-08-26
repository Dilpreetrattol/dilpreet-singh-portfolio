import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Chip } from "@/components/ui/Chip";
import { StatusBadge, TeamBadge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/FadeIn";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug && project.details);
}

// Only projects with a `details` block get a static page — everything else
// links straight to GitHub from the projects grid.
export function generateStaticParams() {
  return projects.filter((project) => project.details).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: {
      title: project.title,
      description: project.oneLiner,
      images: [site.ogImagePath],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.oneLiner,
      images: [site.ogImagePath],
    },
  };
}

/** Splits on blank lines so multi-paragraph copy renders as separate <p>s. */
function paragraphs(text: string) {
  return text.split("\n\n");
}

function Section({ heading, body }: { heading: string; body: string }) {
  return (
    <FadeIn as="section" className="border-t border-neutral-200 py-10 dark:border-neutral-800">
      <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
        {heading}
      </h2>
      <div className="mt-4 flex max-w-[70ch] flex-col gap-4 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
        {paragraphs(body).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </FadeIn>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.details) notFound();

  const { problem, approach, challenges, outcome, contribution } = project.details;

  return (
    <>
      <Header />
      <main>
        <article className="mx-auto max-w-content px-6 py-16">
          <a
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </a>

          <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
            <h1 className="font-display text-3xl font-semibold leading-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {project.status && <StatusBadge>{project.status}</StatusBadge>}
              {project.team && <TeamBadge size={project.team.size} />}
            </div>
          </div>

          <p className="mt-4 max-w-[65ch] text-base text-neutral-600 dark:text-neutral-400">
            {project.oneLiner}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>

          {project.repoUrl && (
            <div className="mt-6">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 transition-colors hover:text-accent dark:text-neutral-300 dark:hover:text-accent-hover"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          )}

          <Section heading="Problem" body={problem} />
          <Section heading="Approach" body={approach} />
          <Section heading="Challenges" body={challenges} />
          <Section heading="Outcome" body={outcome} />

          {contribution && (
            <FadeIn
              as="section"
              className="mt-2 rounded-lg border border-accent/30 bg-accent/5 p-6 dark:border-accent/40 dark:bg-accent/10"
            >
              <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                My contribution
              </h2>
              <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                {contribution}
              </p>
            </FadeIn>
          )}
        </article>
      </main>
    </>
  );
}

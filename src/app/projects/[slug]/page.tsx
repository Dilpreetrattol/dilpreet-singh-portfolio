import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Chip } from "@/components/ui/Chip";
import { StatusBadge, TeamBadge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/FadeIn";
import { ProjectDetailSection } from "@/components/ProjectDetailSection";

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
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-mute transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </a>

          <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
            <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {project.status && <StatusBadge>{project.status}</StatusBadge>}
              {project.team && <TeamBadge size={project.team.size} />}
            </div>
          </div>

          <p className="mt-4 max-w-[65ch] text-base text-ink-dim">{project.oneLiner}</p>

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
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-accent"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          )}

          <ProjectDetailSection heading="Problem" body={problem} />
          <ProjectDetailSection heading="Approach" body={approach} />
          <ProjectDetailSection heading="Challenges" body={challenges} />
          <ProjectDetailSection heading="Outcome" body={outcome} />

          {contribution && (
            <FadeIn as="section" className="mt-2 rounded-lg border border-accent/30 bg-accent/5 p-6">
              <h2 className="font-display text-xl font-semibold text-ink">My contribution</h2>
              <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-ink">{contribution}</p>
            </FadeIn>
          )}
        </article>
      </main>
    </>
  );
}

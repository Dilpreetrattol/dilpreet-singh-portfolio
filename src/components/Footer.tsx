import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-1 px-6 py-8 text-sm text-ink-mute sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {year}
        </p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}

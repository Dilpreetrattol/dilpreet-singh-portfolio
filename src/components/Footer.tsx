import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-content flex-col gap-1 px-6 py-8 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {year}
        </p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}

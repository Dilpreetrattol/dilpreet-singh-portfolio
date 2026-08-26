import { beyondCode } from "@/content/site";
import { FadeIn } from "./FadeIn";

export function BeyondCodeSection() {
  return (
    <section
      id="beyond-code"
      aria-label="Beyond code"
      className="border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <FadeIn as="h2" className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-50 sm:text-3xl">
          Beyond code
        </FadeIn>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {beyondCode.map((item, index) => (
            <FadeIn
              key={`${item.role}-${item.org}`}
              as="li"
              delay={Math.min(index, 4) * 60}
              className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800"
            >
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                {item.role} <span className="text-neutral-500 dark:text-neutral-400">·</span>{" "}
                <span className="font-mono text-sm text-neutral-600 dark:text-neutral-400">{item.org}</span>
              </p>
              <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">{item.note}</p>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

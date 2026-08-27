import { beyondCode } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function BeyondCodeSection() {
  return (
    <section
      id="beyond-code"
      aria-label="Beyond code"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <SectionHeading>Beyond code</SectionHeading>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {beyondCode.map((item, index) => (
            <FadeIn
              key={`${item.role}-${item.org}`}
              as="li"
              delay={Math.min(index, 4) * 60}
              className="rounded-lg border border-border p-5"
            >
              <p className="font-medium text-ink">
                {item.role} <span className="text-ink-mute">·</span>{" "}
                <span className="font-mono text-sm text-ink-dim">{item.org}</span>
              </p>
              <p className="mt-1.5 text-sm text-ink-mute">{item.note}</p>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

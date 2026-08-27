"use client";

import { useReveal } from "@/lib/useReveal";

/** Splits on blank lines so multi-paragraph copy renders as separate <p>s. */
function paragraphs(text: string) {
  return text.split("\n\n");
}

/** One Problem/Approach/Challenges/Outcome section on a project detail page. */
export function ProjectDetailSection({ heading, body }: { heading: string; body: string }) {
  const { ref, isVisible, skipAnimation } = useReveal<HTMLElement>();
  const motion = skipAnimation ? "" : "transition-[opacity,transform] duration-[520ms] ease-reveal";
  const ruleMotion = skipAnimation ? "" : "transition-[width] duration-[520ms] ease-reveal";

  return (
    <section
      ref={ref}
      className={`border-t border-border py-10 ${motion} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <h2 className="font-display text-xl font-semibold text-ink">{heading}</h2>
      <span
        aria-hidden="true"
        className={`mt-2 block h-0.5 rounded-full bg-accent ${ruleMotion} ${isVisible ? "w-12" : "w-0"}`}
      />
      <div className="mt-4 flex max-w-[70ch] flex-col gap-4 text-[15px] leading-relaxed text-ink-dim">
        {paragraphs(body).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

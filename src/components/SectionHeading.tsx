"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

/**
 * Section h2 plus the short accent rule beneath it that draws from 0 to
 * 48px as the header scrolls into view. Needs direct access to
 * `isVisible` (not just the opacity/translate FadeIn gives its children),
 * so it uses the reveal hook itself rather than wrapping FadeIn.
 */
export function SectionHeading({ children }: { children: ReactNode }) {
  const { ref, isVisible, skipAnimation } = useReveal<HTMLDivElement>();

  // Already on screen at load: skip the transition entirely and render
  // settled — no fade, no flash of the pre-reveal state.
  const motion = skipAnimation ? "" : "transition-[opacity,transform] duration-[520ms] ease-reveal";
  const ruleMotion = skipAnimation ? "" : "transition-[width] duration-[520ms] ease-reveal";

  return (
    <div ref={ref}>
      <h2
        className={`font-display text-2xl font-semibold text-ink sm:text-3xl ${motion} ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {children}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-3 block h-0.5 rounded-full bg-accent ${ruleMotion} ${isVisible ? "w-12" : "w-0"}`}
      />
    </div>
  );
}

"use client";

import { createElement, type ElementType, type ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

interface FadeInProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms, for lists of fading-in items. */
  delay?: number;
}

/** Fades an element up into place the first time it scrolls into view. */
export function FadeIn({ children, as = "div", className = "", delay = 0 }: FadeInProps) {
  const { ref, isVisible, skipAnimation } = useReveal<HTMLElement>();

  // Already on screen at load (e.g. a direct #contact link): render settled,
  // no animation, no invisible flash — only the hero gets an unconditional
  // on-load entrance.
  const revealClass = skipAnimation ? "" : isVisible ? "animate-fade-in-up" : "opacity-0";

  return createElement(
    as,
    {
      ref,
      className: `${revealClass} ${className}`,
      style: isVisible && !skipAnimation && delay ? { animationDelay: `${delay}ms` } : undefined,
    },
    children
  );
}

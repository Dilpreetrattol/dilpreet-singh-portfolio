"use client";

import { createElement, type ElementType, type ReactNode } from "react";
import { useFadeIn } from "@/lib/useFadeIn";

interface FadeInProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms, for lists of fading-in items. */
  delay?: number;
}

/** Fades an element up into place the first time it scrolls into view. */
export function FadeIn({ children, as = "div", className = "", delay = 0 }: FadeInProps) {
  const { ref, isVisible } = useFadeIn();

  return createElement(
    as,
    {
      ref,
      className: `${isVisible ? "animate-fade-in-up" : "opacity-0"} ${className}`,
      style: isVisible && delay ? { animationDelay: `${delay}ms` } : undefined,
    },
    children
  );
}

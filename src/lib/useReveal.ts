"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref and reports whether
 * the element has scrolled into view. Fires once — once visible, stays
 * visible; never re-hides on scroll-up.
 *
 * `skipAnimation` is true when the element was already in the viewport the
 * moment it mounted — e.g. someone lands directly on a `#contact` link and
 * the browser jumps straight there before this ever gets a chance to
 * observe it scrolling in. Per spec, only the hero gets an unconditional
 * on-load entrance; everything else should just be there, not fade in,
 * if it was already on screen at load. Also true under
 * prefers-reduced-motion, which skips animation outright.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  // Layout effect, not a plain effect: the "already in view" check has to
  // resolve before the browser paints, or a fast-but-real one-frame flash
  // of the pre-reveal (invisible) state is possible.
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      setSkipAnimation(true);
      return;
    }

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) {
      setIsVisible(true);
      setSkipAnimation(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible, skipAnimation };
}

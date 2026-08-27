"use client";

import { useEffect, useState } from "react";

/** Thin accent bar at the top of the viewport tracking scroll position. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    function update() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 bg-accent"
      style={{ width: `${progress}%` }}
    />
  );
}

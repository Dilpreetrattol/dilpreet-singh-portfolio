import type { Config } from "tailwindcss";

// Pulls each color from a CSS custom property (see globals.css :root / .dark)
// so opacity modifiers (e.g. `bg-accent/10`) keep working.
function fromVar(name: string) {
  return `rgb(var(${name}) / <alpha-value>)`;
}

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: fromVar("--color-bg"),
        surface: {
          1: fromVar("--color-surface-1"),
          2: fromVar("--color-surface-2"),
        },
        border: {
          DEFAULT: fromVar("--color-border"),
          lit: fromVar("--color-border-lit"),
        },
        // `ink` rather than `text` — Tailwind's own `text-*` utility already
        // owns that word, and `text-text` reads badly.
        ink: {
          DEFAULT: fromVar("--color-ink"),
          dim: fromVar("--color-ink-dim"),
          mute: fromVar("--color-ink-mute"),
        },
        // The only interactive color. `accent-soft` isn't a separate stored
        // value — it's the same accent at low opacity, so it self-adjusts
        // across the light/dark accent swap instead of hardcoding one tint.
        accent: {
          DEFAULT: fromVar("--color-accent"),
        },
        cat: {
          algorithms: fromVar("--color-cat-algorithms"),
          ml: fromVar("--color-cat-ml"),
          web: fromVar("--color-cat-web"),
          embedded: fromVar("--color-cat-embedded"),
          languages: fromVar("--color-cat-languages"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "1100px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // 520ms, cubic-bezier(0.22, 1, 0.36, 1) — the scroll-reveal timing.
        // `both` (not just `forwards`) so a delayed instance (the hero
        // stagger) stays at the 0% keyframe — invisible — through its
        // animation-delay instead of flashing visible then jumping.
        "fade-in-up": "fade-in-up 520ms cubic-bezier(0.22,1,0.36,1) both",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

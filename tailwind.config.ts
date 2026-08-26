import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          // blue-600 — ~5.2:1 against white, passes AA (4.5:1) as body
          // text/links on light backgrounds and as a solid-fill button/badge
          // background with white text (blue-500 falls just short, ~3.7:1).
          // Not used as plain text against dark backgrounds — see `hover`.
          DEFAULT: "#2563eb",
          // blue-400 — ~7.8:1 against near-black. Used for hover-state text
          // on dark backgrounds, where a lighter tone reads as "highlighted".
          hover: "#60a5fa",
          // blue-700 — darker press/hover fill for solid accent buttons,
          // so the hover state stays AA-safe with white text (blue-400
          // there would drop to ~2.5:1).
          press: "#1d4ed8",
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
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Metadata } from "next";
import { Space_Grotesk, Public_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Public Sans instead of Inter — Inter is the default on nearly every
// developer portfolio, and Public Sans is purpose-built for extended
// reading (it's the US government design system's body face) rather than
// a UI face pressed into service as one.
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — Portfolio`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — Portfolio`,
    description: site.description,
    url: site.siteUrl,
    siteName: site.name,
    images: [{ url: site.ogImagePath }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Portfolio`,
    description: site.description,
    images: [site.ogImagePath],
  },
  // src/app/icon.png and src/app/apple-icon.png are picked up automatically
  // via Next's file convention; public/favicon.ico covers the classic
  // browsers-request-it-directly fallback.
};

// Inline script runs before paint so the theme toggle never flashes the
// wrong theme on load. Reads localStorage first, falls back to the OS
// preference, defaults to dark.
const noFlashScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored ? stored : "dark";
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${publicSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        {/* FadeIn content renders with opacity-0 until an IntersectionObserver
            reveals it; without JS that observer never runs, so force it
            visible rather than leaving real content permanently hidden. */}
        <noscript>
          <style>{".opacity-0 { opacity: 1 !important; }"}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

// Site-wide config. This is one of the two files you edit for content changes
// (the other is ./projects.ts). Fill in the TODOs before shipping — they are
// also tracked in TODO.md at the repo root.

export const site = {
  name: "Dilpreet Singh",

  headline: "I build systems — from chess engines to embedded sensor networks.",

  degreeLine: "B.E. Electrical & Computer Engineering · Thapar Institute · May 2027",

  githubUrl: "https://github.com/Dilpreetrattol",

  email: "dilpreersr.work@gmail.com",

  linkedinUrl: "https://www.linkedin.com/in/dilpreetrattol",

  // Single resume, single button — no variants, no dropdown.
  resumePath: "/resume/dilpreet-singh-resume.pdf",

  ogImagePath: "/og.png",

  siteUrl: "https://dilpreet-singh-portfolio.vercel.app",

  description:
    "Portfolio of Dilpreet Singh — search algorithms, multi-role web applications, embedded sensor networks, and applied ML.",
} as const;

export const beyondCode = [
  {
    role: "Head of Marketing",
    org: "SSA VIRSA",
    note: "TIET's largest cultural society.",
  },
  {
    role: "Mentor",
    org: "FROSH Admission Cell",
    note: "Guiding incoming students through onboarding.",
  },
  {
    role: "Executive Committee",
    org: "SATURNALIA",
    note: "TIET's technical festival.",
  },
  {
    role: "Executive Committee",
    org: "URJA",
    note: "Inter-university sports festival.",
  },
] as const;

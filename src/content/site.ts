// Site-wide config. This is one of the two files you edit for content changes
// (the other is ./projects.ts). Fill in the TODOs before shipping — they are
// also tracked in TODO.md at the repo root.

export const site = {
  name: "Dilpreet Singh",

  eyebrow: "ENGINEER · THAPAR INSTITUTE",

  // Demoted from headline to tagline in the hero — the name is now the
  // largest, anchoring element (see Hero.tsx). Wording unchanged.
  tagline: "I build systems — from chess engines to embedded sensor networks.",

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

// About section, left column. First-person, specific, no invented
// internships/awards/metrics — draft from what the project data actually
// contains.
export const about = [
  "I build things that have to work under scrutiny — a chess engine that has to search a tree correctly, a multi-role web app that has to enforce permissions correctly, a sensor that has to report a real number, not a comforting one. The common thread is systems: search algorithms, application architecture, hardware built for the physical world, not a simulator.",
  "Electrical and Computer Engineering put me on the boundary between those worlds, so I treat software and hardware as one discipline — calibrating a sensor's resistance curve and designing role-based access control are the same problem: get the model right, then handle what reality does to it.",
  "Right now I'm building PlacementLog, a placement tracker I'm writing from scratch without AI-generated code, to get Flask fundamentals into muscle memory.",
] as const;

// About section, right column — compact "Currently" facts.
export const currently = [
  { label: "FOCUS", value: "Systems, applied ML, embedded" },
  { label: "STUDYING", value: "B.E. EEC, Thapar Institute" },
  { label: "GRADUATING", value: "May 2027" },
  { label: "BUILDING", value: "PlacementLog" },
  { label: "BASED", value: "Patiala, India" },
] as const;

export interface StatTile {
  label: string;
  value: string;
}

// Optional stat tiles under the "Currently" list. Empty by default — never
// render a fabricated number. Uncomment and fill in a real value to add
// one; delete the line to drop it. The About section's layout already
// looks complete with zero tiles, so there's no rush to fill these in.
export const stats: StatTile[] = [
  // TODO: CGPA — fill in or delete this tile
  // { label: "CGPA", value: "" },
  // TODO: LeetCode problems solved — fill in or delete this tile
  // { label: "LeetCode Solved", value: "" },
  // TODO: Projects shipped — fill in or delete this tile
  // { label: "Projects Shipped", value: "" },
];

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

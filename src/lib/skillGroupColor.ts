// Small color dot per skill group — reuses the same hue system as the
// project category borders/dots (see categoryColor.ts) so the site's color
// use reads as one system rather than two unrelated palettes. Where a
// group has an obvious project-tag equivalent it shares that hue; the two
// groups with no equivalent (Languages, Tools) get the fifth "languages"
// hue and the accent color respectively.
export const skillGroupColor: Record<string, string> = {
  Languages: "bg-cat-languages",
  "ML / Data": "bg-cat-ml",
  "Web / Backend": "bg-cat-web",
  Embedded: "bg-cat-embedded",
  Tools: "bg-accent",
};

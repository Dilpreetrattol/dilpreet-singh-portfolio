// Skills, grouped and compact. No proficiency percentages or star ratings —
// they're unfalsifiable and read as padding.

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "ML / Data",
    items: ["PyTorch", "HuggingFace", "LlamaIndex", "ChromaDB", "Pandas", "NumPy"],
  },
  {
    label: "Web / Backend",
    items: ["Flask", "Next.js", "React", "SQLite", "Jinja", "REST APIs"],
  },
  {
    label: "Embedded",
    items: ["ESP32", "Arduino", "I2C", "Sensor Calibration", "Blynk IoT"],
  },
  {
    label: "Tools",
    items: ["Git", "Linux", "VS Code", "Streamlit", "Chart.js"],
  },
];

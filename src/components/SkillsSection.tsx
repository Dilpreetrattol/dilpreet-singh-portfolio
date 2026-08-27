import { skillGroups } from "@/content/skills";
import { skillGroupColor } from "@/lib/skillGroupColor";
import { Chip } from "./ui/Chip";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="scroll-mt-16 border-t border-border"
    >
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <SectionHeading>Skills</SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.label} delay={Math.min(index, 4) * 60}>
              <h3 className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-ink-mute">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${skillGroupColor[group.label]}`}
                  aria-hidden="true"
                />
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

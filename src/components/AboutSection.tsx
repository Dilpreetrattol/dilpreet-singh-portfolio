import { about, currently, stats } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" aria-label="About" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <SectionHeading>About</SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <FadeIn as="div" className="flex flex-col gap-4 lg:col-span-3">
            {about.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink-dim">
                {paragraph}
              </p>
            ))}
          </FadeIn>

          <FadeIn as="div" delay={80} className="lg:col-span-2">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-ink-mute">
              Currently
            </h3>
            <dl className="mt-3 divide-y divide-border border-t border-border">
              {currently.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="font-mono text-xs uppercase tracking-wider text-ink-mute">
                    {item.label}
                  </dt>
                  <dd className="font-mono text-sm text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>

            {stats.length > 0 && (
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border bg-surface-1 p-4 text-center"
                  >
                    <div className="font-display text-2xl font-semibold text-ink">{stat.value}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink-mute">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

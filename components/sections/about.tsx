import { CircleCheck } from "lucide-react";
import { about, stats } from "@/lib/data";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  const cards = [about.mission, about.vision];

  return (
    <Section id="about" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="about-heading"
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
            align="left"
          />
          <Reveal delay={0.1} className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            {about.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(({ title, description, icon: Icon }, i) => (
              <Reveal key={title} delay={0.15 + i * 0.08}>
                <div className="h-full rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="lg:pt-6">
          <div className="relative overflow-hidden rounded-3xl border bg-card p-6 shadow-card sm:p-8">
            <div className="bg-brand-gradient absolute inset-x-0 top-0 h-1" aria-hidden />
            <h3 className="text-xl font-bold">Why choose NV Technology</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              One partner for building your product and growing the team behind it.
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {about.whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-success" aria-hidden />
                  <span className="text-sm leading-relaxed text-foreground sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t pt-6">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <dt className="text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="font-display text-3xl font-bold text-gradient">
                    {s.value}
                    {s.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

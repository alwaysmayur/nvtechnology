import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/data";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Services() {
  return (
    <Section id="services" variant="muted" aria-labelledby="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="Services"
        title="Everything you need to launch and scale digital products"
        description="From the first wireframe to cloud infrastructure and growth marketing — one accountable team, end to end."
      />
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map(({ slug, title, description, points, icon: Icon }, i) => (
          <li key={slug}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card">
                <div
                  className="absolute -top-20 -right-20 size-48 rounded-full bg-[radial-gradient(closest-side,rgb(79_70_229/0.14),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground ring-1 ring-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="size-4 shrink-0 text-highlight-foreground" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?interest=Service`}
                  className="mt-7 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-semibold text-brand after:absolute after:inset-0 after:content-['']"
                  aria-label={`Learn more about ${title}`}
                >
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </Link>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

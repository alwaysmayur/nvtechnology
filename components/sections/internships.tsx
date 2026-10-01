import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Star } from "lucide-react";
import { internshipIntro, internshipPerks, internshipPlans, internshipTracks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";

type InternshipsProps = {
  /** Full variant (used on /internships) also shows duration plans */
  full?: boolean;
};

export function Internships({ full = false }: InternshipsProps) {
  return (
    <Section id="internships" aria-labelledby="internships-heading">
      <SectionHeading
        id="internships-heading"
        eyebrow={full ? "Program tracks" : internshipIntro.eyebrow}
        title={full ? "Choose the track that fits your goals" : internshipIntro.title}
        description={full ? "Every track pairs you with a mentor and puts you on real client work from week one." : internshipIntro.description}
      />

      {/* Tracks */}
      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {internshipTracks.map(({ title, description, skills, durations, icon: Icon }, i) => (
          <li key={title} className="h-full">
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {durations.map((d) => (
                      <Badge key={d} variant="highlight">
                        <CalendarDays aria-hidden />
                        {d}
                      </Badge>
                    ))}
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${title} skills`}>
                  {skills.map((s) => (
                    <li key={s}>
                      <Badge variant="outline">{s}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
        <li className="h-full md:col-span-2 lg:col-span-1">
          <Reveal delay={0.16} className="h-full">
            <div className="bg-brand-gradient relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 text-white shadow-brand">
              <div className="bg-grid absolute inset-0 opacity-20" aria-hidden />
              <div className="relative">
                <h3 className="text-lg font-semibold">Not sure which track?</h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo-50">
                  Book a free 15-minute counselling call and we&apos;ll recommend a path based on your skills and goals.
                </p>
              </div>
              <Button asChild variant="white" className="relative mt-6 w-fit">
                <Link href="/contact?interest=Internship">
                  Talk to a mentor
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
        </li>
      </ul>

      {/* Duration plans */}
      {full ? (
        <div className="mt-24">
          <SectionHeading
            eyebrow="Durations"
            title="45 days, 3 months or 6 months"
            description="Pick a duration that matches your semester schedule and career goals."
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {internshipPlans.map((plan, i) => (
              <li key={plan.duration}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article
                    className={cn(
                      "relative flex h-full flex-col rounded-2xl border bg-card p-7 shadow-soft",
                      plan.featured && "border-primary/50 shadow-glow lg:-translate-y-3",
                    )}
                  >
                    {plan.featured ? (
                      <Badge variant="default" className="absolute -top-3 left-7">
                        <Star aria-hidden /> Most popular
                      </Badge>
                    ) : null}
                    <p className="text-sm font-semibold text-brand">{plan.label}</p>
                    <h3 className="mt-2 font-display text-3xl font-bold">{plan.duration}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                    <ul className="mt-6 flex flex-col gap-3 border-t pt-6">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm">
                          <Check className="size-4 shrink-0 text-success" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={plan.featured ? "default" : "outline"} className="mt-8 w-full">
                      <Link href="#apply">Apply for {plan.duration}</Link>
                    </Button>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Perks */}
      <div className="mt-20 rounded-3xl border bg-surface p-6 sm:p-10">
        <h3 className="text-center text-2xl font-bold sm:text-3xl">What you get</h3>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {internshipPerks.map(({ title, description, icon: Icon }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.06} className="flex flex-col items-center text-center">
                <span className="grid size-14 place-items-center rounded-2xl border bg-card text-brand shadow-soft">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h4 className="mt-4 font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        {!full ? (
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/internships#apply">
                Apply Now
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/internships">View all programs</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </Section>
  );
}

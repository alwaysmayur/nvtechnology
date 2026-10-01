import Link from "next/link";
import { ArrowRight, BarChart3, Check, Clock, MonitorSmartphone } from "lucide-react";
import { trainingIntro, trainingPrograms, type Level } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";

const levelStyles: Record<Level, string> = {
  Beginner: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  Intermediate: "border-amber-500/25 bg-amber-500/10 text-amber-800 dark:text-amber-300",
  Advanced: "border-rose-500/25 bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

export function Training({ limit, variant = "muted" }: { limit?: number; variant?: "default" | "muted" }) {
  const programs = limit ? trainingPrograms.slice(0, limit) : trainingPrograms;

  return (
    <Section id="training" variant={variant} aria-labelledby="training-heading">
      <SectionHeading
        id="training-heading"
        eyebrow={trainingIntro.eyebrow}
        title={trainingIntro.title}
        description={trainingIntro.description}
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map(({ title, description, level, duration, mode, highlights, icon: Icon }, i) => (
          <li key={title}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium", levelStyles[level])}>
                      <BarChart3 className="size-3.5" aria-hidden />
                      {level}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                  <dl className="flex flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1.5">
                      <dt className="sr-only">Duration</dt>
                      <Clock className="size-3.5 text-muted-foreground" aria-hidden />
                      <dd className="font-medium">{duration}</dd>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1.5">
                      <dt className="sr-only">Mode</dt>
                      <MonitorSmartphone className="size-3.5 text-muted-foreground" aria-hidden />
                      <dd className="font-medium">{mode.join(" / ")}</dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-auto flex flex-col gap-5 border-t p-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Syllabus highlights</p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm">
                          <Check className="size-4 shrink-0 text-success" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact?interest=Training" aria-label={`Enroll in ${title}`}>
                      Enroll now
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
      {limit && limit < trainingPrograms.length ? (
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/training">
              <Badge variant="soft" className="mr-1">{trainingPrograms.length}</Badge>
              Browse all courses
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      ) : null}
    </Section>
  );
}

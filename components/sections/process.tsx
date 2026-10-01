import type { ProcessStep } from "@/lib/data";
import { processSteps } from "@/lib/data";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";

type ProcessProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: ProcessStep[];
  variant?: "default" | "muted";
};

export function Process({
  id = "process",
  eyebrow = "How we work",
  title = "A clear, proven process from idea to launch",
  description = "No surprises. You always know what we're building, why, and when it ships.",
  steps = processSteps,
  variant = "default",
}: ProcessProps) {
  return (
    <Section id={id} variant={variant} aria-labelledby={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} eyebrow={eyebrow} title={title} description={description} />
      <div className="relative mt-16">
      {/* connector line (desktop) */}
      <div
        className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 lg:block"
        aria-hidden
      />
      <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map(({ step, title: stepTitle, description: stepDescription, icon: Icon }, i) => (
          <li key={step} className="relative">
            <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
              <span className="relative grid size-14 place-items-center rounded-2xl border bg-card text-brand shadow-card">
                <Icon className="size-6" aria-hidden />
                <span className="bg-brand-gradient absolute -top-2 -right-2 grid size-6 place-items-center rounded-full text-[10px] font-bold text-white">
                  {step}
                </span>
              </span>
              <h3 className="mt-6 text-xl font-semibold">{stepTitle}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{stepDescription}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      </div>
    </Section>
  );
}

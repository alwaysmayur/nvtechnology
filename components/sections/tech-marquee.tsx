import { techStack } from "@/lib/data";
import { Container } from "@/components/layout/container";

export function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section aria-labelledby="tech-heading" className="border-y bg-surface py-10">
      <Container>
        <h2 id="tech-heading" className="text-center text-sm font-medium text-muted-foreground">
          Powered by the technologies trusted by world-class teams
        </h2>
      </Container>
      <div className="group mask-fade-x relative mt-8 overflow-hidden">
        <ul className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
          {items.map((tech, i) => {
            const Icon = tech.icon;
            const duplicate = i >= techStack.length;
            return (
              <li
                key={`${tech.name}-${i}`}
                aria-hidden={duplicate || undefined}
                className={duplicate ? "motion-reduce:hidden" : undefined}
              >
                <span className="flex items-center gap-3 rounded-2xl border bg-card px-5 py-3 shadow-soft">
                  <Icon className="size-6 shrink-0" style={{ color: tech.color }} aria-hidden />
                  <span className="text-sm font-semibold whitespace-nowrap text-foreground">{tech.name}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

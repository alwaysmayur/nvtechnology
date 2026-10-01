import { stats } from "@/lib/data";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/sections/counter";

export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="relative py-6">
      <h2 id="stats-heading" className="sr-only">
        NV Technology in numbers
      </h2>
      <Container>
        <Reveal>
          <div className="bg-brand-gradient relative overflow-hidden rounded-3xl p-2 text-white shadow-glow">
            <div className="bg-grid absolute inset-0 opacity-25" aria-hidden />
            <dl className="relative grid grid-cols-2 lg:grid-cols-4">
              {stats.map(({ label, value, suffix, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center gap-2 px-4 py-8 text-center sm:py-10">
                  <Icon className="size-6 text-cyan-200" aria-hidden />
                  <dt className="order-2 text-sm font-medium text-indigo-100 sm:text-base">{label}</dt>
                  <dd className="order-1 font-display text-3xl font-extrabold sm:text-5xl">
                    <Counter value={value} suffix={suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { hero, heroStats } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CodeWindow } from "@/components/sections/code-window";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      {/* Background: grid + gradient mesh */}
      <div className="bg-grid mask-radial absolute inset-0 -z-10" aria-hidden />
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute -top-32 left-[10%] h-[26rem] w-[26rem] rounded-full bg-[#4f46e5]/25 blur-[120px]" />
        <div className="absolute top-20 right-[5%] h-[22rem] w-[22rem] rounded-full bg-[#06b6d4]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[18rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#818cf8]/10 blur-[100px]" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Link
            href="/internships"
            className="group inline-flex animate-fade-up items-center gap-2 rounded-full border bg-background/70 py-1 pr-3 pl-1 text-xs font-medium text-foreground shadow-soft backdrop-blur transition-colors hover:border-primary/40 sm:text-sm"
          >
            <span className="bg-brand-gradient inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold text-white">
              <Sparkles className="size-3" aria-hidden /> New
            </span>
            {hero.badge}
            <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>

          <h1
            id="hero-heading"
            className="mt-7 animate-fade-up text-5xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl [animation-delay:80ms]"
          >
            {hero.title.slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">{hero.title[hero.title.length - 1]}</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-muted-foreground sm:text-lg [animation-delay:160ms]">
            {hero.description}
          </p>

          <div className="mt-9 flex w-full animate-fade-up flex-col gap-3 sm:w-auto sm:flex-row [animation-delay:240ms]">
            <Button asChild size="lg">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={hero.secondaryCta.href}>
                <GraduationCap aria-hidden />
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </div>

          <dl className="mt-12 grid w-full max-w-lg animate-fade-up grid-cols-3 divide-x divide-border rounded-2xl border bg-background/60 py-4 shadow-soft backdrop-blur [animation-delay:320ms]">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-2 lg:items-start lg:px-5">
                <dt className="order-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
                <dd className="order-1 font-display text-xl font-bold text-foreground sm:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <CodeWindow />
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ctaBanner } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="bg-brand-gradient relative isolate overflow-hidden rounded-3xl px-6 py-14 text-center text-white shadow-glow sm:px-12 sm:py-20">
            <div className="bg-grid absolute inset-0 -z-10 opacity-25 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" aria-hidden />
            <div className="absolute -top-24 -left-24 -z-10 size-72 rounded-full bg-cyan-400/30 blur-3xl" aria-hidden />
            <div className="absolute -right-24 -bottom-24 -z-10 size-72 rounded-full bg-indigo-300/30 blur-3xl" aria-hidden />
            <h2 id="cta-heading" className="mx-auto max-w-2xl text-3xl font-bold sm:text-5xl">
              {ctaBanner.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-indigo-50 sm:text-lg">{ctaBanner.description}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="white">
                <Link href={ctaBanner.primary.href}>
                  {ctaBanner.primary.label}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/30 bg-white/10 text-white shadow-none backdrop-blur hover:bg-white/20"
              >
                <Link href={ctaBanner.secondary.href}>{ctaBanner.secondary.label}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

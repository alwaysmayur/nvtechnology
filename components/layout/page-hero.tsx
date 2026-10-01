import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  children?: React.ReactNode;
};

/** Compact header used on sub-routes (/internships, /training, /contact). */
export function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="bg-grid mask-radial absolute inset-0 -z-10" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(79_70_229/0.22),transparent)] blur-2xl"
        aria-hidden
      />
      <Container className="flex flex-col items-center text-center">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-4" />
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        <span className="mt-6 animate-fade-up text-xs font-semibold tracking-wider text-brand uppercase [animation-delay:80ms]">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-3xl animate-fade-up text-4xl font-bold sm:text-5xl lg:text-6xl [animation-delay:140ms]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-muted-foreground sm:text-lg [animation-delay:200ms]">
          {description}
        </p>
        {children ? <div className="mt-8 animate-fade-up [animation-delay:260ms]">{children}</div> : null}
      </Container>
    </section>
  );
}

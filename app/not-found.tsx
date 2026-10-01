import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-28">
      <div className="bg-grid mask-radial absolute inset-0 -z-10" aria-hidden />
      <Container className="flex flex-col items-center text-center">
        <p className="font-display text-8xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            <ArrowLeft aria-hidden />
            Back to home
          </Link>
        </Button>
      </Container>
    </section>
  );
}

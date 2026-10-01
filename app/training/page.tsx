import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta, trainingIntro } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Training } from "@/components/sections/training";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: pageMeta.training.title,
  description: pageMeta.training.description,
  alternates: { canonical: "/training" },
  openGraph: { title: pageMeta.training.title, description: pageMeta.training.description, url: "/training" },
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        breadcrumb="Training"
        eyebrow={trainingIntro.eyebrow}
        title={trainingIntro.title}
        description={trainingIntro.description}
      >
        <Button asChild size="lg">
          <Link href="/contact?interest=Training">
            Enquire about a batch
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </PageHero>
      <Training variant="default" />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}

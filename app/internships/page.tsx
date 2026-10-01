import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { internshipIntro, internshipSteps, pageMeta } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Internships } from "@/components/sections/internships";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: pageMeta.internships.title,
  description: pageMeta.internships.description,
  alternates: { canonical: "/internships" },
  openGraph: { title: pageMeta.internships.title, description: pageMeta.internships.description, url: "/internships" },
};

export default function InternshipsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Internships"
        eyebrow={internshipIntro.eyebrow}
        title={internshipIntro.title}
        description={internshipIntro.description}
      >
        <Button asChild size="lg">
          <Link href="#apply">
            Apply Now
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </PageHero>
      <Stats />
      <Internships full />
      <Process
        id="how-to-apply"
        eyebrow="How to apply"
        title="From application to certificate in four steps"
        description="A simple, transparent process — most applicants hear back within 48 hours."
        steps={internshipSteps}
        variant="muted"
      />
      <div id="apply" className="scroll-mt-24 pt-20 sm:pt-24">
        <Contact defaultInterest="Internship" showHeading={false} />
      </div>
      <Faq />
    </>
  );
}

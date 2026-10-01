import type { Metadata } from "next";
import { contactIntro, pageMeta } from "@/lib/data";
import { interestOptions, type Interest } from "@/lib/validations";
import { PageHero } from "@/components/layout/page-hero";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: { title: pageMeta.contact.title, description: pageMeta.contact.description, url: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{ interest?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { interest } = await searchParams;
  const value = Array.isArray(interest) ? interest[0] : interest;
  const defaultInterest = interestOptions.includes(value as Interest) ? (value as Interest) : undefined;

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow={contactIntro.eyebrow}
        title={contactIntro.title}
        description={contactIntro.description}
      />
      {/* key resets the form when navigating between ?interest= links */}
      <Contact key={defaultInterest ?? "none"} defaultInterest={defaultInterest} showHeading={false} />
      <Faq />
    </>
  );
}

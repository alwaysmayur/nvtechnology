import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { internshipOffers, siteConfig } from "@/lib/data";
import { InternshipDetailView } from "@/components/sections/internship-detail-view";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getOffer(slug: string) {
  return internshipOffers.find((o) => o.slug === slug || o.id === slug) ?? null;
}

export async function generateStaticParams() {
  return internshipOffers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) return {};

  return {
    title: `${offer.title} | ${siteConfig.name}`,
    description: offer.shortDescription,
    alternates: { canonical: `/internships/${offer.slug}` },
    openGraph: {
      title: `${offer.title} | ${siteConfig.name}`,
      description: offer.shortDescription,
      url: `/internships/${offer.slug}`,
    },
  };
}

export default async function InternshipDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) notFound();

  return <InternshipDetailView offer={offer} />;
}

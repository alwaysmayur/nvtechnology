"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Code2,
  Sparkles,
  Users,
} from "lucide-react";
import { internshipIntro, internshipOffers, type InternshipOffer } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { InternshipApplyModal } from "@/components/sections/internship-apply-modal";

type InternshipsProps = {
  full?: boolean;
};

export function Internships({ full = false }: InternshipsProps) {
  const [selectedOffer, setSelectedOffer] = React.useState<InternshipOffer | null>(null);

  return (
    <Section id="internships" aria-labelledby="internships-heading">
      <SectionHeading
        id="internships-heading"
        eyebrow={full ? "Our Internship Programs" : internshipIntro.eyebrow}
        title={full ? "Choose your software development track" : "Industry-focused internship programs"}
        description={
          full
            ? "We offer two focused internships designed around live engineering tasks, code reviews, and real project delivery."
            : "Work through practical development workflows on real projects with expert mentorship."
        }
      />

      {/* Two Internship Offers Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {internshipOffers.map((offer, index) => {
          const isPopular = offer.popular;
          return (
            <Reveal key={offer.id} delay={index * 0.1} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl border bg-card p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isPopular
                    ? "border-blue-500/60 ring-2 ring-blue-500/20 bg-gradient-to-b from-blue-50/20 to-card dark:from-blue-950/20"
                    : "hover:border-blue-400/40"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                      <Sparkles className="size-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {offer.category}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-foreground">
                      {offer.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300 shrink-0">
                    <Clock className="size-3.5" />
                    {offer.duration}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {offer.price}
                  </span>
                  <span className="text-xs text-muted-foreground">all-inclusive</span>
                </div>

                {/* Short Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {offer.shortDescription}
                </p>

                {/* Development Focus Points */}
                <div className="mt-6 border-t pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-3">
                    Development Focus:
                  </p>
                  <ul className="space-y-2.5">
                    {offer.developmentFocus.map((focus, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/90">
                        <CheckCircle2 className="size-4 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-6 border-t pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {offer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto grid grid-cols-2 gap-3 pt-7 border-t">
                  <Button
                    onClick={() => setSelectedOffer(offer)}
                    size="default"
                    className={`rounded-full font-semibold shadow-sm ${
                      isPopular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    Apply Now
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="default"
                    className="rounded-full border-muted-foreground/30 font-medium hover:border-foreground"
                  >
                    <Link href={`/internships/${offer.slug}`}>
                      View Details
                      <ArrowRight className="ml-1 size-3.5" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Perks summary when on full page */}
      {full && (
        <div className="mt-20 max-w-5xl mx-auto rounded-3xl border bg-muted/20 p-8 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-foreground">Why Intern at NV Technology?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We bridge the gap between classroom theory and real software delivery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 mb-3">
                <Code2 className="size-6" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Live Client Architecture</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Work with Git repositories, pull requests, and modern engineering conventions.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 mb-3">
                <Users className="size-6" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Senior Mentorship</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Regular reviews and feedback from working engineers who guide your development.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 mb-3">
                <Award className="size-6" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Verified Credentials</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Receive an official internship certificate and completion letter for your resume.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Shared Apply Modal */}
      <InternshipApplyModal
        offer={selectedOffer}
        isOpen={Boolean(selectedOffer)}
        onClose={() => setSelectedOffer(null)}
      />
    </Section>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Cpu,
  MessageSquare,
  UserCheck,
} from "lucide-react";
import type { InternshipOffer } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { InternshipApplyModal } from "@/components/sections/internship-apply-modal";

export function InternshipDetailView({ offer }: { offer: InternshipOffer }) {
  const [isApplyModalOpen, setIsApplyModalOpen] = React.useState(false);
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);

  const whatsappMessage = encodeURIComponent(
    `Hi NV Technology, I am interested in applying for the "${offer.title}" (${offer.duration} - ${offer.price}).`
  );
  const talkToTeamUrl = `https://wa.me/919537412245?text=${whatsappMessage}`;

  return (
    <>
      {/* ── Page Hero Header (matching screenshots) ────────────────── */}
      <section className="relative isolate border-b bg-gradient-to-b from-blue-50/50 via-background to-background pt-28 pb-12 dark:from-blue-950/20">
        <Container>
          {/* Back link */}
          <Link
            href="/internships"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
          >
            <ArrowLeft className="size-3.5" />
            Back to Internships
          </Link>

          <div className="max-w-3xl">
            {offer.badge ? (
              <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white mb-3 shadow-sm">
                {offer.badge}
              </span>
            ) : (
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {offer.category}
              </span>
            )}

            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {offer.title}
            </h1>

            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {offer.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">
                {offer.price}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
                <Calendar className="size-3.5" />
                {offer.duration}
              </span>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => setIsApplyModalOpen(true)}
                size="lg"
                className="rounded-full bg-blue-600 px-8 font-semibold text-white shadow-md hover:bg-blue-700"
              >
                Apply Now
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-muted-foreground/30 font-medium"
              >
                <a href={talkToTeamUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 size-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Overview & What You Get 2-Column Section ───────────────── */}
      <section className="py-14 border-b">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left: Overview & Development Focus */}
            <div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Internship Overview</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {offer.overview}
                </p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  Live cohort curriculum focused on hands-on practical delivery.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-bold text-foreground">Development Focus</h3>
                <ul className="mt-4 space-y-3">
                  {offer.developmentFocus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="size-5 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: What You Get Card */}
            <div>
              <div className="sticky top-24 rounded-2xl border bg-card p-6 shadow-md">
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  <Award className="size-5 text-blue-600 dark:text-blue-400" />
                  What You Get
                </h3>
                <ul className="mt-4 space-y-3">
                  {offer.whatYouGet.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/85">
                      <Award className="size-4 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t pt-5">
                  <Button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-sm font-semibold"
                  >
                    Apply for {offer.duration}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Development Roadmap Timeline ───────────────────────────── */}
      <section className="py-14 border-b bg-muted/15">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-foreground">Development Roadmap</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Demo schedule — replace with live cohort dates later.
            </p>

            <div className="relative mt-8 ml-3 space-y-8 border-l-2 border-blue-500/30 pl-6">
              {offer.roadmap.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-blue-600 bg-background transition-transform duration-200 group-hover:scale-125" />

                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {step.title}
                  </span>
                  <h4 className="mt-0.5 text-sm font-semibold text-foreground">
                    {step.subtitle}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Technology Stack ───────────────────────────────────────── */}
      <section className="py-14 border-b">
        <Container>
          <h2 className="text-xl font-bold text-foreground">Technology Stack</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {offer.technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 rounded-xl border bg-card p-3 shadow-xs transition-colors hover:border-blue-500/40"
              >
                <Cpu className="size-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-xs font-semibold text-foreground/90">{tech}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Who Can Join ───────────────────────────────────────────── */}
      <section className="py-14 border-b bg-muted/15">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-foreground">Who Can Join</h2>
            <ul className="mt-5 space-y-3">
              {offer.whoCanJoin.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                  <UserCheck className="size-4 shrink-0 text-blue-600 dark:text-blue-400 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────────── */}
      <section className="py-14 border-b">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-foreground">FAQ</h2>

            <div className="mt-6 space-y-3">
              {offer.faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border bg-card transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-4 text-left text-sm font-semibold text-foreground hover:text-blue-600"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`size-4 text-muted-foreground transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t bg-blue-50/30 px-4 py-3.5 text-xs leading-relaxed text-foreground/80 dark:bg-blue-950/20">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Bottom Dark Navy Banner (matching screenshot) ─────────── */}
      <section className="py-14 bg-slate-900 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Apply for the {offer.duration.toLowerCase()} internship
            </h2>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">
              Join a focused development environment and complete a reviewed project.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                onClick={() => setIsApplyModalOpen(true)}
                size="default"
                className="rounded-full bg-blue-600 px-6 font-semibold text-white hover:bg-blue-500 shadow-md"
              >
                Apply Now
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-full border-slate-700 text-white hover:bg-slate-800"
              >
                <Link href="/contact?interest=Internship">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Apply Modal ────────────────────────────────────────────── */}
      <InternshipApplyModal
        offer={offer}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  );
}

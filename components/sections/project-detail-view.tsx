"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Layers,
  Monitor,
  Package,
  PlayCircle,
  Terminal,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import type { Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SourceCodeModal } from "@/components/sections/source-code-modal";

export function ProjectDetailView({ project }: { project: Project }) {
  const [isSourceModalOpen, setIsSourceModalOpen] = React.useState(false);
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);
  const [activeScreenshot, setActiveScreenshot] = React.useState<number>(0);

  const demoRef = React.useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi NV Technology, I am looking at "${project.title}" (${project.price}) and would like to talk with the team.`
  );
  const talkToTeamUrl = `https://wa.me/919537412245?text=${whatsappMessage}`;

  return (
    <>
      {/* ── Top Header Section (matching screenshots 2, 3, 4, 5) ───── */}
      <section className="relative isolate border-b bg-gradient-to-b from-blue-50/50 via-background to-background pt-28 pb-10 dark:from-blue-950/20">
        <Container>
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
          >
            <ArrowLeft className="size-3.5" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            {/* Category */}
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.technology || "MERN Stack"}
            </span>

            {/* Title */}
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">
                {project.price}
              </span>
              {project.originalPrice && (
                <span className="text-base text-muted-foreground line-through">
                  {project.originalPrice}
                </span>
              )}
            </div>

            {/* Quick Actions Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                onClick={scrollToDemo}
                size="default"
                className="rounded-full bg-blue-600 px-6 font-semibold text-white shadow-md hover:bg-blue-700"
              >
                <PlayCircle className="mr-2 size-4" />
                Watch Demo
              </Button>

              <Button
                onClick={() => setIsSourceModalOpen(true)}
                variant="outline"
                size="default"
                className="rounded-full border-blue-600/40 font-semibold text-blue-600 hover:bg-blue-50 dark:border-blue-400/40 dark:text-blue-400 dark:hover:bg-blue-950/40"
              >
                Get Source Code
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="rounded-full border-muted-foreground/30 font-medium"
              >
                <a href={talkToTeamUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 size-4" />
                  Talk to the team
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Project Demo Section ───────────────────────────────────── */}
      <section ref={demoRef} className="py-12 border-b bg-muted/20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Project demo</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Watch a walkthrough of this {project.technology || "MERN stack"} project.
            </p>

            {/* Video Player */}
            <div className="mt-6 overflow-hidden rounded-2xl border bg-black shadow-2xl">
              <div className="relative aspect-video w-full">
                <iframe
                  src={project.demoEmbedUrl || "https://www.youtube.com/embed/1xqRzBhEta0?start=1619"}
                  title={`${project.title} walkthrough video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>

            {/* Direct YouTube link */}
            <div className="mt-3 text-sm text-muted-foreground">
              Prefer YouTube?{" "}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-400"
              >
                Open the full demo video
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Overview & Technologies 2-Column Section ───────────────── */}
      <section className="py-14 border-b">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left: Overview & Main Features */}
            <div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Project overview</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-bold text-foreground">Main features</h3>
                <ul className="mt-4 space-y-3">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="size-5 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Technologies Card */}
            <div>
              <div className="sticky top-24 rounded-2xl border bg-card p-6 shadow-md">
                <h3 className="text-base font-bold text-foreground">Technologies</h3>
                <ul className="mt-4 space-y-2.5">
                  {project.technologies.map((tech, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 rounded-lg border bg-muted/40 px-3.5 py-2 text-xs font-semibold text-foreground/90"
                    >
                      <Layers className="size-4 text-blue-600 dark:text-blue-400" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2.5 border-t pt-5">
                  <Button
                    onClick={scrollToDemo}
                    variant="outline"
                    className="w-full rounded-full border-blue-600/30 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-400"
                  >
                    <PlayCircle className="mr-2 size-4" />
                    Watch Demo
                  </Button>

                  <Button
                    onClick={() => setIsSourceModalOpen(true)}
                    className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-sm font-semibold"
                  >
                    Get Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Screenshots Section ────────────────────────────────────── */}
      <section className="py-14 border-b bg-muted/15">
        <Container>
          <div>
            <h2 className="text-xl font-bold text-foreground">Screenshots</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Placeholder visuals for the static demo.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {project.screenshots.map((shot, index) => {
              const isSelected = activeScreenshot === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-blue-600 bg-blue-50/40 shadow-md dark:bg-blue-950/20"
                      : "bg-card hover:border-blue-400/50 hover:shadow-sm"
                  }`}
                >
                  {/* Mockup screen box (matching screenshot visual) */}
                  <div className="flex h-36 w-full items-center justify-center rounded-xl border border-dashed border-blue-300/60 bg-blue-500/5 text-blue-700 dark:border-blue-700/50 dark:bg-blue-950/30 dark:text-blue-300">
                    <div className="flex flex-col items-center gap-1.5 text-center px-3">
                      <Monitor className="size-6 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-semibold text-foreground/80">{shot.title}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-xs font-bold text-foreground">{shot.title}</h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                      {shot.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── What's Included & Requirements ─────────────────────────── */}
      <section className="py-14 border-b">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2">
            {/* What's Included */}
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Package className="size-5 text-blue-600 dark:text-blue-400" />
                What&apos;s included
              </h2>
              <ul className="mt-5 space-y-3">
                {project.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Terminal className="size-5 text-blue-600 dark:text-blue-400" />
                Requirements
              </h2>
              <ul className="mt-5 space-y-3">
                {project.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="size-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────────── */}
      <section className="py-14 border-b bg-muted/20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-foreground">FAQ</h2>

            <div className="mt-6 space-y-3">
              {project.faqs.map((faq, index) => {
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

      {/* ── Bottom CTA ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to get {project.title}?
            </h2>
            <p className="mt-2 text-sm text-blue-100 sm:text-base">
              Get immediate access to full clean source code, setup walkthrough, and database schemas.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                onClick={() => setIsSourceModalOpen(true)}
                size="lg"
                className="rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 shadow-lg px-8"
              >
                Get Source Code ({project.price})
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/40 text-white hover:bg-white/10 font-semibold"
              >
                <a href={talkToTeamUrl} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Source Code Inquiry Modal ──────────────────────────────── */}
      <SourceCodeModal
        project={project}
        isOpen={isSourceModalOpen}
        onClose={() => setIsSourceModalOpen(false)}
      />
    </>
  );
}

"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AUTOPLAY_MS = 6000;

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const reduceMotion = useReducedMotion();
  const [[index, direction], setState] = React.useState<[number, number]>([0, 0]);
  const [playing, setPlaying] = React.useState(true);
  const [hovered, setHovered] = React.useState(false);
  const count = testimonials.length;

  const paginate = React.useCallback(
    (dir: number) => setState(([i]) => [(i + dir + count) % count, dir]),
    [count],
  );

  const autoplay = playing && !hovered && !reduceMotion;

  React.useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [autoplay, paginate]);

  const t = testimonials[index];

  return (
    <div
      className="mx-auto mt-14 max-w-4xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client and student testimonials"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") paginate(1);
        if (e.key === "ArrowLeft") paginate(-1);
      }}
    >
      <div className="relative overflow-hidden rounded-3xl border bg-card shadow-card">
        <div className="bg-brand-gradient absolute inset-x-0 top-0 h-1" aria-hidden />
        <Quote className="absolute top-8 right-8 size-16 text-primary/10 sm:size-24" aria-hidden />

        <div aria-live={autoplay ? "off" : "polite"} className="grid min-h-[340px] sm:min-h-[300px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.figure
              key={index}
              custom={direction}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col gap-6 p-7 sm:p-12"
            >
              <div className="flex items-center gap-1" aria-label={`Rated ${t.rating} out of 5`} role="img">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn("size-5", i < t.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40")}
                    aria-hidden
                  />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-relaxed font-medium text-foreground sm:text-2xl sm:leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex flex-wrap items-center gap-4">
                <span
                  className="bg-brand-gradient grid size-12 shrink-0 place-items-center rounded-full font-display text-base font-bold text-white ring-4 ring-accent"
                  aria-hidden
                >
                  {initials(t.name)}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="text-sm text-muted-foreground">{t.role}</span>
                </span>
                <Badge variant={t.type === "Client" ? "soft" : "highlight"} className="sm:ml-auto">
                  {t.type}
                </Badge>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setState([i, i > index ? 1 : -1])}
              aria-label={`Show testimonial ${i + 1}: ${item.name}`}
              aria-current={i === index ? "true" : undefined}
              className="group grid h-6 place-items-center rounded-full px-0.5 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <span
                className={cn(
                  "block h-2 rounded-full transition-all duration-300",
                  i === index ? "w-7 bg-primary" : "w-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60",
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {!reduceMotion ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause autoplay" : "Start autoplay"}
            >
              {playing ? <Pause aria-hidden /> : <Play aria-hidden />}
            </Button>
          ) : null}
          <Button variant="outline" size="icon" onClick={() => paginate(-1)} aria-label="Previous testimonial">
            <ChevronLeft className="size-5" aria-hidden />
          </Button>
          <Button variant="outline" size="icon" onClick={() => paginate(1)} aria-label="Next testimonial">
            <ChevronRight className="size-5" aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  );
}

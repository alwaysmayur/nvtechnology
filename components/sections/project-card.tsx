"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Folder, PlayCircle } from "lucide-react";
import type { Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SourceCodeModal } from "@/components/sections/source-code-modal";

export function ProjectCard({
  project,
  index = 0,
  onOpenSourceModal,
}: {
  project: Project;
  index?: number;
  onOpenSourceModal?: (project: Project) => void;
}) {
  const [internalModalOpen, setInternalModalOpen] = React.useState(false);

  const handleGetSourceCode = () => {
    if (onOpenSourceModal) {
      onOpenSourceModal(project);
    } else {
      setInternalModalOpen(true);
    }
  };

  // Preview features (up to 4 items)
  const displayFeatures = project.features.slice(0, 4);

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40"
      >
        {/* Top Folder Banner (matching screenshot 1) */}
        <Link
          href={`/projects/${project.slug}`}
          className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-inner transition-transform duration-300 group-hover:scale-[1.01]"
        >
          {/* Subtle geometric pattern/glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.18),transparent_60%)]" />

          {/* Folder Icon in Center */}
          <div className="relative flex flex-col items-center gap-2">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Folder className="size-7 text-white stroke-[1.8]" />
            </div>
            <span className="text-[11px] font-medium tracking-wider text-blue-100 uppercase opacity-90">
              Live Demo Ready
            </span>
          </div>

          {/* Quick Play Hover Indicator */}
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <PlayCircle className="size-3.5" />
            <span>Preview</span>
          </div>
        </Link>

        {/* Content Body */}
        <div className="flex flex-1 flex-col pt-4">
          {/* Category Tag */}
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {project.technology || "MERN Stack"}
          </span>

          {/* Title */}
          <Link href={`/projects/${project.slug}`}>
            <h3 className="mt-1 text-lg font-bold text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              {project.title}
            </h3>
          </Link>

          {/* Price */}
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {project.price}
            </span>
            {project.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {project.originalPrice}
              </span>
            )}
          </div>

          {/* Short Description */}
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>

          {/* Feature Checklist */}
          <ul className="mt-4 space-y-2 border-t pt-3" aria-label="Key features">
            {displayFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-foreground/85">
                <Check className="size-3.5 shrink-0 text-blue-500 mt-0.5" strokeWidth={2.5} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Buttons Area */}
          <div className="mt-auto space-y-2 pt-5">
            {/* Watch Demo - Full Width Outline Button */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full rounded-full border-blue-600/30 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-400/30 dark:text-blue-400 dark:hover:bg-blue-950/50 font-medium"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5"
              >
                <PlayCircle className="size-4" />
                <span>Watch Demo</span>
              </a>
            </Button>

            {/* View Project & Get Source Code - Split Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full rounded-full border-muted-foreground/30 font-medium hover:border-foreground"
              >
                <Link href={`/projects/${project.slug}`}>
                  View Project
                </Link>
              </Button>

              <Button
                type="button"
                onClick={handleGetSourceCode}
                size="sm"
                className="w-full rounded-full bg-blue-600 font-medium text-white shadow-sm hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                Get Source Code
              </Button>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Internal Modal when not managed by parent */}
      {!onOpenSourceModal && (
        <SourceCodeModal
          project={project}
          isOpen={internalModalOpen}
          onClose={() => setInternalModalOpen(false)}
        />
      )}
    </>
  );
}

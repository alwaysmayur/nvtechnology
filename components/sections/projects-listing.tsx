"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/sections/project-card";
import { SourceCodeModal } from "@/components/sections/source-code-modal";

type ProjectsListingProps = {
  projects: Project[];
  categories: { value: ProjectCategory | "all"; label: string }[];
};

export function ProjectsListing({ projects, categories }: ProjectsListingProps) {
  const [active, setActive] = React.useState<string>("all");
  const [search, setSearch] = React.useState<string>("");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const filtered = React.useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        active === "all" || p.category === active || (active === "mern" && p.technology.includes("MERN"));
      const matchesSearch =
        !search.trim() ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, active, search]);

  return (
    <Section id="projects-listing" aria-labelledby="projects-listing-heading">
      <div className="flex flex-col items-center gap-6 mb-10">
        {/* Category Tabs */}
        <Tabs value={active} onValueChange={setActive} className="items-center">
          <TabsList aria-label="Filter projects by category" className="flex-wrap justify-center">
            {categories.map((c) => (
              <TabsTrigger key={c.value} value={c.value}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Search input */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by project name or technology..."
            className="w-full rounded-full border bg-background py-2 pl-10 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <motion.div layout className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                onOpenSourceModal={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-16 text-center">
          <Sparkles className="size-10 text-muted-foreground mb-3" />
          <h3 className="text-lg font-semibold">No projects found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search query or switching categories.
          </p>
        </div>
      )}

      {/* Global Source Code Modal */}
      <SourceCodeModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}

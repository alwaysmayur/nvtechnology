"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project, ProjectCategory } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/sections/project-card";
import { SourceCodeModal } from "@/components/sections/source-code-modal";

type ProjectsGridProps = {
  projects: Project[];
  categories: { value: ProjectCategory | "all"; label: string }[];
};

export function ProjectsGrid({ projects, categories }: ProjectsGridProps) {
  const [active, setActive] = React.useState<string>("all");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const visible =
    active === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category === active ||
            (active === "mern" && p.technology?.includes("MERN"))
        );

  return (
    <div className="mt-12">
      <Tabs value={active} onValueChange={setActive} className="items-center">
        <TabsList aria-label="Filter projects by category" className="flex-wrap justify-center mb-8">
          {categories.map((c) => (
            <TabsTrigger key={c.value} value={c.value}>
              {c.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={active} className="w-full">
          <motion.div layout className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  onOpenSourceModal={(proj) => setSelectedProject(proj)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </TabsContent>
      </Tabs>

      <SourceCodeModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

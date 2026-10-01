"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project, ProjectCategory } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectsGridProps = {
  projects: Project[];
  categories: { value: ProjectCategory | "all"; label: string }[];
};

const categoryLabel: Record<ProjectCategory, string> = { web: "Web", mobile: "Mobile", software: "Software" };

export function ProjectsGrid({ projects, categories }: ProjectsGridProps) {
  const [active, setActive] = React.useState<string>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <Tabs value={active} onValueChange={setActive} className="mt-12 items-center">
      <TabsList aria-label="Filter projects by category">
        {categories.map((c) => (
          <TabsTrigger key={c.value} value={c.value}>
            {c.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* One panel whose value follows the active tab, so filtering can animate between categories */}
      <TabsContent value={active} className="w-full">
      <motion.ul layout className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <article className="group h-full overflow-hidden rounded-2xl border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden border-b bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${categoryLabel[project.category]} project screenshot`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge variant="outline" className="absolute top-3 left-3 bg-background/90 backdrop-blur">
                    {categoryLabel[project.category]}
                  </Badge>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-1 flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {project.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="soft">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      </TabsContent>
    </Tabs>
  );
}

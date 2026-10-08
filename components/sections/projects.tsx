import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectCategories, projects } from "@/lib/data";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <Section id="projects" variant="muted" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Portfolio"
        title="Recent work we're proud of"
        description="A selection of products we've designed, built and shipped for clients across retail, healthcare, logistics and education."
      />
      <ProjectsGrid projects={projects} categories={projectCategories} />
      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" variant="outline">
          <Link href="/projects">
            View All Projects
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </Section>
  );
}

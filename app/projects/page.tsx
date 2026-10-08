import type { Metadata } from "next";
import { pageMeta, projectCategories, projects } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { ProjectsListing } from "@/components/sections/projects-listing";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Featured Development Projects | " + pageMeta.projects.title,
  description:
    "Explore practical MERN stack and software projects built around modern technologies. Watch video demos, check features, and get source code packages.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Featured Development Projects | NV Technology",
    description:
      "Explore practical MERN stack and software projects built around modern technologies. Watch video demos, check features, and get source code packages.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Projects"
        eyebrow="Portfolio & Packages"
        title="Featured Development Projects"
        description="Explore practical software projects built around modern technologies and real-world use cases. Watch video demos, explore features, and get immediate access to source code."
      />
      <ProjectsListing projects={projects} categories={projectCategories} />
      <CtaBanner />
    </>
  );
}

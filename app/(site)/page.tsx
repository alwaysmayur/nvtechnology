import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";

// Below-the-fold sections are split into separate chunks so the hero ships less JS.
const Internships = dynamic(() => import("@/components/sections/internships").then((m) => m.Internships));
const Training = dynamic(() => import("@/components/sections/training").then((m) => m.Training));
const Process = dynamic(() => import("@/components/sections/process").then((m) => m.Process));
const Stats = dynamic(() => import("@/components/sections/stats").then((m) => m.Stats));
const Projects = dynamic(() => import("@/components/sections/projects").then((m) => m.Projects));
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then((m) => m.Testimonials));
const Faq = dynamic(() => import("@/components/sections/faq").then((m) => m.Faq));
const CtaBanner = dynamic(() => import("@/components/sections/cta-banner").then((m) => m.CtaBanner));
const Contact = dynamic(() => import("@/components/sections/contact").then((m) => m.Contact));

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Internships />
      <Training limit={3} />
      <Process />
      <Stats />
      <Projects />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
    </>
  );
}

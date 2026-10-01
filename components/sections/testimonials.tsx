import { testimonials } from "@/lib/data";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";

export function Testimonials() {
  return (
    <Section id="testimonials" aria-labelledby="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Testimonials"
        title="Loved by clients and students alike"
        description="Don't take our word for it — here's what the people we build for and with have to say."
      />
      <TestimonialsCarousel testimonials={testimonials} />
    </Section>
  );
}

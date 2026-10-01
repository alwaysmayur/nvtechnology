import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import { faqs } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Faq({ variant = "muted" }: { variant?: "default" | "muted" }) {
  return (
    <Section id="faq" variant={variant} aria-labelledby="faq-heading">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about working with us, our internships and certificates."
            align="left"
          />
          <Reveal delay={0.1} className="rounded-2xl border bg-card p-6 shadow-soft">
            <MessageCircleQuestion className="size-8 text-brand" aria-hidden />
            <p className="mt-4 font-semibold">Still have questions?</p>
            <p className="mt-1 text-sm text-muted-foreground">Our team is happy to help — we usually reply within a few hours.</p>
            <Button asChild variant="outline" className="mt-5">
              <Link href="/contact">Contact support</Link>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="faq-0" className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}

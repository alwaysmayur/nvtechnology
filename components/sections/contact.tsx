import { contactInfo, contactIntro, siteConfig } from "@/lib/data";
import type { Interest } from "@/lib/validations";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";

type ContactProps = {
  defaultInterest?: Interest;
  showHeading?: boolean;
};

export function Contact({ defaultInterest, showHeading = true }: ContactProps) {
  return (
    <Section id="contact" aria-labelledby={showHeading ? "contact-heading" : undefined} aria-label={showHeading ? undefined : "Contact form"} className={showHeading ? undefined : "pt-0 sm:pt-0 lg:pt-0"}>
      {showHeading ? (
        <SectionHeading
          id="contact-heading"
          eyebrow={contactIntro.eyebrow}
          title={contactIntro.title}
          description={contactIntro.description}
        />
      ) : null}

      <div className={showHeading ? "mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]" : "grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]"}>
        <Reveal>
          <div className="rounded-3xl border bg-card p-6 shadow-card sm:p-8">
            <h3 className="text-xl font-bold">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required.</p>
            <ContactForm defaultInterest={defaultInterest} />
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          <ul className="grid gap-4 sm:grid-cols-2">
            {contactInfo.map(({ label, value, href, icon: Icon }, i) => (
              <li key={label}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className="flex h-full flex-col gap-3 rounded-2xl border bg-card p-5 shadow-soft">
                    <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <p className="text-sm font-semibold">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm break-words text-muted-foreground transition-colors hover:text-brand">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{value}</p>
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.2} className="flex-1">
            <div className="h-full min-h-72 overflow-hidden rounded-2xl border bg-muted shadow-soft">
              <iframe
                title={`Map showing the location of ${siteConfig.name}`}
                src={siteConfig.mapEmbedUrl}
                className="h-full min-h-72 w-full border-0 grayscale-[30%] dark:opacity-80 dark:invert-[90%] dark:hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

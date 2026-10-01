import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footer, footerGroups, siteConfig, socials } from "@/lib/data";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{footer.about}</p>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                  <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                  <Mail className="size-4 shrink-0 text-brand" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">{footer.newsletter.title}</h3>
            <p className="text-sm text-muted-foreground">{footer.newsletter.description}</p>
            <NewsletterForm />
            <ul className="flex items-center gap-2" aria-label="Social media">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.shortName} on ${label}`}
                    className="grid size-10 place-items-center rounded-xl border bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-brand"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-medium">{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}

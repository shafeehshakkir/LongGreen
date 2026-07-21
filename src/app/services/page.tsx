import type { Metadata } from "next"
import Image from "next/image"
import { servicesCta, servicesHero } from "@/content/services"
import { ButtonLink } from "@/components/ui/Button"
import { FadeIn } from "@/components/ui/FadeIn"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { CTASection } from "@/components/sections/CTASection"
import { ServicesList } from "@/components/sections/ServicesList"
import { GlobalPresenceMap } from "@/components/sections/GlobalPresenceMap"

export const metadata: Metadata = {
  title:
    "Our Services | Finance Controller, Bookkeeping, ERP, Audit, Tax & CFO Advisory",
  description:
    "Outsourced finance controller, bookkeeping, ERP implementation, internal audit, taxation and CFO advisory for businesses in the UAE, Saudi Arabia, Qatar, Oman, Bahrain, UK and India. Book a consultation.",
  keywords: [
    "finance controller services",
    "outsourced bookkeeping",
    "ERP implementation",
    "CFO advisory",
    "internal audit",
    "taxation services GCC",
    "financial consulting UAE",
    "accounting services India",
  ],
  alternates: { canonical: "/services" },
}

/**
 * Services page — hero, major services (+ expandable catalog),
 * interactive global presence map, and conversion CTA.
 */
const ServicesPage = () => (
  <>
    {/* ---------- Hero ---------- */}
    <Section className="relative overflow-hidden border-b border-edge">
      {/* Background hero image — drop your file at public/images/services-hero.jpg */}
      <Image
        src="/images/pawel-czerwinski-IbHFznCKnqA-unsplash.jpg"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* Dark scrim for text legibility (stronger on the left where copy sits) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-canvas/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent"
      />
      <Container className="relative z-10">
        <FadeIn>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
              {servicesHero.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {servicesHero.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {servicesHero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={servicesHero.cta.href} variant="primary">
                {servicesHero.cta.label}
              </ButtonLink>
              <ButtonLink href="#global-presence" variant="secondary">
                View Global Presence
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>

    {/* ---------- Services list ---------- */}
    <Section>
      <Container>
        <ServicesList />
      </Container>
    </Section>

    {/* ---------- Global presence map ---------- */}
    <Section className="border-t border-edge bg-sunken">
      <Container>
        <GlobalPresenceMap />
      </Container>
    </Section>

    {/* ---------- Bottom CTA ---------- */}
    <CTASection
      heading={servicesCta.heading}
      description={servicesCta.description}
      cta={servicesCta.cta}
    />
  </>
)

export default ServicesPage

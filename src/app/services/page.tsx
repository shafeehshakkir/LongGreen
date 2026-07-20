import type { Metadata } from "next"
import { extendedCapabilities } from "@/content/home"
import { servicePillars, servicesCta, servicesHero } from "@/content/services"
import { ButtonLink } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Our Services | Finance Controller, Accounting, ERP & CFO Advisory",
  description:
    "Institutional-grade financial services: finance controller, accounting & bookkeeping, CFO advisory, ERP implementation, internal audit and tax planning for businesses in the GCC, UK and India.",
  alternates: { canonical: "/services" },
}

const { financeController, accounting, cfoAdvisory, erpImplementation, auditAndTax } =
  servicePillars

/**
 * Services page — hero, core pillars bento grid, extended capabilities, CTA.
 * Layout mirrors the reference mockup: a 3-column bento with CFO Advisory
 * as the dominant 2x2 card.
 */
const ServicesPage = () => (
  <>
    {/* ---------- Hero ---------- */}
    <Section className="border-b border-edge">
      <Container>
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
          <div className="mt-8">
            <ButtonLink href={servicesHero.cta.href} variant="primary">
              {servicesHero.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>

    {/* ---------- Core Service Pillars (bento grid) ---------- */}
    <Section id="pillars">
      <Container>
        <div className="mb-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {servicePillars.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
            {servicePillars.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Finance Controller — 1 col */}
          <Card className="group relative flex h-full flex-col overflow-hidden">
            {/* Oversized watermark icon */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 opacity-10 transition-opacity group-hover:opacity-20"
            >
              <Icon name={financeController.icon} className="text-[120px] text-brand-bright" />
            </div>
            <Icon
              name={financeController.icon}
              className="mb-5 text-[30px] text-brand-bright"
              filled
            />
            <h3 className="relative z-10 mb-3 font-display text-xl font-semibold text-foreground">
              {financeController.title}
            </h3>
            <p className="relative z-10 text-sm leading-relaxed text-muted">
              {financeController.description}
            </p>
          </Card>

          {/* Accounting & Bookkeeping — 2 cols with checklist */}
          <Card className="flex h-full flex-col lg:col-span-2">
            <Icon
              name={accounting.icon}
              className="mb-5 text-[30px] text-brand-bright"
              filled
            />
            <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
              {accounting.title}
            </h3>
            <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted">
              {accounting.description}
            </p>
            <ul className="mt-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
              {accounting.checklist.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted">
                  <Icon name="check_circle" className="text-[18px] text-brand-bright" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* CFO Advisory — dominant 2x2 card */}
          <Card className="relative flex h-full flex-col overflow-hidden lg:col-span-2 lg:row-span-2">
            {/* Ambient brand glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 80% 70% at 80% 100%, #007755 0%, transparent 65%)",
              }}
            />
            <div className="relative z-10 flex h-full flex-col">
              <Icon
                name={cfoAdvisory.icon}
                className="mb-5 text-[30px] text-brand-bright"
                filled
              />
              <h3 className="mb-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {cfoAdvisory.title}
              </h3>
              <p className="mb-10 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {cfoAdvisory.description}
              </p>
              <div className="mt-auto grid grid-cols-1 gap-8 md:grid-cols-2">
                {cfoAdvisory.highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-bright">
                      {highlight.label}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* ERP Implementation — 1 col with platform tags */}
          <Card className="flex h-full flex-col">
            <Icon
              name={erpImplementation.icon}
              className="mb-5 text-[30px] text-brand-bright"
              filled
            />
            <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
              {erpImplementation.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              {erpImplementation.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {erpImplementation.platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded border border-edge bg-canvas px-3 py-1 text-xs text-muted"
                >
                  {platform}
                </span>
              ))}
            </div>
          </Card>

          {/* Internal Audit & Tax Planning — 1 col */}
          <Card className="flex h-full flex-col">
            <Icon
              name={auditAndTax.icon}
              className="mb-5 text-[30px] text-brand-bright"
              filled
            />
            <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
              {auditAndTax.title}
            </h3>
            <p className="flex-grow text-sm leading-relaxed text-muted">
              {auditAndTax.description}
            </p>
          </Card>
        </div>

        {/* Extended capabilities (shared with home content) */}
        <div className="mt-14 border-t border-edge pt-10">
          <h3 className="mb-5 font-display text-lg font-semibold text-foreground">
            Extended Capabilities
          </h3>
          <div className="flex flex-wrap gap-3">
            {extendedCapabilities.items.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-edge px-4 py-2 text-sm text-muted transition-colors hover:border-brand hover:text-brand-bright"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
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

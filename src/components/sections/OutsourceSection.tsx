import { technology, whyOutsource } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * "Why Outsource to India?" benefits grid plus the
 * technology expertise strip (Zoho, QuickBooks, Xero, TallyPrime, Odoo).
 */
export const OutsourceSection = () => (
  <Section className="border-t border-edge">
    <Container>
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {whyOutsource.heading}
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          {whyOutsource.subheading}
        </p>
      </div>

      {/* Benefit tiles */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyOutsource.benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex items-center gap-4 rounded-lg border border-edge bg-surface px-6 py-5 transition-colors duration-300 hover:border-edge-bright hover:bg-elevated"
          >
            <Icon name={benefit.icon} className="text-[24px] text-brand-bright" filled />
            <span className="text-sm font-semibold text-foreground">
              {benefit.title}
            </span>
          </div>
        ))}
      </div>

      {/* Technology expertise */}
      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg border border-edge bg-sunken p-8 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            {technology.heading}
          </h3>
          <p className="mt-1 text-sm text-muted">{technology.subheading}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {technology.platforms.map((platform) => (
            <span
              key={platform}
              className="rounded border border-edge bg-surface px-5 py-2.5 font-display text-sm font-semibold text-foreground"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </Container>
  </Section>
)

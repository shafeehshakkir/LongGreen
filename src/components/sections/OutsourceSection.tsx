import { technology, whyOutsource } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * "Why Outsource to India?" benefits grid plus the
 * technology expertise strip (Zoho, QuickBooks, Xero, TallyPrime, Odoo).
 * First row: 4 cards. Second row: 3 cards, centered.
 */
export const OutsourceSection = () => {
  const firstRow = whyOutsource.benefits.slice(0, 4)
  const secondRow = whyOutsource.benefits.slice(4)

  return (
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

        {/* Row 1 — four cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((benefit) => (
            <BenefitCard key={benefit.title} icon={benefit.icon} title={benefit.title} />
          ))}
        </div>

        {/* Row 2 — three cards, centered under the four-card row */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {secondRow.map((benefit) => (
            <div
              key={benefit.title}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-3rem)/4)]"
            >
              <BenefitCard icon={benefit.icon} title={benefit.title} />
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
}

const BenefitCard = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center gap-4 rounded-lg border border-edge bg-surface px-6 py-5 transition-colors duration-300 hover:border-edge-bright hover:bg-elevated">
    <Icon name={icon} className="text-[24px] text-brand-bright" filled />
    <span className="text-sm font-semibold text-foreground">{title}</span>
  </div>
)

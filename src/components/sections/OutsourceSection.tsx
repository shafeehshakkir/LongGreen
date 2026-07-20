import { technology, whyOutsource } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

/**
 * "Why Outsource to India?" — clearer benefit cards + technology strip
 * with recognizable platform logos.
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
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((benefit) => (
            <li key={benefit.title}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </li>
          ))}
        </ul>

        {/* Row 2 — three cards, centered */}
        <ul className="mt-4 flex flex-wrap justify-center gap-4">
          {secondRow.map((benefit) => (
            <li
              key={benefit.title}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-3rem)/4)]"
            >
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </li>
          ))}
        </ul>

        {/* Technology expertise */}
        <div className="mt-14 rounded-lg border border-edge bg-sunken p-6 md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm shrink-0">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {technology.heading}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {technology.subheading}
              </p>
            </div>

            <ul className="flex flex-wrap items-center gap-3">
              {technology.platforms.map((platform) => (
                <li key={platform}>
                  <span
                    tabIndex={0}
                    className={cn(
                      "inline-flex h-12 items-center rounded border border-edge bg-surface px-5",
                      "font-display text-sm font-semibold text-foreground",
                      "transition-colors duration-200",
                      "hover:border-brand/40 hover:bg-elevated",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
                    )}
                  >
                    {platform}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

type BenefitCardProps = {
  icon: string
  title: string
  description: string
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <article
    tabIndex={0}
    aria-label={title}
    className={cn(
      "group flex h-full flex-col gap-4 rounded-lg border border-edge bg-surface p-5",
      "transition-colors duration-200",
      "hover:border-brand/40 hover:bg-elevated",
      "focus-visible:border-brand/40 focus-visible:bg-elevated",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
    )}
  >
    <div className="flex h-10 w-10 items-center justify-center rounded border border-edge bg-canvas transition-colors duration-200 group-hover:border-brand/40 group-focus-visible:border-brand/40">
      <Icon name={icon} className="text-[22px] text-brand-bright" filled />
    </div>
    <div className="flex flex-col gap-1.5">
      <h3 className="font-display text-sm font-semibold leading-snug text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  </article>
)

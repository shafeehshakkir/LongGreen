import { industries } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * "Industries We Serve" — compact icon tiles across nine sectors.
 */
export const IndustriesSection = () => (
  <Section className="border-t border-edge">
    <Container>
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {industries.heading}
        </h2>
        <p className="max-w-2xl text-base text-muted">{industries.subheading}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9">
        {industries.items.map((industry) => (
          <div
            key={industry.title}
            className="flex flex-col items-center gap-3 rounded-lg border border-edge bg-surface px-3 py-6 text-center transition-colors duration-300 hover:border-edge-bright hover:bg-elevated"
          >
            <Icon name={industry.icon} className="text-[28px] text-brand-bright" />
            <span className="text-xs font-medium leading-snug text-muted">
              {industry.title}
            </span>
          </div>
        ))}
      </div>
    </Container>
  </Section>
)

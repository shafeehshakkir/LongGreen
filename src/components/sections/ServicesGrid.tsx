import { extendedCapabilities, whatWeDo } from "@/content/home"
import { Card } from "@/components/ui/Card"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * "What We Do" — six core service cards plus extended capability tags.
 */
export const ServicesGrid = () => (
  <Section id="services">
    <Container>
      {/* Section heading */}
      <div className="mb-14 flex flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {whatWeDo.heading}
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          {whatWeDo.subheading}
        </p>
      </div>

      {/* Core services */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whatWeDo.services.map((service) => (
          <Card key={service.title} className="flex flex-col gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded border border-edge bg-canvas">
              <Icon name={service.icon} className="text-[26px] text-brand-bright" />
            </span>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Extended capabilities */}
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
)

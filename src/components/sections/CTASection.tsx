import { ButtonLink } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import type { CtaLink } from "@/types/content"

type CTASectionProps = {
  heading: string
  description: string
  cta: CtaLink
}

/**
 * Reusable bottom-of-page conversion block.
 * Every page should end with one of these to keep the lead funnel open.
 */
export const CTASection = ({ heading, description, cta }: CTASectionProps) => (
  <Section className="relative overflow-hidden border-t border-edge">
    {/* Ambient brand glow behind the CTA */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 80% at 50% 100%, #007755 0%, transparent 65%)",
      }}
    />
    <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
        {heading}
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {description}
      </p>
      <ButtonLink href={cta.href} variant="primary" className="mt-2">
        {cta.label}
      </ButtonLink>
    </Container>
  </Section>
)

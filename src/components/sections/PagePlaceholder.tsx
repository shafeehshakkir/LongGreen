import { ButtonLink } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

type PagePlaceholderProps = {
  eyebrow: string
  heading: string
  description: string
}

/**
 * Interim hero for inner pages scheduled in Phase 3.
 * Keeps every navbar route functional with branded content
 * until the full page is built.
 */
export const PagePlaceholder = ({
  eyebrow,
  heading,
  description,
}: PagePlaceholderProps) => (
  <Section className="min-h-[60vh]">
    <Container className="flex flex-col items-start gap-6 pt-10">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
        {eyebrow}
      </span>
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
        {heading}
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
      <ButtonLink href="/consultation" variant="primary" className="mt-2">
        Request a Consultation
      </ButtonLink>
    </Container>
  </Section>
)

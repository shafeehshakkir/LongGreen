import { ButtonLink } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

const NotFound = () => (
  <Section className="min-h-[60vh]">
    <Container className="flex flex-col items-center gap-6 pt-16 text-center">
      <span className="font-display text-7xl font-bold text-brand-bright">404</span>
      <h1 className="font-display text-3xl font-bold text-foreground">
        Page Not Found
      </h1>
      <p className="max-w-md text-base text-muted">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <ButtonLink href="/" variant="primary">
        Back to Home
      </ButtonLink>
    </Container>
  </Section>
)

export default NotFound

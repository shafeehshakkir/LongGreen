import { testimonials } from "@/content/home"
import { Card } from "@/components/ui/Card"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * Client testimonials with the design system's signature
 * 2px brand-green accent line on the left edge of each quote.
 */
export const TestimonialsSection = () => (
  <Section className="border-t border-edge">
    <Container>
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {testimonials.heading}
        </h2>
        <p className="max-w-2xl text-base text-muted">{testimonials.subheading}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.items.map((testimonial) => (
          <Card key={testimonial.quote} className="flex flex-col gap-6">
            <blockquote className="border-l-2 border-brand pl-5 text-sm font-light leading-relaxed text-muted">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-auto">
              <p className="font-display text-sm font-semibold text-foreground">
                {testimonial.name}
              </p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.08em] text-faint">
                {testimonial.role}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </Section>
)

import { howWeWork, whyChoose } from "@/content/home"
import { Card } from "@/components/ui/Card"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * "Why Choose LongGreen" advantages (left) alongside the
 * four-step engagement process timeline (right) — bento layout
 * matching the reference mockup.
 */
export const AdvantageSection = () => (
  <Section>
    <Container>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Advantages */}
        <div className="lg:col-span-7">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {whyChoose.heading}
          </h2>
          <p className="mb-10 text-base text-muted">{whyChoose.subheading}</p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
            {whyChoose.advantages.map((advantage) => (
              <div key={advantage.title} className="flex items-start gap-4">
                <Icon
                  name={advantage.icon}
                  className="mt-0.5 text-[22px] text-brand-bright"
                  filled
                />
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement process timeline */}
        <div className="lg:col-span-5">
          <Card interactive={false} className="h-full">
            <h3 className="mb-8 font-display text-xl font-semibold text-foreground">
              {howWeWork.heading}
            </h3>
            <ol className="relative flex flex-col gap-8">
              {/* Vertical connector line */}
              <span
                aria-hidden="true"
                className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-px bg-edge"
              />
              {howWeWork.steps.map((step) => (
                <li key={step.step} className="relative flex items-start gap-5">
                  <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand bg-canvas font-display text-sm font-bold text-brand-bright">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </div>
    </Container>
  </Section>
)

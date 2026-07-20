import { whyChoose } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { EngagementProcess } from "@/components/sections/EngagementProcess"

/**
 * "Why Choose LongGreen" advantages (left) alongside the
 * interactive four-step engagement process (right).
 */
export const AdvantageSection = () => (
  <Section>
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
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

        {/* Interactive engagement process */}
        <div className="lg:col-span-5">
          <EngagementProcess />
        </div>
      </div>
    </Container>
  </Section>
)

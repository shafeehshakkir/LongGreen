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
        {/* Advantages — split-row list */}
        <div className="lg:col-span-7">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {whyChoose.heading}
          </h2>
          <p className="mb-8 text-base text-muted">{whyChoose.subheading}</p>

          <ul className="border-t border-edge">
            {whyChoose.advantages.map((advantage, index) => (
              <li
                key={advantage.title}
                className="group flex items-center gap-5 border-b border-edge py-4 transition-colors duration-200 hover:bg-surface/60"
              >
                <span className="w-6 shrink-0 font-display text-sm font-bold text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-edge bg-canvas transition-colors duration-200 group-hover:border-brand/40 group-hover:bg-brand/10">
                  <Icon name={advantage.icon} className="text-[22px] text-brand-bright" filled />
                </span>
                <h3 className="font-display text-base font-semibold text-foreground md:text-lg">
                  {advantage.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive engagement process */}
        <div className="lg:col-span-5">
          <EngagementProcess />
        </div>
      </div>
    </Container>
  </Section>
)

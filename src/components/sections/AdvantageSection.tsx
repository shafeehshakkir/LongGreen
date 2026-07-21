import { whyChoose } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * "Why Choose LongGreen" advantages — a full-width split-row list.
 */
export const AdvantageSection = () => (
  <Section>
    <Container>
      <div className="mb-8 max-w-2xl">
        <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {whyChoose.heading}
        </h2>
        <p className="text-base text-muted">{whyChoose.subheading}</p>
      </div>

      <ul className="grid grid-cols-1 border-t border-edge md:grid-cols-2 md:gap-x-12">
        {whyChoose.advantages.map((advantage) => (
          <li
            key={advantage.title}
            className="group flex items-center gap-5 border-b border-edge py-4 transition-colors duration-200 hover:bg-surface/60"
          >
            {/* Animated bullet — dot expands into a brand dash on hover */}
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-faint transition-all duration-300 ease-out group-hover:w-6 group-hover:bg-brand-bright"
            />
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-edge bg-canvas transition-colors duration-200 group-hover:border-brand/40 group-hover:bg-brand/10">
              <Icon name={advantage.icon} className="text-[22px] text-brand-bright" filled />
            </span>
            <h3 className="font-display text-base font-semibold text-foreground transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-lg">
              {advantage.title}
            </h3>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
)

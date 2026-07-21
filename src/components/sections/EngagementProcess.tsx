import { howWeWork } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * "How We Work" — a horizontal process row. Each step shows an icon,
 * title and description, connected left-to-right by a dashed rail.
 */
export const EngagementProcess = () => (
  <Section>
    <Container>
      <div className="mb-12 max-w-2xl">
        <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {howWeWork.heading}
        </h2>
        <p className="text-base text-muted">
          A clear, four-step engagement that turns your finance function into a growth engine.
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {howWeWork.steps.map((step, index) => {
          const isLast = index === howWeWork.steps.length - 1

          return (
            <li key={step.step} className="group relative">
              {/* Connector rail to the next step (desktop only) */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-16 right-0 top-7 hidden h-px -translate-y-1/2 bg-gradient-to-r from-brand/50 to-transparent lg:block"
                />
              )}

              <div className="flex items-center gap-4">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center border border-brand/40 bg-surface transition-colors duration-300 group-hover:border-brand group-hover:bg-brand/10">
                  <Icon name={step.icon} className="text-[26px] text-brand-bright" filled />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand font-display text-xs font-bold text-white">
                    {step.step}
                  </span>
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          )
        })}
      </ol>
    </Container>
  </Section>
)

import { technology, whyOutsource } from "@/content/home"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"
import { OutsourceArch } from "@/components/sections/OutsourceArch"

/**
 * "Why Outsource to India?" — benefits flow along an arch (auto-scroll)
 * over a green backlight. Technology strip follows below.
 */
export const OutsourceSection = () => {
  return (
    <Section className="border-t border-edge">
      <Container>
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            Offshore Advantage
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {whyOutsource.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {whyOutsource.subheading}
          </p>
        </div>

        {/* Arch auto-scroll */}
        <OutsourceArch />

        {/* Technology expertise */}
        <div className="mt-14 border border-edge bg-sunken p-6 md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm shrink-0">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {technology.heading}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {technology.subheading}
              </p>
            </div>

            <ul className="flex flex-wrap items-center gap-3">
              {technology.platforms.map((platform) => (
                <li key={platform}>
                  <span
                    tabIndex={0}
                    className={cn(
                      "inline-flex h-12 items-center border border-edge bg-surface px-5",
                      "font-display text-sm font-semibold text-foreground",
                      "transition-colors duration-200",
                      "hover:border-brand/40 hover:bg-elevated",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
                    )}
                  >
                    {platform}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

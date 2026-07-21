import { extendedCapabilities, whatWeDo } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

/**
 * "Comprehensive Financial Solutions" — a bento of varied tile sizes.
 * One flagship tile leads, two medium tiles, three compact tiles, so the
 * eye gets hierarchy instead of a uniform card grid. Sharp corners only.
 */
export const ServicesGrid = () => {
  const [flagship, mediumA, mediumB, ...compact] = whatWeDo.services

  return (
    <Section id="services">
      <Container>
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            What We Do
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {whatWeDo.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {whatWeDo.subheading}
          </p>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:auto-rows-[minmax(184px,auto)]">
          {/* Flagship — tall, spans two rows */}
          <article className="group relative flex flex-col justify-between overflow-hidden border border-edge bg-surface p-8 transition-colors duration-300 hover:border-edge-bright md:col-span-3 md:row-span-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 70% 60% at 15% 15%, rgba(0,119,85,0.20) 0%, transparent 65%)",
              }}
            />
            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center border border-edge bg-canvas transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/10">
                <Icon name={flagship.icon} className="text-[30px] text-brand-bright" filled />
              </span>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-faint">
                Flagship Service
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground md:text-3xl">
                {flagship.title}
              </h3>
            </div>
            <p className="relative mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
              {flagship.description}
            </p>
          </article>

          {/* Two medium tiles — each spans full right half */}
          {[mediumA, mediumB].map((service) => (
            <article
              key={service.title}
              className="group flex flex-col justify-between border border-edge bg-surface p-6 transition-colors duration-300 hover:border-edge-bright hover:bg-elevated md:col-span-3"
            >
              <span className="flex h-12 w-12 items-center justify-center border border-edge bg-canvas transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/10">
                <Icon name={service.icon} className="text-[24px] text-brand-bright" filled />
              </span>
              <div className="mt-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </article>
          ))}

          {/* Three compact tiles */}
          {compact.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col border border-edge bg-surface p-6 transition-colors duration-300 hover:border-edge-bright hover:bg-elevated md:col-span-2"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center border border-edge bg-canvas transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/10">
                <Icon name={service.icon} className="text-[22px] text-brand-bright" filled />
              </span>
              <h3 className="font-display text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Extended capabilities — sharp tags */}
        <div className="mt-12 border-t border-edge pt-8">
          <h3 className="mb-5 font-display text-lg font-semibold text-foreground">
            Extended Capabilities
          </h3>
          <div className="flex flex-wrap gap-2">
            {extendedCapabilities.items.map((capability) => (
              <span
                key={capability}
                className={cn(
                  "border border-edge px-4 py-2 text-sm text-muted transition-colors",
                  "hover:border-brand hover:text-brand-bright"
                )}
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

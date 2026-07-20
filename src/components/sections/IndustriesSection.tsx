"use client"

import { industries } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

/**
 * "Industries We Serve" — sector cards that enlarge on hover
 * and reveal how LongGreen supports that industry.
 */
export const IndustriesSection = () => (
  <Section className="border-t border-edge">
    <Container>
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {industries.heading}
        </h2>
        <p className="max-w-2xl text-base text-muted">{industries.subheading}</p>
      </div>

      {/* 3×3 grid gives each card room to expand on hover */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.items.map((industry) => (
          <article
            key={industry.title}
            tabIndex={0}
            aria-label={`${industry.title}. Hover or focus for details.`}
            className={cn(
              "group relative flex flex-col rounded-lg border border-edge bg-surface p-6",
              "origin-center transition-all duration-300 ease-out",
              "hover:z-20 hover:scale-[1.04] hover:border-brand/50 hover:bg-elevated",
              "hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]",
              "focus-visible:z-20 focus-visible:scale-[1.04] focus-visible:border-brand/50 focus-visible:bg-elevated",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
            )}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-edge bg-canvas transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/10">
              <Icon
                name={industry.icon}
                className="text-[26px] text-brand-bright"
                filled
              />
            </div>

            <h3 className="font-display text-base font-semibold text-foreground md:text-lg">
              {industry.title}
            </h3>

            {/* Detail copy — expands on hover / focus */}
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out",
                "grid-rows-[0fr] opacity-0",
                "group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100",
                "group-focus-within:mt-3 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100"
              )}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-muted">
                {industry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </Section>
)

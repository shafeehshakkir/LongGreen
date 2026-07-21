"use client"

import { useState } from "react"
import { caseStudies } from "@/content/case-studies"
import { Icon } from "@/components/ui/Icon"
import { cn } from "@/lib/utils"

const ALL_SECTORS = "All Sectors"

/** Unique sector list derived from the data — new sectors appear automatically */
const sectorFilters = [
  ALL_SECTORS,
  ...Array.from(new Set(caseStudies.map((study) => study.sector))),
]

/**
 * Filterable case study gallery.
 * Filter tabs + bento grid where `wide` studies span two columns.
 */
export const CaseStudiesGrid = () => {
  const [activeSector, setActiveSector] = useState(ALL_SECTORS)

  const visibleStudies =
    activeSector === ALL_SECTORS
      ? caseStudies
      : caseStudies.filter((study) => study.sector === activeSector)

  return (
    <div>
      {/* Filter bar */}
      <div
        role="tablist"
        aria-label="Filter case studies by sector"
        className="mb-10 flex flex-wrap gap-4 border-b border-edge pb-px"
      >
        {sectorFilters.map((sector) => (
          <button
            key={sector}
            type="button"
            role="tab"
            aria-selected={activeSector === sector}
            tabIndex={0}
            onClick={() => setActiveSector(sector)}
            className={cn(
              "border-b-2 px-2 pb-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors",
              activeSector === sector
                ? "border-brand-bright text-brand-bright"
                : "border-transparent text-muted hover:text-foreground"
            )}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {visibleStudies.map((study) => (
          <article
            key={study.title}
            className={cn(
              "group relative flex min-h-[360px] flex-col justify-between overflow-hidden border border-edge bg-surface p-8 transition-colors duration-300 hover:border-edge-bright hover:bg-elevated",
              study.wide && "lg:col-span-2"
            )}
          >
            {/* Optional atmospheric background */}
            {study.image && (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundImage: `url('${study.image}')` }}
              />
            )}

            <div className="relative z-10">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.08em] text-faint transition-colors group-hover:text-brand-bright">
                {study.sector}
              </span>
              <h3 className="mb-4 max-w-xl font-display text-xl font-semibold text-foreground">
                {study.title}
              </h3>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted">
                {study.description}
              </p>
              <ul className="flex flex-col gap-2">
                {study.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <Icon
                      name="check_circle"
                      className="mt-0.5 text-[16px] text-brand-bright"
                    />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-8 flex justify-end">
              <Icon
                name="arrow_outward"
                className="text-faint transition-colors group-hover:text-brand-bright"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

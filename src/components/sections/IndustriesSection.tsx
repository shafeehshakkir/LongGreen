"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { industries } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

/**
 * "Industries We Serve" — a tabbed explorer. A vertical rail of sectors
 * (horizontal on mobile) drives a single detail panel, replacing the
 * uniform card grid. Hover, click and keyboard all switch the active tab.
 */
export const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = industries.items[activeIndex]

  return (
    <Section className="border-t border-edge">
      <Container>
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            Sector Expertise
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {industries.heading}
          </h2>
          <p className="mt-3 text-base text-muted">{industries.subheading}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Tab rail */}
          <div
            role="tablist"
            aria-label="Industries"
            className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {industries.items.map((industry, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={industry.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 border px-4 py-3 text-left text-sm font-semibold transition-colors duration-200 lg:w-full",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright",
                    isActive
                      ? "border-brand bg-elevated text-foreground lg:border-l-2 lg:border-l-brand"
                      : "border-edge text-muted hover:border-edge-bright hover:text-foreground"
                  )}
                >
                  <Icon
                    name={industry.icon}
                    className={cn(
                      "text-[20px] transition-colors",
                      isActive ? "text-brand-bright" : "text-faint"
                    )}
                    filled
                  />
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {industry.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-8">
            <div className="relative min-h-[280px] overflow-hidden border border-edge bg-surface p-8 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 60% 60% at 85% 10%, rgba(0,119,85,0.16) 0%, transparent 60%)",
                }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="flex h-16 w-16 items-center justify-center border border-edge bg-canvas">
                    <Icon name={active.icon} className="text-[34px] text-brand-bright" filled />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground md:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                    {active.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-faint">
                    {String(activeIndex + 1).padStart(2, "0")}
                    <span className="h-px w-8 bg-edge-bright" />
                    {String(industries.items.length).padStart(2, "0")}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

"use client"

import { useState } from "react"
import { technology, whyOutsource } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

/**
 * "Why Outsource to India?" — benefits presented as an accordion so the
 * section reads as a focused list, not a card grid. One panel open at a
 * time. Technology strip follows below.
 */
export const OutsourceSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index: number) =>
    setOpenIndex((current) => (current === index ? -1 : index))

  return (
    <Section className="border-t border-edge">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Intro */}
          <div className="lg:col-span-4">
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

          {/* Accordion */}
          <div className="lg:col-span-8">
            <ul className="border-t border-edge">
              {whyOutsource.benefits.map((benefit, index) => {
                const isOpen = openIndex === index
                return (
                  <li key={benefit.title} className="border-b border-edge">
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                      className={cn(
                        "flex w-full items-center gap-4 py-5 text-left transition-colors duration-200",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright",
                        isOpen ? "text-foreground" : "text-muted hover:text-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center border transition-colors duration-200",
                          isOpen
                            ? "border-brand/40 bg-brand/10"
                            : "border-edge bg-canvas"
                        )}
                      >
                        <Icon name={benefit.icon} className="text-[22px] text-brand-bright" filled />
                      </span>
                      <span className="flex-1 font-display text-base font-semibold md:text-lg">
                        {benefit.title}
                      </span>
                      <Icon
                        name="expand_more"
                        className={cn(
                          "text-[24px] text-faint transition-transform duration-300",
                          isOpen && "rotate-180 text-brand-bright"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <p className="overflow-hidden pb-5 pl-14 pr-8 text-sm leading-relaxed text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

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

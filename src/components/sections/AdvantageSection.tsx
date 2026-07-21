"use client"

import { useState } from "react"
import { whyChoose } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

/**
 * "The LongGreen Advantage" — an interactive accordion.
 *
 * - md+ : horizontal accordion in two balanced rows of four. The hovered /
 *         focused panel grows to reveal its description; the rest collapse to
 *         vertical labels.
 * - <md : vertical click-accordion (tap a row to reveal its description).
 *
 * All transitions respect prefers-reduced-motion.
 */
export const AdvantageSection = () => {
  const advantages = whyChoose.advantages
  // Start fully collapsed; a panel only expands while hovered / focused
  const [activeDesktop, setActiveDesktop] = useState<number | null>(null)
  const [openMobile, setOpenMobile] = useState<number | null>(0)

  const rows = [advantages.slice(0, 4), advantages.slice(4, 8)]

  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-2xl">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {whyChoose.heading}
          </h2>
          <p className="text-base text-muted">{whyChoose.subheading}</p>
        </div>

        {/* ---------- Desktop / tablet: horizontal accordion ---------- */}
        <div
          className="hidden flex-col gap-px border border-edge bg-edge md:flex"
          onMouseLeave={() => setActiveDesktop(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setActiveDesktop(null)
            }
          }}
        >
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-px bg-edge">
              {row.map((advantage, columnIndex) => {
                const index = rowIndex * 4 + columnIndex
                const isActive = activeDesktop === index

                return (
                  <button
                    key={advantage.title}
                    type="button"
                    aria-expanded={isActive}
                    aria-label={`${advantage.title}. ${advantage.description}`}
                    onMouseEnter={() => setActiveDesktop(index)}
                    onFocus={() => setActiveDesktop(index)}
                    onClick={() => setActiveDesktop(index)}
                    style={{ flexGrow: isActive ? 6 : 1 }}
                    className={cn(
                      "group relative h-64 min-w-0 basis-0 overflow-hidden bg-canvas text-left outline-none",
                      "transition-[flex-grow] duration-[900ms] ease-out motion-reduce:transition-none",
                      isActive ? "bg-surface" : "hover:bg-surface/60",
                      "focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-bright"
                    )}
                  >
                    {/* Collapsed label — horizontal, wrapping, centered */}
                    <span
                      className={cn(
                        "absolute inset-0 flex flex-col items-center justify-center gap-4 px-2 text-center transition-opacity duration-300",
                        "motion-reduce:transition-none",
                        isActive ? "opacity-0" : "opacity-100"
                      )}
                    >
                      <span className="font-mono text-xs text-brand-bright">
                        {`0${index + 1}`}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center border border-edge bg-canvas">
                        <Icon name={advantage.icon} className="text-[22px] text-brand-bright" filled />
                      </span>
                      <span className="font-display text-base font-semibold leading-tight text-muted group-hover:text-foreground">
                        {advantage.title}
                      </span>
                    </span>

                    {/* Expanded content */}
                    <span
                      className={cn(
                        "absolute inset-0 flex flex-col justify-between p-8 transition-opacity duration-500",
                        "motion-reduce:transition-none",
                        isActive
                          ? "opacity-100 delay-[350ms]"
                          : "pointer-events-none opacity-0"
                      )}
                    >
                      <span className="font-mono text-xs text-brand-bright">
                        {`0${index + 1}`}
                      </span>
                      <span className="block">
                        <span className="flex h-12 w-12 items-center justify-center border border-brand/40 bg-brand/10">
                          <Icon
                            name={advantage.icon}
                            className="text-[26px] text-brand-bright"
                            filled
                          />
                        </span>
                        <span className="mt-5 block font-display text-xl font-semibold text-foreground">
                          {advantage.title}
                        </span>
                        <span className="mt-2 block max-w-sm text-sm leading-relaxed text-muted">
                          {advantage.description}
                        </span>
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {/* ---------- Mobile: vertical click-accordion ---------- */}
        <ul className="border-t border-edge md:hidden">
          {advantages.map((advantage, index) => {
            const isOpen = openMobile === index

            return (
              <li key={advantage.title} className="border-b border-edge">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenMobile((current) => (current === index ? null : index))
                  }
                  className="flex w-full items-center gap-4 py-4 text-left"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-edge bg-canvas">
                    <Icon name={advantage.icon} className="text-[22px] text-brand-bright" filled />
                  </span>
                  <span className="flex-1 font-display text-base font-semibold text-foreground">
                    {advantage.title}
                  </span>
                  <Icon
                    name="expand_more"
                    className={cn(
                      "text-[22px] text-brand-bright transition-transform duration-300 motion-reduce:transition-none",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="overflow-hidden pb-4 pl-14 text-sm leading-relaxed text-muted">
                    {advantage.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}

"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { testimonials } from "@/content/home"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

/**
 * Client testimonials — one featured quote at a time, selected from a
 * client rail (tabbed). Replaces the three-column card grid with a single
 * high-impact statement and the design system's brand accent line.
 */
export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials.items[activeIndex]

  return (
    <Section className="border-t border-edge">
      <Container>
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            Client Voices
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="mt-3 text-base text-muted">{testimonials.subheading}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Featured quote */}
          <div className="lg:col-span-8">
            <div className="relative min-h-[260px] border border-edge bg-surface p-8 md:p-12">
              <Icon
                name="format_quote"
                className="text-[48px] text-brand/40"
                filled
              />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active.quote}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="border-l-2 border-brand pl-6"
                >
                  <p className="font-display text-xl font-light leading-relaxed text-foreground md:text-2xl">
                    {active.quote}
                  </p>
                  <footer className="mt-6">
                    <p className="font-display text-sm font-semibold text-foreground">
                      {active.name}
                    </p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.08em] text-faint">
                      {active.role}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          {/* Client selector rail */}
          <div className="lg:col-span-4">
            <ul className="flex flex-col gap-2">
              {testimonials.items.map((testimonial, index) => {
                const isActive = index === activeIndex
                return (
                  <li key={testimonial.role}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex w-full items-center gap-4 border px-4 py-4 text-left transition-colors duration-200",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright",
                        isActive
                          ? "border-brand bg-elevated lg:border-l-2 lg:border-l-brand"
                          : "border-edge hover:border-edge-bright"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold transition-colors",
                          isActive
                            ? "bg-brand/20 text-brand-bright"
                            : "bg-surface text-faint"
                        )}
                      >
                        {testimonial.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block text-sm font-semibold",
                            isActive ? "text-foreground" : "text-muted"
                          )}
                        >
                          {testimonial.name}
                        </span>
                        <span className="block truncate text-xs text-faint">
                          {testimonial.role}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

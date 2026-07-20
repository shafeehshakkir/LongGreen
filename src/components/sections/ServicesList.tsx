"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { additionalServices, majorServices } from "@/content/services"
import { Card } from "@/components/ui/Card"
import { Icon } from "@/components/ui/Icon"
import { FadeIn } from "@/components/ui/FadeIn"

/**
 * Major services grid (SEO-focused) with an expandable
 * "View all services" panel for secondary capabilities.
 */
export const ServicesList = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => setIsExpanded((previous) => !previous)

  return (
    <div id="services-list">
      <FadeIn>
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            What We Offer
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Financial Services
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Institutional-grade finance controller, accounting, ERP, audit, tax
            and CFO advisory — delivered for businesses across the GCC, UK and
            India.
          </p>
        </div>
      </FadeIn>

      {/* Major services — always visible for SEO */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {majorServices.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.06}>
            <Card className="group flex h-full flex-col">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded border border-edge bg-canvas transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/10">
                <Icon
                  name={service.icon}
                  className="text-[26px] text-brand-bright"
                  filled
                />
              </span>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>

      {/* View all / collapse */}
      <div className="mt-10 flex flex-col items-center">
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-controls="additional-services"
          className="group inline-flex h-12 items-center gap-2 rounded border border-edge px-7 text-sm font-semibold tracking-wide text-foreground transition-colors duration-200 hover:border-brand hover:bg-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
        >
          {isExpanded ? "Show fewer services" : "View all services"}
          <Icon
            name={isExpanded ? "expand_less" : "expand_more"}
            className="text-[22px] text-brand-bright transition-transform duration-300 group-hover:scale-110"
          />
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id="additional-services"
              key="additional"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden"
            >
              <div className="mt-10 border-t border-edge pt-10">
                <h3 className="mb-6 font-display text-lg font-semibold text-foreground">
                  Extended Capabilities
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {additionalServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.35 }}
                      className="rounded-lg border border-edge bg-surface p-6 transition-colors duration-300 hover:border-edge-bright hover:bg-elevated"
                    >
                      <Icon
                        name={service.icon}
                        className="mb-3 text-[22px] text-brand-bright"
                      />
                      <h4 className="mb-2 font-display text-base font-semibold text-foreground">
                        {service.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { howWeWork } from "@/content/home"
import { Card } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

/**
 * Engagement process — expands only while a step is hovered / focused.
 * Collapses again when the pointer leaves. Card height follows content.
 */
export const EngagementProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const steps = howWeWork.steps
  const lastIndex = steps.length - 1

  const handleLeave = () => setActiveStep(null)

  return (
    <Card interactive={false}>
      <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
        {howWeWork.heading}
      </h3>

      <ol className="flex flex-col" onMouseLeave={handleLeave}>
        {steps.map((step, index) => {
          const isActive = activeStep === step.step
          const isComplete = activeStep !== null && step.step < activeStep
          const isLast = index === lastIndex

          return (
            <li
              key={step.step}
              className="flex gap-4"
              onMouseEnter={() => setActiveStep(step.step)}
            >
              {/* Number + connector rail */}
              <div className="flex w-8 shrink-0 flex-col items-center">
                <span
                  className={cn(
                    "z-10 flex h-8 w-8 items-center justify-center rounded-full border font-display text-sm font-bold transition-colors duration-200",
                    isActive
                      ? "border-brand bg-brand text-white"
                      : isComplete
                        ? "border-brand bg-brand/25 text-brand-bright"
                        : "border-brand/60 bg-canvas text-brand-bright"
                  )}
                >
                  {step.step}
                </span>

                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "w-px flex-1 min-h-5 transition-colors duration-200",
                      isComplete || isActive ? "bg-brand" : "bg-edge"
                    )}
                  />
                )}
              </div>

              {/* Step content — expands on hover only */}
              <div
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                onFocus={() => setActiveStep(step.step)}
                onBlur={(event) => {
                  if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) {
                    setActiveStep(null)
                  }
                }}
                className={cn(
                  "mb-1 min-w-0 flex-1 cursor-default px-3 pb-2 pt-0 text-left transition-colors duration-200",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright",
                  isLast && "mb-0",
                  isActive && "bg-elevated"
                )}
              >
                <h4
                  className={cn(
                    "font-display text-base font-semibold leading-8 transition-colors duration-200",
                    isActive ? "text-foreground" : "text-muted"
                  )}
                >
                  {step.title}
                </h4>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out",
                    isActive
                      ? "mt-1 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </Card>
  )
}

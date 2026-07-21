"use client"

import type { CSSProperties } from "react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { howWeWork } from "@/content/home"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

/**
 * "How We Work" — a four-step pipeline connected by a single, continuously
 * flowing line. Each step's line-art motif sits on a shared rail so the
 * columns read as one animated current running left → right. Drawn in the
 * house black/green palette; honours reduced-motion (see globals.css).
 */

/** Hand-built line-art motif for each step, drawn on a 0 0 300 120 canvas. */
const renderMotif = (index: number, drawStyle: CSSProperties) => {
  switch (index) {
    // 1 — Understand Your Business: a magnifier examining business data (bar chart)
    case 0:
      return (
        <>
          {/* Business data — bars growing out of the rail */}
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M104 90 V72"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M120 90 V62"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M136 90 V50"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* Magnifier — the "understand / analyse" gesture */}
          <circle
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            cx={152}
            cy={48}
            r={20}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M167 63 L186 84"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </>
      )
    // 2 — Design the Right Financial Solution: a lightbulb (the right idea)
    case 1:
      return (
        <>
          {/* Bulb */}
          <circle
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            cx={150}
            cy={50}
            r={18}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
          {/* Filament */}
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M143 51 L150 60 L157 51"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Base + stem to the rail */}
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M143 70 H157 M145 76 H155 M150 82 V90"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          {/* Idea rays */}
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M150 22 V14 M124 32 L118 26 M176 32 L182 26"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </>
      )
    // 3 — Implement: interlocking gears feeding the rail
    case 2:
      return (
        <>
          <circle
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            cx={126}
            cy={50}
            r={22}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
          <circle cx={126} cy={50} r={8} fill="none" stroke="currentColor" strokeWidth={2} />
          <circle
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            cx={176}
            cy={66}
            r={14}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
          <circle cx={176} cy={66} r={5} fill="none" stroke="currentColor" strokeWidth={2} />
          <path
            d="M126 74 L126 90 M176 82 L176 90"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </>
      )
    // 4 — Deliver Ongoing Financial Insights: a rising growth line with an arrow
    default:
      return (
        <>
          {/* Upward trend line */}
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M96 80 L126 66 L150 72 L176 54 L198 38"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arrow head at the tip */}
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M198 38 L184 40 M198 38 L192 51"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data points on the trend */}
          <circle cx={126} cy={66} r={3.5} fill="currentColor" />
          <circle cx={176} cy={54} r={3.5} fill="currentColor" />
        </>
      )
  }
}

/** Seconds each column waits before it starts drawing (sequential 1 → 4) */
const STEP_STAGGER = 0.5

export const EngagementProcess = () => {
  const pipelineRef = useRef<HTMLOListElement>(null)
  // Trigger the draw only once the pipeline scrolls into view
  const inView = useInView(pipelineRef, { once: true, margin: "-120px 0px" })

  return (
    <Section>
      <Container>
        {/* Header — title + supporting sentence */}
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {howWeWork.heading}
          </h2>
          <p className="text-base text-muted">{howWeWork.intro}</p>
        </div>

        {/* Pipeline */}
        <ol
          ref={pipelineRef}
          className={cn(
            "grid grid-cols-1 border border-edge sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-edge",
            inView && "hww-animate"
          )}
        >
          {howWeWork.steps.map((step, index) => {
            // Rail segment lights up first, motif follows — per column
            const railStyle: CSSProperties = {
              animationDelay: `${index * STEP_STAGGER}s`,
              animationDuration: "0.5s",
            }
            const motifStyle: CSSProperties = {
              animationDelay: `${index * STEP_STAGGER + 0.45}s`,
            }

            return (
              <li key={step.step} className="p-6 text-brand-bright md:p-8">
                {/* Motif + shared rail */}
                <svg
                  viewBox="0 0 300 120"
                  className="h-24 w-full overflow-visible"
                  aria-hidden="true"
                >
                  {/* Static rail track */}
                  <line x1={0} y1={90} x2={300} y2={90} stroke="#262626" strokeWidth={2} />
                  {/* Green rail draws left → right, sequenced across columns */}
                  <line
                    x1={0}
                    y1={90}
                    x2={300}
                    y2={90}
                    pathLength={1}
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    opacity={0.55}
                    className="hww-draw"
                    style={railStyle}
                  />
                  {/* Flowing current (seamless across columns) */}
                  <line
                    x1={0}
                    y1={90}
                    x2={300}
                    y2={90}
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    className="hww-flow"
                    opacity={0.85}
                  />
                  {renderMotif(index, motifStyle)}
                  {/* Node where this step meets the rail */}
                  <circle
                    cx={150}
                    cy={90}
                    r={5}
                    fill="#007755"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                </svg>

                <p className="mt-6 font-mono text-xs tracking-widest text-brand-bright">
                  {`[0${index + 1}]`}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            )
          })}
        </ol>
      </Container>
    </Section>
  )
}

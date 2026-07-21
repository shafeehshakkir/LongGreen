import type { CSSProperties } from "react"
import { howWeWork } from "@/content/home"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

/**
 * "How We Work" — a four-step pipeline connected by a single, continuously
 * flowing line. Each step's line-art motif sits on a shared rail so the
 * columns read as one animated current running left → right. Drawn in the
 * house black/green palette; honours reduced-motion (see globals.css).
 */

/** Hand-built line-art motif for each step, drawn on a 0 0 300 120 canvas. */
const renderMotif = (index: number, drawStyle: CSSProperties) => {
  switch (index) {
    // 1 — Understand: a rising trace into a magnifier (discovery)
    case 0:
      return (
        <>
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M28 90 C74 90 84 56 122 54"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <circle
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            cx={150}
            cy={50}
            r={22}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M166 66 L188 86"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </>
      )
    // 2 — Design: a blueprint profile with plotted nodes
    case 1:
      return (
        <>
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M28 88 L92 48 L146 70 L200 40 L272 88"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={92} cy={48} r={3.5} fill="currentColor" />
          <circle cx={200} cy={40} r={3.5} fill="currentColor" />
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
    // 4 — Deliver: an upward trend with an arrow head
    default:
      return (
        <>
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M28 84 L98 66 L152 72 L214 38"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="hww-draw"
            style={drawStyle}
            pathLength={1}
            d="M214 38 L200 44 M214 38 L210 54"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <circle cx={98} cy={66} r={3.5} fill="currentColor" />
          <circle cx={152} cy={72} r={3.5} fill="currentColor" />
        </>
      )
  }
}

export const EngagementProcess = () => (
  <Section>
    <Container>
      {/* Header — eyebrow left, statement right (à la editorial process blocks) */}
      <div className="mb-12 grid gap-4 md:grid-cols-[220px_1fr] md:items-end">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-bright">
          {howWeWork.heading}
        </span>
        <h2 className="max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">
          {howWeWork.intro}
        </h2>
      </div>

      {/* Pipeline */}
      <ol className="grid grid-cols-1 border border-edge sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-edge">
        {howWeWork.steps.map((step, index) => {
          const drawStyle: CSSProperties = {
            animationDelay: `${0.15 + index * 0.2}s`,
          }

          return (
            <li key={step.step} className="p-6 text-brand-bright md:p-8">
              {/* Motif + shared flowing rail */}
              <svg
                viewBox="0 0 300 120"
                className="h-24 w-full overflow-visible"
                aria-hidden="true"
              >
                {/* Static rail */}
                <line x1={0} y1={90} x2={300} y2={90} stroke="#262626" strokeWidth={2} />
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
                {renderMotif(index, drawStyle)}
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

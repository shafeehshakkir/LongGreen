"use client"

import { useEffect, useRef } from "react"
import { whyOutsource } from "@/content/home"
import { Icon } from "@/components/ui/Icon"

/**
 * Benefits travelling along an invisible arch. Only three items are
 * meaningfully visible at once: a large one at the apex — framed in a
 * rectangular card — with a smaller item rising on one side and
 * descending on the other. Auto-scrolls continuously and honours
 * reduced-motion.
 */
export const OutsourceArch = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const phaseRef = useRef(0)
  const sizeRef = useRef({ w: 0, h: 0 })

  const items = whyOutsource.benefits
  const count = items.length

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const measure = () => {
      const rect = container.getBoundingClientRect()
      sizeRef.current = { w: rect.width, h: rect.height }
    }
    measure()

    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(container)

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const ANGLE_STEP = 0.82 // radians between adjacent slots
    const VISIBLE = 1.5 // fade to nothing beyond ~1.5 slots from centre

    const place = (node: HTMLDivElement, card: HTMLDivElement | null, rel: number) => {
      const { w, h } = sizeRef.current
      if (!w || !h) return

      const cx = w / 2
      const cy = h * 0.9
      const rx = w * 0.34
      const ry = h * 0.6

      const theta = Math.PI / 2 - rel * ANGLE_STEP
      const x = cx + rx * Math.cos(theta)
      const y = cy - ry * Math.sin(theta)

      const dist = Math.abs(rel)
      // Centre item stays at scale 1 (crisp text); only the sides scale down
      const scale = Math.max(0.5, 1 - dist * 0.3)
      const opacity = Math.max(0, Math.min(1, (VISIBLE - dist) / 0.5))

      node.style.left = `${x}px`
      node.style.top = `${y}px`
      node.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`
      node.style.opacity = opacity.toFixed(3)
      // Kept well below the navbar (z-50); isolate on the container guards too
      node.style.zIndex = String(Math.max(0, Math.round((2 - dist) * 5)))

      // The rectangular card only materialises for the item at the apex
      if (card) card.style.opacity = Math.max(0, 1 - dist * 1.8).toFixed(3)
    }

    /** Centre-relative slot for item i at the current position (-count/2..count/2) */
    const relFor = (i: number) => {
      const t = phaseRef.current
      // (i + t) makes items flow left -> centre -> right
      let rel = ((i + t) % count + count) % count
      if (rel > count / 2) rel -= count
      return rel
    }

    let raf = 0

    // Stepped loop: a card rises to centre, dwells, then the next rises.
    const DWELL = 1600 // ms held at centre
    const MOVE = 650 // ms to rise into the centre
    const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3)

    let fromPos = 0
    let toPos = 0
    let phase: "dwell" | "move" = "dwell"
    let stamp = performance.now() // dwell start / move start

    const tick = (now: number) => {
      if (phase === "dwell") {
        if (now - stamp >= DWELL) {
          phase = "move"
          stamp = now
          fromPos = toPos
          toPos = fromPos + 1
        }
      } else {
        const p = Math.min(1, (now - stamp) / MOVE)
        phaseRef.current = fromPos + (toPos - fromPos) * easeOutCubic(p)
        if (p >= 1) {
          phaseRef.current = toPos
          phase = "dwell"
          stamp = now
        }
      }

      for (let i = 0; i < count; i += 1) {
        const node = itemRefs.current[i]
        if (node) place(node, cardRefs.current[i], relFor(i))
      }
      raf = requestAnimationFrame(tick)
    }

    if (prefersReduced) {
      // Static: centre item at apex, neighbours to the sides
      for (let i = 0; i < count; i += 1) {
        const node = itemRefs.current[i]
        if (node)
          place(
            node,
            cardRefs.current[i],
            i === 0 ? 0 : i === 1 ? 1 : i === count - 1 ? -1 : VISIBLE + 1
          )
      }
    } else {
      raf = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      className="relative isolate z-0 h-[320px] w-full overflow-hidden md:h-[420px]"
    >
      {/* Green background effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 74%, rgba(0,119,85,0.28) 0%, rgba(0,119,85,0.08) 45%, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent"
      />

      {items.map((benefit, index) => (
        <div
          key={benefit.title}
          ref={(node) => {
            itemRefs.current[index] = node
          }}
          style={{ opacity: 0 }}
          className="absolute left-1/2 top-1/2 flex w-[200px] flex-col items-center gap-4 text-center will-change-transform md:w-[230px]"
        >
          {/* Rectangular card that fades in for the centred item */}
          <div
            ref={(node) => {
              cardRefs.current[index] = node
            }}
            aria-hidden="true"
            style={{ opacity: 0 }}
            className="pointer-events-none absolute -inset-x-6 -inset-y-7 -z-10 rounded-2xl border border-brand/40 bg-surface/95 shadow-[0_20px_60px_-25px_rgba(0,119,85,0.55)]"
          />
          <span className="flex h-20 w-20 items-center justify-center border border-brand/40 bg-surface/90 backdrop-blur-sm">
            <Icon name={benefit.icon} className="text-[36px] text-brand-bright" filled />
          </span>
          <span className="font-display text-base font-semibold leading-snug text-foreground md:text-lg">
            {benefit.title}
          </span>
        </div>
      ))}
    </div>
  )
}

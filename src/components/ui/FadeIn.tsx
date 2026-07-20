"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in seconds */
  delay?: number
  /** Direction of the entrance motion */
  direction?: "up" | "down" | "none"
}

/**
 * Lightweight scroll-triggered fade/slide-in for section blocks.
 * Respects reduced-motion preferences via Framer Motion defaults.
 */
export const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const yOffset = direction === "up" ? 28 : direction === "down" ? -28 : 0

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

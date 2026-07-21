import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type CardProps = {
  children: ReactNode
  className?: string
  /** Enables the tonal hover interaction from the design system */
  interactive?: boolean
}

/**
 * Standard elevated card: #141414 surface with a 1px #262626 outline.
 * Depth is communicated via tonal layering, not shadows.
 */
export const Card = ({ children, className, interactive = true }: CardProps) => (
  <div
    className={cn(
      "border border-edge bg-surface p-8",
      interactive &&
        "transition-colors duration-300 hover:border-edge-bright hover:bg-elevated",
      className
    )}
  >
    {children}
  </div>
)

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

/**
 * Section wrapper enforcing the design system's generous vertical rhythm
 * (120px on desktop, reduced on mobile).
 */
export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-16 md:py-28", className)}>
    {children}
  </section>
)

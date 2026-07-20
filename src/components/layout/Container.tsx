import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ContainerProps = {
  children: ReactNode
  className?: string
}

/**
 * Standard content container: 1280px max width with responsive gutters.
 * Wide desktop margins per the design system's "printed prospectus" feel.
 */
export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-7xl px-5 md:px-16", className)}>
    {children}
  </div>
)

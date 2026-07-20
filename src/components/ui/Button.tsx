import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "ghost"

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  ariaLabel?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  /* Solid brand green — high contrast, no gradient (per design system) */
  primary:
    "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand-bright",
  /* Ghost with 1px edge border, lightens on hover */
  secondary:
    "border border-edge text-foreground hover:bg-elevated hover:border-edge-bright focus-visible:outline-brand-bright",
  /* Text-only link-style button */
  ghost:
    "text-brand-bright hover:text-brand-glow focus-visible:outline-brand-bright",
}

/**
 * Button rendered as a Next.js link (all site CTAs navigate).
 * Fixed 48px height on desktop for an executive feel.
 */
export const ButtonLink = ({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonLinkProps) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    className={cn(
      "inline-flex h-12 items-center justify-center gap-2 rounded px-7 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      variantClasses[variant],
      className
    )}
  >
    {children}
  </Link>
)

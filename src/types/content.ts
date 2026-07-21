/**
 * Shared content types.
 * Every editable content file in `src/content` conforms to these shapes,
 * keeping copy changes type-safe and predictable.
 */

export type CtaLink = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
}

export type ServiceItem = {
  /** Material Symbols icon name, e.g. "account_balance" */
  icon: string
  title: string
  description: string
}

export type AdvantageItem = {
  icon: string
  title: string
  description: string
}

export type ProcessStep = {
  step: number
  icon: string
  title: string
  description: string
}

export type BenefitItem = {
  icon: string
  title: string
  /** Short supporting line under the benefit title */
  description: string
}

export type IndustryItem = {
  icon: string
  title: string
  /** Shown on hover — how LongGreen supports this industry */
  description: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

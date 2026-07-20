import { cn } from "@/lib/utils"

type IconProps = {
  /** Material Symbols icon name, e.g. "account_balance" */
  name: string
  className?: string
  filled?: boolean
}

/**
 * Material Symbols Outlined wrapper.
 * The icon font is loaded in the root layout.
 */
export const Icon = ({ name, className, filled = false }: IconProps) => (
  <span
    aria-hidden="true"
    className={cn("material-symbols-outlined select-none", className)}
    style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
  >
    {name}
  </span>
)

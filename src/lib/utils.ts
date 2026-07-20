/**
 * Joins class names, skipping falsy values.
 * Lightweight alternative to clsx for conditional Tailwind classes.
 */
export const cn = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter(Boolean).join(" ")

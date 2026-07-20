import type { CtaLink, NavItem } from "@/types/content"

/**
 * Primary navigation. Order here controls order in the navbar & footer.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
]

/** The primary conversion CTA shown in the navbar on every page */
export const navCta: CtaLink = {
  label: "Request a Consultation",
  href: "/consultation",
}

export const footerLinks: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Request a Consultation", href: "/consultation" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
]

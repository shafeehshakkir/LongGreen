import Link from "next/link"
import { footerLinks } from "@/content/navigation"
import { siteConfig } from "@/content/site"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"

/**
 * Global footer: brand block, link columns, regulatory line.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-edge bg-sunken">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-6">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-brand">
                <Icon name="monitoring" className="text-[18px] text-white" filled />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                {siteConfig.legalName}
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.08em] text-faint">
              Serving {siteConfig.regions.join(" · ")}
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading} className="md:col-span-3">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-faint">
                {group.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-brand-bright"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-edge pt-8 md:flex-row md:items-center">
          <p className="text-xs text-faint">
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-faint">
            Institutional precision. Global reach. Confidential by design.
          </p>
        </div>
      </Container>
    </footer>
  )
}

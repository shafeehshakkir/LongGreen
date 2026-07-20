"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { navCta, navItems } from "@/content/navigation"
import { siteConfig } from "@/content/site"
import { Icon } from "@/components/ui/Icon"
import { cn } from "@/lib/utils"

/**
 * Fixed top navigation with backdrop blur.
 * Desktop: inline links + primary CTA. Mobile: hamburger drawer.
 */
export const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => setIsMenuOpen((previous) => !previous)
  const handleLinkClick = () => setIsMenuOpen(false)

  const isActiveRoute = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-edge/60 bg-canvas/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 md:px-16"
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="flex items-center gap-2.5"
          onClick={handleLinkClick}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-brand">
            <Icon name="monitoring" className="text-[18px] text-white" filled />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Long<span className="text-brand-bright">Green</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-200",
                isActiveRoute(item.href)
                  ? "text-brand-bright"
                  : "text-muted hover:text-brand-bright"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href={navCta.href}
          className="hidden h-11 items-center rounded bg-brand px-6 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-brand-dark md:inline-flex"
        >
          {navCta.label}
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          tabIndex={0}
          className="text-foreground md:hidden"
          onClick={handleMenuToggle}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} className="text-3xl" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="border-t border-edge bg-canvas px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "rounded px-3 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors",
                  isActiveRoute(item.href)
                    ? "bg-surface text-brand-bright"
                    : "text-muted hover:bg-surface hover:text-brand-bright"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={navCta.href}
              onClick={handleLinkClick}
              className="mt-3 inline-flex h-12 items-center justify-center rounded bg-brand px-6 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-dark"
            >
              {navCta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

"use client"

import Image from "next/image"
import type { MouseEvent } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { hero } from "@/content/home"
import { ButtonLink } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"
import { HeroBackground } from "@/components/sections/HeroBackground"

/**
 * Home hero: eyebrow, headline, description, dual CTA, boardroom imagery.
 * Cursor-reactive liquid-glass backdrop + soft entrance motion.
 */
export const HeroSection = () => {
  /* Normalized cursor position (-0.5 … 0.5), smoothed with springs */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 })

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive liquid-glass backdrop */}
      <HeroBackground mouseX={smoothX} mouseY={smoothY} />

      <Container className="relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
              {hero.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
              {hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {hero.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <ButtonLink href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative hidden h-[480px] overflow-hidden rounded-lg border border-brand-bright/15 shadow-[0_32px_64px_rgba(0,0,0,0.5)] lg:block"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/landing page.png"
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 0vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

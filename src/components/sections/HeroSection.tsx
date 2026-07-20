"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { hero } from "@/content/home"
import { ButtonLink } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"

/**
 * Home hero: eyebrow, headline, description, dual CTA, boardroom imagery.
 * Soft entrance motion for a premium first impression.
 */
export const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Ambient brand glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-15"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 60% at 25% 40%, #007755 0%, transparent 65%)",
      }}
    />

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
          className="relative hidden h-[480px] overflow-hidden rounded-lg border border-edge lg:block"
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

import Image from "next/image"
import { hero } from "@/content/home"
import { ButtonLink } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"

/**
 * Home hero: full-bleed background image with copy and dual CTAs.
 * Uses the full-resolution asset (not the compressed preview) at max quality.
 */
export const HeroSection = () => (
  <section className="relative overflow-hidden">
    <Image
      src="/images/bgog.jpg"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      className="object-cover object-center"
      aria-hidden="true"
    />

    <Container className="relative z-10 py-24 md:py-36">
      <div className="flex max-w-2xl flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
          {hero.eyebrow}
        </span>
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
          {hero.headline}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
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
      </div>
    </Container>
  </section>
)

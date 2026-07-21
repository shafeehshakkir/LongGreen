import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  caseStudiesCta,
  caseStudiesHero,
  featuredCaseStudy,
} from "@/content/case-studies"
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid"
import { CTASection } from "@/components/sections/CTASection"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

export const metadata: Metadata = {
  title: "Case Studies | Proven Financial Transformation Results",
  description:
    "Real results from LongGreen engagements: ERP transformations, post-merger integration, tax structure optimization and finance function outsourcing across the GCC, UK and APAC.",
  alternates: { canonical: "/case-studies" },
}

/**
 * Case studies index — hero, featured flagship engagement,
 * filterable sector gallery, and conversion CTA.
 */
const CaseStudiesPage = () => (
  <>
    {/* ---------- Hero ---------- */}
    <Section className="pb-0">
      <Container>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          {caseStudiesHero.headlinePlain}{" "}
          <span className="text-brand-bright">{caseStudiesHero.headlineAccent}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {caseStudiesHero.description}
        </p>
      </Container>
    </Section>

    {/* ---------- Featured flagship case study ---------- */}
    <Section className="pb-0">
      <Container>
        <div className="group relative h-[520px] overflow-hidden border border-edge md:h-[600px]">
          <Image
            src={featuredCaseStudy.image}
            alt={featuredCaseStudy.imageAlt}
            fill
            priority
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Bottom gradient for copy legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-sunken via-sunken/80 to-transparent" />

          <div className="absolute bottom-0 left-0 flex w-full flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-end md:p-16">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
                {featuredCaseStudy.eyebrow}
              </span>
              <h2 className="mb-6 font-display text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
                {featuredCaseStudy.title}
              </h2>
              <div className="flex gap-8">
                {featuredCaseStudy.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-display text-2xl font-bold text-brand-bright">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={featuredCaseStudy.cta.href}
              className="group/btn inline-flex h-12 shrink-0 items-center justify-center border border-faint px-8 text-sm font-semibold text-foreground transition-all hover:border-brand hover:bg-elevated"
            >
              {featuredCaseStudy.cta.label}
              <Icon
                name="arrow_forward"
                className="ml-2 text-[20px] transition-transform group-hover/btn:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>

    {/* ---------- Filterable gallery ---------- */}
    <Section>
      <Container>
        <CaseStudiesGrid />
      </Container>
    </Section>

    {/* ---------- Conversion CTA ---------- */}
    <CTASection
      heading={caseStudiesCta.heading}
      description={caseStudiesCta.description}
      cta={caseStudiesCta.cta}
    />
  </>
)

export default CaseStudiesPage

import type { Metadata } from "next"
import { finalCta } from "@/content/home"
import { siteConfig } from "@/content/site"
import { HeroSection } from "@/components/sections/HeroSection"
import { GlobalReachBanner } from "@/components/sections/GlobalReachBanner"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { AdvantageSection } from "@/components/sections/AdvantageSection"
import { IndustriesSection } from "@/components/sections/IndustriesSection"
import { OutsourceSection } from "@/components/sections/OutsourceSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CTASection } from "@/components/sections/CTASection"
import { OrganizationJsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: `${siteConfig.name} | Outsourced Finance Controller & Accounting Solutions`,
  description:
    "Outsourced finance controller & accounting solutions for growing businesses across the GCC, UK and India. Expert bookkeeping, ERP implementation, internal audit, taxation and CFO advisory. Book a free consultation.",
  alternates: { canonical: "/" },
}

/**
 * Home page — thin composition layer.
 * All copy lives in `src/content/home.ts`; each section renders one block.
 */
const HomePage = () => (
  <>
    <OrganizationJsonLd />
    <HeroSection />
    <GlobalReachBanner />
    <ServicesGrid />
    <AdvantageSection />
    <IndustriesSection />
    <OutsourceSection />
    <TestimonialsSection />
    <CTASection
      heading={finalCta.heading}
      description={finalCta.description}
      cta={finalCta.cta}
    />
  </>
)

export default HomePage

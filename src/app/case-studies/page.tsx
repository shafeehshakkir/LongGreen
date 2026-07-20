import type { Metadata } from "next"
import { PagePlaceholder } from "@/components/sections/PagePlaceholder"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Proven results across finance transformation, ERP implementation, and outsourced controller engagements for clients in the GCC, UK and India.",
  alternates: { canonical: "/case-studies" },
}

/* Full case studies index ships in Phase 3 — see implementation plan */
const CaseStudiesPage = () => (
  <PagePlaceholder
    eyebrow="Case Studies"
    heading="Institutional Results, Documented"
    description="Explore how LongGreen has helped businesses streamline finance operations, implement ERP systems, and gain real-time financial control. Detailed case studies coming soon."
  />
)

export default CaseStudiesPage

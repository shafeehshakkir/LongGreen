import type { CtaLink } from "@/types/content"

/**
 * ============================================================
 * CASE STUDIES PAGE CONTENT
 * Reference: Screen/longgreen_case_studies_index (mockup)
 * Add new engagements to `caseStudies` below — the sector
 * filter tabs are generated automatically from the data.
 * ============================================================
 */

export type CaseStudy = {
  sector: string
  title: string
  description: string
  results: string[]
  /** Optional background image rendered at low opacity behind the card */
  image?: string
  /** Wide cards span 2/3 of the grid on desktop */
  wide?: boolean
}

/* ---------- Hero ---------- */
export const caseStudiesHero = {
  headlinePlain: "Institutional Impact:",
  headlineAccent: "Our Success Stories",
  description:
    "Discover how LongGreen transforms financial architectures, optimizes tax structures, and drives operational excellence for global enterprises across dynamic sectors.",
}

/* ---------- Featured flagship engagement ---------- */
export const featuredCaseStudy = {
  eyebrow: "Flagship Project // Retail",
  title: "Global ERP Transformation for a Tier 1 Retailer in the GCC",
  image: "/images/case-studies/featured-erp.jpg",
  imageAlt:
    "Futuristic corporate headquarters at dusk with green architectural lighting",
  stats: [
    { value: "30%", label: "Operational Efficiency Gain" },
    { value: "$45M", label: "Annualized Savings" },
  ],
  cta: { label: "Read Full Story", href: "/consultation" } as CtaLink,
}

/* ---------- Case study gallery ---------- */
export const caseStudies: CaseStudy[] = [
  {
    sector: "Financial Services",
    title: "Post-Merger Integration of Tier-2 Regional Banks",
    description:
      "Strategic alignment of disparate core banking systems and operational frameworks to ensure seamless day-one readiness and regulatory compliance.",
    results: ["100% Core System Synchronization", "Zero Service Interruption"],
  },
  {
    sector: "Manufacturing",
    title: "Optimizing Multi-Entity Tax Structures Across APAC Operations",
    description:
      "A comprehensive restructuring of transfer pricing models and regional tax liabilities to enhance cash flow for a global industrial manufacturer.",
    results: ["15% Reduction in ETR", "Streamlined Cross-Border Compliance"],
    image: "/images/case-studies/manufacturing.jpg",
    wide: true,
  },
]

/* ---------- Bottom CTA ---------- */
export const caseStudiesCta = {
  heading: "Ready to write your success story?",
  description:
    "Engage our senior partners to discuss your organizational challenges and explore strategic architectural solutions.",
  cta: {
    label: "Request a Confidential Consultation",
    href: "/consultation",
  } as CtaLink,
}

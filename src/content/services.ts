import type { CtaLink } from "@/types/content"

/**
 * ============================================================
 * SERVICES PAGE CONTENT
 * Reference: Screen/longgreen_our_services (mockup)
 * Edit copy here — the page renders whatever is defined below.
 * ============================================================
 */

/* ---------- Hero ---------- */
export const servicesHero = {
  eyebrow: "Our Services",
  headline: "Comprehensive Financial Solutions",
  description:
    "Strategic growth and operational excellence engineered for institutional resilience. We provide C-suite level financial oversight, enabling you to focus on core business objectives while we ensure absolute precision in your financial operations.",
  cta: { label: "Explore Our Services", href: "#pillars" } as CtaLink,
}

/* ---------- Core Service Pillars (bento grid) ---------- */
export const servicePillars = {
  heading: "Core Service Pillars",
  subheading:
    "Institutional-grade financial capabilities delivered with rigorous precision and strategic foresight.",

  financeController: {
    icon: "account_balance",
    title: "Finance Controller Services",
    description:
      "Strategic oversight, rigorous compliance, and operational efficiency to optimize financial workflows and ensure institutional integrity.",
  },

  accounting: {
    icon: "receipt_long",
    title: "Accounting & Bookkeeping",
    description:
      "Flawless execution of accurate record-keeping and proactive financial health monitoring. We transform raw data into reliable, actionable financial intelligence.",
    checklist: [
      "Daily Reconciliation",
      "Month-End Close",
      "AP/AR Management",
      "Financial Reporting",
    ],
  },

  cfoAdvisory: {
    icon: "leaderboard",
    title: "CFO Advisory",
    description:
      "Elite capital structuring, growth planning, and strategic leadership. Navigate complex financial landscapes with confidence and clarity.",
    highlights: [
      {
        label: "Strategic Vision",
        description:
          "Long-term financial modeling and scenario planning to align with corporate objectives.",
      },
      {
        label: "Capital Optimization",
        description:
          "Debt and equity structuring, fund-raising support, and rigorous cash flow forecasting.",
      },
    ],
  },

  erpImplementation: {
    icon: "integration_instructions",
    title: "ERP Implementation",
    description: "Seamless integration of advanced financial software ecosystems.",
    platforms: ["Zoho", "QuickBooks", "Xero", "TallyPrime", "Odoo"],
  },

  auditAndTax: {
    icon: "policy",
    title: "Internal Audit & Tax Planning",
    description:
      "Rigorous risk mitigation, robust governance, and proactive tax minimization strategies. We provide comprehensive internal auditing and strategic tax planning to protect and enhance institutional value.",
  },
}

/* ---------- Bottom CTA ---------- */
export const servicesCta = {
  heading: "Ready to Optimize Your Financial Operations?",
  description:
    "Partner with LongGreen for institutional-grade financial expertise and strategic growth planning tailored to your firm's unique needs.",
  cta: { label: "Request a Consultation", href: "/consultation" } as CtaLink,
}

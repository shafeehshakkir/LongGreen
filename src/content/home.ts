import type {
  AdvantageItem,
  BenefitItem,
  CtaLink,
  ProcessStep,
  ServiceItem,
  Testimonial,
} from "@/types/content"

/**
 * ============================================================
 * HOME PAGE CONTENT
 * Source: Long_Green_Homepage_Content_Updated.docx
 * Edit copy here — components render whatever is defined below.
 * ============================================================
 */

/* ---------- Hero ---------- */
export const hero = {
  eyebrow: "Your Finance Partner in India",
  headline: "Outsourced Finance Controller & Accounting Solutions for Growing Businesses",
  description:
    "We help businesses across the GCC, UK, India and beyond streamline their finance operations, gain real-time financial insights, and scale confidently through expert accounting, finance controller, ERP implementation, and advisory services.",
  primaryCta: { label: "Book a Free Consultation", href: "/consultation" } as CtaLink,
  secondaryCta: { label: "Talk to Our Experts", href: "/consultation" } as CtaLink,
  imageAlt:
    "Modern corporate boardroom with panoramic city views, reflecting institutional financial consulting",
}

/* ---------- Serving Businesses banner ---------- */
export const servingBusinesses = {
  label: "Serving Businesses Globally",
  regions: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Bahrain", "United Kingdom", "India"],
}

/* ---------- What We Do ---------- */
export const whatWeDo = {
  heading: "Comprehensive Financial Solutions",
  subheading:
    "Expertly crafted services designed to streamline operations and drive strategic growth for ambitious organizations.",
  services: [
    {
      icon: "account_balance",
      title: "Finance Controller Services",
      description:
        "Strategic oversight and management of your finance function, ensuring compliance and operational efficiency.",
    },
    {
      icon: "receipt_long",
      title: "Accounting & Bookkeeping",
      description:
        "Accurate, timely, and compliant financial record-keeping to provide a clear picture of your business health.",
    },
    {
      icon: "integration_instructions",
      title: "ERP & Accounting Software Implementation",
      description:
        "Seamless integration of advanced accounting software to automate and optimize your financial workflows.",
    },
    {
      icon: "plagiarism",
      title: "Internal Audit",
      description:
        "Rigorous evaluation of internal controls and processes to mitigate risk and ensure robust governance.",
    },
    {
      icon: "request_quote",
      title: "Taxation Services",
      description:
        "Comprehensive tax planning and compliance strategies to minimize liabilities and ensure regulatory adherence.",
    },
    {
      icon: "trending_up",
      title: "CFO Advisory",
      description:
        "High-level financial strategy, capital structuring, and growth planning from experienced financial leaders.",
    },
  ] as ServiceItem[],
}

/* ---------- Extended service capabilities ---------- */
export const extendedCapabilities = {
  heading: "Our Services",
  items: [
    "Finance Controller",
    "Bookkeeping",
    "Management Reporting",
    "Budgeting & Forecasting",
    "Cash Flow Management",
    "Accounts Receivable Management",
    "ERP Implementation",
    "Accounting Software Setup",
    "Finance Dashboards",
    "SOP Development",
    "CFO Advisory",
    "Process Automation",
    "Internal Audit",
    "Taxation Services",
  ],
}

/* ---------- Why Choose LongGreen ---------- */
export const whyChoose = {
  heading: "The LongGreen Advantage",
  subheading: "Institutional precision delivered by a dedicated team of experts.",
  advantages: [
    {
      icon: "workspace_premium",
      title: "CA-Led Team",
      description: "Chartered Accountant-led team driving your financial strategy.",
    },
    {
      icon: "support_agent",
      title: "Dedicated Controller",
      description: "Dedicated Finance Controller support tailored to your business.",
    },
    {
      icon: "cloud_done",
      title: "Cloud Accounting Experts",
      description: "Proficient in modern cloud accounting infrastructure.",
    },
    {
      icon: "deployed_code",
      title: "ERP Specialists",
      description: "ERP implementation specialists across leading platforms.",
    },
    {
      icon: "savings",
      title: "Cost-Effective",
      description: "High-tier offshore finance talent at a fraction of in-house costs.",
    },
    {
      icon: "domain",
      title: "Industry Expertise",
      description: "Industry-specific expertise across nine core sectors.",
    },
    {
      icon: "monitoring",
      title: "Real-Time MI",
      description: "Real-time dashboards and management information reporting.",
    },
    {
      icon: "shield_lock",
      title: "Secure Operations",
      description: "Secure, confidential handling of all financial data.",
    },
  ] as AdvantageItem[],
}

/* ---------- How We Work ---------- */
export const howWeWork = {
  heading: "Our Engagement Process",
  steps: [
    {
      step: 1,
      title: "Understand Your Business",
      description: "We start with a deep discovery of your operations, systems, and goals.",
    },
    {
      step: 2,
      title: "Design the Right Financial Solution",
      description: "A tailored finance function blueprint built around your growth stage.",
    },
    {
      step: 3,
      title: "Implement Systems & Processes",
      description: "We deploy the tools, controls, and workflows that power precision.",
    },
    {
      step: 4,
      title: "Deliver Ongoing Financial Insights",
      description: "Continuous reporting, dashboards, and advisory that compound value.",
    },
  ] as ProcessStep[],
}

/* ---------- Industries We Serve ---------- */
export const industries = {
  heading: "Industries We Serve",
  subheading: "Deep domain knowledge across the sectors that drive regional economies.",
  items: [
    { icon: "storefront", title: "Retail & Supermarkets" },
    { icon: "swap_horiz", title: "Trading" },
    { icon: "precision_manufacturing", title: "Manufacturing" },
    { icon: "construction", title: "Construction" },
    { icon: "medical_services", title: "Healthcare" },
    { icon: "apartment", title: "Facilities Management" },
    { icon: "work", title: "Professional Services" },
    { icon: "shopping_cart", title: "E-commerce" },
    { icon: "school", title: "Education" },
  ] as BenefitItem[],
}

/* ---------- Why Outsource to India ---------- */
export const whyOutsource = {
  heading: "Why Outsource to India?",
  subheading:
    "Gain access to experienced finance professionals at a fraction of the cost of building an in-house finance team.",
  benefits: [
    { icon: "payments", title: "Lower Operating Costs" },
    { icon: "verified", title: "Qualified Chartered Accountants" },
    { icon: "schedule", title: "Time Zone Advantage" },
    { icon: "cloud_sync", title: "Cloud Collaboration" },
    { icon: "trending_up", title: "Scalable Finance Support" },
    { icon: "speed", title: "Faster Reporting" },
    { icon: "verified_user", title: "Improved Financial Control" },
  ] as BenefitItem[],
}

/* ---------- Technology Expertise ---------- */
export const technology = {
  heading: "Technology Expertise",
  subheading: "Proficient in industry-leading financial software.",
  platforms: ["Zoho", "QuickBooks", "Xero", "TallyPrime", "Odoo"],
}

/* ---------- Client Testimonials ---------- */
/* Placeholder testimonials — replace with real client quotes before launch. */
export const testimonials = {
  heading: "What Our Clients Say",
  subheading: "Trusted by finance leaders across the GCC, UK, and India.",
  items: [
    {
      quote:
        "LongGreen transformed our month-end close from a three-week scramble into a five-day process. Their controller team operates like an extension of our own.",
      name: "Operations Director",
      role: "Retail Group, UAE",
    },
    {
      quote:
        "The ERP implementation was flawless — on time, on budget, and our reporting visibility improved overnight. We finally trust our numbers.",
      name: "Managing Director",
      role: "Trading Company, Saudi Arabia",
    },
    {
      quote:
        "Their CFO advisory gave us the capital structure and forecasting discipline we needed to secure our next round of growth funding.",
      name: "Founder & CEO",
      role: "Healthcare Provider, United Kingdom",
    },
  ] as Testimonial[],
}

/* ---------- Final CTA ---------- */
export const finalCta = {
  heading: "Ready to Strengthen Your Finance Function?",
  description:
    "Whether you need an outsourced Finance Controller, accounting support, or ERP implementation, LongGreen is here to help your business grow with confidence.",
  cta: { label: "Book Your Free Consultation Today", href: "/consultation" } as CtaLink,
}

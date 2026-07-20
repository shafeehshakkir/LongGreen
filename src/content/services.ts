import type { CtaLink } from "@/types/content"

/**
 * ============================================================
 * SERVICES PAGE CONTENT
 * Edit copy here — the page renders whatever is defined below.
 * ============================================================
 */

export type ServiceListing = {
  /** Material Symbols icon name */
  icon: string
  title: string
  description: string
  /** SEO-friendly keyword phrase used in subcopy */
  keywords?: string
}

export type ServiceLocation = {
  id: string
  name: string
  /** Position on the world map (% of container width / height) */
  x: number
  y: number
  city: string
  phone: string
  email: string
  hours: string
  address: string
}

/* ---------- Hero ---------- */
export const servicesHero = {
  eyebrow: "Our Services",
  headline: "Comprehensive Financial Solutions",
  description:
    "Strategic growth and operational excellence engineered for institutional resilience. We provide C-suite level financial oversight, enabling you to focus on core business objectives while we ensure absolute precision in your financial operations.",
  cta: { label: "Explore Our Services", href: "#services-list" } as CtaLink,
}

/**
 * Major services — rendered as prominent cards for SEO & clarity.
 * These are the primary keyword targets for the services page.
 */
export const majorServices: ServiceListing[] = [
  {
    icon: "account_balance",
    title: "Finance Controller",
    description:
      "Outsourced finance controller services delivering strategic oversight, compliance, and operational efficiency for growing businesses across the GCC, UK and India.",
    keywords: "outsourced finance controller",
  },
  {
    icon: "receipt_long",
    title: "Bookkeeping",
    description:
      "Accurate, timely accounting and bookkeeping with month-end close, reconciliations, and clear financial records that give you a real-time view of business health.",
    keywords: "accounting and bookkeeping services",
  },
  {
    icon: "integration_instructions",
    title: "ERP Implementation",
    description:
      "End-to-end ERP and accounting software implementation — Zoho, QuickBooks, Xero, TallyPrime and Odoo — so your finance stack scales with the business.",
    keywords: "ERP implementation consulting",
  },
  {
    icon: "trending_up",
    title: "CFO Advisory",
    description:
      "C-suite financial strategy, capital structuring, budgeting, forecasting and growth planning from experienced CFO advisors.",
    keywords: "CFO advisory services",
  },
  {
    icon: "plagiarism",
    title: "Internal Audit",
    description:
      "Independent internal audit and control reviews that strengthen governance, reduce risk, and satisfy regulatory expectations.",
    keywords: "internal audit services",
  },
  {
    icon: "request_quote",
    title: "Taxation Services",
    description:
      "Tax planning and compliance support across GCC, UK and India jurisdictions — structured to minimise liability and protect institutional value.",
    keywords: "taxation services GCC",
  },
]

/**
 * Additional capabilities — revealed via "View all services".
 * Kept as secondary so the page stays focused for SEO.
 */
export const additionalServices: ServiceListing[] = [
  {
    icon: "analytics",
    title: "Management Reporting",
    description:
      "Board-ready management packs and MI reporting that turn financial data into clear, actionable insight.",
  },
  {
    icon: "query_stats",
    title: "Budgeting & Forecasting",
    description:
      "Rolling forecasts, annual budgets and scenario models aligned to your growth plan.",
  },
  {
    icon: "account_balance_wallet",
    title: "Cash Flow Management",
    description:
      "Working-capital discipline and cash visibility so you can fund growth with confidence.",
  },
  {
    icon: "payments",
    title: "Accounts Receivable Management",
    description:
      "AR process design, collections discipline and ageing control that shorten your cash cycle.",
  },
  {
    icon: "settings_applications",
    title: "Accounting Software Setup",
    description:
      "Chart of accounts, migration and configuration for cloud and on-premise finance platforms.",
  },
  {
    icon: "dashboard",
    title: "Finance Dashboards",
    description:
      "Real-time finance dashboards that surface KPIs for leadership without spreadsheet chaos.",
  },
  {
    icon: "description",
    title: "SOP Development",
    description:
      "Documented finance SOPs that standardise process, reduce key-person risk and support scale.",
  },
  {
    icon: "auto_mode",
    title: "Process Automation",
    description:
      "Automation of repetitive finance workflows — from invoice capture to reconciliations.",
  },
]

/* ---------- Global presence map ---------- */
export const globalPresence = {
  eyebrow: "Global Reach",
  heading: "Where We Serve",
  subheading:
    "Finance consulting and outsourced controller services across the GCC, United Kingdom and India. Hover a marker for local contact details.",
  /* Marker positions — equirectangular % from lon/lat for the detailed world SVG */
  locations: [
    {
      id: "uae",
      name: "UAE",
      x: 65.35,
      y: 36.0,
      city: "Dubai",
      phone: "+971 4 000 0000",
      email: "uae@longgreen.com",
      hours: "Sun–Thu · 9:00–18:00 GST",
      address: "Business Bay, Dubai, UAE",
    },
    {
      id: "saudi",
      name: "Saudi Arabia",
      x: 62.97,
      y: 36.27,
      city: "Riyadh",
      phone: "+966 11 000 0000",
      email: "ksa@longgreen.com",
      hours: "Sun–Thu · 9:00–18:00 AST",
      address: "King Fahd Road, Riyadh, KSA",
    },
    {
      id: "qatar",
      name: "Qatar",
      x: 64.31,
      y: 35.95,
      city: "Doha",
      phone: "+974 4000 0000",
      email: "qatar@longgreen.com",
      hours: "Sun–Thu · 9:00–18:00 AST",
      address: "West Bay, Doha, Qatar",
    },
    {
      id: "oman",
      name: "Oman",
      x: 66.22,
      y: 36.9,
      city: "Muscat",
      phone: "+968 2400 0000",
      email: "oman@longgreen.com",
      hours: "Sun–Thu · 9:00–18:00 GST",
      address: "Al Khuwair, Muscat, Oman",
    },
    {
      id: "bahrain",
      name: "Bahrain",
      x: 64.05,
      y: 35.43,
      city: "Manama",
      phone: "+973 1700 0000",
      email: "bahrain@longgreen.com",
      hours: "Sun–Thu · 9:00–18:00 AST",
      address: "Seef District, Manama, Bahrain",
    },
    {
      id: "uk",
      name: "United Kingdom",
      x: 49.96,
      y: 21.38,
      city: "London",
      phone: "+44 20 0000 0000",
      email: "uk@longgreen.com",
      hours: "Mon–Fri · 9:00–17:30 GMT",
      address: "Canary Wharf, London, UK",
    },
    {
      id: "india",
      name: "India",
      x: 71.19,
      y: 44.48,
      city: "Kochi",
      phone: "+91 484 000 0000",
      email: "india@longgreen.com",
      hours: "Mon–Fri · 9:30–18:30 IST",
      address: "Infopark, Kochi, Kerala, India",
    },
  ] as ServiceLocation[],
}

/* ---------- Bottom CTA ---------- */
export const servicesCta = {
  heading: "Ready to Optimize Your Financial Operations?",
  description:
    "Partner with LongGreen for institutional-grade financial expertise and strategic growth planning tailored to your firm's unique needs.",
  cta: { label: "Request a Consultation", href: "/consultation" } as CtaLink,
}

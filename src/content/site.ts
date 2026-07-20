/**
 * Global site configuration.
 * Company identity, contact details, and SEO defaults live here.
 */

export const siteConfig = {
  name: "LongGreen",
  legalName: "LongGreen Financial Consulting",
  tagline: "Your Finance Partner in India",
  /** Update with the production domain before launch (used for canonical URLs & OG tags) */
  url: "https://www.longgreen.com",
  description:
    "Outsourced finance controller, accounting, ERP implementation, internal audit, taxation and CFO advisory services for businesses across the GCC, UK and India.",
  keywords: [
    "financial consulting firm",
    "outsourced finance controller",
    "accounting and bookkeeping services",
    "outsourced accounting India",
    "CFO advisory services",
    "ERP implementation consulting",
    "internal audit services",
    "taxation services GCC",
    "finance outsourcing UK",
    "cloud accounting experts",
  ],
  contact: {
    email: "hello@longgreen.com",
    phone: "+91 00000 00000",
  },
  regions: [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "United Kingdom",
    "India",
  ],
} as const

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
  /**
   * Brand logo
   * ----------
   * 1. Drop your file into:  public/images/logo.png
   *    (also works: logo.svg, logo.webp, logo.jpg)
   * 2. Set `src` below to that path, e.g. "/images/logo.png"
   * 3. Leave `src: null` to keep the default green icon mark
   * 4. If your file already includes the word "LongGreen", set hideWordmark: true
   */
  logo: {
    src: "/images/logo.png",
    alt: "LongGreen",
    width: 200,
    height: 48,
    hideWordmark: true,
  },
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
}

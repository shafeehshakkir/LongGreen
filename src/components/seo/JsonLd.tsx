import { siteConfig } from "@/content/site"

/**
 * Organization + ProfessionalService structured data for rich search results.
 * Rendered once in the home page.
 */
export const OrganizationJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    areaServed: siteConfig.regions.map((region) => ({
      "@type": "Country",
      name: region,
    })),
    serviceType: [
      "Finance Controller Services",
      "Accounting & Bookkeeping",
      "ERP Implementation",
      "Internal Audit",
      "Taxation Services",
      "CFO Advisory",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { siteConfig } from "@/content/site"
import "./globals.css"

/* Display font — headings (geometric, authoritative) */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
})

/* Body font — exceptional legibility for data-heavy copy */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Financial Consulting & Finance Controller Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: "website",
    siteName: siteConfig.legalName,
    title: `${siteConfig.name} | Financial Consulting & Finance Controller Services`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Financial Consulting`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
    <head>
      {/* Material Symbols icon font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
      />
    </head>
    <body className="min-h-screen bg-canvas font-body text-foreground antialiased">
      <Navbar />
      {/* Offset for the fixed navbar */}
      <main className="pt-18">{children}</main>
      <Footer />
    </body>
  </html>
)

export default RootLayout

import type { CtaLink } from "@/types/content"

/**
 * ============================================================
 * CAREERS PAGE CONTENT
 * Reference: Screen/longgreen_careers_brand_aligned (mockup)
 * The mockup used placeholder copy — the text below is
 * brand-aligned draft copy. Edit freely before launch.
 * ============================================================
 */

/* ---------- Hero ---------- */
export const careersHero = {
  headline: ["Join the Future of", "Financial Intelligence."],
  description:
    "Discover unparalleled career growth and contribute to institutional excellence at LongGreen. We're building the next generation of financial consulting.",
  cta: { label: "See Open Positions", href: "#openings" } as CtaLink,
  gallery: [
    { src: "/images/careers/hero-1.jpg", alt: "Team collaboration at LongGreen" },
    { src: "/images/careers/hero-2.jpg", alt: "Team meeting in progress" },
    { src: "/images/careers/hero-3.jpg", alt: "Group discussion" },
    { src: "/images/careers/hero-4.jpg", alt: "Modern workspace" },
    { src: "/images/careers/hero-5.jpg", alt: "Focused work session" },
  ],
}

/* ---------- Values ---------- */
export const careersValues = {
  eyebrow: "Our Values",
  heading: "The Principles That Drive Us",
  items: [
    {
      icon: "verified_user",
      title: "Integrity",
      description:
        "We handle our clients' most sensitive financial data with absolute discretion. Every recommendation we make is grounded in honesty, independence, and professional ethics.",
    },
    {
      icon: "bolt",
      title: "Excellence",
      description:
        "From daily reconciliations to board-level advisory, we hold every deliverable to institutional standards. Good enough is never good enough.",
    },
    {
      icon: "diversity_3",
      title: "Collaboration",
      description:
        "Controllers, accountants, auditors, and advisors work as one team — with each other and with our clients across the GCC, UK, and India.",
    },
    {
      icon: "lightbulb",
      title: "Innovation",
      description:
        "We champion cloud accounting, automation, and real-time dashboards — constantly modernizing how finance functions are run and delivered.",
    },
  ],
}

/* ---------- Team ---------- */
export const careersTeam = {
  eyebrow: "Our Team",
  heading: "Meet the Experts",
  members: [
    {
      image: "/images/careers/team-1.jpg",
      name: "Jerome Bell",
      role: "Co-founder",
      bio: "Chartered Accountant with two decades leading finance transformations across the GCC and UK.",
    },
    {
      image: "/images/careers/team-2.jpg",
      name: "Anika Dias",
      role: "Operations",
      bio: "Heads client delivery, ensuring every engagement runs with precision and on schedule.",
    },
    {
      image: "/images/careers/team-3.jpg",
      name: "Omar Ekstrom",
      role: "Advisory",
      bio: "Leads CFO advisory engagements — capital structuring, forecasting, and growth planning.",
    },
    {
      image: "/images/careers/team-4.jpg",
      name: "Emery Bator",
      role: "Technology",
      bio: "Drives ERP implementations and finance automation across Zoho, Xero, and Odoo.",
    },
  ],
}

/* ---------- Benefits ---------- */
export const careersBenefits = {
  eyebrow: "Our Benefits",
  heading: ["Institutional Growth,", "Personal Excellence"],
  description:
    "We invest in our people the way we invest in our clients — with rigor, generosity, and a long-term view of growth.",
  image: { src: "/images/careers/culture.jpg", alt: "LongGreen office culture" },
  items: [
    {
      icon: "payments",
      title: "Competitive Compensation",
      description:
        "Salary benchmarked against the top of the market, with performance bonuses that reward exceptional client outcomes.",
    },
    {
      icon: "public",
      title: "Remote Friendly",
      description:
        "Work with global clients from where you do your best work — supported by cloud-first tools and flexible scheduling.",
    },
    {
      icon: "school",
      title: "Learning & Development",
      description:
        "Sponsored professional certifications, ERP platform training, and mentorship from senior Chartered Accountants.",
    },
  ],
}

/* ---------- Team testimonials ---------- */
export const careersTestimonials = {
  eyebrow: "Testimonials",
  heading: "What Our Team Says",
  items: [
    {
      quote:
        "The culture at LongGreen is built on technical excellence and mutual respect. It's the perfect environment for a career in institutional finance.",
      role: "Financial Analyst",
    },
    {
      quote:
        "Leading projects here means solving complex challenges for global clients. The growth opportunities are unparalleled.",
      role: "Finance Executive",
    },
    {
      quote:
        "Collaboration isn't just a value; it's how we operate every day. The collective expertise of the team is incredible.",
      role: "Senior Project Manager",
    },
  ],
}

/* ---------- Open positions ---------- */
export type JobOpening = {
  title: string
  location: string
}

export type JobDepartment = {
  department: string
  openings: JobOpening[]
}

export const openPositions: {
  eyebrow: string
  heading: string
  departments: JobDepartment[]
  applyEmail: string
} = {
  eyebrow: "Openings",
  heading: "Open Positions",
  departments: [
    {
      department: "Finance & Accounting",
      openings: [
        { title: "Finance Controller", location: "Kochi, India (Hybrid)" },
        { title: "Senior Accountant", location: "Remote, India" },
        { title: "Internal Auditor", location: "Kochi, India (On-site)" },
      ],
    },
    {
      department: "Advisory & Technology",
      openings: [
        { title: "ERP Implementation Consultant", location: "Remote, India" },
        { title: "CFO Advisory Associate", location: "Dubai, UAE (Hybrid)" },
      ],
    },
  ],
  applyEmail: "careers@longgreen.com",
}

/* ---------- Bottom CTA ---------- */
export const careersCta = {
  heading: "Ready to Build What's Next in Finance?",
  description:
    "Don't see the right role? We're always looking for exceptional finance talent — send us your profile.",
  cta: { label: "Get in Touch", href: "/consultation" } as CtaLink,
}

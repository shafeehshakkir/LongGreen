import type { Metadata } from "next"
import { whyChoose } from "@/content/home"
import { siteConfig } from "@/content/site"
import { ConsultationForm } from "@/components/sections/ConsultationForm"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Book a free consultation with LongGreen's Chartered Accountant-led team. Outsourced finance controller, accounting, ERP implementation and CFO advisory for the GCC, UK and India.",
  alternates: { canonical: "/consultation" },
}

/**
 * Primary conversion page: lead form + trust signals sidebar.
 */
const ConsultationPage = () => (
  <Section>
    <Container>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Form column */}
        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            Request a Consultation
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Partner with Precision.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Tell us about your finance function and one of our senior advisors
            will respond within one business day — no obligation, fully
            confidential.
          </p>
          <div className="mt-10">
            <ConsultationForm />
          </div>
        </div>

        {/* Trust sidebar */}
        <aside className="lg:col-span-5">
          <div className="border border-edge bg-surface p-8">
            <h2 className="border-b border-edge pb-4 font-display text-lg font-semibold text-foreground">
              The LongGreen Advantage
            </h2>
            <ul className="mt-6 flex flex-col gap-5">
              {whyChoose.advantages.slice(0, 5).map((advantage) => (
                <li key={advantage.title} className="flex items-start gap-4">
                  <Icon
                    name={advantage.icon}
                    className="mt-0.5 text-[20px] text-brand-bright"
                    filled
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {advantage.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">
                      {advantage.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-edge pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-faint">
                Trusted Globally
              </h3>
              <p className="mt-3 text-sm text-muted">
                {siteConfig.regions.join(" · ")}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  </Section>
)

export default ConsultationPage

import { servingBusinesses } from "@/content/home"
import { Container } from "@/components/layout/Container"

/**
 * Thin full-width strip listing the regions LongGreen serves.
 */
export const GlobalReachBanner = () => (
  <section className="border-y border-edge bg-sunken py-5">
    <Container className="flex flex-col items-center justify-between gap-3 md:flex-row">
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-faint">
        {servingBusinesses.label}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
        {servingBusinesses.regions.map((region, index) => (
          <span key={region} className="flex items-center gap-3">
            {index > 0 && <span className="text-brand-bright">•</span>}
            {region}
          </span>
        ))}
      </div>
    </Container>
  </section>
)

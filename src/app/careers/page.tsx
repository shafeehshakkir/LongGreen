import type { Metadata } from "next"
import Image from "next/image"
import {
  careersBenefits,
  careersCta,
  careersHero,
  careersTeam,
  careersTestimonials,
  careersValues,
  openPositions,
} from "@/content/careers"
import { ButtonLink } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Icon } from "@/components/ui/Icon"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Careers | Join Our Chartered Accountant-Led Team",
  description:
    "Build your career in institutional finance at LongGreen. Open roles in finance control, accounting, internal audit, ERP consulting and CFO advisory across India and the GCC.",
  alternates: { canonical: "/careers" },
}

/** Eyebrow label used above each section heading */
const Eyebrow = ({ children }: { children: string }) => (
  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
    {children}
  </span>
)

/**
 * Careers page — hero with photo gallery, values, team, benefits,
 * team testimonials, open positions, and closing CTA.
 * Layout mirrors the reference mockup.
 */
const CareersPage = () => (
  <>
    {/* ---------- Hero ---------- */}
    <Section className="pb-0">
      <Container className="text-center">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
          {careersHero.headline[0]}
          <br />
          {careersHero.headline[1]}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {careersHero.description}
        </p>
        <div className="mt-9 flex justify-center">
          <ButtonLink href={careersHero.cta.href} variant="primary">
            {careersHero.cta.label}
          </ButtonLink>
        </div>

        {/* Staggered photo gallery — full color with hover lift */}
        <div className="mt-20 grid h-100 grid-cols-2 gap-4 md:grid-cols-5">
          {careersHero.gallery.map((photo, index) => (
            <div
              key={photo.src}
              tabIndex={0}
              aria-label={photo.alt}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-edge",
                "transition-all duration-300 ease-out",
                "hover:z-10 hover:scale-[1.03] hover:border-brand/50",
                "focus-visible:z-10 focus-visible:scale-[1.03] focus-visible:border-brand/50",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright",
                index > 2 && "hidden md:block",
                index % 2 === 1 && "md:mt-10"
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 20vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>

    {/* ---------- Values ---------- */}
    <Section className="mt-16 border-t border-edge bg-sunken md:mt-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>{careersValues.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {careersValues.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            {careersValues.items.map((value) => (
              <Card key={value.title}>
                <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand/15">
                  <Icon name={value.icon} className="text-[20px] text-brand-bright" />
                </span>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>

    {/* ---------- Team ---------- */}
    <Section>
      <Container>
        <Eyebrow>{careersTeam.eyebrow}</Eyebrow>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {careersTeam.heading}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {careersTeam.members.map((member) => (
            <div key={member.name} className="group">
              <div
                tabIndex={0}
                aria-label={member.name}
                className={cn(
                  "relative mb-4 aspect-[4/5] overflow-hidden rounded-xl border border-edge bg-surface",
                  "transition-all duration-300 ease-out",
                  "hover:border-brand/50 hover:scale-[1.02]",
                  "focus-visible:border-brand/50 focus-visible:scale-[1.02]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
                )}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {member.name}
              </h3>
              <p className="mb-3 text-sm text-brand-bright">{member.role}</p>
              <p className="text-xs leading-relaxed text-muted">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>

    {/* ---------- Benefits ---------- */}
    <Section className="border-t border-edge bg-sunken">
      <Container>
        <div className="mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>{careersBenefits.eyebrow}</Eyebrow>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {careersBenefits.heading[0]}
              <br />
              {careersBenefits.heading[1]}
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              {careersBenefits.description}
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-edge">
            <Image
              src={careersBenefits.image.src}
              alt={careersBenefits.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-edge pt-12 md:grid-cols-3">
          {careersBenefits.items.map((benefit) => (
            <div key={benefit.title}>
              <h3 className="mb-2 flex items-center font-display text-lg font-bold text-foreground">
                <span className="mr-3 flex h-7 w-7 items-center justify-center rounded bg-brand/20">
                  <Icon name={benefit.icon} className="text-[16px] text-brand-bright" />
                </span>
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>

    {/* ---------- Team testimonials ---------- */}
    <Section className="border-t border-edge">
      <Container>
        <div className="mb-14 text-center">
          <Eyebrow>{careersTestimonials.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {careersTestimonials.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {careersTestimonials.items.map((testimonial) => (
            <Card key={testimonial.role} className="flex h-full flex-col rounded-xl">
              <p className="mb-8 flex-grow text-base leading-relaxed text-muted">
                “{testimonial.quote}”
              </p>
              <div className="flex items-center gap-4">
                {/* Monogram avatar */}
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 font-display text-sm font-bold text-brand-bright">
                  {testimonial.role
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <h3 className="text-sm font-semibold text-foreground">
                  {testimonial.role}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>

    {/* ---------- Open positions ---------- */}
    <Section id="openings" className="border-t border-edge">
      <Container className="max-w-4xl">
        <div className="mb-14 text-center">
          <Eyebrow>{openPositions.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {openPositions.heading}
          </h2>
        </div>

        {openPositions.departments.map((group) => (
          <div key={group.department} className="mb-12">
            <h3 className="mb-6 rounded-lg bg-surface p-4 font-display text-xl font-bold text-foreground">
              {group.department}
            </h3>
            <div className="flex flex-col">
              {group.openings.map((job) => (
                <a
                  key={job.title}
                  href={`mailto:${openPositions.applyEmail}?subject=Application: ${encodeURIComponent(job.title)}`}
                  aria-label={`Apply for ${job.title}`}
                  className="group flex items-center justify-between border-b border-edge p-4 transition-colors hover:bg-surface"
                >
                  <h4 className="text-base font-medium text-foreground transition-colors group-hover:text-brand-bright md:text-lg">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span className="hidden sm:block">{job.location}</span>
                    <Icon
                      name="arrow_forward"
                      className="text-[20px] text-faint transition-all group-hover:translate-x-1 group-hover:text-brand-bright"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Section>

    {/* ---------- Closing CTA ---------- */}
    <Section className="pt-0">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 rounded-xl border border-edge bg-surface p-12 md:flex-row md:p-16">
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {careersCta.heading}
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              {careersCta.description}
            </p>
          </div>
          <ButtonLink href={careersCta.cta.href} variant="primary" className="shrink-0">
            {careersCta.cta.label}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  </>
)

export default CareersPage

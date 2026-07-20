"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { whatWeDo } from "@/content/home"
import { Icon } from "@/components/ui/Icon"

type SubmissionState = "idle" | "submitted"

const inputClasses =
  "w-full rounded border border-edge bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors duration-200 focus:border-brand focus:outline-none"

/**
 * Lead capture form.
 * Currently confirms client-side; Phase 4 wires it to /api/consultation
 * for email / CRM delivery.
 */
export const ConsultationForm = () => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmissionState("submitted")
  }

  if (submissionState === "submitted") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-edge bg-surface p-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand">
          <Icon name="check" className="text-[28px] text-white" />
        </span>
        <h2 className="font-display text-2xl font-bold text-foreground">
          Request Received
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Thank you for reaching out. A member of our advisory team will contact
          you within one business day to schedule your free consultation.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-lg border border-edge bg-surface p-8"
      aria-label="Consultation request form"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Acme Trading LLC"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+971 50 000 0000"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Service of Interest
        </label>
        <select id="service" name="service" required className={inputClasses} defaultValue="">
          <option value="" disabled className="bg-surface">
            Select a service…
          </option>
          {whatWeDo.services.map((service) => (
            <option key={service.title} value={service.title} className="bg-surface">
              {service.title}
            </option>
          ))}
          <option value="Other" className="bg-surface">
            Other / Not sure yet
          </option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us briefly about your finance function and goals…"
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded bg-brand px-8 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
      >
        Submit Request
      </button>
      <p className="text-xs leading-relaxed text-faint">
        Your information is handled with strict confidentiality and never shared
        with third parties.
      </p>
    </form>
  )
}

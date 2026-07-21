"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { globalPresence, type ServiceLocation } from "@/content/services"
import { Icon } from "@/components/ui/Icon"
import { FadeIn } from "@/components/ui/FadeIn"
import { cn } from "@/lib/utils"

type LabelSide = "top" | "bottom" | "left" | "right"

/**
 * Precise equirectangular positions from real lat/lon
 * (aligned to public/images/world-map.svg — viewBox 0 0 950 620).
 *
 * Formula:
 *   x = (lon + 180) / 360 * 100
 *   y = (90 - lat) / 180 * 100
 */
const PINS: Record<
  string,
  { lat: number; lon: number; x: number; y: number; label: LabelSide }
> = {
  uk: { lat: 51.5074, lon: -0.1278, x: 49.96, y: 21.38, label: "top" },
  saudi: { lat: 24.7136, lon: 46.6753, x: 62.97, y: 36.27, label: "bottom" },
  bahrain: { lat: 26.2235, lon: 50.5876, x: 64.05, y: 35.43, label: "top" },
  qatar: { lat: 25.2854, lon: 51.531, x: 64.31, y: 35.95, label: "right" },
  uae: { lat: 25.2048, lon: 55.2708, x: 65.35, y: 36.0, label: "right" },
  oman: { lat: 23.588, lon: 58.3829, x: 66.22, y: 36.9, label: "bottom" },
  india: { lat: 9.9312, lon: 76.2673, x: 71.19, y: 44.48, label: "bottom" },
}

/**
 * The GCC pins sit almost on top of each other at this zoom, so they are
 * collapsed into one cluster marker that opens a pick-list. UK and India
 * are far enough apart to stay as individual pins.
 */
const CLUSTER_IDS = ["saudi", "bahrain", "qatar", "uae", "oman"]
const CLUSTER_POS = { x: 64.6, y: 36.1 }

/**
 * World presence map — a dotted (halftone) depiction of the continents,
 * built by masking a dot pattern with the accurate world silhouette so
 * the geographically precise pins stay aligned. Hover shows contact
 * details (no zoom).
 */
export const GlobalPresenceMap = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const clearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activeLocation =
    globalPresence.locations.find((location) => location.id === activeId) ?? null

  const handleActivate = (id: string) => {
    if (clearTimerRef.current) {
      clearTimeout(clearTimerRef.current)
      clearTimerRef.current = null
    }
    setActiveId(id)
  }

  /** Delay so cursor can move from pin → detail panel without flicker */
  const handleDeactivate = () => {
    if (clearTimerRef.current) clearTimeout(clearTimerRef.current)
    clearTimerRef.current = setTimeout(() => {
      setActiveId(null)
      clearTimerRef.current = null
    }, 160)
  }

  return (
    <div id="global-presence">
      <FadeIn>
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            {globalPresence.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {globalPresence.heading}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            {globalPresence.subheading}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative overflow-hidden border border-edge bg-sunken">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 45% 35% at 62% 40%, rgba(0,119,85,0.25) 0%, transparent 70%)",
            }}
          />

          {/* Aspect trimmed ~15% vertically vs the 950×620 source so the map
              sits lower without changing its width; pins scale with it. */}
          <div className="relative aspect-[950/527] w-full min-h-[260px] md:min-h-[360px]">
            {/* Faint dot lattice for the oceans / backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(circle, #7bd8b0 1px, transparent 1.4px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Dotted continents: dot pattern masked by the accurate world silhouette */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #2f9c74 1.2px, transparent 1.7px)",
                backgroundSize: "11px 11px",
                WebkitMaskImage: "url(/images/world-map.svg)",
                maskImage: "url(/images/world-map.svg)",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />

            {globalPresence.locations
              .filter((location) => !CLUSTER_IDS.includes(location.id))
              .map((location) => {
                const pin = PINS[location.id]
                if (!pin) return null

                return (
                  <LocationMarker
                    key={location.id}
                    location={location}
                    x={pin.x}
                    y={pin.y}
                    labelSide={pin.label}
                    isActive={activeId === location.id}
                    onActivate={handleActivate}
                    onDeactivate={handleDeactivate}
                  />
                )
              })}

            <ClusterMarker
              x={CLUSTER_POS.x}
              y={CLUSTER_POS.y}
              locations={globalPresence.locations.filter((location) =>
                CLUSTER_IDS.includes(location.id)
              )}
              activeId={activeId}
              onActivate={handleActivate}
              onDeactivate={handleDeactivate}
            />
          </div>

          <AnimatePresence mode="wait">
            {activeLocation ? (
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
                className="relative z-20 border-t border-edge bg-surface/95 px-6 py-6 backdrop-blur-sm md:px-10"
                onMouseEnter={() => handleActivate(activeLocation.id)}
                onMouseLeave={handleDeactivate}
              >
                <LocationDetails location={activeLocation} />
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-20 border-t border-edge bg-surface/80 px-6 py-5 text-center backdrop-blur-sm md:px-10"
              >
                <p className="text-sm text-muted">
                  Hover a marker to view local contact details for{" "}
                  {globalPresence.locations.map((l) => l.name).join(", ")}.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeIn>

      <div className="mt-6 flex flex-wrap justify-center gap-2 md:hidden">
        {globalPresence.locations.map((location) => (
          <button
            key={location.id}
            type="button"
            onClick={() =>
              setActiveId((current) =>
                current === location.id ? null : location.id
              )
            }
            className={cn(
              "border px-3 py-1.5 text-xs font-semibold transition-colors",
              activeId === location.id
                ? "border-brand bg-brand/20 text-brand-bright"
                : "border-edge text-muted hover:border-brand hover:text-brand-bright"
            )}
          >
            {location.name}
          </button>
        ))}
      </div>
    </div>
  )
}

type MarkerProps = {
  location: ServiceLocation
  x: number
  y: number
  labelSide: LabelSide
  isActive: boolean
  onActivate: (id: string) => void
  onDeactivate: () => void
}

const labelPositionClass: Record<LabelSide, string> = {
  top: "bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2",
  bottom: "top-[calc(100%+8px)] left-1/2 -translate-x-1/2",
  left: "right-[calc(100%+8px)] top-1/2 -translate-y-1/2",
  right: "left-[calc(100%+8px)] top-1/2 -translate-y-1/2",
}

const LocationMarker = ({
  location,
  x,
  y,
  labelSide,
  isActive,
  onActivate,
  onDeactivate,
}: MarkerProps) => (
  <button
    type="button"
    aria-label={`${location.name} — ${location.city}. View contact details.`}
    aria-expanded={isActive}
    tabIndex={0}
    onMouseEnter={() => onActivate(location.id)}
    onMouseLeave={onDeactivate}
    onFocus={() => onActivate(location.id)}
    onBlur={onDeactivate}
    className="absolute z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      transform: "translate(-50%, -50%)",
    }}
  >
    {/* Hit area larger than the dot for easier hover in dense GCC cluster */}
    <span className="relative flex h-7 w-7 items-center justify-center md:h-8 md:w-8">
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute h-3 w-3 rounded-full bg-brand-bright/45 md:h-3.5 md:w-3.5",
          "animate-[map-pulse_2.2s_ease-out_infinite]",
          isActive && "bg-brand-bright/70"
        )}
      />
      <span
        className={cn(
          "relative h-2.5 w-2.5 rounded-full border border-brand-bright bg-brand md:h-3 md:w-3",
          "shadow-[0_0_0_2px_rgba(12,12,12,0.9),0_0_8px_1px_rgba(0,119,85,0.65)]",
          "transition-transform duration-200",
          isActive && "scale-150"
        )}
      />
    </span>

    <span
      className={cn(
        "pointer-events-none absolute z-20 whitespace-nowrap border border-edge bg-canvas/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm transition-opacity",
        labelPositionClass[labelSide],
        isActive ? "opacity-100" : "opacity-85"
      )}
    >
      {location.name}
    </span>
  </button>
)

type ClusterProps = {
  x: number
  y: number
  locations: ServiceLocation[]
  activeId: string | null
  onActivate: (id: string) => void
  onDeactivate: () => void
}

/**
 * Collapsed GCC marker. Hover/focus/click opens a pick-list so the
 * overlapping Gulf countries can be selected without fighting the cursor.
 */
const ClusterMarker = ({ x, y, locations, activeId, onActivate, onDeactivate }: ClusterProps) => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const anyActive = locations.some((location) => location.id === activeId)

  const openNow = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setOpen(true)
  }

  /** Delay close so the cursor can travel from pin → pick-list */
  const closeSoon = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setOpen(false)
      onDeactivate()
      timerRef.current = null
    }, 160)
  }

  return (
    <div
      className="absolute z-30"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        aria-label={`Gulf region — ${locations.length} offices. Open list to choose a country.`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        onFocus={openNow}
        onBlur={closeSoon}
        className="group relative flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-bright"
      >
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute h-5 w-5 rounded-full bg-brand-bright/40",
            "animate-[map-pulse_2.2s_ease-out_infinite]"
          )}
        />
        <span
          className={cn(
            "relative flex h-7 w-7 items-center justify-center rounded-full border border-brand-bright bg-brand font-display text-[11px] font-bold text-white",
            "shadow-[0_0_0_2px_rgba(12,12,12,0.9),0_0_10px_1px_rgba(0,119,85,0.7)] transition-transform duration-200",
            (open || anyActive) && "scale-110"
          )}
        >
          {locations.length}
        </span>
        <span
          className={cn(
            "pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap border border-edge bg-canvas/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm transition-opacity",
            open ? "opacity-0" : "opacity-90"
          )}
        >
          GCC
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute left-1/2 top-[calc(100%+10px)] z-40 w-44 -translate-x-1/2 border border-edge bg-surface/95 p-1 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)] backdrop-blur-sm"
        >
          <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-faint">
            Gulf offices
          </p>
          {locations.map((location) => (
            <button
              key={location.id}
              type="button"
              role="menuitem"
              onMouseEnter={() => onActivate(location.id)}
              onFocus={() => onActivate(location.id)}
              onClick={() => onActivate(location.id)}
              className={cn(
                "flex w-full items-baseline justify-between gap-2 px-2 py-1.5 text-left transition-colors",
                activeId === location.id
                  ? "bg-brand/20 text-brand-bright"
                  : "text-muted hover:bg-elevated hover:text-foreground"
              )}
            >
              <span className="text-xs font-semibold">{location.name}</span>
              <span className="text-[10px] text-faint">{location.city}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

const LocationDetails = ({ location }: { location: ServiceLocation }) => (
  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-bright">
        {location.name}
      </p>
      <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
        {location.city}
      </h3>
      <p className="mt-2 text-sm text-muted">{location.address}</p>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
      <DetailItem
        icon="call"
        label="Phone"
        value={location.phone}
        href={`tel:${location.phone.replace(/\s/g, "")}`}
      />
      <DetailItem
        icon="mail"
        label="Email"
        value={location.email}
        href={`mailto:${location.email}`}
      />
      <DetailItem icon="schedule" label="Hours" value={location.hours} />
    </div>
  </div>
)

const DetailItem = ({
  icon,
  label,
  value,
  href,
}: {
  icon: string
  label: string
  value: string
  href?: string
}) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-brand/15">
      <Icon name={icon} className="text-[16px] text-brand-bright" />
    </span>
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-faint">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-sm font-medium text-foreground transition-colors hover:text-brand-bright"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium text-foreground">{value}</p>
      )}
    </div>
  </div>
)

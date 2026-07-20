"use client"

import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion"
import type { MotionValue } from "framer-motion"
import { Icon } from "@/components/ui/Icon"

type HeroBackgroundProps = {
  /** Normalized cursor position, -0.5 … 0.5 (springs from HeroSection) */
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

/**
 * Interactive hero backdrop: liquid green gradient blobs, glassmorphic
 * orbs and floating finance elements, all parallaxed against the cursor
 * at different depths for a high-end dimensional feel.
 */
export const HeroBackground = ({ mouseX, mouseY }: HeroBackgroundProps) => {
  const prefersReducedMotion = useReducedMotion()

  /* Depth layers — farther layers drift less, closer layers drift more */
  const blobFarX = useTransform(mouseX, (v) => v * -40)
  const blobFarY = useTransform(mouseY, (v) => v * -30)
  const blobNearX = useTransform(mouseX, (v) => v * 60)
  const blobNearY = useTransform(mouseY, (v) => v * 45)
  const orbAX = useTransform(mouseX, (v) => v * 90)
  const orbAY = useTransform(mouseY, (v) => v * 70)
  const orbBX = useTransform(mouseX, (v) => v * -70)
  const orbBY = useTransform(mouseY, (v) => v * -55)
  const chipX = useTransform(mouseX, (v) => v * 50)
  const chipY = useTransform(mouseY, (v) => v * 38)
  const coinX = useTransform(mouseX, (v) => v * -45)
  const coinY = useTransform(mouseY, (v) => v * -34)
  const glowX = useTransform(mouseX, (v) => v * 120)
  const glowY = useTransform(mouseY, (v) => v * 90)

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Fine grid — financial terminal texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#7bd8b0 1px, transparent 1px), linear-gradient(90deg, #7bd8b0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      {/* Cursor-following glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(0,119,85,0.22) 0%, rgba(0,119,85,0.07) 45%, transparent 70%)",
        }}
      />

      {/* Liquid blob — far layer (drifts against the cursor) */}
      <motion.div
        className="absolute -left-32 top-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          x: blobFarX,
          y: blobFarY,
          background:
            "radial-gradient(circle at 35% 35%, rgba(0,119,85,0.35) 0%, rgba(0,95,68,0.15) 55%, transparent 75%)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { scale: [1, 1.08, 1], rotate: [0, 12, 0] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Liquid blob — near layer */}
      <motion.div
        className="absolute right-[8%] top-[42%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          x: blobNearX,
          y: blobNearY,
          background:
            "radial-gradient(circle at 60% 40%, rgba(123,216,176,0.20) 0%, rgba(0,119,85,0.12) 50%, transparent 75%)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { scale: [1, 1.12, 1], rotate: [0, -10, 0] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Glass orb A — large, top right */}
      <motion.div
        className="absolute right-[16%] top-[12%] hidden lg:block"
        style={{ x: orbAX, y: orbAY }}
        animate={prefersReducedMotion ? undefined : { y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlassOrb size={148} />
      </motion.div>

      {/* Glass orb B — small, in the gap below the columns */}
      <motion.div
        className="absolute bottom-[5%] left-[44%] hidden md:block"
        style={{ x: orbBX, y: orbBY }}
        animate={prefersReducedMotion ? undefined : { y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <GlassOrb size={84} />
      </motion.div>

      {/* Floating glass chip — market sparkline (in the gap between columns) */}
      <motion.div
        className="absolute left-[45%] top-[7%] hidden xl:block"
        style={{ x: chipX, y: chipY }}
        animate={prefersReducedMotion ? undefined : { y: [0, -12, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <div className="rounded-lg border border-brand-bright/20 bg-surface/40 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(123,216,176,0.15)] backdrop-blur-xl">
          <div className="mb-2 flex items-center gap-2">
            <Icon name="trending_up" className="text-[16px] text-brand-bright" />
            <span className="font-display text-xs font-bold text-brand-bright">
              +24.6%
            </span>
          </div>
          <Sparkline />
        </div>
      </motion.div>

      {/* Floating glass coin — currency */}
      <motion.div
        className="absolute bottom-[24%] right-[6%] hidden lg:block"
        style={{ x: coinX, y: coinY }}
        animate={prefersReducedMotion ? undefined : { y: [0, 16, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-bright/25 bg-gradient-to-br from-brand/30 to-surface/40 shadow-[0_16px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(123,216,176,0.25)] backdrop-blur-xl">
          <span className="font-display text-2xl font-bold text-brand-bright">$</span>
        </div>
      </motion.div>

      {/* Bottom fade into the page canvas */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  )
}

/** Glassmorphic sphere with liquid highlight — the "liquid glass" motif */
const GlassOrb = ({ size }: { size: number }) => (
  <div
    className="relative rounded-full border border-brand-bright/20 backdrop-blur-xl"
    style={{
      width: size,
      height: size,
      background:
        "radial-gradient(circle at 32% 28%, rgba(123,216,176,0.28) 0%, rgba(0,119,85,0.14) 42%, rgba(20,20,20,0.28) 100%)",
      boxShadow:
        "0 24px 48px rgba(0,0,0,0.45), inset 0 1px 1px rgba(157,251,208,0.35), inset 0 -10px 24px rgba(0,119,85,0.25)",
    }}
  >
    {/* Specular highlight */}
    <div
      className="absolute rounded-full"
      style={{
        width: size * 0.32,
        height: size * 0.18,
        top: size * 0.12,
        left: size * 0.18,
        background:
          "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 70%)",
        transform: "rotate(-24deg)",
      }}
    />
  </div>
)

/** Tiny upward market sparkline used inside the glass chip */
const Sparkline = () => (
  <svg width="96" height="32" viewBox="0 0 96 32" fill="none">
    <path
      d="M2 26 L14 22 L26 24 L38 16 L50 18 L62 10 L74 12 L94 3"
      stroke="#7bd8b0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 26 L14 22 L26 24 L38 16 L50 18 L62 10 L74 12 L94 3 L94 32 L2 32 Z"
      fill="url(#sparkFill)"
    />
    <defs>
      <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="32">
        <stop stopColor="#007755" stopOpacity="0.4" />
        <stop offset="1" stopColor="#007755" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

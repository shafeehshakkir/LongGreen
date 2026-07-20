import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    /* Allow high-quality hero delivery (default list is often just 75) */
    qualities: [75, 90, 95, 100],
    /* Include large breakpoints so full-bleed heroes stay sharp on wide screens */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
  },
}

export default nextConfig

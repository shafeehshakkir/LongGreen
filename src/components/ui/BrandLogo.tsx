import Image from "next/image"
import { siteConfig } from "@/content/site"
import { Icon } from "@/components/ui/Icon"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  /** Show text beside the mark */
  showWordmark?: boolean
  /** Text shown beside the mark (defaults to site name) */
  wordmark?: string
}

/**
 * Site logo — uses `siteConfig.logo.src` when set.
 *
 * To upload / change the logo:
 * 1. Drop your file in `public/images/` (e.g. logo.png or logo.svg)
 * 2. Set `logo.src` in `src/content/site.ts` to "/images/logo.png"
 * 3. If the file already includes the name, set `logo.hideWordmark: true`
 */
export const BrandLogo = ({
  className,
  showWordmark = true,
  wordmark,
}: BrandLogoProps) => {
  const label = wordmark ?? siteConfig.name
  const hasCustomLogo = Boolean(siteConfig.logo.src)
  const showText = showWordmark && !siteConfig.logo.hideWordmark

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      {hasCustomLogo && siteConfig.logo.src ? (
        <Image
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
          className="h-10 w-auto object-contain md:h-12"
          priority
        />
      ) : (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-brand">
          <Icon name="monitoring" className="text-[18px] text-white" filled />
        </span>
      )}

      {showText && (
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          {label === siteConfig.name ? (
            <>
              Long<span className="text-brand-bright">Green</span>
            </>
          ) : (
            label
          )}
        </span>
      )}
    </span>
  )
}

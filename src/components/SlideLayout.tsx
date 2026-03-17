import Image from "next/image"
import { ThemeId } from "@/types/carousel"
import { getTheme } from "@/lib/themes"

interface SlideLayoutProps {
  children: React.ReactNode
  topic?: string
  year?: string
  slideNumber?: number
  totalSlides?: number
  themeId?: ThemeId
}

export function SlideLayout({ children, topic, year, slideNumber, totalSlides, themeId }: SlideLayoutProps) {
  const isFirst = slideNumber === 1
  const isLast = slideNumber === totalSlides
  const theme = getTheme(themeId)

  return (
    <div
      className="w-[1080px] h-[1350px] relative flex flex-col overflow-hidden"
      style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", backgroundColor: theme.slideBg }}
    >
      {/* Gradient blur background orbs */}
      {theme.blurOrbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.position} rounded-full`}
          style={{
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            filter: `blur(${120 + i * 30}px)`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Header */}
      <div className="relative z-10 flex items-center gap-5 px-16 pt-14 pb-6">
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white/60 shadow-lg shrink-0">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={72}
            height={72}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span
            className="text-[28px] font-bold leading-tight tracking-tight"
            style={{ color: theme.textPrimary }}
          >
            dinarww
          </span>
          <span
            className="text-[18px] font-medium leading-tight"
            style={{ color: theme.textSecondary }}
          >
            Digital Business Architect, Product &amp; SaaS Preneur, AI Strategist
          </span>
        </div>
      </div>

      {/* Content area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-16">
        {children}
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between px-16 pb-14 pt-6">
        <div className="flex items-center gap-4">
          {topic && (
            <div
              className="backdrop-blur-2xl border border-white/30 rounded-full px-7 py-3 shadow-sm"
              style={{ backgroundColor: theme.badgeBg }}
            >
              <span
                className="text-[22px] font-medium tracking-wide uppercase"
                style={{ color: theme.badgeText }}
              >
                {topic}
              </span>
            </div>
          )}
          <div
            className="backdrop-blur-xl border border-white/20 rounded-full px-6 py-2.5 shadow-sm"
            style={{ backgroundColor: theme.badgeBg }}
          >
            <span
              className="text-[22px] font-medium"
              style={{ color: theme.textSecondary }}
            >
              {year || new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Swipe guide */}
        {!isLast && (
          <div className="flex items-center gap-2" style={{ color: theme.swipeColor }}>
            <span className="text-[20px] font-medium">Swipe</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        )}
        {isFirst && !isLast && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ color: theme.textSecondary }}>
            <span className="text-[18px] font-medium tracking-wide">
              {slideNumber}/{totalSlides}
            </span>
          </div>
        )}
        {!isFirst && !isLast && slideNumber && totalSlides && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
            <span className="text-[18px] font-medium tracking-wide" style={{ color: theme.textSecondary }}>
              {slideNumber}/{totalSlides}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

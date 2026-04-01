import Image from "next/image"
import { LayoutId, ThemeId } from "@/types/carousel"
import { getTheme } from "@/lib/themes"

interface SlideLayoutProps {
  children: React.ReactNode
  topic?: string
  slideNumber?: number
  totalSlides?: number
  themeId?: ThemeId
  layoutId?: LayoutId
}

export function SlideLayout({ children, topic, slideNumber, totalSlides, themeId, layoutId }: SlideLayoutProps) {
  const isFirst = slideNumber === 1
  const isLast = slideNumber === totalSlides
  const theme = getTheme(themeId)
  const layout = layoutId || "classic"

  return (
    <div
      className="w-[1080px] h-[1350px] relative flex flex-col overflow-hidden"
      style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", backgroundColor: theme.slideBg }}
    >
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

      {layout === "impact" ? (
        <ImpactLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} isFirst={isFirst} isLast={isLast} theme={theme}>
          {children}
        </ImpactLayout>
      ) : layout === "bold" ? (
        <BoldLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} isFirst={isFirst} isLast={isLast} theme={theme}>
          {children}
        </BoldLayout>
      ) : (
        <ClassicLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} isFirst={isFirst} isLast={isLast} theme={theme}>
          {children}
        </ClassicLayout>
      )}
    </div>
  )
}

type LayoutProps = {
  children: React.ReactNode
  topic?: string
  slideNumber?: number
  totalSlides?: number
  isFirst: boolean
  isLast: boolean
  theme: ReturnType<typeof getTheme>
}

// ────────────────────────────────────────────────
// CLASSIC — Avatar header, badge footer, centered content
// ────────────────────────────────────────────────
function ClassicLayout({ children, topic, slideNumber, totalSlides, isFirst, isLast, theme }: LayoutProps) {
  return (
    <>
      {/* Header */}
      <div className="relative z-10 flex items-center gap-5 px-16 pt-16 pb-5">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white/60 shadow-lg shrink-0">
          <Image src="/avatar.png" alt="Avatar" width={80} height={80} className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[32px] font-bold leading-tight tracking-tight" style={{ color: theme.textPrimary }}>
            dinarww
          </span>
          <span className="text-[18px] font-medium leading-tight" style={{ color: theme.textSecondary }}>
            Product &amp; AI Strategist
          </span>
        </div>
      </div>

      {/* Separator */}
      <div
        className="relative z-10 mx-16 h-[2px] rounded-full mb-2"
        style={{
          background: `linear-gradient(to right, ${theme.accentLine.from}, ${theme.accentLine.via}, ${theme.accentLine.to})`,
          opacity: 0.45,
        }}
      />

      {/* Content — centered */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-16">
        {children}
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between px-16 pb-16 pt-4">
        {topic ? (
          <div
            className="backdrop-blur-2xl border border-white/30 rounded-full px-7 py-3 shadow-sm"
            style={{ backgroundColor: theme.badgeBg }}
          >
            <span className="text-[22px] font-medium tracking-wide uppercase" style={{ color: theme.badgeText }}>
              {topic}
            </span>
          </div>
        ) : <div />}

        {!isLast && (
          <div className="flex items-center gap-2" style={{ color: theme.swipeColor }}>
            <span className="text-[24px] font-semibold">Swipe</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        )}
      </div>

      {slideNumber && totalSlides && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
          <span className="text-[18px] font-medium tabular-nums" style={{ color: theme.textSecondary, opacity: 0.45 }}>
            {slideNumber}/{totalSlides}
          </span>
        </div>
      )}
    </>
  )
}

// ────────────────────────────────────────────────
// IMPACT — Poster / magazine style
// Left accent bar, no avatar, content flows from top, bold minimal chrome
// ────────────────────────────────────────────────
function ImpactLayout({ children, topic, slideNumber, totalSlides, isFirst, isLast, theme }: LayoutProps) {
  return (
    <>
      {/* Thick left accent bar — full height, signature element */}
      <div
        className="absolute left-0 top-0 bottom-0 z-20"
        style={{
          width: "12px",
          background: `linear-gradient(to bottom, ${theme.accentLine.from}, ${theme.accentLine.via}, ${theme.accentLine.to})`,
        }}
      />

      {/* Header — just @handle + slide number, no avatar */}
      <div className="relative z-10 flex items-center justify-between pl-[52px] pr-16 pt-14 pb-3">
        <span
          className="text-[24px] font-extrabold tracking-[0.1em] uppercase"
          style={{ color: theme.textSecondary }}
        >
          @dinarww
        </span>
        {slideNumber && totalSlides && (
          <span
            className="text-[24px] font-extrabold tabular-nums tracking-widest"
            style={{ color: theme.textSecondary, opacity: 0.5 }}
          >
            {String(slideNumber).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* Thin accent underline */}
      <div
        className="relative z-10"
        style={{
          height: "2px",
          marginLeft: "12px",
          background: `linear-gradient(to right, ${theme.accentLine.via}90, transparent 60%)`,
        }}
      />

      {/* Content — TOP-aligned (not centered), gives text maximum breathing room */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pl-[52px] pr-16 py-10">
        {children}
      </div>

      {/* Footer — topic left, swipe right */}
      <div className="relative z-10 flex items-center justify-between pl-[52px] pr-16 pb-14 pt-3">
        {topic ? (
          <span
            className="text-[20px] font-bold tracking-[0.2em] uppercase"
            style={{ color: theme.textSecondary, opacity: 0.65 }}
          >
            #{topic.replace(/\s+/g, "")}
          </span>
        ) : <div />}

        {!isLast && (
          <div className="flex items-center gap-3" style={{ color: theme.swipeColor }}>
            <span className="text-[22px] font-extrabold tracking-wide">Swipe</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        )}
      </div>
    </>
  )
}

// ────────────────────────────────────────────────
// BOLD — Structured / step-based
// Colored top strip, giant faded quote mark bg, centered counter footer
// ────────────────────────────────────────────────
function BoldLayout({ children, topic, slideNumber, totalSlides, isFirst, isLast, theme }: LayoutProps) {
  return (
    <>
      {/* Giant faded closing quote mark — bottom-right background decoration */}
      <div
        className="absolute bottom-[-60px] right-4 z-0 select-none pointer-events-none"
        style={{
          fontSize: "420px",
          lineHeight: 1,
          color: theme.textPrimary,
          opacity: 0.055,
          fontFamily: "Georgia, serif",
          fontWeight: 900,
        }}
      >
        &rdquo;
      </div>

      {/* Top colored header strip */}
      <div
        className="relative z-10 flex items-center justify-between px-16 pt-10 pb-10"
        style={{
          backgroundColor: `${theme.accentLine.via}1a`,
          borderBottom: `2px solid ${theme.accentLine.via}35`,
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: theme.accentLine.via }}
          />
          <span
            className="text-[26px] font-extrabold tracking-[0.08em] uppercase"
            style={{ color: theme.textPrimary }}
          >
            @dinarww
          </span>
        </div>
        {topic && (
          <span
            className="text-[20px] font-semibold tracking-[0.12em] uppercase"
            style={{ color: theme.textSecondary, opacity: 0.8 }}
          >
            {topic}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-16">
        {children}
      </div>

      {/* Footer — counter centered, swipe right */}
      <div className="relative z-10 flex items-center justify-between px-16 pb-14 pt-4">
        {slideNumber && totalSlides ? (
          <span
            className="text-[22px] font-bold tabular-nums tracking-widest"
            style={{ color: theme.textSecondary, opacity: 0.4 }}
          >
            {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>
        ) : <div />}

        {!isLast && (
          <div className="flex items-center gap-3" style={{ color: theme.swipeColor }}>
            <div className="h-[2px] w-10 rounded-full" style={{ backgroundColor: theme.swipeColor }} />
            <span className="text-[22px] font-extrabold tracking-wide">Swipe</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        )}
      </div>
    </>
  )
}

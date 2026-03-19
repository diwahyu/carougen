import { CtaSlide, LayoutId, ThemeId } from "@/types/carousel"
import { SlideLayout } from "./SlideLayout"
import { MarkdownRenderer } from "./MarkdownRenderer"
import { getTheme } from "@/lib/themes"

export function CtaSlideCard({
  slide,
  topic,
  slideNumber,
  totalSlides,
  themeId,
  layoutId,
  highlightColor,
}: {
  slide: CtaSlide
  topic?: string
  slideNumber?: number
  totalSlides?: number
  themeId?: ThemeId
  layoutId?: LayoutId
  highlightColor?: string
}) {
  const theme = getTheme(themeId)
  const socials = slide.socials ?? [
    "IG @dinarww",
    "TikTok @dinarww",
    "YT @dinarww",
  ]

  return (
    <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
      <div className="flex flex-col items-center text-center gap-10">
        <MarkdownRenderer
          markdown={slide.text}
          themeConfig={theme}
          highlightColor={highlightColor}
          variant="cta"
        />

        {/* Divider */}
        <div
          className="w-20 h-[3px] rounded-full"
          style={{ background: `linear-gradient(to right, transparent, ${theme.textSecondary}, transparent)` }}
        />

        {slide.creditName && (
          <p
            className="text-[30px] font-semibold"
            style={{ color: theme.textSecondary }}
          >
            {slide.creditName}
          </p>
        )}

        {/* Social badges — liquid glass */}
        <div className="flex flex-col gap-4 mt-2">
          {socials.map((handle, i) => (
            <div
              key={i}
              className="backdrop-blur-2xl border border-white/30 rounded-full px-10 py-4 shadow-sm"
              style={{ backgroundColor: theme.badgeBg }}
            >
              <span
                className="text-[28px] font-semibold"
                style={{ color: theme.textPrimary }}
              >
                {handle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

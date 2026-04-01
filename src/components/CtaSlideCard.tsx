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
  const layout = layoutId || "classic"
  const socials = slide.socials ?? ["IG @dinarww", "TikTok @dinarww", "YT @dinarww"]

  // ── IMPACT: left-aligned, accent left bar on social badges
  if (layout === "impact") {
    return (
      <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
        <div className="flex flex-col gap-10">
          <MarkdownRenderer
            markdown={slide.text}
            themeConfig={theme}
            highlightColor={highlightColor}
            variant="cta"
          />

          {/* Divider left-aligned */}
          <div
            className="h-[3px] w-24 rounded-full"
            style={{ background: `linear-gradient(to right, ${theme.accentLine.via}, transparent)` }}
          />

          {slide.creditName && (
            <p className="text-[30px] font-semibold" style={{ color: theme.textSecondary }}>
              {slide.creditName}
            </p>
          )}

          {/* Social — left-aligned pill list */}
          <div className="flex flex-col gap-4">
            {socials.map((handle, i) => (
              <div
                key={i}
                className="flex items-center gap-5 rounded-2xl px-8 py-4"
                style={{
                  backgroundColor: `${theme.accentLine.via}12`,
                  borderLeft: `4px solid ${theme.accentLine.via}`,
                }}
              >
                <span className="text-[26px] font-semibold" style={{ color: theme.textPrimary }}>
                  {handle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    )
  }

  // ── BOLD: centered, badges with accent border
  if (layout === "bold") {
    return (
      <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
        <div className="flex flex-col items-center text-center gap-10">
          <MarkdownRenderer
            markdown={slide.text}
            themeConfig={theme}
            highlightColor={highlightColor}
            variant="cta"
          />

          <div
            className="w-16 h-[3px] rounded-full"
            style={{ background: `linear-gradient(to right, transparent, ${theme.accentLine.via}, transparent)` }}
          />

          {slide.creditName && (
            <p className="text-[30px] font-semibold" style={{ color: theme.textSecondary }}>
              {slide.creditName}
            </p>
          )}

          <div className="flex flex-col gap-4 mt-2 w-full">
            {socials.map((handle, i) => (
              <div
                key={i}
                className="rounded-2xl px-10 py-5 border"
                style={{
                  backgroundColor: `${theme.accentLine.via}10`,
                  borderColor: `${theme.accentLine.via}40`,
                }}
              >
                <span className="text-[28px] font-bold" style={{ color: theme.textPrimary }}>
                  {handle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>
    )
  }

  // ── CLASSIC: centered, glass blur badges (default)
  return (
    <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
      <div className="flex flex-col items-center text-center gap-10">
        <MarkdownRenderer
          markdown={slide.text}
          themeConfig={theme}
          highlightColor={highlightColor}
          variant="cta"
        />

        <div
          className="w-20 h-[3px] rounded-full"
          style={{ background: `linear-gradient(to right, transparent, ${theme.textSecondary}, transparent)` }}
        />

        {slide.creditName && (
          <p className="text-[30px] font-semibold" style={{ color: theme.textSecondary }}>
            {slide.creditName}
          </p>
        )}

        <div className="flex flex-col gap-4 mt-2">
          {socials.map((handle, i) => (
            <div
              key={i}
              className="backdrop-blur-2xl border border-white/30 rounded-full px-10 py-4 shadow-sm"
              style={{ backgroundColor: theme.badgeBg }}
            >
              <span className="text-[28px] font-semibold" style={{ color: theme.textPrimary }}>
                {handle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

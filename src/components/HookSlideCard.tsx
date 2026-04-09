import { HookSlide, LayoutId, ThemeId } from "@/types/carousel"
import { SlideLayout } from "./SlideLayout"
import { MarkdownRenderer } from "./MarkdownRenderer"
import { getTheme } from "@/lib/themes"

export function HookSlideCard({
  slide,
  topic,
  slideNumber,
  totalSlides,
  themeId,
  layoutId,
  highlightColor,
}: {
  slide: HookSlide
  topic?: string
  slideNumber?: number
  totalSlides?: number
  themeId?: ThemeId
  layoutId?: LayoutId
  highlightColor?: string
}) {
  const theme = getTheme(themeId)
  const layout = layoutId || "classic"

  // ── IMPACT: text left, emoji floats bottom-right (poster style)
  if (layout === "impact") {
    return (
      <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
        <div className="relative flex flex-col justify-start gap-8 min-h-0">
          {/* Faint oversized emoji — bottom right, decorative */}
          {slide.emoji && (
            <span
              className="absolute -bottom-80 -right-58 rotate-12 select-none pointer-events-none"
              style={{ fontSize: "340px", lineHeight: 1, filter: "grayscale(20%)" }}
            >
              {slide.emoji}
            </span>
          )}

          {/* Text — full width, no vertical bar */}
          <div className="-mt-50">
            <MarkdownRenderer
              markdown={slide.text}
              themeConfig={theme}
              highlightColor={highlightColor}
              variant="hook"
              gradientText
            />
          </div>
        </div>
      </SlideLayout>
    )
  }

  // ── BOLD: emoji top-right badge + full-width text
  if (layout === "bold") {
    return (
      <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
        <div className="flex flex-col gap-10 -mt-20">
          {slide.emoji && (
            <div className="flex justify-center">
              <div
                className="rounded-2xl px-6 py-4 inline-flex items-center justify-center"              
              >
                <span className="text-[250px] leading-none select-none">{slide.emoji}</span>
              </div>
            </div>
          )}

          <MarkdownRenderer
            markdown={slide.text}
            themeConfig={theme}
            highlightColor={highlightColor}
            variant="hook"
            gradientText
          />
        </div>
      </SlideLayout>
    )
  }

  // ── CLASSIC: emoji as giant transparent background, left accent bar + text overlaid
  return (
    <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
      <div className="relative flex flex-col gap-10">
        {/* Emoji — giant background watermark, ~50% of slide width (540px) */}
        {slide.emoji && (
          <span
            className="absolute -top-120 -right-62 select-none pointer-events-none"
            style={{ fontSize: "640px", lineHeight: 1, opacity: 0.15, transform: "rotate(15deg)" }}
          >
            {slide.emoji}
          </span>
        )}

        {/* Text with left accent bar */}
        <div className="relative flex gap-8">
          <div
            className="w-[6px] shrink-0 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${theme.accentLine.from}, ${theme.accentLine.via}, ${theme.accentLine.to})`,
            }}
          />
          <MarkdownRenderer
            markdown={slide.text}
            themeConfig={theme}
            highlightColor={highlightColor}
            variant="hook"
            gradientText
          />
        </div>
      </div>
    </SlideLayout>
  )
}

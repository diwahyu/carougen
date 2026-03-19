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

  return (
    <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
      <div className="flex flex-col gap-10">
        {/* Emoji eye-catcher */}
        {slide.emoji && (
          <span className="text-[120px] leading-none select-none">
            {slide.emoji}
          </span>
        )}

        {/* Quote line + text */}
        <div className="flex gap-8">
          {/* Vertical accent line */}
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

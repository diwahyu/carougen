import { ContentSlide, LayoutId, ThemeId } from "@/types/carousel"
import { SlideLayout } from "./SlideLayout"
import { MarkdownRenderer } from "./MarkdownRenderer"
import { getTheme } from "@/lib/themes"

export function ContentSlideCard({
  slide,
  slideNumber,
  totalSlides,
  topic,
  themeId,
  layoutId,
  highlightColor,
}: {
  slide: ContentSlide
  slideNumber: number
  totalSlides?: number
  topic?: string
  themeId?: ThemeId
  layoutId?: LayoutId
  highlightColor?: string
}) {
  const theme = getTheme(themeId)

  return (
    <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
      <div className="flex flex-col gap-8">
        {/* Slide number — large watermark */}
        <span
          className="text-[120px] font-black leading-none select-none"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${theme.textSecondary}99, transparent)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {String(slideNumber).padStart(2, "0")}
        </span>

        <MarkdownRenderer
          markdown={slide.text}
          themeConfig={theme}
          highlightColor={highlightColor}
          variant="content"
        />
      </div>
    </SlideLayout>
  )
}

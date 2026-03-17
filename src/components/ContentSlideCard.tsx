import { ContentSlide, ThemeId } from "@/types/carousel"
import { SlideLayout } from "./SlideLayout"
import { GradientText } from "./GradientText"
import { getTheme } from "@/lib/themes"

export function ContentSlideCard({
  slide,
  slideNumber,
  totalSlides,
  topic,
  themeId,
  highlightColor,
}: {
  slide: ContentSlide
  slideNumber: number
  totalSlides?: number
  topic?: string
  themeId?: ThemeId
  highlightColor?: string
}) {
  const theme = getTheme(themeId)

  return (
    <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId}>
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

        <GradientText
          text={slide.text}
          highlight={slide.highlight}
          className="text-[46px] font-bold leading-[1.4] tracking-tight"
          style={{ color: theme.textPrimary }}
          themeConfig={theme}
          highlightColor={highlightColor}
        />
      </div>
    </SlideLayout>
  )
}

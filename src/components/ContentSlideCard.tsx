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
  const layout = layoutId || "classic"

  // ── IMPACT: huge number absolute behind text as ghost watermark
  if (layout === "impact") {
    return (
      <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
        <div className="relative flex flex-col gap-6">
          {/* Ghost number — massive, absolute behind text */}
          <span
            className="absolute -top-10 -left-6 select-none pointer-events-none font-black"
            style={{
              fontSize: "320px",
              lineHeight: 1,
              color: theme.textSecondary,
              opacity: 0.07,
              zIndex: 0,
            }}
          >
            {String(slideNumber).padStart(2, "0")}
          </span>

          {/* Text overlaid on top */}
          <div className="relative z-10">
            <MarkdownRenderer
              markdown={slide.text}
              themeConfig={theme}
              highlightColor={highlightColor}
              variant="content"
            />
          </div>
        </div>
      </SlideLayout>
    )
  }

  // ── BOLD: number only (no step label), then text
  if (layout === "bold") {
    return (
      <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
        <div className="flex flex-col gap-8">
          <span
            className="text-[120px] font-black leading-none select-none"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${theme.accentLine.via}cc, ${theme.accentLine.via}20)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {String(slideNumber - 1).padStart(2, "0")}
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

  // ── CLASSIC: number watermark above, text below (default)
  return (
    <SlideLayout topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} layoutId={layoutId}>
      <div className="flex flex-col gap-8">
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

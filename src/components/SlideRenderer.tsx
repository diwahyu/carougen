"use client"

import { forwardRef } from "react"
import { Slide, ThemeId } from "@/types/carousel"
import { HookSlideCard } from "./HookSlideCard"
import { ContentSlideCard } from "./ContentSlideCard"
import { CtaSlideCard } from "./CtaSlideCard"

interface SlideRendererProps {
  slide: Slide
  slideNumber: number
  totalSlides?: number
  topic?: string
  scale?: number
  themeId?: ThemeId
  highlightColor?: string
}

export const SlideRenderer = forwardRef<HTMLDivElement, SlideRendererProps>(
  function SlideRenderer({ slide, slideNumber, totalSlides, topic, scale = 1, themeId, highlightColor }, ref) {
    return (
      <div
        style={{
          width: 1080 * scale,
          height: 1350 * scale,
        }}
        className="relative overflow-hidden shrink-0"
      >
        <div
          ref={ref}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {slide.type === "hook" && <HookSlideCard slide={slide} topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} highlightColor={highlightColor} />}
          {slide.type === "content" && (
            <ContentSlideCard slide={slide} slideNumber={slideNumber} totalSlides={totalSlides} topic={topic} themeId={themeId} highlightColor={highlightColor} />
          )}
          {slide.type === "cta" && <CtaSlideCard slide={slide} topic={topic} slideNumber={slideNumber} totalSlides={totalSlides} themeId={themeId} />}
        </div>
      </div>
    )
  }
)

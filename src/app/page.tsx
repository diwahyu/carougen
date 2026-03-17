"use client"

import { useRef, useCallback } from "react"
import { CarouselInputPanel } from "@/components/CarouselInputPanel"
import { CarouselPreview } from "@/components/CarouselPreview"
import { SlideEditorPanel } from "@/components/SlideEditorPanel"
import { ExportControls } from "@/components/ExportControls"
import { SlideRenderer } from "@/components/SlideRenderer"
import { SlideThumbnailList } from "@/components/SlideThumbnailList"
import { useCarouselStore } from "@/store/carousel-store"

export default function Home() {
  const project = useCarouselStore((s) => s.project)
  const slideRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  const setSlideRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      if (el) slideRefs.current.set(index, el)
      else slideRefs.current.delete(index)
    },
    []
  )

  const getSlideElements = useCallback(() => {
    if (!project) return []
    return project.slides.map((_, i) => slideRefs.current.get(i)!).filter(Boolean)
  }, [project])

  return (
    <div className="h-screen flex flex-col">
      <header className="border-b px-6 py-3 flex items-center justify-between shrink-0">
        <h1 className="font-bold text-lg">Carougen</h1>
        <span className="text-xs text-muted-foreground">
          Instagram Carousel Renderer
        </span>
      </header>

      <div className="flex-1 flex min-h-0">
        {/* Left: Input */}
        <div className="w-[300px] border-r p-4 flex flex-col shrink-0">
          <CarouselInputPanel />
        </div>

        {/* Center: Preview — IG simulator */}
        <div className="flex-1 p-4 flex flex-col min-w-0 bg-neutral-50">
          <CarouselPreview />
        </div>

        {/* Slide list */}
        {project && (
          <div className="w-[180px] border-l p-3 flex flex-col shrink-0 overflow-y-auto">
            <SlideThumbnailList />
          </div>
        )}

        {/* Right: Editor + Export */}
        <div className="w-[300px] border-l p-4 flex flex-col shrink-0">
          <SlideEditorPanel />
          <ExportControls getSlideElements={getSlideElements} />
        </div>
      </div>

      {/* Hidden full-size slides for export */}
      {project && (
        <div className="fixed left-[-9999px] top-0" aria-hidden="true">
          {project.slides.map((slide, i) => (
            <SlideRenderer
              key={slide.id}
              ref={setSlideRef(i)}
              slide={slide}
              slideNumber={i + 1}
              totalSlides={project.slides.length}
              topic={project.topic}
              scale={1}
              themeId={project.theme}
              highlightColor={project.highlightColor}
            />
          ))}
        </div>
      )}
    </div>
  )
}

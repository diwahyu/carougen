"use client"

import { useRef, useCallback, useState, useEffect } from "react"
import { useCarouselStore } from "@/store/carousel-store"
import { SlideRenderer } from "./SlideRenderer"
import { Button } from "@/components/ui/button"

const PREVIEW_SCALE = 0.45

export function CarouselPreview() {
  const project = useCarouselStore((s) => s.project)
  const selectedSlideIndex = useCarouselStore((s) => s.selectedSlideIndex)
  const setSelectedSlideIndex = useCarouselStore((s) => s.setSelectedSlideIndex)
  const slideRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const prevIndexRef = useRef(selectedSlideIndex)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    if (prevIndexRef.current !== selectedSlideIndex) {
      setDirection(selectedSlideIndex > prevIndexRef.current ? "left" : "right")
      setAnimKey((k) => k + 1)
      prevIndexRef.current = selectedSlideIndex
    }
  }, [selectedSlideIndex])

  const setSlideRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      if (el) slideRefs.current.set(index, el)
      else slideRefs.current.delete(index)
    },
    []
  )

  if (!project) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        Generate a carousel to see preview
      </div>
    )
  }

  const total = project.slides.length
  const canPrev = selectedSlideIndex > 0
  const canNext = selectedSlideIndex < total - 1

  function goPrev() {
    if (canPrev) setSelectedSlideIndex(selectedSlideIndex - 1)
  }
  function goNext() {
    if (canNext) setSelectedSlideIndex(selectedSlideIndex + 1)
  }

  const slide = project.slides[selectedSlideIndex]

  return (
    <div className="flex flex-col h-full items-center justify-center gap-4">
      {/* IG-style phone frame */}
      <div
        className="bg-white rounded-[32px] border border-neutral-200 shadow-xl flex flex-col overflow-hidden"
        style={{ width: 1080 * PREVIEW_SCALE + 48 }}
      >
        {/* IG header bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-400 overflow-hidden">
            <img src="/avatar.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-neutral-900 leading-tight">dinarww</span>
            <span className="text-[10px] text-neutral-400 leading-tight">Digital Business Architect</span>
          </div>
          <span className="text-xs text-neutral-400 ml-auto">
            {selectedSlideIndex + 1}/{total}
          </span>
        </div>

        {/* Single slide display */}
        <div className="relative overflow-hidden">
          <div
            key={animKey}
            className={direction === "left" ? "animate-slide-in-left" : direction === "right" ? "animate-slide-in-right" : ""}
          >
          <SlideRenderer
            ref={setSlideRef(selectedSlideIndex)}
            slide={slide}
            slideNumber={selectedSlideIndex + 1}
            totalSlides={total}
            topic={project.topic}
            scale={PREVIEW_SCALE}
            themeId={project.theme}
            highlightColor={project.highlightColor}
          />

          </div>

          {/* Prev / Next overlay buttons */}
          {canPrev && (
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-neutral-200 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeftIcon />
            </button>
          )}
          {canNext && (
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-neutral-200 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronRightIcon />
            </button>
          )}
        </div>

        {/* IG-style dot indicators */}
        <div className="flex items-center justify-center gap-1.5 py-3">
          {project.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedSlideIndex(i)}
              className={`rounded-full transition-all duration-200 ${
                i === selectedSlideIndex
                  ? "w-2 h-2 bg-neutral-800"
                  : "w-1.5 h-1.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

        {/* IG action bar */}
        <div className="flex items-center gap-4 px-4 pb-3">
          <HeartIcon />
          <CommentIcon />
          <ShareIcon />
          <span className="ml-auto text-[11px] text-neutral-500 font-medium">
            {project.projectTitle || project.prefix}
          </span>
        </div>
      </div>

      {/* Navigation buttons below */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" disabled={!canPrev} onClick={goPrev}>
          Prev
        </Button>
        <span className="text-sm text-muted-foreground font-medium tabular-nums">
          {selectedSlideIndex + 1} / {total}
        </span>
        <Button variant="outline" size="sm" disabled={!canNext} onClick={goNext}>
          Next
        </Button>
      </div>
    </div>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-700">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-700">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-700">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

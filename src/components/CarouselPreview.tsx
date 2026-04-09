"use client"

import { useRef, useCallback, useState, useEffect } from "react"
import { useCarouselStore } from "@/store/carousel-store"
import { SlideRenderer } from "./SlideRenderer"
import { Button } from "@/components/ui/button"

const SLIDE_W = 1080
const SLIDE_H = 1350
const FRAME_PADDING = 40 // horizontal padding inside the preview column

export function CarouselPreview() {
  const project = useCarouselStore((s) => s.project)
  const selectedSlideIndex = useCarouselStore((s) => s.selectedSlideIndex)
  const setSelectedSlideIndex = useCarouselStore((s) => s.setSelectedSlideIndex)
  const slideRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const prevIndexRef = useRef(selectedSlideIndex)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [animKey, setAnimKey] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.4)

  // Dynamically compute scale based on container size
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        // Leave room for IG header/footer chrome (~120px) and nav buttons (~60px)
        const availableW = width - FRAME_PADDING
        const availableH = height - 180
        const scaleByW = availableW / SLIDE_W
        const scaleByH = availableH / SLIDE_H
        const computed = Math.min(scaleByW, scaleByH, 0.5) // cap at 0.5
        setScale(Math.max(computed, 0.2)) // floor at 0.2
      }
    })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

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
      <div ref={containerRef} className="flex items-center justify-center h-full text-muted-foreground text-sm">
        Generate a carousel to see preview
      </div>
    )
  }

  const total = project.slides.length
  const canPrev = selectedSlideIndex > 0
  const canNext = selectedSlideIndex < total - 1

  function goPrev() { if (canPrev) setSelectedSlideIndex(selectedSlideIndex - 1) }
  function goNext() { if (canNext) setSelectedSlideIndex(selectedSlideIndex + 1) }

  const slide = project.slides[selectedSlideIndex]
  const frameWidth = SLIDE_W * scale

  return (
    <div ref={containerRef} className="flex flex-col h-full items-center justify-center gap-3">
      {/* IG-style phone frame */}
      <div
        className="bg-white rounded-[24px] border border-neutral-200 shadow-xl flex flex-col overflow-hidden"
        style={{ width: frameWidth + 32 }}
      >
        {/* IG header bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-100">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-400 overflow-hidden shrink-0">
            <img src="/avatar.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-neutral-900 leading-tight truncate">dinarww</span>
            <span className="text-[9px] text-neutral-400 leading-tight truncate">Digital Business Architect</span>
          </div>
          <span className="text-[10px] text-neutral-400 ml-auto shrink-0">
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
              scale={scale}
              themeId={project.theme}
              layoutId={project.layout}
              highlightColor={project.highlightColor}
            />
          </div>

          {canPrev && (
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur border border-neutral-200 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeftIcon />
            </button>
          )}
          {canNext && (
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur border border-neutral-200 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <ChevronRightIcon />
            </button>
          )}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 py-2">
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
        <div className="flex items-center gap-3 px-3 pb-2">
          <HeartIcon />
          <CommentIcon />
          <ShareIcon />
          <span className="ml-auto text-[10px] text-neutral-500 font-medium truncate">
            {project.projectTitle || project.prefix}
          </span>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled={!canPrev} onClick={goPrev}>Prev</Button>
        <span className="text-xs text-muted-foreground font-medium tabular-nums">
          {selectedSlideIndex + 1} / {total}
        </span>
        <Button variant="outline" size="sm" disabled={!canNext} onClick={goNext}>Next</Button>
      </div>
    </div>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-700">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-700">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-700">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

"use client"

import { useRef, useCallback, useState } from "react"
import { CarouselInputPanel } from "@/components/CarouselInputPanel"
import { CarouselPreview } from "@/components/CarouselPreview"
import { SlideEditorPanel } from "@/components/SlideEditorPanel"
import { ExportControls } from "@/components/ExportControls"
import { SlideRenderer } from "@/components/SlideRenderer"
import { SlideThumbnailList } from "@/components/SlideThumbnailList"
import { useCarouselStore } from "@/store/carousel-store"

type MobileTab = "input" | "preview" | "editor"

export default function Home() {
  const project = useCarouselStore((s) => s.project)
  const slideRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const [mobileTab, setMobileTab] = useState<MobileTab>("input")
  const [leftOpen, setLeftOpen] = useState(false)

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
    <div className="h-[100dvh] flex flex-col overflow-hidden">
      {/* ── Header ── */}
      <header className="border-b px-4 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          {/* Tablet: toggle left panel button */}
          <button
            className="hidden md:flex lg:hidden items-center justify-center w-8 h-8 rounded-md hover:bg-muted transition-colors"
            onClick={() => setLeftOpen((v) => !v)}
            title="Toggle input panel"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
          <h1 className="font-bold text-base">Carougen</h1>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:block">Instagram Carousel Generator</span>
        <ExportControls getSlideElements={getSlideElements} compact />
      </header>

      {/* ── Desktop layout (≥1024px) ── */}
      <div className="hidden lg:flex flex-1 min-h-0">
        {/* Left: Input */}
        <div className="w-[260px] border-r flex flex-col shrink-0 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4">
            <CarouselInputPanel />
          </div>
        </div>

        {/* Center: Preview */}
        <div className="flex-1 flex flex-col min-w-0 bg-neutral-50 dark:bg-neutral-900">
          <CarouselPreview />
        </div>

        {/* Slide list */}
        {project && (
          <div className="w-[150px] border-l p-3 flex flex-col shrink-0 overflow-y-auto">
            <SlideThumbnailList />
          </div>
        )}

        {/* Right: Editor + Export */}
        <div className="w-[260px] border-l flex flex-col shrink-0">
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            <SlideEditorPanel />
            <ExportControls getSlideElements={getSlideElements} />
          </div>
        </div>
      </div>

      {/* ── Tablet layout (768px–1023px) ── */}
      <div className="hidden md:flex lg:hidden flex-1 min-h-0 relative">
        {/* Left panel — slide-in overlay */}
        {leftOpen && (
          <>
            <div
              className="absolute inset-0 z-20 bg-black/30"
              onClick={() => setLeftOpen(false)}
            />
            <div className="absolute left-0 top-0 bottom-0 z-30 w-[280px] bg-background border-r shadow-xl flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b">
                <span className="text-sm font-semibold">Input</span>
                <button
                  className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-muted"
                  onClick={() => setLeftOpen(false)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <CarouselInputPanel />
              </div>
            </div>
          </>
        )}

        {/* Preview */}
        <div className="flex-1 flex flex-col min-w-0 bg-neutral-50 dark:bg-neutral-900">
          <CarouselPreview />
        </div>

        {/* Right: Editor */}
        <div className="w-[240px] border-l flex flex-col shrink-0">
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-4">
            <SlideEditorPanel />
            <ExportControls getSlideElements={getSlideElements} />
          </div>
        </div>
      </div>

      {/* ── Mobile layout (<768px) ── */}
      <div className="flex md:hidden flex-1 flex-col min-h-0">
        {/* Tab content */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {mobileTab === "input" && (
            <div className="h-full overflow-y-auto p-4">
              <CarouselInputPanel />
            </div>
          )}
          {mobileTab === "preview" && (
            <div className="h-full bg-neutral-50 dark:bg-neutral-900">
              <CarouselPreview />
            </div>
          )}
          {mobileTab === "editor" && (
            <div className="h-full overflow-y-auto p-4">
              <SlideEditorPanel />
              {project && (
                <div className="mt-4 border-t pt-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Slides</p>
                  <SlideThumbnailList />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom tab bar */}
        <div className="border-t bg-background shrink-0 flex items-stretch">
          {(["input", "preview", "editor"] as MobileTab[]).map((tab) => {
            const labels: Record<MobileTab, string> = { input: "Input", preview: "Preview", editor: "Editor" }
            const icons: Record<MobileTab, React.ReactNode> = {
              input: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              ),
              preview: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              ),
              editor: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              ),
            }
            const active = mobileTab === tab
            return (
              <button
                key={tab}
                onClick={() => setMobileTab(tab)}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-medium transition-colors ${
                  active ? "text-foreground border-t-2 border-foreground -mt-[2px]" : "text-muted-foreground"
                }`}
              >
                {icons[tab]}
                {labels[tab]}
              </button>
            )
          })}
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
              layoutId={project.layout}
              highlightColor={project.highlightColor}
            />
          ))}
        </div>
      )}
    </div>
  )
}

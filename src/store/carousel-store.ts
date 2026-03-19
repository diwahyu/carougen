import { create } from "zustand"
import { CarouselProject, LayoutId, Slide, ThemeId } from "@/types/carousel"

interface CarouselStore {
  project: CarouselProject | null
  selectedSlideIndex: number
  setProject: (project: CarouselProject) => void
  setSelectedSlideIndex: (index: number) => void
  updateSlide: (index: number, slide: Slide) => void
  deleteSlide: (index: number) => void
  duplicateSlide: (index: number) => void
  moveSlide: (from: number, to: number) => void
  setTheme: (themeId: ThemeId) => void
  setLayout: (layoutId: LayoutId) => void
  setHighlightColor: (color: string | undefined) => void
  reset: () => void
}

export const useCarouselStore = create<CarouselStore>((set) => ({
  project: null,
  selectedSlideIndex: 0,

  setProject: (project) => set({ project, selectedSlideIndex: 0 }),

  setSelectedSlideIndex: (index) => set({ selectedSlideIndex: index }),

  updateSlide: (index, slide) =>
    set((state) => {
      if (!state.project) return state
      const slides = [...state.project.slides]
      slides[index] = slide
      return { project: { ...state.project, slides } }
    }),

  deleteSlide: (index) =>
    set((state) => {
      if (!state.project || state.project.slides.length <= 2) return state
      // Protect first (hook) and last (CTA) slides
      if (index === 0 || index === state.project.slides.length - 1) return state
      const slides = state.project.slides.filter((_, i) => i !== index)
      const selectedSlideIndex = Math.min(state.selectedSlideIndex, slides.length - 1)
      return { project: { ...state.project, slides }, selectedSlideIndex }
    }),

  duplicateSlide: (index) =>
    set((state) => {
      if (!state.project) return state
      const slide = state.project.slides[index]
      // Always duplicate as content type, insert before CTA (last slide)
      const newSlide = {
        id: Math.random().toString(36).substring(2, 9),
        type: "content" as const,
        text: slide.text,
      }
      const slides = [...state.project.slides]
      // Insert before last slide (CTA)
      const insertAt = slides.length - 1
      slides.splice(insertAt, 0, newSlide)
      return { project: { ...state.project, slides }, selectedSlideIndex: insertAt }
    }),

  moveSlide: (from, to) =>
    set((state) => {
      if (!state.project) return state
      // Protect first (hook) and last (CTA) positions
      if (from === 0 || from === state.project.slides.length - 1) return state
      if (to <= 0 || to >= state.project.slides.length - 1) return state
      const slides = [...state.project.slides]
      const [moved] = slides.splice(from, 1)
      slides.splice(to, 0, moved)
      return { project: { ...state.project, slides }, selectedSlideIndex: to }
    }),

  setTheme: (themeId) =>
    set((state) => {
      if (!state.project) return state
      return { project: { ...state.project, theme: themeId } }
    }),

  setLayout: (layoutId) =>
    set((state) => {
      if (!state.project) return state
      return { project: { ...state.project, layout: layoutId } }
    }),

  setHighlightColor: (color) =>
    set((state) => {
      if (!state.project) return state
      return { project: { ...state.project, highlightColor: color } }
    }),

  reset: () => set({ project: null, selectedSlideIndex: 0 }),
}))

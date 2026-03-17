"use client"

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useCarouselStore } from "@/store/carousel-store"
import { Slide } from "@/types/carousel"

const TYPE_ICONS: Record<string, string> = {
  hook: "H",
  content: "C",
  cta: "CTA",
}

function SortableSlide({ slide, index, isSelected }: { slide: Slide; index: number; isSelected: boolean }) {
  const setSelectedSlideIndex = useCarouselStore((s) => s.setSelectedSlideIndex)
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: slide.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => setSelectedSlideIndex(index)}
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer text-xs transition-colors ${
        isSelected
          ? "bg-accent text-accent-foreground"
          : "hover:bg-muted"
      }`}
    >
      <span className="w-7 h-5 rounded bg-muted-foreground/10 flex items-center justify-center text-[10px] font-bold shrink-0">
        {TYPE_ICONS[slide.type] || "?"}
      </span>
      <span className="truncate flex-1">{slide.text.slice(0, 30)}</span>
    </div>
  )
}

export function SlideThumbnailList() {
  const project = useCarouselStore((s) => s.project)
  const selectedSlideIndex = useCarouselStore((s) => s.selectedSlideIndex)
  const moveSlide = useCarouselStore((s) => s.moveSlide)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  if (!project) return null

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id || !project) return

    const oldIndex = project.slides.findIndex((s) => s.id === active.id)
    const newIndex = project.slides.findIndex((s) => s.id === over.id)
    if (oldIndex !== -1 && newIndex !== -1) {
      moveSlide(oldIndex, newIndex)
    }
  }

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-medium text-muted-foreground mb-1">Slides</span>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={project.slides.map((s) => s.id)} strategy={verticalListSortingStrategy}>
          {project.slides.map((slide, i) => (
            <SortableSlide
              key={slide.id}
              slide={slide}
              index={i}
              isSelected={i === selectedSlideIndex}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )
}

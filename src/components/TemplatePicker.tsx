"use client"

import { TEMPLATES } from "@/lib/templates"
import { useCarouselStore } from "@/store/carousel-store"
import { toast } from "sonner"

export function TemplatePicker() {
  const setProject = useCarouselStore((s) => s.setProject)

  function handlePick(index: number) {
    const template = TEMPLATES[index]
    setProject(template.project())
    toast.success(`Template "${template.name}" loaded!`)
  }

  return (
    <div className="flex flex-col gap-2">
      {TEMPLATES.map((t, i) => (
        <button
          key={t.name}
          onClick={() => handlePick(i)}
          className="text-left p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors"
        >
          <div className="font-medium text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {t.description} · {t.slideCount} slides
          </div>
        </button>
      ))}
    </div>
  )
}

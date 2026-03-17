"use client"

import { useCarouselStore } from "@/store/carousel-store"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Slide, ThemeId } from "@/types/carousel"
import { THEMES } from "@/lib/themes"
import { CharCounter } from "./CharCounter"

const SOFT_LIMITS: Record<string, number> = {
  hook: 60,
  content: 120,
  cta: 80,
}

const HIGHLIGHT_PRESETS = [
  { label: "Default", value: undefined },
  { label: "Red", value: "#ef4444" },
  { label: "Orange", value: "#f97316" },
  { label: "Amber", value: "#f59e0b" },
  { label: "Emerald", value: "#10b981" },
  { label: "Cyan", value: "#06b6d4" },
  { label: "Blue", value: "#3b82f6" },
  { label: "Purple", value: "#8b5cf6" },
]

export function SlideEditorPanel() {
  const project = useCarouselStore((s) => s.project)
  const selectedSlideIndex = useCarouselStore((s) => s.selectedSlideIndex)
  const updateSlide = useCarouselStore((s) => s.updateSlide)
  const deleteSlide = useCarouselStore((s) => s.deleteSlide)
  const duplicateSlide = useCarouselStore((s) => s.duplicateSlide)
  const moveSlide = useCarouselStore((s) => s.moveSlide)
  const setTheme = useCarouselStore((s) => s.setTheme)
  const setHighlightColor = useCarouselStore((s) => s.setHighlightColor)

  if (!project) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        No slide selected
      </div>
    )
  }

  const slide = project.slides[selectedSlideIndex]
  if (!slide) return null

  function update(partial: Partial<Slide>) {
    updateSlide(selectedSlideIndex, { ...slide, ...partial } as Slide)
  }

  const canMoveUp = selectedSlideIndex > 0
  const canMoveDown = selectedSlideIndex < project.slides.length - 1
  const canDelete = project.slides.length > 2

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-sm">
          Edit Slide {selectedSlideIndex + 1}{" "}
          <span className="text-muted-foreground font-normal capitalize">
            ({slide.type})
          </span>
        </h2>
      </div>

      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {/* Theme picker */}
        <Field label="Theme">
          <div className="flex gap-2">
            {(Object.keys(THEMES) as ThemeId[]).map((id) => {
              const t = THEMES[id]
              const active = (project.theme || "bw-gradient") === id
              return (
                <button
                  key={id}
                  onClick={() => setTheme(id)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    active ? "border-foreground scale-110" : "border-transparent hover:border-muted-foreground/50"
                  }`}
                  style={{ backgroundColor: t.slideBg, boxShadow: `inset 0 -4px 0 ${t.blurOrbs[1]?.color || t.slideBg}` }}
                  title={t.name}
                />
              )
            })}
          </div>
        </Field>

        {/* Highlight color */}
        <Field label="Highlight Color">
          <div className="flex gap-1.5 flex-wrap">
            {HIGHLIGHT_PRESETS.map((preset) => {
              const active = project.highlightColor === preset.value
              return (
                <button
                  key={preset.label}
                  onClick={() => setHighlightColor(preset.value)}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    active ? "border-foreground scale-110" : "border-muted hover:border-muted-foreground/50"
                  }`}
                  style={{
                    backgroundColor: preset.value || "transparent",
                    backgroundImage: !preset.value ? "linear-gradient(135deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%)" : undefined,
                  }}
                  title={preset.label}
                />
              )
            })}
          </div>
        </Field>

        {/* Common text field */}
        <Field label="Text">
          <Textarea
            value={slide.text}
            onChange={(e) => update({ text: e.target.value })}
            rows={4}
            placeholder="Main text for this slide"
          />
          <CharCounter value={slide.text} softLimit={SOFT_LIMITS[slide.type] || 100} />
        </Field>

        {/* Emoji for hook */}
        {slide.type === "hook" && (
          <Field label="Emoji (optional)">
            <Input
              value={slide.emoji || ""}
              onChange={(e) => update({ emoji: e.target.value })}
              placeholder="e.g. 💡 🔥 🚀"
            />
          </Field>
        )}

        {/* Highlight for hook & content */}
        {(slide.type === "hook" || slide.type === "content") && (
          <Field label="Highlight text (optional)">
            <Input
              value={slide.highlight || ""}
              onChange={(e) => update({ highlight: e.target.value })}
              placeholder="Text to highlight with gradient"
            />
          </Field>
        )}

        {/* CTA-specific fields */}
        {slide.type === "cta" && (
          <>
            <Field label="Credit Name (optional)">
              <Input
                value={slide.creditName || ""}
                onChange={(e) => update({ creditName: e.target.value })}
              />
            </Field>
            <Field label="Socials (comma separated)">
              <Input
                value={slide.socials?.join(", ") || ""}
                onChange={(e) =>
                  update({
                    socials: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  })
                }
                placeholder="IG @dinarww, TikTok @dinarww, YT @dinarww"
              />
            </Field>
          </>
        )}
      </div>

      {/* Slide actions */}
      <div className="flex flex-wrap gap-2 pt-3 border-t">
        <Button
          variant="outline"
          size="sm"
          disabled={!canMoveUp}
          onClick={() => moveSlide(selectedSlideIndex, selectedSlideIndex - 1)}
        >
          Move Up
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={!canMoveDown}
          onClick={() => moveSlide(selectedSlideIndex, selectedSlideIndex + 1)}
        >
          Move Down
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => duplicateSlide(selectedSlideIndex)}
        >
          Duplicate
        </Button>
        <Button
          variant="destructive"
          size="sm"
          disabled={!canDelete}
          onClick={() => deleteSlide(selectedSlideIndex)}
        >
          Delete
        </Button>
      </div>
    </div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}

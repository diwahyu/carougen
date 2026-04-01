"use client"

import { useCarouselStore } from "@/store/carousel-store"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LayoutId, Slide, ThemeId } from "@/types/carousel"
import { THEMES } from "@/lib/themes"

const HIGHLIGHT_PRESETS = [
  { label: "Default", value: undefined },
  { label: "White", value: "#ffffff" },
  { label: "Black", value: "#000000" },
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
  const setLayout = useCarouselStore((s) => s.setLayout)
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

  const isFirstSlide = selectedSlideIndex === 0
  const isLastSlide = selectedSlideIndex === project.slides.length - 1

  function update(partial: Partial<Slide>) {
    updateSlide(selectedSlideIndex, { ...slide, ...partial } as Slide)
  }

  // Enforce structure: can't move hook (first) or CTA (last) out of position
  const canMoveUp = selectedSlideIndex > 1 // Can't move into index 0 (hook)
  const canMoveDown = selectedSlideIndex < project.slides.length - 2 // Can't move into last (CTA)
  const canDelete = !isFirstSlide && !isLastSlide && project.slides.length > 2

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

        {/* Layout picker */}
        <Field label="Layout">
          <div className="flex gap-2">
            {(["classic", "impact", "bold"] as LayoutId[]).map((id) => {
              const active = (project.layout || "classic") === id
              const labels: Record<string, string> = { classic: "Classic", impact: "Impact", bold: "Bold" }
              return (
                <button
                  key={id}
                  onClick={() => setLayout(id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-muted hover:border-muted-foreground/50"
                  }`}
                >
                  {labels[id]}
                </button>
              )
            })}
          </div>
        </Field>

        {/* Accent color (applies to **bold** in markdown) */}
        <Field label="Accent Color">
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

        {/* Markdown text field */}
        <Field label="Text (Markdown)">
          <Textarea
            value={slide.text}
            onChange={(e) => update({ text: e.target.value })}
            rows={6}
            placeholder={"# Title\n\nBody text with **bold** words.\n\n- List item 1\n- List item 2\n\n> Quote text"}
            className="font-mono text-xs"
          />
          <p className="text-[10px] text-muted-foreground">
            Supports: # Title, ## Subtitle, **bold**, *italic*, - lists, &gt; quotes
          </p>
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

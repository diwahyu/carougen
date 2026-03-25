"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCarouselStore } from "@/store/carousel-store"
import { exportSlideToImage, downloadBlob, exportAllSlidesToZip, generateSlidePrefix } from "@/lib/export"
import { toast } from "sonner"

interface ExportControlsProps {
  getSlideElements: () => HTMLElement[]
}

export function ExportControls({ getSlideElements }: ExportControlsProps) {
  const project = useCarouselStore((s) => s.project)
  const selectedSlideIndex = useCarouselStore((s) => s.selectedSlideIndex)
  const [exporting, setExporting] = useState(false)

  if (!project) return null

  const hookText = project.slides[0]?.text
  const prefix = generateSlidePrefix(hookText, project.prefix)

  async function handleExportCurrent() {
    setExporting(true)
    try {
      const elements = getSlideElements()
      const el = elements[selectedSlideIndex]
      if (!el) throw new Error("Slide element not found")
      const padded = String(selectedSlideIndex + 1).padStart(2, "0")
      const filename = `${prefix}-${padded}.png`
      const { blob } = await exportSlideToImage(el, filename)
      downloadBlob(blob, filename)
      toast.success(`Exported ${filename}`)
    } catch (err) {
      toast.error(`Export failed: ${err instanceof Error ? err.message : "Unknown error"}`)
    } finally {
      setExporting(false)
    }
  }

  async function handleExportZip() {
    setExporting(true)
    try {
      const elements = getSlideElements()
      if (elements.length === 0) throw new Error("No slides to export")
      await exportAllSlidesToZip(elements, prefix)
      toast.success(`Exported ${prefix}.zip`)
    } catch (err) {
      toast.error(`Export failed: ${err instanceof Error ? err.message : "Unknown error"}`)
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="flex flex-col gap-2 pt-3 border-t">
      <h3 className="text-xs font-medium text-muted-foreground">Export</h3>
      <Button
        variant="outline"
        size="sm"
        onClick={handleExportCurrent}
        disabled={exporting}
      >
        {exporting ? "Exporting..." : `Export Slide ${selectedSlideIndex + 1}`}
      </Button>
      <Button size="sm" onClick={handleExportZip} disabled={exporting}>
        {exporting ? "Exporting..." : "Download ZIP (All Slides)"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Prefix: <code className="font-mono">{prefix}</code>
      </p>
    </div>
  )
}

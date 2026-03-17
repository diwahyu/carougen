import { toPng } from "html-to-image"
import JSZip from "jszip"
import { saveAs } from "file-saver"

export async function exportSlideToImage(
  element: HTMLElement,
  filename: string
): Promise<{ blob: Blob; filename: string }> {
  const dataUrl = await toPng(element, {
    width: 1080,
    height: 1350,
    pixelRatio: 1,
  })
  const res = await fetch(dataUrl)
  const blob = await res.blob()
  return { blob, filename }
}

export function downloadBlob(blob: Blob, filename: string) {
  saveAs(blob, filename)
}

export async function exportAllSlidesToZip(
  elements: HTMLElement[],
  prefix: string
) {
  const zip = new JSZip()

  for (let i = 0; i < elements.length; i++) {
    const padded = String(i + 1).padStart(2, "0")
    const filename = `${prefix}-${padded}.png`
    const { blob } = await exportSlideToImage(elements[i], filename)
    zip.file(filename, blob)
  }

  const zipBlob = await zip.generateAsync({ type: "blob" })
  saveAs(zipBlob, `${prefix}.zip`)
}

export function generateDefaultPrefix(): string {
  const now = new Date()
  const date = now.toISOString().slice(0, 10).replace(/-/g, "")
  const time = now.toTimeString().slice(0, 8).replace(/:/g, "")
  return `carousel-${date}-${time}`
}

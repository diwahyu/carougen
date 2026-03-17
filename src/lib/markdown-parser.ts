import { CarouselProject, Slide } from "@/types/carousel"

function id() {
  return Math.random().toString(36).substring(2, 9)
}

export function parseMarkdownToProject(markdown: string): {
  success: true
  project: CarouselProject
} | {
  success: false
  errors: string[]
} {
  const blocks = markdown
    .split(/^---$/m)
    .map((b) => b.trim())
    .filter(Boolean)

  if (blocks.length < 2) {
    return { success: false, errors: ["Need at least 2 sections separated by ---"] }
  }

  if (blocks.length > 15) {
    return { success: false, errors: ["Maximum 15 slides allowed"] }
  }

  const slides: Slide[] = blocks.map((block, i) => {
    const isFirst = i === 0
    const isLast = i === blocks.length - 1

    // Extract **bold** as highlight
    const boldMatch = block.match(/\*\*(.+?)\*\*/)
    const highlight = boldMatch ? boldMatch[1] : undefined
    const text = block.replace(/\*\*(.+?)\*\*/g, "$1").trim()

    // Extract emoji from start of text
    const emojiMatch = text.match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\s*/u)
    const emoji = isFirst && emojiMatch ? emojiMatch[0].trim() : undefined
    const cleanText = emoji ? text.slice(emojiMatch![0].length) : text

    if (isFirst) {
      return { id: id(), type: "hook" as const, text: cleanText, highlight, emoji }
    }
    if (isLast) {
      return { id: id(), type: "cta" as const, text: cleanText }
    }
    return { id: id(), type: "content" as const, text: cleanText, highlight }
  })

  const project: CarouselProject = {
    id: id(),
    projectTitle: slides[0].text.slice(0, 50),
    prefix: `md-${Date.now()}`,
    createdAt: new Date().toISOString(),
    slides,
  }

  return { success: true, project }
}

import { carouselInputSchema } from "./validation"
import { CarouselProject, Slide } from "@/types/carousel"

function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

export function parseCarouselInput(jsonString: string): {
  success: true
  project: CarouselProject
} | {
  success: false
  errors: string[]
} {
  let parsed: unknown
  try {
    parsed = JSON.parse(jsonString)
  } catch {
    return { success: false, errors: ["Invalid JSON format"] }
  }

  const result = carouselInputSchema.safeParse(parsed)
  if (!result.success) {
    const errors = result.error.issues.map(
      (issue) => `${issue.path.join(".")}: ${issue.message}`
    )
    return { success: false, errors }
  }

  const data = result.data
  const slides: Slide[] = data.slides.map((slide) => ({
    ...slide,
    id: generateId(),
  })) as Slide[]

  const project: CarouselProject = {
    id: generateId(),
    projectTitle: data.projectTitle,
    topic: data.topic,
    prefix: data.prefix,
    theme: data.theme,
    highlightColor: data.highlightColor,
    createdAt: new Date().toISOString(),
    slides,
  }

  return { success: true, project }
}

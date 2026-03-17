import { CarouselProject } from "@/types/carousel"

const STORAGE_KEY = "carougen-projects"

export function saveProject(project: CarouselProject): void {
  const projects = loadProjects()
  const idx = projects.findIndex((p) => p.id === project.id)
  if (idx >= 0) {
    projects[idx] = project
  } else {
    projects.unshift(project)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}

export function loadProjects(): CarouselProject[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function deleteProject(id: string): void {
  const projects = loadProjects().filter((p) => p.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}

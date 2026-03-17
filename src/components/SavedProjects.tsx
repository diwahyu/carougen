"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useCarouselStore } from "@/store/carousel-store"
import { saveProject, loadProjects, deleteProject } from "@/lib/storage"
import { CarouselProject } from "@/types/carousel"
import { toast } from "sonner"

export function SavedProjects() {
  const project = useCarouselStore((s) => s.project)
  const setProject = useCarouselStore((s) => s.setProject)
  const [projects, setProjects] = useState<CarouselProject[]>([])

  useEffect(() => {
    setProjects(loadProjects())
  }, [])

  function handleSave() {
    if (!project) {
      toast.error("No project to save")
      return
    }
    saveProject(project)
    setProjects(loadProjects())
    toast.success("Project saved!")
  }

  function handleLoad(p: CarouselProject) {
    setProject(p)
    toast.success(`Loaded "${p.projectTitle || p.prefix}"`)
  }

  function handleDelete(id: string) {
    deleteProject(id)
    setProjects(loadProjects())
    toast.info("Project deleted")
  }

  return (
    <div className="flex flex-col gap-3">
      <Button onClick={handleSave} className="w-full" size="sm" disabled={!project}>
        Save Current Project
      </Button>

      {projects.length === 0 ? (
        <p className="text-xs text-muted-foreground text-center py-4">No saved projects</p>
      ) : (
        <div className="flex flex-col gap-2">
          {projects.map((p) => (
            <div key={p.id} className="p-3 rounded-lg border border-border">
              <div className="font-medium text-sm truncate">{p.projectTitle || p.prefix}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                {p.slides.length} slides · {new Date(p.createdAt).toLocaleDateString()}
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="flex-1 h-7 text-xs" onClick={() => handleLoad(p)}>
                  Load
                </Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive" onClick={() => handleDelete(p.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

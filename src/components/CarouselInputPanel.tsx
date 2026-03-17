"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { parseCarouselInput } from "@/lib/parser"
import { parseMarkdownToProject } from "@/lib/markdown-parser"
import { useCarouselStore } from "@/store/carousel-store"
import { TemplatePicker } from "./TemplatePicker"
import { SavedProjects } from "./SavedProjects"
import { toast } from "sonner"

const SAMPLE_JSON = JSON.stringify(
  {
    projectTitle: "Cara bikin konten yang tidak sepi",
    topic: "Content Strategy",
    prefix: "konten-sepi-20260317",
    slides: [
      {
        type: "hook",
        emoji: "\u{1F4A1}",
        text: "Kenapa kontenmu sepi padahal sudah rajin posting?",
        highlight: "sepi",
      },
      {
        type: "content",
        text: "Hook terlalu lemah. Kalau 1\u20132 detik pertama tidak menarik, orang tidak akan lanjut baca.",
        highlight: "1\u20132 detik pertama",
      },
      {
        type: "content",
        text: "Isi terlalu muter. Carousel yang bagus cepat ke inti, tidak terlalu banyak pembukaan.",
        highlight: "cepat ke inti",
      },
      {
        type: "content",
        text: "Pakai pola: hook kuat, 1 masalah per slide, penutup yang jelas.",
        highlight: "hook kuat",
      },
      {
        type: "cta",
        text: "Simpan carousel ini & follow untuk insight lainnya",
        creditName: "Dinar Wahyu Wibowo",
        socials: ["IG @dinarww", "TikTok @dinarww", "YT @dinarww"],
      },
    ],
  },
  null,
  2
)

const SAMPLE_MD = `\u{1F680} 5 cara **meningkatkan engagement** di Instagram
---
Konsisten posting minimal 3x seminggu. Algoritma menyukai kreator yang **konsisten**.
---
Gunakan hook yang kuat di 2 detik pertama. Tanpa hook, orang akan **skip**.
---
Balas semua komentar dalam **1 jam pertama**. Ini boost engagement rate.
---
Simpan carousel ini & follow untuk tips lainnya`

export function CarouselInputPanel() {
  const [jsonInput, setJsonInput] = useState("")
  const [mdInput, setMdInput] = useState("")
  const setProject = useCarouselStore((s) => s.setProject)

  function handleGenerateJson() {
    const result = parseCarouselInput(jsonInput)
    if (result.success) {
      setProject(result.project)
      toast.success("Carousel generated!")
    } else {
      result.errors.forEach((err) => toast.error(err))
    }
  }

  function handleGenerateMd() {
    const result = parseMarkdownToProject(mdInput)
    if (result.success) {
      setProject(result.project)
      toast.success("Carousel generated from Markdown!")
    } else {
      result.errors.forEach((err) => toast.error(err))
    }
  }

  return (
    <Tabs defaultValue="json" className="flex flex-col h-full">
      <TabsList className="shrink-0">
        <TabsTrigger value="json">JSON</TabsTrigger>
        <TabsTrigger value="templates">Templates</TabsTrigger>
        <TabsTrigger value="markdown">MD</TabsTrigger>
        <TabsTrigger value="saved">Saved</TabsTrigger>
      </TabsList>

      <TabsContent value="json" className="flex flex-col gap-3 flex-1 min-h-0 mt-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm">JSON Input</h2>
          <Button variant="ghost" size="sm" onClick={() => { setJsonInput(SAMPLE_JSON); toast.info("Sample loaded") }}>
            Sample
          </Button>
        </div>
        <Textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste your carousel JSON here..."
          className="flex-1 font-mono text-xs min-h-0 resize-none"
        />
        <Button onClick={handleGenerateJson} className="w-full">
          Generate Carousel
        </Button>
      </TabsContent>

      <TabsContent value="templates" className="flex-1 min-h-0 mt-3 overflow-y-auto">
        <TemplatePicker />
      </TabsContent>

      <TabsContent value="markdown" className="flex flex-col gap-3 flex-1 min-h-0 mt-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm">Markdown Input</h2>
          <Button variant="ghost" size="sm" onClick={() => { setMdInput(SAMPLE_MD); toast.info("Sample loaded") }}>
            Sample
          </Button>
        </div>
        <Textarea
          value={mdInput}
          onChange={(e) => setMdInput(e.target.value)}
          placeholder={"Slide 1 text\n---\nSlide 2 text\n---\nSlide 3 text"}
          className="flex-1 font-mono text-xs min-h-0 resize-none"
        />
        <div className="text-[10px] text-muted-foreground">
          Separate slides with ---. Use **bold** for highlights. First = hook, last = CTA.
        </div>
        <Button onClick={handleGenerateMd} className="w-full">
          Generate Carousel
        </Button>
      </TabsContent>

      <TabsContent value="saved" className="flex-1 min-h-0 mt-3 overflow-y-auto">
        <SavedProjects />
      </TabsContent>
    </Tabs>
  )
}

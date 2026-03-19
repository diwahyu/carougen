"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { parseCarouselInput } from "@/lib/parser"
import { parseMarkdownToProject } from "@/lib/markdown-parser"
import { useCarouselStore } from "@/store/carousel-store"
import { TemplatePicker } from "./TemplatePicker"
import { SavedProjects } from "./SavedProjects"
import { getPromptTemplate } from "@/lib/prompt-template"
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
        text: "# Kenapa kontenmu **sepi** padahal sudah rajin posting?",
      },
      {
        type: "content",
        text: "## Hook Terlalu Lemah\n\nKalau **1\u20132 detik pertama** tidak menarik, orang tidak akan lanjut baca.\n\n- Gunakan pertanyaan provokatif\n- Pakai angka spesifik\n- Buat penasaran",
      },
      {
        type: "content",
        text: "## Isi Terlalu Muter\n\nCarousel yang bagus **cepat ke inti**, tidak terlalu banyak pembukaan.\n\n> *Orang scroll cepat. Kamu punya 3 detik untuk meyakinkan mereka tetap baca.*",
      },
      {
        type: "content",
        text: "## Pola yang Terbukti\n\nPakai formula ini:\n\n- **Hook kuat** di slide pertama\n- *1 masalah* per slide\n- Penutup yang **jelas dan actionable**",
      },
      {
        type: "cta",
        text: "## Simpan carousel ini!\n\n**Follow** untuk insight content strategy lainnya",
        creditName: "Dinar Wahyu Wibowo",
        socials: ["IG @dinarww", "TikTok @dinarww", "YT @dinarww"],
      },
    ],
  },
  null,
  2
)

const SAMPLE_MD = `# 5 cara **meningkatkan engagement** di Instagram
---
## Konsisten Posting

Minimal 3x seminggu. Algoritma menyukai kreator yang **konsisten**.

- Buat content calendar
- Batch content di weekend
---
## Hook yang Kuat

Gunakan hook di **2 detik pertama**. Tanpa hook, orang akan *skip*.

> Pertanyaan > Statement > Fakta mengejutkan
---
## Balas Komentar

Balas semua komentar dalam **1 jam pertama**. Ini boost engagement rate.
---
## Simpan & Share!

**Follow** untuk tips lainnya`

export function CarouselInputPanel() {
  const [jsonInput, setJsonInput] = useState("")
  const [mdInput, setMdInput] = useState("")
  const [promptContext, setPromptContext] = useState("")
  const [copied, setCopied] = useState(false)
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

  function handleCopyPrompt() {
    const prompt = getPromptTemplate(promptContext || undefined)
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tabs defaultValue="json" className="flex flex-col h-full">
      <TabsList className="shrink-0">
        <TabsTrigger value="json">JSON</TabsTrigger>
        <TabsTrigger value="templates">Templates</TabsTrigger>
        <TabsTrigger value="markdown">MD</TabsTrigger>
        <TabsTrigger value="prompt">Prompt</TabsTrigger>
        <TabsTrigger value="saved">Saved</TabsTrigger>
      </TabsList>

      <TabsContent value="json" className="flex flex-col gap-3 flex-1 min-h-0 mt-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm">JSON Input</h2>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={() => { navigator.clipboard.readText().then((text) => { setJsonInput(text); toast.info("Pasted from clipboard") }).catch(() => toast.error("Failed to read clipboard")) }}>
              Paste
            </Button>
            <Button variant="ghost" size="sm" onClick={() => { setJsonInput(SAMPLE_JSON); toast.info("Sample loaded") }}>
              Sample
            </Button>
          </div>
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
          placeholder={"# Hook Title\n---\n## Slide Title\n\nBody with **bold**\n\n- List item\n---\n## CTA\n\n**Follow!**"}
          className="flex-1 font-mono text-xs min-h-0 resize-none"
        />
        <div className="text-[10px] text-muted-foreground">
          Pisahkan slide dengan ---. Gunakan # title, **bold**, - list, &gt; quote. Slide pertama = hook, terakhir = CTA.
        </div>
        <Button onClick={handleGenerateMd} className="w-full">
          Generate Carousel
        </Button>
      </TabsContent>

      <TabsContent value="prompt" className="flex flex-col gap-3 flex-1 min-h-0 mt-3">
        <h2 className="font-semibold text-sm">ChatGPT Prompt Generator</h2>
        <p className="text-[11px] text-muted-foreground">
          Masukkan topik/konteks, lalu copy prompt ke ChatGPT. Hasilnya bisa langsung paste di tab JSON.
        </p>
        <Input
          value={promptContext}
          onChange={(e) => setPromptContext(e.target.value)}
          placeholder="Topik, misal: 5 tips produktivitas untuk freelancer"
        />
        <Button onClick={handleCopyPrompt} className="w-full">
          {copied ? "Copied!" : "Copy Prompt to Clipboard"}
        </Button>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <pre className="text-[10px] text-muted-foreground bg-muted p-3 rounded whitespace-pre-wrap leading-relaxed">
            {getPromptTemplate(promptContext || undefined)}
          </pre>
        </div>
      </TabsContent>

      <TabsContent value="saved" className="flex-1 min-h-0 mt-3 overflow-y-auto">
        <SavedProjects />
      </TabsContent>
    </Tabs>
  )
}

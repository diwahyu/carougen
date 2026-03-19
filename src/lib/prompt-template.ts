export function getPromptTemplate(context?: string): string {
  const topicLine = context
    ? `Topik/konteks: "${context}"`
    : "[GANTI DENGAN TOPIK/KONTEKS KAMU]"

  return `Kamu adalah content writer profesional untuk Instagram carousel.

${topicLine}

Buatkan script carousel Instagram dalam format JSON berikut. Output HANYA JSON, tanpa penjelasan lain.

FORMAT JSON:
{
  "projectTitle": "Judul Project",
  "topic": "TAG_TOPIK",
  "prefix": "carousel",
  "slides": [
    {
      "type": "hook",
      "text": "# Judul Hook yang Menarik\\n\\nKalimat pendukung singkat",
      "emoji": "🔥"
    },
    {
      "type": "content",
      "text": "## Judul Slide\\n\\nParagraf penjelasan dengan **kata kunci** yang di-bold.\\n\\n- Poin pertama\\n- Poin kedua\\n- Poin ketiga"
    },
    {
      "type": "content",
      "text": "## Judul Slide 2\\n\\n> Kutipan atau insight penting\\n\\nPenjelasan lebih lanjut dengan *italic* untuk penekanan."
    },
    {
      "type": "cta",
      "text": "## Follow untuk tips lainnya!\\n\\n**Save & Share** post ini!",
      "creditName": "Credit Name",
      "socials": ["IG @handle", "TikTok @handle"]
    }
  ]
}

ATURAN MARKDOWN:
- # untuk judul besar (gunakan di hook slide)
- ## untuk sub-judul
- **text** untuk bold/highlight kata penting
- *text* untuk italic
- - atau * untuk bullet list
- > untuk kutipan/quote
- Teks harus ringkas dan mudah dibaca di Instagram
- Slide pertama WAJIB type "hook", slide terakhir WAJIB type "cta"
- Buat 5-10 slides total
- Setiap slide boleh kombinasi heading, paragraf, list, dan quote
- Gunakan bahasa yang engaging dan sesuai target audience`
}

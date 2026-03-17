import { CarouselProject } from "@/types/carousel"

function id() {
  return Math.random().toString(36).substring(2, 9)
}

export interface CarouselTemplate {
  name: string
  description: string
  slideCount: number
  project: () => CarouselProject
}

export const TEMPLATES: CarouselTemplate[] = [
  {
    name: "Tips & Tricks",
    description: "Share actionable tips with your audience",
    slideCount: 5,
    project: () => ({
      id: id(),
      projectTitle: "5 Tips untuk Meningkatkan Produktivitas",
      topic: "Productivity",
      prefix: `tips-${Date.now()}`,
      createdAt: new Date().toISOString(),
      slides: [
        { id: id(), type: "hook", emoji: "🚀", text: "5 tips yang bikin kamu 10x lebih produktif", highlight: "10x lebih produktif" },
        { id: id(), type: "content", text: "Mulai hari dengan 3 prioritas utama. Jangan multitask, fokus satu per satu.", highlight: "3 prioritas utama" },
        { id: id(), type: "content", text: "Gunakan teknik Pomodoro: 25 menit kerja, 5 menit istirahat.", highlight: "Pomodoro" },
        { id: id(), type: "content", text: "Batasi waktu meeting maksimal 30 menit. Sisanya bisa lewat chat.", highlight: "30 menit" },
        { id: id(), type: "cta", text: "Simpan tips ini & follow untuk insight lainnya", creditName: "Dinar Wahyu Wibowo", socials: ["IG @dinarww", "TikTok @dinarww", "YT @dinarww"] },
      ],
    }),
  },
  {
    name: "Listicle",
    description: "Numbered list format for easy reading",
    slideCount: 6,
    project: () => ({
      id: id(),
      projectTitle: "7 Tools AI yang Wajib Kamu Coba",
      topic: "AI Tools",
      prefix: `listicle-${Date.now()}`,
      createdAt: new Date().toISOString(),
      slides: [
        { id: id(), type: "hook", emoji: "🤖", text: "7 tools AI yang bikin kerja kamu jadi setengahnya", highlight: "setengahnya" },
        { id: id(), type: "content", text: "ChatGPT — untuk brainstorming dan drafting konten dalam hitungan menit.", highlight: "ChatGPT" },
        { id: id(), type: "content", text: "Midjourney — buat visual dan gambar tanpa perlu skill desain.", highlight: "Midjourney" },
        { id: id(), type: "content", text: "Notion AI — organize catatan dan project jadi lebih rapi.", highlight: "Notion AI" },
        { id: id(), type: "content", text: "Gamma — bikin presentasi profesional dari text dalam 1 menit.", highlight: "Gamma" },
        { id: id(), type: "cta", text: "Follow untuk update tools AI terbaru", creditName: "Dinar Wahyu Wibowo", socials: ["IG @dinarww", "TikTok @dinarww", "YT @dinarww"] },
      ],
    }),
  },
  {
    name: "Story Arc",
    description: "Problem → solution narrative format",
    slideCount: 5,
    project: () => ({
      id: id(),
      projectTitle: "Dari Nol Sampai 10K Followers",
      topic: "Growth",
      prefix: `story-${Date.now()}`,
      createdAt: new Date().toISOString(),
      slides: [
        { id: id(), type: "hook", emoji: "😤", text: "6 bulan posting tapi followers cuma 200. Apa yang salah?", highlight: "Apa yang salah?" },
        { id: id(), type: "content", text: "Masalahnya: konten tanpa strategi. Posting tiap hari tapi tidak punya niche yang jelas.", highlight: "tanpa strategi" },
        { id: id(), type: "content", text: "Solusinya: fokus di 1 topik, konsisten 3x seminggu, dan selalu pakai hook yang kuat.", highlight: "1 topik" },
        { id: id(), type: "content", text: "Hasilnya: dalam 3 bulan, followers naik dari 200 ke 10K dengan engagement rate 8%.", highlight: "10K" },
        { id: id(), type: "cta", text: "Mau tau strateginya lebih detail? Follow dan DM 'GROW'", creditName: "Dinar Wahyu Wibowo", socials: ["IG @dinarww", "TikTok @dinarww", "YT @dinarww"] },
      ],
    }),
  },
  {
    name: "Product Launch",
    description: "Announce a product or service",
    slideCount: 5,
    project: () => ({
      id: id(),
      projectTitle: "Launching My SaaS Product",
      topic: "Product Launch",
      prefix: `launch-${Date.now()}`,
      createdAt: new Date().toISOString(),
      slides: [
        { id: id(), type: "hook", emoji: "🔥", text: "Akhirnya live! Product yang aku bangun 6 bulan terakhir", highlight: "Akhirnya live!" },
        { id: id(), type: "content", text: "Masalah yang aku solve: membuat carousel IG profesional dalam hitungan detik, bukan jam.", highlight: "hitungan detik" },
        { id: id(), type: "content", text: "Fitur utama: input JSON/Markdown, 4 tema premium, export PNG langsung siap post.", highlight: "4 tema premium" },
        { id: id(), type: "content", text: "Early adopter discount 50% untuk 100 orang pertama. Link di bio.", highlight: "50%" },
        { id: id(), type: "cta", text: "Cek link di bio atau DM 'LAUNCH' untuk info lebih lanjut", creditName: "Dinar Wahyu Wibowo", socials: ["IG @dinarww", "TikTok @dinarww", "YT @dinarww"] },
      ],
    }),
  },
  {
    name: "Motivational Quote",
    description: "Inspiring quote with context",
    slideCount: 4,
    project: () => ({
      id: id(),
      projectTitle: "Mindset untuk Sukses",
      topic: "Mindset",
      prefix: `quote-${Date.now()}`,
      createdAt: new Date().toISOString(),
      slides: [
        { id: id(), type: "hook", emoji: "💎", text: "Orang sukses bukan yang paling pintar, tapi yang paling konsisten", highlight: "paling konsisten" },
        { id: id(), type: "content", text: "Konsistensi mengalahkan bakat. Yang posting tiap hari selama setahun akan menang dari yang viral sekali lalu hilang.", highlight: "Konsistensi mengalahkan bakat" },
        { id: id(), type: "content", text: "Mulai dari yang kecil. 1% improvement setiap hari = 37x lebih baik dalam setahun.", highlight: "37x lebih baik" },
        { id: id(), type: "cta", text: "Setuju? Share ke temanmu yang butuh motivasi ini", creditName: "Dinar Wahyu Wibowo", socials: ["IG @dinarww", "TikTok @dinarww", "YT @dinarww"] },
      ],
    }),
  },
]

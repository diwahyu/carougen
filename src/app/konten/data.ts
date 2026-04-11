export interface Slide {
  type: "hook" | "content" | "cta";
  emoji?: string;
  text: string;
  creditName?: string;
  socials?: string[];
}

export interface ContentItem {
  day: number;
  date: string;
  slot: "pagi" | "malam";
  category: string;
  projectTitle: string;
  topic: string;
  prefix: string;
  slides: Slide[];
  caption: string;
}

export interface ContentData {
  totalContent: number;
  duration: string;
  schedule: string;
  ctaKeywords?: Record<string, string>;
  content: ContentItem[];
}

const DATA: ContentData = {
  "totalContent": 60,
  "duration": "30 hari",
  "schedule": "2x/hari (Pagi: Digital Product, Malam: AI Bisnis)",
  "ctaKeywords": {
    "digitalProduct": "DIGITAL",
    "aiBisnis": "AIBISNIS"
  },
  "content": [
    {
      "day": 1,
      "date": "2026-04-14",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Posting Tiap Hari Tapi Tetap Sepi",
      "topic": "Content Strategy",
      "prefix": "posting-tiap-hari-tapi-tetap-sepi-20260414",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔥",
          "text": "# Posting Tiap Hari\n\n## Tapi tetap sepi?\n\nMasalahnya bukan di algoritma."
        },
        {
          "type": "content",
          "text": "## Yang Kebanyakan Orang Pikir\n\n\"Yang penting konsisten posting.\"\n\nPadahal:\n\nKonsisten posting **sampah** tetap aja sampah."
        },
        {
          "type": "content",
          "text": "## Yang Instagram Ukur\n\nBukan seberapa SERING kamu posting.\n\nTapi seberapa lama orang **BERHENTI** di kontenmu."
        },
        {
          "type": "content",
          "text": "## Konten yang Bikin Orang Berhenti\n\n- Judulnya bikin penasaran\n- Isinya bikin mikir\n- Akhirnya bikin bertindak"
        },
        {
          "type": "content",
          "text": "## Konten yang Bikin Orang SKIP\n\n- Judul generic\n- Isi yang udah sering denger\n- Gak ada alasan buat save/share"
        },
        {
          "type": "content",
          "text": "## Rumus Simpel\n\n1 konten BERKUALITAS\n\n**>**\n\n10 konten ASAL POSTING"
        },
        {
          "type": "cta",
          "text": "## Stop asal posting.\n\nComment **\"DIGITAL\"** kalau kamu mau tips konten yang convert.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "80% performa konten ditentukan di 3 detik pertama. Kalau slide pertama gak bikin orang berhenti scroll, kontenmu mati sebelum dibaca.\n\nComment DIGITAL kalau kamu mau tips konten yang beneran convert 👇\n\n#digitalproduct #kontenkreator #instagramtips #contentstrategy"
    },
    {
      "day": 1,
      "date": "2026-04-14",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Kenapa AI Kamu Gak Bikin Income",
      "topic": "AI Strategy",
      "prefix": "kenapa-ai-kamu-gak-bikin-income-20260414",
      "slides": [
        {
          "type": "hook",
          "emoji": "💸",
          "text": "# Sudah pakai AI.\n\n## Tapi belum hasilkan uang?\n\nIni masalahnya."
        },
        {
          "type": "content",
          "text": "## Realita\n\nPakai ChatGPT, coba tools. Tapi gak ada income."
        },
        {
          "type": "content",
          "text": "## Masalah Utama\n\nPakai AI untuk BELAJAR. Bukan MENGHASILKAN."
        },
        {
          "type": "content",
          "text": "## Yang Terjadi\n\nNonton, coba, eksperimen. Tapi gak jadi OUTPUT yang bisa dijual."
        },
        {
          "type": "content",
          "text": "## Cara Benar\n\nArahkan ke problem yang bisa dibayar:\n- Konten jualan\n- Closing\n- Scaling"
        },
        {
          "type": "cta",
          "text": "## AI itu alat penghasil.\n\nComment **\"AIBISNIS\"** buat tips AI menghasilkan.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI bukan mainan. Fokus 1-2 tools, solve problem yang bisa dibayar.\n\nComment AIBISNIS 👇\n\n#aibisnis #chatgpt #aiuntukbisnis"
    },
    {
      "day": 2,
      "date": "2026-04-15",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Ekspektasi vs Realita Jualan Produk Digital",
      "topic": "Digital Product",
      "prefix": "ekspektasi-vs-realita-jualan-produk-digi-20260415",
      "slides": [
        {
          "type": "hook",
          "emoji": "💀",
          "text": "# Ekspektasi vs Realita\n\n## Jualan Produk Digital\n\nYang nomor 4 paling sakit 💀"
        },
        {
          "type": "content",
          "text": "## #1\n\nEkspektasi: \"Bikin ebook sekali, cuan selamanya!\"\n\nRealita: Bikin ebook 2 minggu. Yang beli: temen sendiri. **1 orang.**"
        },
        {
          "type": "content",
          "text": "## #2\n\nEkspektasi: \"Pasang harga tinggi biar premium!\"\n\nRealita: Harga 500rb → checkout: 0. Harga 49rb → juga 0.\n\n👉 Ternyata masalahnya di landing page 🤡"
        },
        {
          "type": "content",
          "text": "## #3\n\nEkspektasi: \"Pakai AI biar otomatis!\"\n\nRealita: 3 jam ngobrol ChatGPT. Hasil: 1 paragraf yang harus diedit total. 😂"
        },
        {
          "type": "content",
          "text": "## #4\n\nEkspektasi: \"Followers banyak = laku!\"\n\nRealita: 10K followers → buka link: 50. Checkout: 2. Refund: 1. 😅"
        },
        {
          "type": "content",
          "text": "## Realita Sebenarnya\n\nProduk digital itu bisnis NYATA. Butuh strategi.\n\nYang berhasil = yang paling mau **belajar dari gagal.**"
        },
        {
          "type": "cta",
          "text": "## Share ke temen yang struggle 😂\n\nComment **\"DIGITAL\"** kalau juga pernah ngalamin.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Semua penjual produk digital pernah ngalamin ini. Yang bedain: kamu berhenti atau improve.\n\nComment DIGITAL kalau juga pernah ngalamin 👇\n\n#produkdigital #jualandigital #bisnisdirumah"
    },
    {
      "day": 2,
      "date": "2026-04-15",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "5 AI Tools Produk Digital 10x Lebih Cepat",
      "topic": "AI Tools",
      "prefix": "5-ai-tools-produk-digital-10x-lebih-cepa-20260415",
      "slides": [
        {
          "type": "hook",
          "emoji": "🤖",
          "text": "# 5 AI Tools\n\n## Produk digital 10x cepat.\n\nKebanyakan **GRATIS.**"
        },
        {
          "type": "content",
          "text": "## #1: ChatGPT / Claude\n\nOutline, draft, copy. Pecah kecil = 5x bagus."
        },
        {
          "type": "content",
          "text": "## #2: Canva AI\n\nDesain, mockup, carousel. Magic Design."
        },
        {
          "type": "content",
          "text": "## #3: ElevenLabs\n\nVoiceover, audiobook. Clone suara. 10 menit."
        },
        {
          "type": "content",
          "text": "## #4: Gamma.app\n\nPresentasi otomatis. Export PDF/PPTX."
        },
        {
          "type": "content",
          "text": "## #5: Notion AI\n\nSistem bisnis, database, project management."
        },
        {
          "type": "cta",
          "text": "## SAVE ☝️\n\nComment **\"AIBISNIS\"** buat tutorial detail.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Kamu strategi, AI eksekusi.\n\nComment AIBISNIS 👇\n\n#aitools #bisnisdigital #aitips"
    },
    {
      "day": 3,
      "date": "2026-04-16",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Landing Page Gak Convert Pakai Framework AIDA",
      "topic": "Digital Marketing",
      "prefix": "landing-page-gak-convert-pakai-framework-20260416",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎯",
          "text": "# Landing Page Kamu\n\n## Gak ada yang beli?\n\nPakai framework ini. **Proven works.**"
        },
        {
          "type": "content",
          "text": "## Kenapa LP Gagal\n\n90% LP gagal bukan karena produk jelek.\n\nTapi strukturnya gak ngikutin cara otak **mengambil keputusan.**"
        },
        {
          "type": "content",
          "text": "## Framework A.I.D.A\n\n- **A** → Attention\n- **I** → Interest\n- **D** → Desire\n- **A** → Action"
        },
        {
          "type": "content",
          "text": "## A — ATTENTION\n\n❌ \"Ebook Bisnis Digital Vol.1\"\n✅ \"Panduan Step-by-Step Dapat Rp5 Juta Pertama dari Ebook\""
        },
        {
          "type": "content",
          "text": "## I — INTEREST\n\nTunjukkan kamu PAHAM masalah mereka. Bikin mereka ngangguk."
        },
        {
          "type": "content",
          "text": "## D — DESIRE\n\n❌ \"Ebook 50 halaman + bonus\"\n✅ \"Sistem yang menghasilkan uang bahkan saat kamu tidur.\""
        },
        {
          "type": "content",
          "text": "## A — ACTION\n\nCTA harus jelas, urgent, low risk.\n\n👉 \"Mulai Sekarang — Garansi 100% Uang Kembali\""
        },
        {
          "type": "cta",
          "text": "## SAVE checklist ini.\n\nComment **\"DIGITAL\"** kalau mau framework lain.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Framework AIDA udah sejak 1898 dan masih relevan. Cek LP kamu — udah AIDA belum?\n\nComment DIGITAL 👇\n\n#landingpage #copywriting #produkdigital #digitalmarketing"
    },
    {
      "day": 3,
      "date": "2026-04-16",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Prompt Engineering 101",
      "topic": "Prompt Engineering",
      "prefix": "prompt-engineering-101-20260416",
      "slides": [
        {
          "type": "hook",
          "emoji": "🧠",
          "text": "# AI Hasilnya Jelek?\n\n## Bukan AI bodoh.\n\nPrompt kamu kurang tepat."
        },
        {
          "type": "content",
          "text": "## Rule #1: Spesifik\n\n❌ \"Buatkan caption\"\n✅ \"3 caption IG untuk [produk], target [x], tone [y], max 150 kata.\""
        },
        {
          "type": "content",
          "text": "## Rule #2: Kasih Role\n\n\"Kamu copywriter expert 10 tahun digital marketing Indonesia.\""
        },
        {
          "type": "content",
          "text": "## Rule #3: Kasih Contoh\n\n\"Contoh yang aku suka: [x]. Bikin mirip untuk [y].\""
        },
        {
          "type": "content",
          "text": "## Rule #4: Iterasi\n\nJangan terima output pertama. Minta revisi."
        },
        {
          "type": "content",
          "text": "## Rule #5: Pecah Tugas\n\n❌ \"Bikin ebook 30 halaman\" ✅ \"Outline\" → \"Bab 1\" → \"Bab 2\""
        },
        {
          "type": "cta",
          "text": "## SAVE 5 rules ini.\n\nComment **\"AIBISNIS\"** buat tips lanjutan.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Prompt bagus = output bagus. 5 rules ini cukup naikin kualitas 10x.\n\nComment AIBISNIS 👇\n\n#promptengineering #chatgpt #aitips"
    },
    {
      "day": 4,
      "date": "2026-04-17",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Penghasilan Produk Digital Aku Bulan Lalu",
      "topic": "Behind The Scene",
      "prefix": "penghasilan-produk-digital-aku-bulan-lal-20260417",
      "slides": [
        {
          "type": "hook",
          "emoji": "💰",
          "text": "# Penghasilan Produk Digital\n\n## Aku Bulan Lalu.\n\nTransparan. Gak ada yang disembunyiin."
        },
        {
          "type": "content",
          "text": "## Kenapa Share Ini\n\nBanyak yang tanya: emang bisa cuan?\n\nDaripada teori, aku tunjukin langsung."
        },
        {
          "type": "content",
          "text": "## Breakdown Income\n\n- 📘 Ebook A: Rp [isi angka real]\n- 📘 Ebook B: Rp [isi angka real]\n- 📋 Template: Rp [isi angka real]\n\n**Total: Rp [isi angka real]**"
        },
        {
          "type": "content",
          "text": "## Yang BERHASIL ✅\n\n- Ebook [x] laku paling banyak karena trending\n- Bundle deal naikin AOV 40%"
        },
        {
          "type": "content",
          "text": "## Yang GAGAL ❌\n\n- [Produk x] gak laku, LP kurang kuat\n- Ads rugi Rp [x], targeting terlalu luas"
        },
        {
          "type": "content",
          "text": "## Pelajaran\n\nProduk digital bukan \"bikin sekali lalu kaya.\"\nButuh testing, improve, dengerin feedback."
        },
        {
          "type": "cta",
          "text": "## Comment **\"DIGITAL\"** kalau mau mulai bisnis produk digital.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Bisnis produk digital itu REAL. Ada bulan bagus, ada jelek. Yang penting sistemnya jalan.\n\nComment DIGITAL 👇\n\n#incomereport #produkdigital #transparansi"
    },
    {
      "day": 4,
      "date": "2026-04-17",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "7 Prompt AI Copy-Paste Bisnis Owner",
      "topic": "AI Prompts",
      "prefix": "7-prompt-ai-copy-paste-bisnis-owner-20260417",
      "slides": [
        {
          "type": "hook",
          "emoji": "⚡",
          "text": "# 7 Prompt AI\n\n## Copy-paste. Gratis."
        },
        {
          "type": "content",
          "text": "## #1: Caption IG\n\n\"Copywriter expert. 3 caption [produk], target [x], hook berhenti scroll, max 150 kata.\""
        },
        {
          "type": "content",
          "text": "## #2: Ide Konten\n\n\"20 ide carousel niche [x]. Judul hook, angle, kenapa save/share.\""
        },
        {
          "type": "content",
          "text": "## #3: Sales Page\n\n\"Sales page AIDA. Produk [x], target, masalah, solusi, harga.\""
        },
        {
          "type": "content",
          "text": "## #4: Email Sequence\n\n\"5 email launch: teaser → value → proof → offer → last chance.\""
        },
        {
          "type": "content",
          "text": "## #5: Analisa Kompetitor\n\n\"3 kompetitor [niche]. Kelebihan, kelemahan, celah.\""
        },
        {
          "type": "content",
          "text": "## #6: Outline Ebook\n\n\"Outline 30 halaman. 5 bab, 3 sub-topik per bab.\""
        },
        {
          "type": "content",
          "text": "## #7: Review & Improve\n\n\"3 hal bagus, 3 perbaiki, versi improved.\""
        },
        {
          "type": "cta",
          "text": "## SAVE ☝️\n\nComment **\"AIBISNIS\"** buat prompt lanjutan.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "7 prompt ini hemat puluhan jam/minggu. Selalu minta revisi.\n\nComment AIBISNIS 👇\n\n#aiprompts #chatgpt #promptengineering"
    },
    {
      "day": 5,
      "date": "2026-04-18",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Kenapa 90% Orang Gagal di Produk Digital",
      "topic": "Mindset Bisnis",
      "prefix": "kenapa-90-orang-gagal-di-produk-digital-20260418",
      "slides": [
        {
          "type": "hook",
          "emoji": "💣",
          "text": "# 90% Orang GAGAL\n\n## di Produk Digital.\n\nBukan karena produknya jelek."
        },
        {
          "type": "content",
          "text": "## #1: Bikin yang MEREKA mau, bukan MARKET mau\n\n\"Aku suka topik ini\" ≠ \"Orang mau bayar\""
        },
        {
          "type": "content",
          "text": "## #2: Bikin dulu, baru cari pembeli\n\nYang bener: validasi dulu → baru bikin."
        },
        {
          "type": "content",
          "text": "## #3: Perfeksionis\n\nGak launch = Rp 0. Launch 70% = > Rp 0."
        },
        {
          "type": "content",
          "text": "## #4: Gak punya distribusi\n\nProduk bagus + 0 audience = 0 sales."
        },
        {
          "type": "content",
          "text": "## #5: Menyerah terlalu cepat\n\nLaunch → gagal → improve → launch → **SOLD OUT.**"
        },
        {
          "type": "cta",
          "text": "## Kamu di alasan mana?\n\nComment **\"DIGITAL\"** kalau siap fix.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Yang paling sering: #1 dan #4. Bikin produk tanpa riset, launch tanpa audience.\n\nComment DIGITAL 👇\n\n#produkdigital #mindsetbisnis #bisnisdigital"
    },
    {
      "day": 5,
      "date": "2026-04-18",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Workflow Bikin Ebook 1 Hari",
      "topic": "AI Workflow",
      "prefix": "ai-workflow-bikin-ebook-1-hari-20260418",
      "slides": [
        {
          "type": "hook",
          "emoji": "📘",
          "text": "# Ebook dalam 1 Hari.\n\n## Pakai AI. Step-by-step."
        },
        {
          "type": "content",
          "text": "## Step 1: Riset (30 menit)\n\n\"10 masalah [audience] tentang [topik].\" Pilih 5-7 → jadi bab."
        },
        {
          "type": "content",
          "text": "## Step 2: Outline (30 menit)\n\n\"Outline 25 halaman. 3 sub-topik per bab.\""
        },
        {
          "type": "content",
          "text": "## Step 3: Draft (3-4 jam)\n\nPer bab. Max 1000 kata. Jangan sekaligus."
        },
        {
          "type": "content",
          "text": "## Step 4: Edit (1-2 jam)\n\nPersonal experience, hapus generic, perbaiki alur."
        },
        {
          "type": "content",
          "text": "## Step 5: Desain (1-2 jam)\n\nCover + layout Canva. Export PDF.\n\n**Total: 6-8 jam.**"
        },
        {
          "type": "cta",
          "text": "## SAVE workflow ini.\n\nComment **\"AIBISNIS\"** buat template prompt ebook.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI 60%. Kamu 40% — personal touch yang bikin unik.\n\nComment AIBISNIS 👇\n\n#aiworkflow #bikinebook #chatgpt"
    },
    {
      "day": 6,
      "date": "2026-04-19",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Validasi Ide Produk Digital",
      "topic": "Product Validation",
      "prefix": "cara-validasi-ide-produk-digital-20260419",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔍",
          "text": "# Jangan Bikin Produk Digital\n\n## Sebelum Lakukan Ini.\n\n99% orang skip."
        },
        {
          "type": "content",
          "text": "## Kesalahan Fatal\n\nIde → bikin → launch → gak laku → nyerah.\n\nYang di-skip: **VALIDASI.**"
        },
        {
          "type": "content",
          "text": "## Cara #1: Polling Story\n\n\"Kalau ada panduan [topik], mau beli?\"\nMin 30% ya → layak bikin."
        },
        {
          "type": "content",
          "text": "## Cara #2: Pre-Order Test\n\nLP + tombol beli. Ada klik → ada demand."
        },
        {
          "type": "content",
          "text": "## Cara #3: Cek Kompetitor\n\nAda yang laku? Tanda BAGUS. Market ada."
        },
        {
          "type": "content",
          "text": "## Cara #4: Content Test\n\n3-5 konten topik itu. Engagement tinggi → audience butuh."
        },
        {
          "type": "cta",
          "text": "## Validasi dulu. Bikin belakangan.\n\nComment **\"DIGITAL\"** buat tips lainnya.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Validasi itu bukan buang waktu — itu hemat waktu.\n\nComment DIGITAL 👇\n\n#validasiproduk #produkdigital #bisnisdigital"
    },
    {
      "day": 6,
      "date": "2026-04-19",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "ChatGPT vs Claude untuk Bisnis",
      "topic": "AI Comparison",
      "prefix": "chatgpt-vs-claude-untuk-bisnis-20260419",
      "slides": [
        {
          "type": "hook",
          "emoji": "⚔️",
          "text": "# ChatGPT vs Claude\n\n## Mana Lebih Bagus?\n\nJawaban jujur."
        },
        {
          "type": "content",
          "text": "## ChatGPT: browsing, plugin, DALL-E, coding.\n\nBest: riset dan visual."
        },
        {
          "type": "content",
          "text": "## Claude: konten panjang, analisa, tone natural.\n\nBest: content creation dan analisis."
        },
        {
          "type": "content",
          "text": "## Rekomendasi: Pakai KEDUANYA.\n\nChatGPT riset. Claude nulis."
        },
        {
          "type": "content",
          "text": "## Tips Hemat\n\nFree cukup mulai. Upgrade setelah tau mana yang sering."
        },
        {
          "type": "cta",
          "text": "## Tim mana?\n\nComment **\"AIBISNIS\"** buat comparison lain.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Gak ada yang absolut terbaik. Pakai sesuai kebutuhan.\n\nComment AIBISNIS 👇\n\n#chatgpt #claude #aicomparison"
    },
    {
      "day": 7,
      "date": "2026-04-20",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Anatomy Ebook yang Laku Keras",
      "topic": "Ebook Creation",
      "prefix": "anatomy-ebook-yang-laku-keras-20260420",
      "slides": [
        {
          "type": "hook",
          "emoji": "📘",
          "text": "# Anatomy Ebook\n\n## yang Laku Keras.\n\n7 elemen WAJIB ada."
        },
        {
          "type": "content",
          "text": "## #1: Judul Spesifik\n\n❌ \"Panduan Bisnis Online\"\n✅ \"7 Langkah Dapat Rp5 Juta dari Ebook\""
        },
        {
          "type": "content",
          "text": "## #2: Cover Professional\n\nCover jelek = \"isinya pasti jelek.\" Investasi wajib."
        },
        {
          "type": "content",
          "text": "## #3: Daftar Isi Bikin Penasaran\n\nDaftar isi = preview. Bikin penasaran → yakin beli."
        },
        {
          "type": "content",
          "text": "## #4: Framework Step-by-Step\n\nOrang beli buat tau langkah 1, 2, 3. Bukan teori."
        },
        {
          "type": "content",
          "text": "## #5: Contoh Nyata + Studi Kasus\n\nTeori + contoh = powerful."
        },
        {
          "type": "content",
          "text": "## #6: Bonus Relevan\n\nTemplate, checklist. Perceived value naik."
        },
        {
          "type": "content",
          "text": "## #7: CTA di Halaman Terakhir\n\nArahkan ke produk lain, follow, atau komunitas."
        },
        {
          "type": "cta",
          "text": "## SAVE blueprint ini.\n\nComment **\"DIGITAL\"** kalau mau bikin ebook laku.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Ebook laku bukan yang paling tebal. Tapi paling JELAS dan actionable.\n\nComment DIGITAL 👇\n\n#ebook #produkdigital #jualanebook"
    },
    {
      "day": 7,
      "date": "2026-04-20",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Riset Kompetitor 15 Menit Pakai AI",
      "topic": "AI Research",
      "prefix": "riset-kompetitor-15-menit-pakai-ai-20260420",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔍",
          "text": "# Riset Kompetitor\n\n## 15 Menit. Pakai AI."
        },
        {
          "type": "content",
          "text": "## 3 menit: Identifikasi\n\n\"5 kompetitor [niche] Indonesia. Nama, platform, produk.\""
        },
        {
          "type": "content",
          "text": "## 5 menit: Analisa\n\n\"Kelebihan masing-masing. Kenapa loyal?\""
        },
        {
          "type": "content",
          "text": "## 5 menit: Gap\n\n\"Celah yang belum diisi? Apa yang bisa beda?\""
        },
        {
          "type": "content",
          "text": "## 2 menit: Action\n\n\"3 strategi diferensiasi minggu ini.\""
        },
        {
          "type": "cta",
          "text": "## SAVE workflow ini.\n\nComment **\"AIBISNIS\"** buat prompt riset.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "15 menit cukup dapat insight actionable.\n\nComment AIBISNIS 👇\n\n#risetpasar #kompetitor #aiuntukbisnis"
    },
    {
      "day": 8,
      "date": "2026-04-21",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Harga Produk Digital Berapa yang Ideal",
      "topic": "Pricing Strategy",
      "prefix": "harga-produk-digital-berapa-yang-ideal-20260421",
      "slides": [
        {
          "type": "hook",
          "emoji": "💵",
          "text": "# Harga Produk Digital\n\n## Berapa yang Ideal?\n\nIni rumusnya."
        },
        {
          "type": "content",
          "text": "## Tier Pricing\n\n- Rp 29-79rb → impulse buy\n- Rp 99-249rb → mid-range, butuh trust\n- Rp 299rb+ → premium, butuh proof"
        },
        {
          "type": "content",
          "text": "## Rumus\n\nHarga = Nilai hasil × kemudahan eksekusi.\n\nBantu hemat Rp5jt → Rp299rb itu murah."
        },
        {
          "type": "content",
          "text": "## Bundle Strategy\n\n\"Dapat 3 seharga 1.5\" → irresistible."
        },
        {
          "type": "content",
          "text": "## Jangan Takut Naikin Harga\n\nHarga murah bukan strategi. Itu jebakan."
        },
        {
          "type": "cta",
          "text": "## SAVE referensi pricing ini.\n\nComment **\"DIGITAL\"** buat strategi lanjutan.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Harga menentukan persepsi. VALUE harus melebihi harga.\n\nComment DIGITAL 👇\n\n#pricing #produkdigital #strategibisnis"
    },
    {
      "day": 8,
      "date": "2026-04-21",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Customer Service 10x Lebih Cepat",
      "topic": "AI Customer Service",
      "prefix": "ai-customer-service-10x-lebih-cepat-20260421",
      "slides": [
        {
          "type": "hook",
          "emoji": "💬",
          "text": "# Capek Jawab DM?\n\n## AI. 10x lebih cepat."
        },
        {
          "type": "content",
          "text": "## Template Response Bank\n\n\"10 template FAQ [produk]. Friendly, professional.\""
        },
        {
          "type": "content",
          "text": "## Personalisasi\n\nCopy template → \"Personalisasi untuk [nama] yang tanya [topik].\""
        },
        {
          "type": "content",
          "text": "## Handle Komplain\n\n\"Customer komplain [x]. Response empathetic + solusi.\""
        },
        {
          "type": "content",
          "text": "## Hasil: 2 jam → 15 menit. Konsisten. Hemat energi."
        },
        {
          "type": "cta",
          "text": "## SAVE buat upgrade CS.\n\nComment **\"AIBISNIS\"** buat template response.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "CS bagus = repeat customer. AI bantu tanpa burnout.\n\nComment AIBISNIS 👇\n\n#customerservice #aibisnis #chatgpt"
    },
    {
      "day": 9,
      "date": "2026-04-22",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "5 Kesalahan Fatal Landing Page",
      "topic": "Landing Page",
      "prefix": "5-kesalahan-fatal-landing-page-20260422",
      "slides": [
        {
          "type": "hook",
          "emoji": "🚫",
          "text": "# 5 Kesalahan FATAL\n\n## di Landing Page Produk Digital.\n\nNo. 3 paling sering."
        },
        {
          "type": "content",
          "text": "## #1: Headline Fokus FITUR\n\nSeharusnya fokus HASIL yang didapat pembeli."
        },
        {
          "type": "content",
          "text": "## #2: Gak Ada Social Proof\n\nOrang percaya pengalaman orang lain."
        },
        {
          "type": "content",
          "text": "## #3: Terlalu Banyak Pilihan\n\nBingung → gak beli. Max 2-3 opsi."
        },
        {
          "type": "content",
          "text": "## #4: CTA Lemah\n\n\"Klik di sini\" → gak ada urgensi."
        },
        {
          "type": "content",
          "text": "## #5: Gak Mobile-Friendly\n\n70%+ traffic HP. Berantakan = kehilangan 70%."
        },
        {
          "type": "cta",
          "text": "## Cek LP kamu. Ada berapa kesalahan?\n\nComment **\"DIGITAL\"** buat tips LP.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "LP itu salesman 24 jam. Kalau jelek, gak ada yang beli.\n\nComment DIGITAL 👇\n\n#landingpage #digitalmarketing #produkdigital"
    },
    {
      "day": 9,
      "date": "2026-04-22",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Konten 1 Minggu dalam 2 Jam Pakai AI",
      "topic": "AI Content",
      "prefix": "konten-1-minggu-dalam-2-jam-pakai-ai-20260422",
      "slides": [
        {
          "type": "hook",
          "emoji": "⏰",
          "text": "# Konten 1 Minggu\n\n## 2 Jam. Pakai AI."
        },
        {
          "type": "content",
          "text": "## 30 menit: Ideation\n\n\"14 ide carousel [niche]. 7 save, 7 share.\" Pilih 7."
        },
        {
          "type": "content",
          "text": "## 30 menit: Hook\n\n\"3 variasi hook [topik]. Kontroversial.\" Pilih terbaik."
        },
        {
          "type": "content",
          "text": "## 45 menit: Slides\n\n\"5-7 slide. 1 poin/slide. CTA.\" Edit personal."
        },
        {
          "type": "content",
          "text": "## 15 menit: Caption\n\n\"Caption + story personal + CTA [keyword].\" 7 DONE."
        },
        {
          "type": "cta",
          "text": "## SAVE workflow.\n\nComment **\"AIBISNIS\"** buat template batch.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Batch + AI = superpower. 7 hari → 2 jam.\n\nComment AIBISNIS 👇\n\n#contentcreation #aiworkflow #batchcontent"
    },
    {
      "day": 10,
      "date": "2026-04-23",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Bikin Produk Digital Pertama dalam 7 Hari",
      "topic": "Product Creation",
      "prefix": "bikin-produk-digital-pertama-dalam-7-har-20260423",
      "slides": [
        {
          "type": "hook",
          "emoji": "⚡",
          "text": "# Produk Digital Pertama\n\n## Dalam 7 Hari.\n\nIni timeline-nya."
        },
        {
          "type": "content",
          "text": "## Hari 1-2: Riset & Validasi\n\nMasalah spesifik, cek kompetitor, polling story."
        },
        {
          "type": "content",
          "text": "## Hari 3-4: Bikin Konten\n\nOutline, draft AI, edit + personal experience."
        },
        {
          "type": "content",
          "text": "## Hari 5: Desain\n\nCover Canva, layout, export PDF."
        },
        {
          "type": "content",
          "text": "## Hari 6: Landing Page\n\nAIDA, headline HASIL, setup payment."
        },
        {
          "type": "content",
          "text": "## Hari 7: LAUNCH!\n\nPost semua sosmed, story 5x, DM 10 orang.\n\n👉 Done > perfect."
        },
        {
          "type": "cta",
          "text": "## 7 hari. 1 produk. Mulai.\n\nComment **\"DIGITAL\"** kalau siap.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "7 hari cukup. Mulai ebook 20-30 halaman. Iterasi setelah feedback.\n\nComment DIGITAL 👇\n\n#produkdigital #bikinebook #7harichallenge"
    },
    {
      "day": 10,
      "date": "2026-04-23",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Hemat Rp5 Juta per Bulan",
      "topic": "AI Cost Saving",
      "prefix": "ai-hemat-rp5-juta-per-bulan-20260423",
      "slides": [
        {
          "type": "hook",
          "emoji": "💰",
          "text": "# AI Hemat Rp5 Juta/Bulan\n\n## 5 caranya."
        },
        {
          "type": "content",
          "text": "## #1: Gak perlu copywriter. Hemat Rp1-2jt."
        },
        {
          "type": "content",
          "text": "## #2: Gak perlu admin CS. Hemat Rp1-1.5jt."
        },
        {
          "type": "content",
          "text": "## #3: Gak perlu course mahal. Hemat Rp500rb-1jt."
        },
        {
          "type": "content",
          "text": "## #4: Desain sendiri Canva AI. Hemat Rp500rb-1jt."
        },
        {
          "type": "content",
          "text": "## #5: Research otomatis. Hemat 10+ jam/minggu."
        },
        {
          "type": "cta",
          "text": "## Mulai hemat bulan ini.\n\nComment **\"AIBISNIS\"** buat breakdown.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Bisnis 1 orang perform seperti tim 5 orang.\n\nComment AIBISNIS 👇\n\n#aibisnis #hematbiaya #solopreneur"
    },
    {
      "day": 11,
      "date": "2026-04-24",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Funnel Sederhana Bikin Produk Auto Laku",
      "topic": "Sales Funnel",
      "prefix": "funnel-sederhana-bikin-produk-auto-laku-20260424",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔄",
          "text": "# Funnel Sederhana\n\n## Produk Digital Auto Laku.\n\n4 step."
        },
        {
          "type": "content",
          "text": "## Step 1: Konten Gratis\n\nTarik perhatian → bikin follow."
        },
        {
          "type": "content",
          "text": "## Step 2: Lead Magnet\n\nKasih GRATIS → dapat kontak."
        },
        {
          "type": "content",
          "text": "## Step 3: Nurturing\n\n3-5 email value. Bangun trust."
        },
        {
          "type": "content",
          "text": "## Step 4: Offer\n\nTrust terbangun → kasih penawaran."
        },
        {
          "type": "content",
          "text": "## Kenapa Works\n\nKonten → Trust → Leads → Sales. Bukan langsung jualan."
        },
        {
          "type": "cta",
          "text": "## SAVE funnel ini.\n\nComment **\"DIGITAL\"** buat template funnel.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Funnel = membangun hubungan dulu sebelum minta uang.\n\nComment DIGITAL 👇\n\n#salesfunnel #produkdigital #emailmarketing"
    },
    {
      "day": 11,
      "date": "2026-04-24",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Sales Page 30 Menit Pakai AI",
      "topic": "AI Sales",
      "prefix": "sales-page-30-menit-pakai-ai-20260424",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎯",
          "text": "# Sales Page 30 Menit.\n\n## AI + AIDA."
        },
        {
          "type": "content",
          "text": "## Menit 1-5: Brief\n\n\"Sales page [produk]. Target, masalah, solusi, harga. AIDA.\""
        },
        {
          "type": "content",
          "text": "## Menit 5-10: Headline\n\n\"5 variasi headline fokus HASIL.\" Pilih terkuat."
        },
        {
          "type": "content",
          "text": "## Menit 10-20: Body\n\nPer section: Interest, Desire, Proof."
        },
        {
          "type": "content",
          "text": "## Menit 20-25: CTA + Guarantee."
        },
        {
          "type": "content",
          "text": "## Menit 25-30: Review & edit. Hapus generic."
        },
        {
          "type": "cta",
          "text": "## SAVE workflow.\n\nComment **\"AIBISNIS\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Pecah per section, AI konteks jelas.\n\nComment AIBISNIS 👇\n\n#salespage #aicopywriting #aiuntukbisnis"
    },
    {
      "day": 12,
      "date": "2026-04-25",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "7 Niche Produk Digital Paling Laku 2026",
      "topic": "Niche Research",
      "prefix": "7-niche-produk-digital-paling-laku-2026-20260425",
      "slides": [
        {
          "type": "hook",
          "emoji": "📊",
          "text": "# 7 Niche Produk Digital\n\n## Paling Laku 2026.\n\nNo. 5 belum banyak yang main."
        },
        {
          "type": "content",
          "text": "## #1: AI & Produktivitas\n\nPrompt pack, tutorial AI. Demand tinggi."
        },
        {
          "type": "content",
          "text": "## #2: Personal Finance Indonesia\n\nBudgeting, panduan investasi pemula."
        },
        {
          "type": "content",
          "text": "## #3: Content Creation\n\nTemplate konten, panduan algoritma."
        },
        {
          "type": "content",
          "text": "## #4: Parenting & Edukasi Anak\n\nParent rela bayar untuk anak."
        },
        {
          "type": "content",
          "text": "## #5: Freelance & Remote Work\n\nPanduan client, template proposal."
        },
        {
          "type": "content",
          "text": "## #6: Kesehatan & Wellness\n\nMeal plan, workout. Evergreen."
        },
        {
          "type": "content",
          "text": "## #7: Digital Marketing UMKM\n\nUMKM butuh tapi gak punya tim."
        },
        {
          "type": "cta",
          "text": "## Pilih 1. Mulai.\n\nComment **\"DIGITAL\"** buat panduan per niche.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Niche terbaik = expertise + demand. Fokus 1 dulu.\n\nComment DIGITAL 👇\n\n#nicheproduk #produkdigital #idebisnis"
    },
    {
      "day": 12,
      "date": "2026-04-25",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "5 Task Bisnis yang Bisa Di-automate AI",
      "topic": "AI Automation",
      "prefix": "5-task-bisnis-yang-bisa-di-automate-ai-20260425",
      "slides": [
        {
          "type": "hook",
          "emoji": "⚙️",
          "text": "# 5 Task\n\n## Bisa Di-automate AI.\n\nStop manual."
        },
        {
          "type": "content",
          "text": "## #1: Email follow-up otomatis."
        },
        {
          "type": "content",
          "text": "## #2: Content calendar 1 bulan."
        },
        {
          "type": "content",
          "text": "## #3: Invoice & reporting."
        },
        {
          "type": "content",
          "text": "## #4: FAQ response bank."
        },
        {
          "type": "content",
          "text": "## #5: Product description."
        },
        {
          "type": "cta",
          "text": "## Pilih 1. Automate minggu ini.\n\nComment **\"AIBISNIS\"** buat SOP.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Jam di task repetitif = jam hilang dari revenue. Automate.\n\nComment AIBISNIS 👇\n\n#automation #aibisnis #worksmarter"
    },
    {
      "day": 13,
      "date": "2026-04-26",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Template Caption Bikin Orang Klik Link Bio",
      "topic": "Copywriting",
      "prefix": "template-caption-bikin-orang-klik-link-b-20260426",
      "slides": [
        {
          "type": "hook",
          "emoji": "✍️",
          "text": "# Template Caption\n\n## Bikin Orang Klik Link di Bio.\n\nCopy-paste."
        },
        {
          "type": "content",
          "text": "## #1: Problem-Solution\n\n\"Capek [masalah]? Aku bikin [solusi]. Link di bio.\""
        },
        {
          "type": "content",
          "text": "## #2: Social Proof\n\n\"Udah [jumlah] orang pakai. Hasilnya [hasil]. Link di bio.\""
        },
        {
          "type": "content",
          "text": "## #3: Scarcity\n\n\"Harga naik [tanggal]. Sekarang Rp[x]. Link di bio.\""
        },
        {
          "type": "content",
          "text": "## #4: Story-Based\n\n\"Dulu [masalah]. Nemuin [solusi]. Sekarang [hasil]. Link di bio.\""
        },
        {
          "type": "content",
          "text": "## Tips\n\nCTA jelas. Kasih alasan klik SEKARANG."
        },
        {
          "type": "cta",
          "text": "## SAVE 4 template ini.\n\nComment **\"DIGITAL\"** buat template lain.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Caption convert = yang paling JELAS. Masalah, solusi, cara dapat.\n\nComment DIGITAL 👇\n\n#copywriting #caption #produkdigital"
    },
    {
      "day": 13,
      "date": "2026-04-26",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Lead Magnet 1 Jam Pakai AI",
      "topic": "AI Lead Generation",
      "prefix": "lead-magnet-1-jam-pakai-ai-20260426",
      "slides": [
        {
          "type": "hook",
          "emoji": "🧲",
          "text": "# Lead Magnet 1 Jam.\n\n## Pakai AI."
        },
        {
          "type": "content",
          "text": "## 10 menit: Pilih format\n\nChecklist, mini ebook, template, cheat sheet."
        },
        {
          "type": "content",
          "text": "## 20 menit: Bikin konten\n\n\"[Format] tentang [topik]. Actionable. Siap pakai.\""
        },
        {
          "type": "content",
          "text": "## 15 menit: Desain Canva."
        },
        {
          "type": "content",
          "text": "## 15 menit: Setup delivery. LP → email → download."
        },
        {
          "type": "cta",
          "text": "## Bikin HARI INI.\n\nComment **\"AIBISNIS\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Lead magnet = pintu masuk funnel. Sekarang cuma 1 jam.\n\nComment AIBISNIS 👇\n\n#leadmagnet #aibisnis #salesfunnel"
    },
    {
      "day": 14,
      "date": "2026-04-27",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Bikin Bundle Produk Digital Irresistible",
      "topic": "Bundle Strategy",
      "prefix": "bikin-bundle-produk-digital-irresistible-20260427",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎁",
          "text": "# Bundle yang Bikin\n\n## Orang Gak Bisa Nolak.\n\nOmzet naik 2-3x."
        },
        {
          "type": "content",
          "text": "## Kenapa Works\n\n1 produk Rp99rb → mikir.\n3 produk Rp149rb → \"murah banget!\""
        },
        {
          "type": "content",
          "text": "## Rumus\n\n1 core + 1-2 complement + 1 bonus eksklusif.\nHarga = 60-70% total satuan."
        },
        {
          "type": "content",
          "text": "## Contoh\n\nEbook 99rb + Template 49rb + Checklist 29rb = 177rb.\n**Bundle: Rp119rb** (hemat 33%)"
        },
        {
          "type": "content",
          "text": "## Tips: Limited Time\n\nBundle 48-72 jam saja. Scarcity + value."
        },
        {
          "type": "cta",
          "text": "## Bikin bundle minggu ini.\n\nComment **\"DIGITAL\"** buat template bundle.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Bundle = naikin AOV tanpa produk baru. Harus saling melengkapi.\n\nComment DIGITAL 👇\n\n#bundlestrategy #produkdigital #strategijualan"
    },
    {
      "day": 14,
      "date": "2026-04-27",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Analisa Data Bisnis",
      "topic": "AI Analytics",
      "prefix": "ai-analisa-data-bisnis-20260427",
      "slides": [
        {
          "type": "hook",
          "emoji": "📊",
          "text": "# Bingung Baca Data?\n\n## AI analisa. Kamu action."
        },
        {
          "type": "content",
          "text": "## Upload ke AI\n\n\"Analisa data ini. Perform bagus, perlu perbaiki, rekomendasi.\""
        },
        {
          "type": "content",
          "text": "## IG Insight\n\n\"Data 30 hari: [data]. Konten terbaik? Jam optimal?\""
        },
        {
          "type": "content",
          "text": "## Penjualan\n\n\"Data sales: [data]. Produk laku? Hari terbanyak?\""
        },
        {
          "type": "content",
          "text": "## Keputusan DATA > feeling. Hemat waktu. Pattern tersembunyi."
        },
        {
          "type": "cta",
          "text": "## Mulai analisa pakai AI.\n\nComment **\"AIBISNIS\"** buat template prompt.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Data + AI = insight actionable. Gak perlu jago statistik.\n\nComment AIBISNIS 👇\n\n#dataanalysis #aibisnis #insightbisnis"
    },
    {
      "day": 15,
      "date": "2026-04-28",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Email List Senjata Rahasia Produk Digital",
      "topic": "Email Marketing",
      "prefix": "email-list-senjata-rahasia-produk-digita-20260428",
      "slides": [
        {
          "type": "hook",
          "emoji": "📧",
          "text": "# Senjata Rahasia\n\n## Penjual Produk Digital.\n\nBukan followers. **Email list.**"
        },
        {
          "type": "content",
          "text": "## Email > Followers\n\nIG reach: 5-10%. Email open: 20-40%.\nEmail PUNYA kamu. Followers PINJAM."
        },
        {
          "type": "content",
          "text": "## Cara Mulai\n\n1. Lead magnet gratis\n2. Link di bio\n3. Promote tiap konten\n4. Tool gratis (MailerLite)"
        },
        {
          "type": "content",
          "text": "## Lead Magnet Works\n\nMini ebook, checklist, template. Solve 1 masalah kecil."
        },
        {
          "type": "content",
          "text": "## Email Convert\n\n3 email value dulu → email 4: offer."
        },
        {
          "type": "cta",
          "text": "## Mulai HARI INI.\n\nComment **\"DIGITAL\"** buat panduan email.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "100 subscriber engaged > 10K followers pasif. Mulai sekarang.\n\nComment DIGITAL 👇\n\n#emailmarketing #emaillist #produkdigital"
    },
    {
      "day": 15,
      "date": "2026-04-28",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Email Nurturing AI yang Convert",
      "topic": "AI Email Marketing",
      "prefix": "email-nurturing-ai-yang-convert-20260428",
      "slides": [
        {
          "type": "hook",
          "emoji": "📧",
          "text": "# Email Nurturing Convert.\n\n## 5 email dalam 30 menit."
        },
        {
          "type": "content",
          "text": "## #1: Welcome — siapa, kenapa stay, apa didapat."
        },
        {
          "type": "content",
          "text": "## #2: Value Bomb — 3 tips actionable."
        },
        {
          "type": "content",
          "text": "## #3: Story + Lesson — personal, relatable."
        },
        {
          "type": "content",
          "text": "## #4: Social Proof — before → after customer."
        },
        {
          "type": "content",
          "text": "## #5: The Offer — masalah → solusi → proof → CTA."
        },
        {
          "type": "cta",
          "text": "## SAVE sequence ini.\n\nComment **\"AIBISNIS\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Email = silent salesman 24/7. 30 menit dengan AI.\n\nComment AIBISNIS 👇\n\n#emailmarketing #nurturing #aibisnis"
    },
    {
      "day": 16,
      "date": "2026-04-29",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Testimoni Cara Dapat dan Pakainya",
      "topic": "Social Proof",
      "prefix": "testimoni-cara-dapat-dan-pakainya-20260429",
      "slides": [
        {
          "type": "hook",
          "emoji": "⭐",
          "text": "# Gak Ada Testimoni?\n\n## Gak bakal laku.\n\nIni cara dapatnya."
        },
        {
          "type": "content",
          "text": "## Kenapa Penting\n\n\"Bagus\" dari kamu = iklan. Dari pembeli = bukti."
        },
        {
          "type": "content",
          "text": "## Cara Dapat\n\nKasih GRATIS ke 5-10 orang. Syarat: review jujur."
        },
        {
          "type": "content",
          "text": "## Format Convert\n\n\"Sebelum [masalah]. Setelah [hasil]. Recommended!\"\nBefore → After → Rec."
        },
        {
          "type": "content",
          "text": "## Taruh Dimana\n\nLP, story highlights, caption, email. Dimana-mana."
        },
        {
          "type": "cta",
          "text": "## Kumpulkan testimoni hari ini.\n\nComment **\"DIGITAL\"** buat template request.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Testimoni = sales team gratis. 5-10 cukup bikin orang percaya.\n\nComment DIGITAL 👇\n\n#testimoni #socialproof #produkdigital"
    },
    {
      "day": 16,
      "date": "2026-04-29",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Pakai AI Tetap Autentik",
      "topic": "AI Personal Branding",
      "prefix": "pakai-ai-tetap-autentik-20260429",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎤",
          "text": "# Pakai AI Tapi Autentik?\n\n## Bisa. Ini caranya."
        },
        {
          "type": "content",
          "text": "## Masalah\n\nAI = generic? Karena pakai AI sebagai PENULIS, bukan ASISTEN."
        },
        {
          "type": "content",
          "text": "## Framework 60/40\n\n60% AI: struktur, draft. 40% KAMU: voice, story, opini."
        },
        {
          "type": "content",
          "text": "## Praktis\n\nVoice guide, personal story, edit output, opini kontroversial."
        },
        {
          "type": "content",
          "text": "## Prompt Magic\n\n\"3 contoh tulisan aku: [x]. Pelajari gaya. Tulis [topik] gaya sama.\""
        },
        {
          "type": "cta",
          "text": "## AI + Authenticity = Scale + personal.\n\nComment **\"AIBISNIS\"** buat tips.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI mempercepat, bukan menggantikan personality kamu.\n\nComment AIBISNIS 👇\n\n#personalbranding #aicontent #authenticity"
    },
    {
      "day": 17,
      "date": "2026-04-30",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Mockup Produk Digital yang Premium",
      "topic": "Visual Branding",
      "prefix": "mockup-produk-digital-yang-premium-20260430",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎨",
          "text": "# Produkmu Murahan?\n\n## Masalahnya MOCKUP.\n\nBikin premium. Gratis."
        },
        {
          "type": "content",
          "text": "## Kenapa Penting\n\nProduk digital gak bisa dipegang. Mockup bikin NYATA."
        },
        {
          "type": "content",
          "text": "## Tool: Canva\n\nTemplate mockup → ganti cover → export. 5 menit."
        },
        {
          "type": "content",
          "text": "## Tool: Smartmockups\n\nUpload desain → pilih template → download."
        },
        {
          "type": "content",
          "text": "## Tips\n\nBadge \"Best Seller\", preview isi, background clean."
        },
        {
          "type": "cta",
          "text": "## Upgrade visual hari ini.\n\nComment **\"DIGITAL\"** buat tips branding.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Premium-looking = orang rela bayar lebih. Mockup GRATIS 5 menit.\n\nComment DIGITAL 👇\n\n#mockup #visualbranding #produkdigital"
    },
    {
      "day": 17,
      "date": "2026-04-30",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "A/B Test Copywriting Pakai AI",
      "topic": "AI Copywriting",
      "prefix": "a/b-test-copywriting-pakai-ai-20260430",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔬",
          "text": "# A/B Test Copy\n\n## Pakai AI. Gratis."
        },
        {
          "type": "content",
          "text": "## Konsep: 2 versi. Test. Pilih winner. Data > feeling."
        },
        {
          "type": "content",
          "text": "## Step 1: \"3 variasi headline. Angle: curiosity, fear, benefit.\""
        },
        {
          "type": "content",
          "text": "## Step 2: A pagi, B sore. Lihat engagement."
        },
        {
          "type": "content",
          "text": "## Step 3: Winner → baseline. Generate variasi baru."
        },
        {
          "type": "cta",
          "text": "## SAVE metode ini.\n\nComment **\"AIBISNIS\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Copywriter terbaik = rajin testing. AI bikin 10x cepat.\n\nComment AIBISNIS 👇\n\n#copywriting #abtest #aiuntukbisnis"
    },
    {
      "day": 18,
      "date": "2026-05-01",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "3 Tipe Produk Digital Termudah untuk Pemula",
      "topic": "Product Ideas",
      "prefix": "3-tipe-produk-digital-termudah-untuk-pem-20260501",
      "slides": [
        {
          "type": "hook",
          "emoji": "🏁",
          "text": "# Baru Mau Mulai?\n\n## 3 Tipe Termudah.\n\nGak perlu skill teknis."
        },
        {
          "type": "content",
          "text": "## #1: Ebook / PDF\n\nGoogle Docs → PDF. 20-30 halaman cukup."
        },
        {
          "type": "content",
          "text": "## #2: Template Siap Pakai\n\nCanva, spreadsheet, Notion. Bikin sekali jual berkali-kali."
        },
        {
          "type": "content",
          "text": "## #3: Mini Course\n\n5-10 video × 5-10 menit. Rekam HP."
        },
        {
          "type": "content",
          "text": "## Pilih yang Natural\n\nSuka nulis → Ebook. Suka tools → Template. Suka ngomong → Course."
        },
        {
          "type": "cta",
          "text": "## Pilih 1. Mulai minggu ini.\n\nComment **\"DIGITAL\"** ceritain pilihanmu.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Produk pertama gak harus rumit. Yang penting mulai.\n\nComment DIGITAL 👇\n\n#produkdigital #pemula #ideproduk"
    },
    {
      "day": 18,
      "date": "2026-05-01",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "5 AI Mistakes Bisnis Gak Maju",
      "topic": "AI Mistakes",
      "prefix": "5-ai-mistakes-bisnis-gak-maju-20260501",
      "slides": [
        {
          "type": "hook",
          "emoji": "❌",
          "text": "# 5 Kesalahan AI\n\n## Bisnis Gak Maju.\n\nNo. 4 paling sering."
        },
        {
          "type": "content",
          "text": "## #1: Gak edit output. Draft ≠ final."
        },
        {
          "type": "content",
          "text": "## #2: Terlalu banyak tools. Fokus 2-3."
        },
        {
          "type": "content",
          "text": "## #3: Prompt vague. Spesifik = bagus."
        },
        {
          "type": "content",
          "text": "## #4: AI tanpa strategi. Sibuk tapi gak produktif."
        },
        {
          "type": "content",
          "text": "## #5: Takut AI replace. AI replace yang GAK pakai AI."
        },
        {
          "type": "cta",
          "text": "## Pernah lakuin mana?\n\nComment **\"AIBISNIS\"** buat tips.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Yang bikin gak ngefek = cara pakainya. Fix 5 ini.\n\nComment AIBISNIS 👇\n\n#aimistakes #aiuntukbisnis #tipsbisnis"
    },
    {
      "day": 19,
      "date": "2026-05-02",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Strategi Launch yang Bikin FOMO",
      "topic": "Launch Strategy",
      "prefix": "strategi-launch-yang-bikin-fomo-20260502",
      "slides": [
        {
          "type": "hook",
          "emoji": "🚀",
          "text": "# Strategi Launch\n\n## yang Bikin FOMO.\n\nTimeline 7 hari."
        },
        {
          "type": "content",
          "text": "## H-7: Teaser\n\nHint di story. Bikin penasaran."
        },
        {
          "type": "content",
          "text": "## H-5: Behind The Scene\n\nProses bikin, preview cover."
        },
        {
          "type": "content",
          "text": "## H-3: Reveal\n\nKasih tau produknya. Waiting list."
        },
        {
          "type": "content",
          "text": "## H-1: Countdown\n\n\"BESOK. Early bird 48 jam.\""
        },
        {
          "type": "content",
          "text": "## Launch Day: All In\n\nFeed, story 10x, DM, live. Jangan malu."
        },
        {
          "type": "cta",
          "text": "## SAVE timeline ini.\n\nComment **\"DIGITAL\"** kalau lagi siapin launch.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Launch tanpa build-up = cricket. 7 hari persiapan = penjualan maksimal.\n\nComment DIGITAL 👇\n\n#launchstrategy #produkdigital #fomo"
    },
    {
      "day": 19,
      "date": "2026-05-02",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Video Script Engaging",
      "topic": "AI Video",
      "prefix": "ai-video-script-engaging-20260502",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎬",
          "text": "# Video Script Engaging.\n\n## AI. Formula 60 detik."
        },
        {
          "type": "content",
          "text": "## 0-3 detik: Hook. 3-50 detik: Value. 50-60: CTA."
        },
        {
          "type": "content",
          "text": "## Prompt Hook: \"5 pembuka 3 detik [topik]. Kontroversial.\""
        },
        {
          "type": "content",
          "text": "## Prompt Value: \"Script 45 detik. 3 poin. Casual.\""
        },
        {
          "type": "content",
          "text": "## Prompt CTA: \"Penutup. 1 fokus. Max 2 kalimat.\""
        },
        {
          "type": "cta",
          "text": "## SAVE formula ini.\n\nComment **\"AIBISNIS\"** buat template script.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI draft 5 menit, kamu kasih energi saat deliver.\n\nComment AIBISNIS 👇\n\n#videoscript #reelstips #aicontent"
    },
    {
      "day": 20,
      "date": "2026-05-03",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Upsell dan Cross-sell Naikin Omzet",
      "topic": "Revenue Strategy",
      "prefix": "upsell-dan-cross-sell-naikin-omzet-20260503",
      "slides": [
        {
          "type": "hook",
          "emoji": "📈",
          "text": "# Naikin Omzet\n\n## Tanpa Traffic Baru.\n\n2 strategi."
        },
        {
          "type": "content",
          "text": "## #1: Upsell\n\nSetelah beli → versi premium. \"Tambah Rp50rb.\" 20-30% upgrade."
        },
        {
          "type": "content",
          "text": "## #2: Cross-sell\n\nSetelah beli → produk terkait. Relevan = gak terasa jualan."
        },
        {
          "type": "content",
          "text": "## Thank You Page = Goldmine\n\n\"Mau [produk B] diskon 50%?\" Conversion tertinggi."
        },
        {
          "type": "content",
          "text": "## Contoh\n\nBeli ebook marketing → upsell template ads. Saling melengkapi."
        },
        {
          "type": "cta",
          "text": "## SAVE dan terapkan.\n\nComment **\"DIGITAL\"** buat contoh lain.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Jualan ke existing customer itu murah. Upsell/cross-sell naikin omzet 30-50%.\n\nComment DIGITAL 👇\n\n#upsell #crosssell #omzet"
    },
    {
      "day": 20,
      "date": "2026-05-03",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Strategi Pricing Produk",
      "topic": "AI Strategy",
      "prefix": "ai-strategi-pricing-produk-20260503",
      "slides": [
        {
          "type": "hook",
          "emoji": "🏷️",
          "text": "# Bingung Harga?\n\n## AI Bantu Analisa."
        },
        {
          "type": "content",
          "text": "## \"Range harga [niche] Indonesia. Terendah, tertinggi, sweet spot.\""
        },
        {
          "type": "content",
          "text": "## \"Produk [x]. Target [audience]. Harga yang bersedia dibayar?\""
        },
        {
          "type": "content",
          "text": "## \"3 strategi pricing psychology. Anchoring, charm, bundle.\""
        },
        {
          "type": "content",
          "text": "## \"3 variasi pricing page. Pro kontra masing-masing.\""
        },
        {
          "type": "cta",
          "text": "## SAVE prompt pricing.\n\nComment **\"AIBISNIS\"** buat strategi lanjutan.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Pricing bukan guessing. AI bantu analisa.\n\nComment AIBISNIS 👇\n\n#pricingstrategy #aibisnis"
    },
    {
      "day": 21,
      "date": "2026-05-04",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Konten Jualan Tanpa Terasa Jualan",
      "topic": "Content Selling",
      "prefix": "konten-jualan-tanpa-terasa-jualan-20260504",
      "slides": [
        {
          "type": "hook",
          "emoji": "🧲",
          "text": "# Konten yang Jualan\n\n## Tanpa Terasa Jualan.\n\n4 formula."
        },
        {
          "type": "content",
          "text": "## #1: Value First\n\n90% value, 10%: \"Mau lebih? Link di bio.\""
        },
        {
          "type": "content",
          "text": "## #2: Studi Kasus\n\nCeritakan hasil customer. Jualan lewat orang lain."
        },
        {
          "type": "content",
          "text": "## #3: Behind The Scene\n\nProses bikin produk. Bikin penasaran."
        },
        {
          "type": "content",
          "text": "## #4: Problem Aware\n\nBahas masalah, jangan mention produk. Caption: \"Link di bio.\""
        },
        {
          "type": "cta",
          "text": "## Pilih 1. Coba sekarang.\n\nComment **\"DIGITAL\"** buat contoh lain.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Orang benci dijuali tapi suka beli. Bedanya: cara penyampaian.\n\nComment DIGITAL 👇\n\n#contentselling #softcelling #produkdigital"
    },
    {
      "day": 21,
      "date": "2026-05-04",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "SOP Bisnis 1 Jam Pakai AI",
      "topic": "AI Operations",
      "prefix": "sop-bisnis-1-jam-pakai-ai-20260504",
      "slides": [
        {
          "type": "hook",
          "emoji": "📋",
          "text": "# SOP Bisnis 1 Jam.\n\n## AI. Bisnis jalan tanpa kamu 24/7."
        },
        {
          "type": "content",
          "text": "## Tanpa SOP: semua di kamu. Dengan SOP: scalable."
        },
        {
          "type": "content",
          "text": "## \"SOP content: ide → riset → draft → desain → publish. Tools, durasi.\""
        },
        {
          "type": "content",
          "text": "## \"SOP order: beli → payment → delivery → follow up → testimoni.\""
        },
        {
          "type": "content",
          "text": "## \"SOP CS: response time, template FAQ, escalation, refund.\""
        },
        {
          "type": "cta",
          "text": "## Bikin 1 SOP minggu ini.\n\nComment **\"AIBISNIS\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Tanpa SOP = kamu capek, bisnis stop. Dengan SOP = scalable.\n\nComment AIBISNIS 👇\n\n#sopbisnis #aibisnis #systemize"
    },
    {
      "day": 22,
      "date": "2026-05-05",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Passive Income dari Produk Digital",
      "topic": "Passive Income",
      "prefix": "passive-income-dari-produk-digital-20260505",
      "slides": [
        {
          "type": "hook",
          "emoji": "💤",
          "text": "# Passive Income\n\n## dari Produk Digital.\n\nBisa. Tapi bukan tanpa kerja."
        },
        {
          "type": "content",
          "text": "## Fakta\n\nKerja keras DI AWAL supaya nanti jalan sendiri."
        },
        {
          "type": "content",
          "text": "## Sistem\n\n1. Konten evergreen\n2. LP convert 24/7\n3. Payment auto\n4. Delivery auto"
        },
        {
          "type": "content",
          "text": "## Produk Cocok\n\nEbook, template, preset, course recorded."
        },
        {
          "type": "content",
          "text": "## Timeline\n\nBulan 1-3: Bikin. 4-6: Optimasi. 7+: Autopilot."
        },
        {
          "type": "cta",
          "text": "## SAVE roadmap ini.\n\nComment **\"DIGITAL\"** buat panduan lengkap.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Passive income = sistem dari kerja keras di awal. 3-6 bulan realistis.\n\nComment DIGITAL 👇\n\n#passiveincome #produkdigital #autopilot"
    },
    {
      "day": 22,
      "date": "2026-05-05",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Masa Depan AI untuk Bisnis",
      "topic": "AI Future",
      "prefix": "masa-depan-ai-untuk-bisnis-20260505",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔮",
          "text": "# Masa Depan AI Bisnis.\n\n## Siapin SEKARANG."
        },
        {
          "type": "content",
          "text": "## Trend #1: AI Agents — eksekusi task sendiri."
        },
        {
          "type": "content",
          "text": "## Trend #2: Personalisasi massal per customer."
        },
        {
          "type": "content",
          "text": "## Trend #3: AI-Generated Products. Yang menang = sudut pandang unik."
        },
        {
          "type": "content",
          "text": "## Siapin: master 2-3 tools, personal brand, kurasi, automate."
        },
        {
          "type": "cta",
          "text": "## Masa depan milik yang ADAPT.\n\nComment **\"AIBISNIS\"** kalau siap.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Adapt sekarang = menang besok.\n\nComment AIBISNIS 👇\n\n#futureofai #aibisnis #trendai"
    },
    {
      "day": 23,
      "date": "2026-05-06",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Checklist Sebelum Launch Produk Digital",
      "topic": "Launch Checklist",
      "prefix": "checklist-sebelum-launch-produk-digital-20260506",
      "slides": [
        {
          "type": "hook",
          "emoji": "✅",
          "text": "# Mau Launch?\n\n## Cek 10 hal ini dulu."
        },
        {
          "type": "content",
          "text": "## Pre-Launch 1-5\n\n☐ Test sendiri? ☐ 3 testimoni? ☐ AIDA? ☐ Mobile? ☐ Payment?"
        },
        {
          "type": "content",
          "text": "## Pre-Launch 6-10\n\n☐ Mockup? ☐ Caption ready? ☐ Harga valid? ☐ Email ready? ☐ Plan H-7?"
        },
        {
          "type": "content",
          "text": "## Post-Launch\n\n☐ Follow up H+1 ☐ Testimoni H+3 ☐ Evaluasi H+7 ☐ Iterasi"
        },
        {
          "type": "content",
          "text": "## Mindset\n\n70% ready? Launch. Iterasi sambil jalan."
        },
        {
          "type": "cta",
          "text": "## Screenshot checklist ini.\n\nComment **\"DIGITAL\"** kalau lagi siapin.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Checklist buat memastikan, bukan alasan tunda.\n\nComment DIGITAL 👇\n\n#launchchecklist #produkdigital #tipsbisnis"
    },
    {
      "day": 23,
      "date": "2026-05-06",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Proposal Bisnis Professional AI",
      "topic": "AI Business Docs",
      "prefix": "proposal-bisnis-professional-ai-20260506",
      "slides": [
        {
          "type": "hook",
          "emoji": "📄",
          "text": "# Proposal Professional\n\n## 30 Menit. AI."
        },
        {
          "type": "content",
          "text": "## \"Outline proposal [tujuan]. Exec summary, problem, solution, timeline, budget, ROI.\""
        },
        {
          "type": "content",
          "text": "## \"Exec summary 1 paragraf. Value proposition + outcome. 100 kata.\""
        },
        {
          "type": "content",
          "text": "## Per section: \"Elaborasi [section] dengan data, timeline, deliverables.\""
        },
        {
          "type": "content",
          "text": "## \"Review: grammar, flow, tone, transisi. Professional.\""
        },
        {
          "type": "cta",
          "text": "## SAVE workflow.\n\nComment **\"AIBISNIS\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Proposal profesional = deal jutaan. 30 menit dengan AI.\n\nComment AIBISNIS 👇\n\n#proposal #aibisnis #professional"
    },
    {
      "day": 24,
      "date": "2026-05-07",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Handle Refund Tanpa Kehilangan Customer",
      "topic": "Customer Service",
      "prefix": "handle-refund-tanpa-kehilangan-customer-20260507",
      "slides": [
        {
          "type": "hook",
          "emoji": "🤝",
          "text": "# Ada yang Refund?\n\n## Jangan panik.\n\nHandle dengan elegan."
        },
        {
          "type": "content",
          "text": "## Mindset\n\nRefund normal. 1-5% itu SEHAT."
        },
        {
          "type": "content",
          "text": "## Step 1: Tanya Alasan\n\n90% kasih feedback jujur. Ini emas."
        },
        {
          "type": "content",
          "text": "## Step 2: Proses Cepat\n\n24 jam. Fast refund = trust naik."
        },
        {
          "type": "content",
          "text": "## Step 3: Tawarkan Alternatif\n\n30% pilih alternatif daripada refund."
        },
        {
          "type": "cta",
          "text": "## SAVE SOP refund ini.\n\nComment **\"DIGITAL\"** buat template CS.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Handle refund baik → cerita positif. Buruk → juga cerita.\n\nComment DIGITAL 👇\n\n#customerservice #refund #brandreputation"
    },
    {
      "day": 24,
      "date": "2026-05-07",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Social Media Posting Sedikit Reach Besar",
      "topic": "AI Social Media",
      "prefix": "ai-social-media-posting-sedikit-reach-be-20260507",
      "slides": [
        {
          "type": "hook",
          "emoji": "📱",
          "text": "# Posting Sedikit.\n\n## Reach Lebih Besar.\n\nAI optimize, bukan spam."
        },
        {
          "type": "content",
          "text": "## Quality > Quantity\n\n5 berkualitas > 20 asal jadi."
        },
        {
          "type": "content",
          "text": "## \"Data 10 post: [data]. Perform terbaik? Kenapa? Pola?\""
        },
        {
          "type": "content",
          "text": "## \"5 ide baru pola serupa winner. Variasi angle.\""
        },
        {
          "type": "content",
          "text": "## \"Data engagement. Waktu terbaik? Jadwal 5x/minggu.\""
        },
        {
          "type": "cta",
          "text": "## Work smarter.\n\nComment **\"AIBISNIS\"** buat strategi.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Analisa apa yang works, bikin lebih banyak SEJENIS. Data > feeling.\n\nComment AIBISNIS 👇\n\n#socialmediamarketing #aicontent #worksmarter"
    },
    {
      "day": 25,
      "date": "2026-05-08",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Product Ladder Strategy Omzet Berlipat",
      "topic": "Product Strategy",
      "prefix": "product-ladder-strategy-omzet-berlipat-20260508",
      "slides": [
        {
          "type": "hook",
          "emoji": "🪜",
          "text": "# Jangan Cuma 1 Produk.\n\n## PRODUCT LADDER.\n\nOmzet berlipat."
        },
        {
          "type": "content",
          "text": "## Apa itu\n\nJenjang murah → mahal. Trust naik → level naik."
        },
        {
          "type": "content",
          "text": "## Contoh\n\n🆓 Lead magnet → 💰 Ebook 49rb → 💰💰 Bundle 149rb → 💰💰💰 Course 499rb → 💰💰💰💰 Mentoring 1.5jt+"
        },
        {
          "type": "content",
          "text": "## Kenapa Works\n\n1 customer = total Rp2jt+ vs cuma Rp49rb."
        },
        {
          "type": "content",
          "text": "## Mulai\n\n2 level dulu: gratis + 1 berbayar. Expand tiap 2-3 bulan."
        },
        {
          "type": "cta",
          "text": "## Susun ladder kamu.\n\nComment **\"DIGITAL\"** buat contoh per niche.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "1 produk = 1 stream. Ladder = multiple streams dari 1 audience.\n\nComment DIGITAL 👇\n\n#productladder #revenuestrategy #produkdigital"
    },
    {
      "day": 25,
      "date": "2026-05-08",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Chatbot Sederhana untuk Bisnis",
      "topic": "AI Chatbot",
      "prefix": "ai-chatbot-sederhana-untuk-bisnis-20260508",
      "slides": [
        {
          "type": "hook",
          "emoji": "🤖",
          "text": "# AI Chatbot Bisnis.\n\n## Tanpa Coding. 24/7."
        },
        {
          "type": "content",
          "text": "## Kenapa: customer jam 2 pagi, pertanyaan sama, gak bisa 24 jam."
        },
        {
          "type": "content",
          "text": "## ManyChat (IG): keyword trigger DM. Free plan."
        },
        {
          "type": "content",
          "text": "## Chatbase: upload FAQ → chatbot otomatis. Embed website."
        },
        {
          "type": "content",
          "text": "## Tips: mulai FAQ 10-15, test dulu, option \"chat manusia\"."
        },
        {
          "type": "cta",
          "text": "## Setup minggu ini.\n\nComment **\"AIBISNIS\"** buat tutorial.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Bisnis 1 orang pun butuh chatbot. ManyChat free, 30 menit setup.\n\nComment AIBISNIS 👇\n\n#chatbot #aibisnis #automation"
    },
    {
      "day": 26,
      "date": "2026-05-09",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Story Selling Jualan Lewat IG Story",
      "topic": "Story Marketing",
      "prefix": "story-selling-jualan-lewat-ig-story-20260509",
      "slides": [
        {
          "type": "hook",
          "emoji": "📱",
          "text": "# Jualan Lewat Story\n\n## Tanpa Terasa Jualan.\n\nFormula 5-slide."
        },
        {
          "type": "content",
          "text": "## Slide 1: Hook\n\n\"Pernah gak ngerasa [masalah]?\" Bikin ngangguk."
        },
        {
          "type": "content",
          "text": "## Slide 2-3: Cerita\n\n\"Aku dulu juga.\" Storytelling > hard selling."
        },
        {
          "type": "content",
          "text": "## Slide 4: Hasil\n\nScreenshot, angka. Proof > promise."
        },
        {
          "type": "content",
          "text": "## Slide 5: Soft CTA\n\n\"Link di bio kalau mau.\" + Polling."
        },
        {
          "type": "cta",
          "text": "## Coba hari ini.\n\nComment **\"DIGITAL\"** buat template story.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Story = paling personal = lebih convert.\n\nComment DIGITAL 👇\n\n#storyselling #instagramstory #jualanonline"
    },
    {
      "day": 26,
      "date": "2026-05-09",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Ads Copy yang Convert",
      "topic": "AI Advertising",
      "prefix": "ai-ads-copy-yang-convert-20260509",
      "slides": [
        {
          "type": "hook",
          "emoji": "📢",
          "text": "# Ads Copy Convert.\n\n## AI. 3 formula."
        },
        {
          "type": "content",
          "text": "## #1 PAS: \"Problem [x]. Agitate [dampak]. Solve [produk]. 100 kata.\""
        },
        {
          "type": "content",
          "text": "## #2 BAB: \"Before [kondisi]. After [hasil]. Bridge [produk].\""
        },
        {
          "type": "content",
          "text": "## #3 Social Proof: \"Testimoni/hasil → offer → CTA. 80 kata.\""
        },
        {
          "type": "content",
          "text": "## Generate 5 variasi, test Meta Ads, budget kecil, matikan CTR rendah."
        },
        {
          "type": "cta",
          "text": "## SAVE 3 formula.\n\nComment **\"AIBISNIS\"** buat template ads.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Ads copy = structure, bukan kreatif. Formula + AI + data = winner.\n\nComment AIBISNIS 👇\n\n#adscopy #metaads #aicopywriting"
    },
    {
      "day": 27,
      "date": "2026-05-10",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Repurpose 1 Konten Jadi 10 Format",
      "topic": "Content Repurpose",
      "prefix": "repurpose-1-konten-jadi-10-format-20260510",
      "slides": [
        {
          "type": "hook",
          "emoji": "♻️",
          "text": "# 1 Konten → 10+ Format.\n\n## Kerja sekali, posting berkali-kali."
        },
        {
          "type": "content",
          "text": "## Horizontal\n\nCarousel → Reels → Thread → Story → LinkedIn."
        },
        {
          "type": "content",
          "text": "## Vertikal\n\n1 carousel (5 tips) → tiap tip = 1 carousel baru."
        },
        {
          "type": "content",
          "text": "## Bonus: Jadi Produk\n\n10 carousel → ebook. 20 carousel → course."
        },
        {
          "type": "content",
          "text": "## Tips\n\nKonten gratis = draft produk berbayar."
        },
        {
          "type": "cta",
          "text": "## SAVE strategi ini.\n\nComment **\"DIGITAL\"** buat SOP repurpose.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "1 konten bagus = 10+ format. Bahkan jadi produk digital.\n\nComment DIGITAL 👇\n\n#contentrepurpose #worksmarter #contentstrategy"
    },
    {
      "day": 27,
      "date": "2026-05-10",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Bikin Online Course",
      "topic": "AI Course Creation",
      "prefix": "ai-bikin-online-course-20260510",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎓",
          "text": "# Online Course Pakai AI.\n\n## Nol sampai launch."
        },
        {
          "type": "content",
          "text": "## Step 1: \"Curriculum [topik]. [x] modul. Judul, objective, 3-5 lesson.\""
        },
        {
          "type": "content",
          "text": "## Step 2: \"Script video 5-10 menit. Hook, 3 poin, demo, homework.\""
        },
        {
          "type": "content",
          "text": "## Step 3: \"Worksheet [lesson]. Refleksi + action steps.\""
        },
        {
          "type": "content",
          "text": "## Step 4: \"Sales page course [nama]. Headline, preview, benefits, FAQ, pricing.\""
        },
        {
          "type": "content",
          "text": "## Week 1: curriculum. Week 2: record. Week 3: edit. Week 4: launch."
        },
        {
          "type": "cta",
          "text": "## SAVE roadmap.\n\nComment **\"AIBISNIS\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Course = upgrade ebook. Harga lebih tinggi, value lebih dalam.\n\nComment AIBISNIS 👇\n\n#onlinecourse #aibisnis #edukasionline"
    },
    {
      "day": 28,
      "date": "2026-05-11",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Scaling dari 1 Juta ke 10 Juta per Bulan",
      "topic": "Scaling",
      "prefix": "scaling-dari-1-juta-ke-10-juta-per-bulan-20260511",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔥",
          "text": "# Rp1 Juta → Rp10 Juta/Bulan\n\n## Produk Digital.\n\nRoadmap."
        },
        {
          "type": "content",
          "text": "## Phase 1: 0 → 1jt\n\n1 produk, warm audience. MULAI."
        },
        {
          "type": "content",
          "text": "## Phase 2: 1jt → 3jt\n\nTambah produk, email list, funnel. SISTEM."
        },
        {
          "type": "content",
          "text": "## Phase 3: 3jt → 5jt\n\nBundle, optimasi LP, upsell. OPTIMASI."
        },
        {
          "type": "content",
          "text": "## Phase 4: 5jt → 10jt\n\nPaid ads, affiliate, product ladder. SCALE."
        },
        {
          "type": "content",
          "text": "## Timeline: 8-14 bulan. Realistis."
        },
        {
          "type": "cta",
          "text": "## Kamu phase berapa?\n\nComment **\"DIGITAL\"** ceritain progress.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Scaling bertahap. Fokus phase sekarang, execute, naik.\n\nComment DIGITAL 👇\n\n#scalingbisnis #produkdigital #roadmap"
    },
    {
      "day": 28,
      "date": "2026-05-11",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Prompt Chaining Teknik Advanced",
      "topic": "Advanced AI",
      "prefix": "prompt-chaining-teknik-advanced-20260511",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔗",
          "text": "# Prompt Chaining.\n\n## Teknik Advanced.\n\nOutput 10x bagus."
        },
        {
          "type": "content",
          "text": "## Konsep\n\nOutput prompt 1 → input prompt 2 → dst. Setiap step bangun di atas sebelumnya."
        },
        {
          "type": "content",
          "text": "## Contoh Konten\n\nRiset pain point → outline → tulis slides → bikin caption."
        },
        {
          "type": "content",
          "text": "## Contoh Produk\n\nAnalisa gap → design produk → outline → tulis → sales page."
        },
        {
          "type": "content",
          "text": "## Kenapa Works\n\nContext dari step sebelumnya. Lebih fokus. Kualitas tinggi."
        },
        {
          "type": "cta",
          "text": "## SAVE teknik ini. Game changer.\n\nComment **\"AIBISNIS\"** buat templates.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Prompt chaining = power user level. Output jauh lebih berkualitas.\n\nComment AIBISNIS 👇\n\n#promptchaining #advancedai #aimastery"
    },
    {
      "day": 29,
      "date": "2026-05-12",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Guarantee Naikin Conversion Rate",
      "topic": "Sales Conversion",
      "prefix": "guarantee-naikin-conversion-rate-20260512",
      "slides": [
        {
          "type": "hook",
          "emoji": "🛡️",
          "text": "# Naikin Conversion\n\n## Tanpa Ubah Harga.\n\nTambahin GUARANTEE."
        },
        {
          "type": "content",
          "text": "## Kenapa Gak Beli\n\nBukan gak tertarik. TAKUT. Guarantee hilangkan takut."
        },
        {
          "type": "content",
          "text": "## #1: Money Back\n\n\"Gak puas? 100% uang kembali.\" Refund rate cuma 2-5%."
        },
        {
          "type": "content",
          "text": "## #2: Result Based\n\n\"30 hari gak ada hasil? Uang kembali.\""
        },
        {
          "type": "content",
          "text": "## #3: Bonus Guarantee\n\n\"Gak puas? Tetap simpan bonusnya.\""
        },
        {
          "type": "cta",
          "text": "## Tambahkan guarantee HARI INI.\n\nComment **\"DIGITAL\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Guarantee = investasi di conversion. Refund rate jauh lebih rendah dari yang ditakutkan.\n\nComment DIGITAL 👇\n\n#conversionrate #guarantee #produkdigital"
    },
    {
      "day": 29,
      "date": "2026-05-12",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Daily Routine Bisnis Owner",
      "topic": "AI Productivity",
      "prefix": "ai-daily-routine-bisnis-owner-20260512",
      "slides": [
        {
          "type": "hook",
          "emoji": "☀️",
          "text": "# AI Daily Routine.\n\n## Workflow Harian.\n\nLebih produktif."
        },
        {
          "type": "content",
          "text": "## Pagi 15 menit: \"Review to-do. Prioritaskan by impact.\""
        },
        {
          "type": "content",
          "text": "## Siang 1 jam: Draft konten AI, edit, schedule."
        },
        {
          "type": "content",
          "text": "## Sore 30 menit: Riset, brainstorm, analisa data."
        },
        {
          "type": "content",
          "text": "## Malam 15 menit: \"Review progress. Improve besok? Automate?\""
        },
        {
          "type": "cta",
          "text": "## Coba besok.\n\nComment **\"AIBISNIS\"** buat daily planner.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI = strategic partner sepanjang hari. Planning sampai review.\n\nComment AIBISNIS 👇\n\n#dailyroutine #aiproductivity #aibisnis"
    },
    {
      "day": 30,
      "date": "2026-05-13",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Review 30 Hari Produk Digital",
      "topic": "Reflection",
      "prefix": "review-30-hari-produk-digital-20260513",
      "slides": [
        {
          "type": "hook",
          "emoji": "🏆",
          "text": "# 30 Hari Belajar Produk Digital.\n\n## Apa yang Kamu Pelajari?"
        },
        {
          "type": "content",
          "text": "## Bisnis REAL\n\nButuh strategi, eksekusi, kesabaran. Hasilnya luar biasa."
        },
        {
          "type": "content",
          "text": "## 5 Hal Penting\n\n1. Validasi sebelum bikin\n2. LP > produk\n3. Distribusi > kualitas\n4. Konsisten > sempurna\n5. Customer > follower"
        },
        {
          "type": "content",
          "text": "## Next Step\n\nBelum mulai → mulai. Sudah → optimize. Sudah optimize → scale."
        },
        {
          "type": "content",
          "text": "## Perjalanan dimulai dari SINI."
        },
        {
          "type": "cta",
          "text": "## Comment **\"DIGITAL\"** kalau bermanfaat.\n\nShare ke temen.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "30 konten. Validasi sampai scaling. Sekarang: EKSEKUSI.\n\nComment DIGITAL 👇\n\n#produkdigital #30daychallenge #reflection"
    },
    {
      "day": 30,
      "date": "2026-05-13",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "30 Hari Pakai AI untuk Bisnis",
      "topic": "AI Reflection",
      "prefix": "30-hari-pakai-ai-untuk-bisnis-20260513",
      "slides": [
        {
          "type": "hook",
          "emoji": "🏆",
          "text": "# 30 Hari AI Bisnis.\n\n## Apa yang Berubah?"
        },
        {
          "type": "content",
          "text": "## Sebelum: konten 3 jam, copy 1 hari, riset berhari-hari."
        },
        {
          "type": "content",
          "text": "## Setelah: konten 30 menit, copy 30 menit, riset 15 menit."
        },
        {
          "type": "content",
          "text": "## AI GAK bisa gantikan: story, relationship, decision, kreativitas."
        },
        {
          "type": "content",
          "text": "## Next: master 2-3 tools, SOP, automate, fokus high-impact."
        },
        {
          "type": "cta",
          "text": "## Comment **\"AIBISNIS\"** kalau bermanfaat.\n\nShare ke temen.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "30 tips AI. Prompt engineering sampai automation. Sekarang: EKSEKUSI.\n\nComment AIBISNIS 👇\n\n#aibisnis #30daychallenge #reflection"
    }
  ]
}
export default DATA;

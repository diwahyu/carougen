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
  "duration": "30 hari (Bulan 2: 14 Mei - 12 Juni 2026)",
  "schedule": "2x/hari (Pagi: Digital Product, Malam: AI Bisnis)",
  "ctaKeywords": {
    "digitalProduct": "DIGITAL",
    "aiBisnis": "AIBISNIS"
  },
  "content": [
    {
      "day": 1,
      "date": "2026-05-14",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Aku Hampir Bangkrut Gara-Gara 1 Kesalahan Ini",
      "topic": "Mindset",
      "prefix": "aku-hampir-bangkrut-gara-gara-1-kesalahan-ini-20260514",
      "slides": [
        {
          "type": "hook",
          "emoji": "😱",
          "text": "# Aku Hampir Bangkrut.\n\n## Gara-gara 1 kesalahan ini.\n\nDan kamu mungkin lagi lakuin hal yang sama."
        },
        {
          "type": "content",
          "text": "## Ceritanya\n\nAku bikin produk digital yang aku pikir \"pasti laku.\"\n\nInvestasi waktu 2 bulan.\nBiaya desain, ads, tools.\n\nHasilnya?"
        },
        {
          "type": "content",
          "text": "## 3 pembeli.\n\nDalam 2 minggu.\n\nTotal revenue: Rp147.000.\nTotal biaya: Rp2.800.000.\n\n**Minus Rp2.6 juta.**"
        },
        {
          "type": "content",
          "text": "## Kesalahan Fatal-nya\n\nAku bikin produk berdasarkan APA YANG AKU MAU.\n\nBukan apa yang MARKET butuhkan.\n\nGak pernah validasi. Gak pernah tanya audience."
        },
        {
          "type": "content",
          "text": "## Yang Aku Lakuin Setelahnya\n\n1. Stop. Mundur. Tanya audience langsung.\n2. Bikin polling: \"Masalah terbesar kamu apa?\"\n3. Bikin produk berdasarkan JAWABAN mereka.\n\nHasilnya? 47 pembeli di minggu pertama."
        },
        {
          "type": "content",
          "text": "## Pelajaran\n\nJangan jatuh cinta sama IDE kamu.\n\nJatuh cinta sama MASALAH customer kamu.\n\nItu yang dibayar."
        },
        {
          "type": "cta",
          "text": "## Kamu pernah bikin produk yang gak laku?\n\nComment **\"DIGITAL\"** kalau mau tau cara validasi yang bener.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Ini cerita yang aku malu ceritain. Tapi justru ini pelajaran paling mahal yang pernah aku dapat.\n\nProduk bagus tapi gak ada yang butuh = produk gagal.\nProduk biasa tapi solve masalah nyata = laku keras.\n\nComment DIGITAL kalau mau tau cara validasi yang bener 👇\n\n#produkdigital #bisnisdigital #gagalbelajar #mindsetbisnis"
    },
    {
      "day": 1,
      "date": "2026-05-14",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Aku Kasih AI Tugas yang Sama 5 Cara Berbeda — Hasilnya Bikin Kaget",
      "topic": "AI Experiment",
      "prefix": "aku-kasih-ai-tugas-yang-sama-5-cara-berbeda---hasi-20260514",
      "slides": [
        {
          "type": "hook",
          "emoji": "🤯",
          "text": "# Aku kasih AI TUGAS YANG SAMA.\n\n## 5 cara berbeda.\n\nHasilnya? Beda drastis. Yang terakhir bikin kaget."
        },
        {
          "type": "content",
          "text": "## Eksperimen\n\nTugas: \"Buatkan caption IG untuk produk ebook.\"\n\n5 prompt berbeda. 1 tugas yang sama.\n\nMari lihat hasilnya."
        },
        {
          "type": "content",
          "text": "## Prompt 1 (Lazy): \"Buatkan caption IG.\"\n\nHasil: generic, membosankan, bisa buat produk apapun.\n\nScore: 2/10"
        },
        {
          "type": "content",
          "text": "## Prompt 3 (Good): \"Kamu copywriter expert. Buatkan caption untuk ebook [judul] target [audience]. Hook yang bikin berhenti scroll. Max 150 kata.\"\n\nHasil: spesifik, ada hook, tapi masih bisa lebih baik.\n\nScore: 7/10"
        },
        {
          "type": "content",
          "text": "## Prompt 5 (Expert): \"Kamu copywriter 10 tahun di Indonesia. Ini 3 contoh caption terbaik aku: [contoh]. Buatkan caption untuk [produk] target [audience]. Pakai formula PAS. Hook 1 kalimat, max 100 kata. Kasih 3 variasi.\"\n\nHasil: seolah ditulis profesional.\n\nScore: 9.5/10"
        },
        {
          "type": "content",
          "text": "## Pelajaran\n\nAI yang sama.\nTugas yang sama.\nHasil? BEDA 5x.\n\n👉 Kualitas prompt = kualitas output.\nMakin spesifik = makin powerful."
        },
        {
          "type": "cta",
          "text": "## SAVE perbandingan ini.\n\nComment **\"AIBISNIS\"** buat prompt template expert-level.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Sama-sama pakai ChatGPT. Tapi hasilnya bisa beda langit dan bumi. Rahasianya? PROMPT.\n\nComment AIBISNIS 👇\n\n#promptengineering #aiexperiment #chatgpt #aibisnis"
    },
    {
      "day": 2,
      "date": "2026-05-15",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Pembeli Pertama Aku Minta Refund dan Ini yang Terjadi",
      "topic": "Customer Story",
      "prefix": "pembeli-pertama-aku-minta-refund-dan-ini-yang-terj-20260515",
      "slides": [
        {
          "type": "hook",
          "emoji": "💔",
          "text": "# Pembeli pertama aku\n\n## minta REFUND.\n\nDan itu adalah hal terbaik yang pernah terjadi."
        },
        {
          "type": "content",
          "text": "## Kronologi\n\nLaunch produk pertama. Excited banget.\n\n1 jam kemudian: ada notif pembelian pertama!\n\n3 jam kemudian: DM masuk.\n\n\"Kak, mau refund ya.\""
        },
        {
          "type": "content",
          "text": "## Rasanya?\n\nKayak ditampar.\n\nProduk yang aku bikin sepenuh hati.\nPembeli pertama.\nDan langsung minta balik."
        },
        {
          "type": "content",
          "text": "## Tapi Aku Tanya Kenapa\n\n\"Isinya bagus kak, tapi aku bingung mulai dari mana. Gak ada step-by-step yang jelas.\"\n\n👉 Feedback ini mengubah SEGALANYA."
        },
        {
          "type": "content",
          "text": "## Yang Aku Lakuin\n\n- Refund langsung. Minta maaf.\n- Rewrite seluruh ebook: tambahin framework step-by-step.\n- Kasih akses gratis ke versi baru.\n\nHasilnya? Dia jadi customer paling loyal."
        },
        {
          "type": "content",
          "text": "## Pelajaran\n\nRefund bukan akhir.\n\nRefund adalah **feedback termahal** yang bisa kamu dapat.\n\nDengarkan. Fix. Grow."
        },
        {
          "type": "cta",
          "text": "## Pernah dapat feedback yang menyakitkan tapi mengubah bisnis kamu?\n\nComment **\"DIGITAL\"** 👇\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Kalau pembeli pertamamu minta refund, jangan baper. Tanya kenapa.\n\nFeedback negatif > pujian kosong.\n\nComment DIGITAL 👇\n\n#customerservice #produkdigital #feedbackloop #growthmindset"
    },
    {
      "day": 2,
      "date": "2026-05-15",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Bikin Aku Kehilangan Rp3 Juta — Ini Pelajarannya",
      "topic": "AI Mistakes",
      "prefix": "ai-bikin-aku-kehilangan-rp3-juta---ini-pelajaranny-20260515",
      "slides": [
        {
          "type": "hook",
          "emoji": "💸",
          "text": "# AI bikin aku RUGI Rp3 juta.\n\n## Bukan salah AI-nya.\n\nSalah CARA aku pakainya."
        },
        {
          "type": "content",
          "text": "## Ceritanya\n\nAku bikin sales page 100% pakai AI.\nGak edit. Gak tambahin personal story.\nLangsung publish. Langsung ads.\n\nBudget ads: Rp3 juta.\nPembeli: 0."
        },
        {
          "type": "content",
          "text": "## Kenapa Gagal Total\n\nCopy-nya GENERIC.\nTerasa ditulis robot.\nGak ada personality.\nGak ada cerita real.\n\nOrang bisa NGERASAIN kalau konten itu kosong."
        },
        {
          "type": "content",
          "text": "## Pelajaran Mahal\n\nAI = draft pertama. BUKAN produk akhir.\n\nKamu HARUS:\n- Edit setiap output\n- Tambahin pengalaman personal\n- Sesuaikan dengan voice kamu\n- Review minimal 2x sebelum publish"
        },
        {
          "type": "content",
          "text": "## Setelah Fix\n\nRewrite sales page:\n- 60% AI, 40% personal story + data real\n- Tambahin studi kasus\n- Garansi\n\nHasil: 31 pembeli dari budget ads yang SAMA.\n\n👉 Beda di eksekusi, bukan di tools."
        },
        {
          "type": "cta",
          "text": "## Jangan ulangi kesalahan aku.\n\nComment **\"AIBISNIS\"** buat checklist sebelum publish AI content.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Rp3 juta hilang gara-gara malas edit output AI. Pelajaran paling mahal tentang AI yang pernah aku dapat.\n\nComment AIBISNIS 👇\n\n#aimistakes #aibisnis #pelajaranbisnis #chatgpt"
    },
    {
      "day": 3,
      "date": "2026-05-16",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Jangan Bikin Ebook Lagi Kalau Kamu Masih Lakuin Ini",
      "topic": "Product Quality",
      "prefix": "jangan-bikin-ebook-lagi-kalau-kamu-masih-lakuin-in-20260516",
      "slides": [
        {
          "type": "hook",
          "emoji": "🛑",
          "text": "# STOP.\n\n## Jangan bikin ebook lagi\n\nkalau kamu masih lakuin ini."
        },
        {
          "type": "content",
          "text": "## Kesalahan #1: Isinya Cuma Teori\n\nOrang beli ebook buat SOLUSI.\nBukan buat baca textbook.\n\nKalau isinya bisa di-Google gratis → kenapa harus bayar?"
        },
        {
          "type": "content",
          "text": "## Kesalahan #2: Gak Ada Framework\n\nOrang mau tau: \"Aku harus ngapain PERTAMA?\"\n\nTanpa framework = pembaca bingung = review jelek = gak ada repeat buyer."
        },
        {
          "type": "content",
          "text": "## Kesalahan #3: Copy-Paste Dari AI\n\n100% AI tanpa editing = ebook yang terasa KOSONG.\n\nPembaca bisa ngerasain.\n\n👉 AI itu draft. Kamu yang kasih pengalaman, opini, dan jiwa."
        },
        {
          "type": "content",
          "text": "## Kesalahan #4: Gak Ada Studi Kasus\n\nTeori: \"Bangun email list.\"\nStudi kasus: \"Aku bangun 500 subscriber dalam 30 hari. Ini caranya.\"\n\nMana yang lebih meyakinkan?"
        },
        {
          "type": "content",
          "text": "## Ebook yang LAKU:\n\n✅ Solve 1 masalah spesifik\n✅ Framework step-by-step\n✅ Studi kasus + contoh real\n✅ Personal experience\n✅ Actionable — bisa dipraktekin HARI INI"
        },
        {
          "type": "cta",
          "text": "## Cek ebook kamu. Ada berapa kesalahan?\n\nComment **\"DIGITAL\"** kalau mau checklist ebook yang laku.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Ebook yang jelek merusak reputasi. Ebook yang bagus jadi salesman 24/7.\n\nPilih mau yang mana.\n\nComment DIGITAL 👇\n\n#ebook #produkdigital #qualitycontent #bisnisdigital"
    },
    {
      "day": 3,
      "date": "2026-05-16",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "System Prompt — Rahasia AI Expert yang Gak Pernah Dishare",
      "topic": "System Prompt",
      "prefix": "system-prompt---rahasia-ai-expert-yang-gak-pernah--20260516",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔐",
          "text": "# Ada 1 fitur AI\n\n## yang 99% orang GAK PERNAH pakai.\n\nPadahal ini yang bikin output 10x better."
        },
        {
          "type": "content",
          "text": "## Namanya: System Prompt\n\nInstruksi yang kamu kasih ke AI SEBELUM percakapan dimulai.\n\nIni kayak \"job description\" untuk AI.\n\n👉 Tanpa ini = AI ngasal. Dengan ini = AI fokus."
        },
        {
          "type": "content",
          "text": "## Contoh System Prompt untuk Copywriter\n\n\"Kamu adalah copywriter senior Indonesia. Speciality: produk digital. Gaya nulis: casual tapi meyakinkan. Selalu pakai framework PAS atau AIDA. Output dalam Bahasa Indonesia. Hindari bahasa formal.\"\n\n👉 Set SEKALI, berlaku untuk seluruh percakapan."
        },
        {
          "type": "content",
          "text": "## Contoh: Content Strategist\n\n\"Kamu content strategist untuk brand @dinarww. Niche: produk digital + AI bisnis. Audience: 20-35 tahun, bisnis owner pemula. Tone: blak-blakan, praktikal, sedikit humor. Format output: carousel slides.\""
        },
        {
          "type": "content",
          "text": "## Cara Pakai\n\nChatGPT: tulis di awal percakapan atau pakai Custom Instructions.\nClaude: tulis di Project Knowledge atau awal percakapan.\n\n👉 Set sekali. Output konsisten setiap saat."
        },
        {
          "type": "content",
          "text": "## Before vs After System Prompt\n\nTanpa: output random, gak konsisten, sering salah tone.\nDengan: output fokus, konsisten, sesuai brand.\n\n👉 Ini bedanya amateur vs pro dalam pakai AI."
        },
        {
          "type": "cta",
          "text": "## SAVE ini. Bikin system prompt kamu SEKARANG.\n\nComment **\"AIBISNIS\"** buat template system prompt per kebutuhan.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "System prompt = senjata rahasia AI power user. Set sekali, output konsisten selamanya.\n\nComment AIBISNIS 👇\n\n#systemprompt #promptengineering #aibisnis #chatgpt"
    },
    {
      "day": 4,
      "date": "2026-05-17",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Aku Analisa 50 Landing Page dan Ini Pola yang Aku Temukan",
      "topic": "Landing Page",
      "prefix": "aku-analisa-50-landing-page-dan-ini-pola-yang-aku--20260517",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔬",
          "text": "# Aku analisa 50 landing page.\n\n## Yang laku vs yang gak laku.\n\nIni POLA yang aku temukan."
        },
        {
          "type": "content",
          "text": "## Yang Gagal: Mulai Dari DIRI SENDIRI\n\n\"Hai, aku [nama]. Aku udah pengalaman...\"\n\nPembaca: \"Terus apa hubungannya sama masalah aku?\"\n\n👉 Gak ada yang peduli siapa kamu. Mereka peduli masalah MEREKA."
        },
        {
          "type": "content",
          "text": "## Yang Sukses: Mulai Dari MASALAH PEMBACA\n\n\"Kamu udah coba jualan online tapi gak ada yang beli?\"\n\nPembaca: \"Iya! Itu aku banget!\"\n\n👉 Hook di masalah = instant connection."
        },
        {
          "type": "content",
          "text": "## Pola #2: Angka Spesifik > Klaim Umum\n\n❌ \"Banyak orang sudah terbantu\"\n✅ \"347 orang sudah pakai framework ini\"\n\nAngka spesifik = credible. Klaim umum = iklan murahan."
        },
        {
          "type": "content",
          "text": "## Pola #3: CTA Muncul 3x\n\nLP yang convert tinggi punya CTA di:\n- Setelah headline\n- Setelah testimoni\n- Di paling bawah\n\nJangan cuma 1x. Orang butuh multiple nudge."
        },
        {
          "type": "content",
          "text": "## Pola #4: Social Proof Dekat CTA\n\nTestimoni TEPAT di atas tombol beli.\n\nBaca testimoni → yakin → klik beli.\n\nJangan taruh testimoni di atas, CTA di bawah. Terlalu jauh."
        },
        {
          "type": "cta",
          "text": "## SAVE pola ini. Apply ke LP kamu.\n\nComment **\"DIGITAL\"** buat checklist LP yang convert.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Pola ini konsisten di 50 LP yang aku analisa. Yang laku selalu mulai dari masalah pembaca, bukan dari diri sendiri.\n\nComment DIGITAL 👇\n\n#landingpage #conversionrate #produkdigital #copywriting"
    },
    {
      "day": 4,
      "date": "2026-05-17",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Voice Cloning — Bikin Konten Audio Tanpa Rekam Sendiri",
      "topic": "AI Audio",
      "prefix": "ai-voice-cloning---bikin-konten-audio-tanpa-rekam--20260517",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎙️",
          "text": "# Suara kamu.\n\n## Ngomong 24 jam tanpa kamu ngomong.\n\nAI voice cloning. Dan ini LEGAL."
        },
        {
          "type": "content",
          "text": "## Apa itu Voice Cloning?\n\nUpload 1-3 menit rekaman suara kamu.\nAI clone suaramu.\nSekarang AI bisa \"ngomong\" pakai suaramu.\n\n👉 Untuk konten KAMU. Bukan orang lain."
        },
        {
          "type": "content",
          "text": "## Tool: ElevenLabs\n\n1. Sign up (free plan: 10K karakter/bulan)\n2. Upload rekaman suara 1-3 menit\n3. Ketik teks → AI generate audio pakai suaramu\n\n👉 30 detik teks = 30 detik audio. Instant."
        },
        {
          "type": "content",
          "text": "## Use Case untuk Bisnis\n\n- Voiceover untuk Reels\n- Narasi ebook (audiobook)\n- Welcome message di course\n- Podcast intro/outro\n- Customer greeting di chatbot\n\n👉 Content audio tanpa rekam ulang."
        },
        {
          "type": "content",
          "text": "## Tips Kualitas\n\n- Rekam di ruangan sepi\n- Bicara natural, jangan baca\n- Upload sample yang bervariasi (serius + casual)\n- Test dengan kalimat pendek dulu\n\n👉 Makin bagus sample = makin mirip hasilnya."
        },
        {
          "type": "cta",
          "text": "## Coba clone suaramu HARI INI.\n\nComment **\"AIBISNIS\"** buat tutorial lengkap voice cloning.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Suaramu. 24/7. Tanpa cape. AI voice cloning bisa bikin konten audio jadi effortless.\n\nComment AIBISNIS 👇\n\n#voicecloning #elevenlabs #aibisnis #contentcreation"
    },
    {
      "day": 5,
      "date": "2026-05-18",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Strategi Harga Rp49rb vs Rp499rb — Mana yang Lebih Untung",
      "topic": "Pricing Deep Dive",
      "prefix": "strategi-harga-rp49rb-vs-rp499rb---mana-yang-lebih-20260518",
      "slides": [
        {
          "type": "hook",
          "emoji": "🤯",
          "text": "# Rp49.000 vs Rp499.000\n\n## Mana yang lebih UNTUNG?\n\nJawabannya bakal bikin kamu mikir ulang."
        },
        {
          "type": "content",
          "text": "## Skenario A: Harga Rp49rb\n\nTarget: 100 pembeli/bulan\nRevenue: Rp4.900.000\n\nTapi:\n- Butuh traffic BESAR\n- Margin tipis\n- Customer expect murah terus"
        },
        {
          "type": "content",
          "text": "## Skenario B: Harga Rp499rb\n\nTarget: 10 pembeli/bulan\nRevenue: Rp4.990.000\n\nTapi:\n- Butuh trust TINGGI\n- Perlu social proof kuat\n- Customer lebih committed"
        },
        {
          "type": "content",
          "text": "## Revenue hampir SAMA.\n\nTapi effort-nya?\n\nMencari 100 pembeli = 10x lebih susah dari 10 pembeli.\n\n👉 Produk mahal + audience kecil yang tepat = lebih profitable."
        },
        {
          "type": "content",
          "text": "## Kapan Harga Murah Masuk Akal?\n\n- Produk pertama (bangun trust)\n- Lead magnet ke produk mahal\n- Volume play (marketplace)\n\nKapan harga mahal?\n\n- Udah ada trust + proof\n- Produk transformasional\n- Audience spesifik"
        },
        {
          "type": "content",
          "text": "## Sweet Spot untuk Pemula\n\nMulai Rp79-149rb.\n\nCukup murah buat impulse buy.\nCukup mahal buat dianggap serius.\n\nNaikin harga seiring trust naik."
        },
        {
          "type": "cta",
          "text": "## Sekarang cek: produkmu kemurahan atau kemahalan?\n\nComment **\"DIGITAL\"** buat strategi pricing lengkap.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Banyak yang takut pasang harga tinggi. Padahal 10 customer × Rp499rb = 100 customer × Rp49rb. Tapi effort 10x lebih sedikit.\n\nComment DIGITAL 👇\n\n#pricing #produkdigital #strategibisnis #bisnisdigital"
    },
    {
      "day": 5,
      "date": "2026-05-18",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Mega Prompt — 1 Prompt yang Hasilkan Seluruh Marketing Campaign",
      "topic": "Mega Prompt",
      "prefix": "mega-prompt---1-prompt-yang-hasilkan-seluruh-marke-20260518",
      "slides": [
        {
          "type": "hook",
          "emoji": "💣",
          "text": "# 1 prompt.\n\n## Hasilkan SELURUH marketing campaign.\n\nBukan 10 prompt. Bukan 5.\n\nSATU."
        },
        {
          "type": "content",
          "text": "## Apa itu Mega Prompt?\n\nPrompt yang panjang dan detail, berisi SEMUA instruksi sekaligus.\n\nOutput: campaign lengkap dalam 1 response.\n\n👉 Dari yang biasanya 1 jam → jadi 5 menit."
        },
        {
          "type": "content",
          "text": "## Template Mega Prompt\n\n\"Kamu marketing strategist. Bikin FULL campaign untuk [produk], harga [x], target [audience].\n\nOutput:\n1. 5 variasi headline LP\n2. Email sequence 5 email\n3. 10 caption IG carousel\n4. 3 variasi ads copy (PAS format)\n5. Story selling script 5 slides\n\nTone: casual Indonesia. Max 150 kata per item.\""
        },
        {
          "type": "content",
          "text": "## Hasil?\n\n1 prompt → full marketing campaign.\n\nBiasanya butuh 5-10 prompt terpisah.\nSekarang SATU prompt aja.\n\n👉 AI punya context LENGKAP = output lebih kohesif."
        },
        {
          "type": "content",
          "text": "## Tips Mega Prompt\n\n- Makin detail instruksi = makin bagus output\n- Kasih contoh kalau bisa\n- Specify format output (numbered list, dsb)\n- Pakai Claude untuk output panjang (context window lebih besar)\n\n👉 Mega prompt = productivity hack level 999."
        },
        {
          "type": "cta",
          "text": "## SAVE mega prompt template ini.\n\nComment **\"AIBISNIS\"** buat variasi mega prompt lainnya.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "1 mega prompt = seluruh marketing campaign. Ini cara kerja orang-orang yang \"kok cepat banget bikin konten.\"\n\nComment AIBISNIS 👇\n\n#megaprompt #aiproductivity #marketingcampaign #aibisnis"
    },
    {
      "day": 6,
      "date": "2026-05-19",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Rahasia Copywriting 1 Kalimat yang Bisa Naikin Sales 3x",
      "topic": "Copywriting",
      "prefix": "rahasia-copywriting-1-kalimat-yang-bisa-naikin-sal-20260519",
      "slides": [
        {
          "type": "hook",
          "emoji": "✍️",
          "text": "# 1 kalimat.\n\n## Cuma 1 kalimat di LP\nyang bisa naikin sales 3x.\n\nIni kalimatnya."
        },
        {
          "type": "content",
          "text": "## Kalimatnya:\n\n\"Kalau dalam 30 hari kamu gak dapat hasil, uang kembali 100%.\"\n\nItu aja.\n\nGaransi."
        },
        {
          "type": "content",
          "text": "## Kenapa Satu Kalimat Ini Powerful?\n\nKarena menghilangkan SATU-SATUNYA alasan orang gak beli:\n\n**TAKUT RUGI.**\n\n\"Gimana kalau gak bagus?\"\n\"Gimana kalau gak cocok?\"\n\nGaransi = 0 risiko buat pembeli."
        },
        {
          "type": "content",
          "text": "## Data:\n\n- LP tanpa garansi: conversion 1.2%\n- LP dengan garansi: conversion 3.8%\n\nNaik 3x.\n\nRefund rate? Cuma 2.1%.\n\n👉 Kamu gain jauh lebih banyak dari yang kamu lose."
        },
        {
          "type": "content",
          "text": "## Variasi Garansi\n\n1. \"7 hari uang kembali tanpa syarat\"\n2. \"Gak puas? Uang kembali + tetap simpan bonusnya\"\n3. \"Terapkan 30 hari, gak ada hasil = refund\"\n\nPilih yang cocok. Yang penting: TULIS di LP."
        },
        {
          "type": "cta",
          "text": "## Tambahkan garansi di LP kamu SEKARANG.\n\nComment **\"DIGITAL\"** buat template garansi.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Satu kalimat garansi bisa 3x sales kamu. Dan refund rate-nya jauh lebih rendah dari yang kamu takutkan.\n\nComment DIGITAL 👇\n\n#copywriting #garansi #landingpage #conversionrate"
    },
    {
      "day": 6,
      "date": "2026-05-19",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Image Generation untuk Bisnis — Gak Perlu Designer Lagi",
      "topic": "AI Image",
      "prefix": "ai-image-generation-untuk-bisnis---gak-perlu-desig-20260519",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎨",
          "text": "# Desain professional\n\n## tanpa designer. Tanpa Canva.\n\nAI image generation. Dan hasilnya GILA."
        },
        {
          "type": "content",
          "text": "## Tools\n\n- DALL-E 3 (di ChatGPT Plus)\n- Midjourney\n- Leonardo AI (free tier generous)\n- Ideogram (best untuk text di image)\n\n👉 Pilih 1. Master 1."
        },
        {
          "type": "content",
          "text": "## Use Case Bisnis\n\n- Mockup produk digital\n- Thumbnail YouTube / carousel\n- Ads creative\n- Social media graphics\n- Ebook illustrations\n\n👉 Yang biasanya Rp200-500rb per desain → sekarang FREE."
        },
        {
          "type": "content",
          "text": "## Prompt Formula\n\n\"[Style] [Subject] [Details] [Setting] [Mood] [Technical]\"\n\nContoh: \"Minimalist flat illustration of a person working on laptop with ebooks floating around, soft pastel colors, white background, clean design\""
        },
        {
          "type": "content",
          "text": "## Tips\n\n1. Reference style yang kamu mau (\"in the style of...\")\n2. Specify aspect ratio (\"16:9\", \"1:1\")\n3. Iterate: \"same but more [x]\"\n4. Combine AI image + Canva text = professional graphics\n\n👉 AI generate visual. Canva finalize."
        },
        {
          "type": "cta",
          "text": "## Coba generate 1 image untuk konten kamu hari ini.\n\nComment **\"AIBISNIS\"** buat prompt pack image generation.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Dulu butuh designer. Sekarang butuh prompt yang bagus. AI image generation = visual content tanpa batas.\n\nComment AIBISNIS 👇\n\n#aiimage #imagegeneration #designtips #aibisnis"
    },
    {
      "day": 7,
      "date": "2026-05-20",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Semua Orang Bisa Bikin Produk Digital Tapi Ini yang Bikin Kamu BEDA",
      "topic": "Differentiation",
      "prefix": "semua-orang-bisa-bikin-produk-digital-tapi-ini-yan-20260520",
      "slides": [
        {
          "type": "hook",
          "emoji": "👑",
          "text": "# Semua orang bisa bikin produk digital.\n\n## Lalu kenapa harus BELI dari KAMU?\n\nIni jawabannya."
        },
        {
          "type": "content",
          "text": "## Fakta Brutal\n\nDi 2026, siapapun bisa bikin ebook pakai AI dalam 1 hari.\n\nArtinya: PRODUK bukan lagi keunggulan.\n\nYang jadi keunggulan = KAMU."
        },
        {
          "type": "content",
          "text": "## Diferensiasi #1: Pengalaman Personal\n\nAI bisa nulis teori.\nAI GAK BISA nulis:\n\"Aku pernah rugi Rp2.6 juta karena skip validasi.\"\n\nCerita real = gak bisa ditiru."
        },
        {
          "type": "content",
          "text": "## Diferensiasi #2: Sudut Pandang Unik\n\nSemua orang bahas \"cara jualan online.\"\n\nKamu bahas: \"Cara jualan online untuk introvert yang gak mau bikin konten wajah.\"\n\n👉 Spesifik = memorable."
        },
        {
          "type": "content",
          "text": "## Diferensiasi #3: Komunitas\n\nProduk bisa ditiru.\nKomunitas gak bisa ditiru.\n\n\"Beli produk ini = masuk grup eksklusif 200 orang.\"\n\nValue dari koneksi > value dari konten."
        },
        {
          "type": "content",
          "text": "## Diferensiasi #4: After-Sales\n\nKebanyakan orang: jual → selesai.\n\nKamu: jual → follow up → support → update gratis.\n\nIni yang bikin orang cerita ke temennya."
        },
        {
          "type": "cta",
          "text": "## Apa yang bikin KAMU beda?\n\nComment **\"DIGITAL\"** kalau mau framework diferensiasi.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Di era AI, produk bukan diferensiasi. KAMU yang jadi diferensiasi — cerita, sudut pandang, dan cara kamu treat customer.\n\nComment DIGITAL 👇\n\n#diferensiasi #personalbranding #produkdigital #bisnisdigital"
    },
    {
      "day": 7,
      "date": "2026-05-20",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Pakai AI untuk Bikin Konten 1 BULAN dalam 1 HARI",
      "topic": "AI Batch Content",
      "prefix": "cara-pakai-ai-untuk-bikin-konten-1-bulan-dalam-1-h-20260520",
      "slides": [
        {
          "type": "hook",
          "emoji": "⚡",
          "text": "# Konten 1 BULAN.\n\n## Dalam 1 HARI.\n\nBukan clickbait. Ini workflow exact-nya."
        },
        {
          "type": "content",
          "text": "## Jam 8-9: Strategic Planning\n\n\"Berikan 60 ide konten untuk niche [x]. 30 untuk [kategori A], 30 untuk [kategori B]. Untuk setiap ide: judul, hook, angle, tipe (save/share trigger).\"\n\nPilih 60 terbaik. Prioritaskan.\n\n👉 1 jam. 1 bulan terencana."
        },
        {
          "type": "content",
          "text": "## Jam 9-12: Batch Draft (30 konten pagi)\n\nPer konten (avg 5 menit):\n\"Buatkan carousel [x] slides. Hook: [dari planning]. CTA: comment [keyword]. Format: slide per slide.\"\n\n30 × 5 menit = 2.5 jam. Buffer 30 menit.\n\n👉 30 konten pagi DONE."
        },
        {
          "type": "content",
          "text": "## Jam 13-16: Batch Draft (30 konten malam)\n\nSama prosesnya.\n\n30 × 5 menit = 2.5 jam.\n\n👉 30 konten malam DONE."
        },
        {
          "type": "content",
          "text": "## Jam 16-18: Edit + Finalize\n\n- Review semua draft\n- Tambahin personal story / data real\n- Fix hook yang lemah\n- Finalize caption\n\n👉 2 jam editing. Semua konten SIAP."
        },
        {
          "type": "content",
          "text": "## Total: 10 jam kerja.\n\n60 konten carousel + 60 caption.\n\nSisa 29 hari bulan itu? Fokus ke:\n- Produk development\n- Customer support\n- Strategy & scaling\n\n👉 Content gak lagi jadi bottleneck."
        },
        {
          "type": "cta",
          "text": "## SAVE workflow ini. Coba bulan depan.\n\nComment **\"AIBISNIS\"** buat template planning sheet.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "10 jam = 60 konten = 1 bulan penuh. Ini cara aku bebasin waktu untuk fokus ke hal yang lebih penting.\n\nComment AIBISNIS 👇\n\n#batchcontent #aiworkflow #productivitas #aibisnis"
    },
    {
      "day": 8,
      "date": "2026-05-21",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Aku Jual 1 Ebook ke 200 Orang dan Ini Breakdown Strateginya",
      "topic": "Case Study",
      "prefix": "aku-jual-1-ebook-ke-200-orang-dan-ini-breakdown-st-20260521",
      "slides": [
        {
          "type": "hook",
          "emoji": "📈",
          "text": "# 1 Ebook. 200 Pembeli.\n\n## Ini breakdown LENGKAP strateginya.\n\nDari nol sampai sold."
        },
        {
          "type": "content",
          "text": "## Produk\n\nEbook 35 halaman tentang [topik].\nHarga: Rp99.000.\n\nTotal revenue: Rp19.800.000.\nBiaya total: Rp3.200.000.\n\n**Profit: Rp16.6 juta.**"
        },
        {
          "type": "content",
          "text": "## Fase 1: Pre-Launch (2 minggu)\n\n- 10 konten carousel tentang topik ebook\n- Polling story: 73% bilang \"mau\"\n- Waiting list: 89 orang\n\n👉 Belum launch sudah ada 89 calon pembeli."
        },
        {
          "type": "content",
          "text": "## Fase 2: Launch (3 hari)\n\n- Early bird Rp79rb (48 jam)\n- Hari 1: 67 pembeli (dari waiting list + konten)\n- Hari 2-3: 41 pembeli\n\n👉 108 pembeli dalam 3 hari."
        },
        {
          "type": "content",
          "text": "## Fase 3: Evergreen (4 minggu)\n\n- Harga normal Rp99rb\n- Konten mingguan + story selling\n- Meta Ads budget Rp50rb/hari\n\n👉 92 pembeli tambahan."
        },
        {
          "type": "content",
          "text": "## Kunci Sukses\n\n1. Validasi sebelum bikin\n2. Build waiting list\n3. Early bird pricing\n4. Konten konsisten setelah launch\n5. Ads kecil tapi targeted"
        },
        {
          "type": "cta",
          "text": "## SAVE breakdown ini.\n\nComment **\"DIGITAL\"** buat template launch strategy.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "200 pembeli dari 1 ebook. Bukan keberuntungan — ini strategi yang bisa direplikasi.\n\nComment DIGITAL 👇\n\n#casestudy #produkdigital #launchstrategy #bisnisdigital"
    },
    {
      "day": 8,
      "date": "2026-05-21",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Gak Akan Replace Kamu — TAPI Orang yang Pakai AI Akan",
      "topic": "AI Mindset",
      "prefix": "ai-gak-akan-replace-kamu---tapi-orang-yang-pakai-a-20260521",
      "slides": [
        {
          "type": "hook",
          "emoji": "⚠️",
          "text": "# AI gak akan replace kamu.\n\n## Tapi orang yang PAKAI AI\n\n## akan replace kamu.\n\nIni bukan ancaman. Ini FAKTA."
        },
        {
          "type": "content",
          "text": "## Bukti\n\nFreelance copywriter tanpa AI:\n- 3 artikel/hari\n- Rate: Rp500rb/artikel\n\nFreelance copywriter dengan AI:\n- 10 artikel/hari\n- Rate: Rp500rb/artikel\n\nSiapa yang client pilih?"
        },
        {
          "type": "content",
          "text": "## Bukan Soal AI vs Manusia\n\nIni soal:\nManusia DENGAN AI vs Manusia TANPA AI.\n\nYang pakai AI:\n- Lebih cepat\n- Lebih konsisten\n- Lebih murah\n- Output lebih banyak"
        },
        {
          "type": "content",
          "text": "## Yang AI GAK BISA Gantikan\n\n- Pengalaman personal kamu\n- Judgment & keputusan strategis\n- Relationship dengan customer\n- Kreativitas dalam framing masalah\n- Empathy dan emotional intelligence\n\n👉 Ini yang harus kamu KUATIN."
        },
        {
          "type": "content",
          "text": "## Action Plan\n\n1. Master AI sebagai TOOL (bukan cuma tester)\n2. Kombinasi: AI speed + Human judgment\n3. Build skills yang AI gak bisa replace\n4. Jadi orang yang PAKAI AI, bukan yang DITINGGAL AI\n\n👉 Adaptasi bukan pilihan. Adaptasi itu survival."
        },
        {
          "type": "cta",
          "text": "## Setuju atau gak?\n\nComment **\"AIBISNIS\"** kalau kamu siap adaptasi.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Ini bukan soal AI bagus atau jelek. Ini soal siapa yang adaptasi dan siapa yang gak.\n\nComment AIBISNIS 👇\n\n#aivsmanusia #adaptasi #aibisnis #futureofwork"
    },
    {
      "day": 9,
      "date": "2026-05-22",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Orang Gak Beli Produkmu Bukan Karena Mahal",
      "topic": "Sales Psychology",
      "prefix": "orang-gak-beli-produkmu-bukan-karena-mahal-20260522",
      "slides": [
        {
          "type": "hook",
          "emoji": "🧠",
          "text": "# Orang gak beli produkmu.\n\n## Bukan karena mahal.\n\nAlasan sebenarnya lebih menyakitkan."
        },
        {
          "type": "content",
          "text": "## Alasan Sebenarnya #1:\n\nMereka GAK PERCAYA kamu bisa deliver.\n\n\"Siapa sih orang ini?\"\n\"Emang beneran works?\"\n\n👉 Solusi: social proof, studi kasus, personal story."
        },
        {
          "type": "content",
          "text": "## Alasan #2:\n\nMereka GAK NGERTI apa yang mereka dapat.\n\n\"Ebook tentang bisnis digital\" = vague.\n\"7 langkah dapat Rp5jt pertama dari ebook\" = jelas.\n\n👉 Spesifik tentang HASIL."
        },
        {
          "type": "content",
          "text": "## Alasan #3:\n\nGak ada URGENSI.\n\n\"Beli kapan aja\" = \"beli nanti\" = \"lupa\" = GAK BELI.\n\n👉 Limited time, harga naik, kuota terbatas."
        },
        {
          "type": "content",
          "text": "## Alasan #4:\n\nTerlalu banyak FRICTION.\n\nLP lambat. Checkout ribet. Gak ada WA.\n\n👉 Beli harus bisa dalam 3 klik atau kurang."
        },
        {
          "type": "content",
          "text": "## Test Sederhana\n\nMinta temen yang gak kenal produkmu buka LP.\n\nTanya:\n1. Ini produk apa?\n2. Buat siapa?\n3. Kenapa harus beli sekarang?\n\nKalau gak bisa jawab dalam 5 detik → fix LP kamu."
        },
        {
          "type": "cta",
          "text": "## Cek LP kamu pakai test ini.\n\nComment **\"DIGITAL\"** buat audit LP gratis.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "\"Mahal\" itu excuse. Alasan sebenarnya: gak percaya, gak ngerti, gak urgent, atau terlalu ribet.\n\nFix 4 ini dan sales naik.\n\nComment DIGITAL 👇\n\n#salespsychology #produkdigital #conversionrate #copywriting"
    },
    {
      "day": 9,
      "date": "2026-05-22",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Bikin Custom GPT untuk Bisnis Kamu",
      "topic": "Custom GPT",
      "prefix": "cara-bikin-custom-gpt-untuk-bisnis-kamu-20260522",
      "slides": [
        {
          "type": "hook",
          "emoji": "🛠️",
          "text": "# Punya AI assistant\n\n## yang ngerti bisnis kamu PERSIS.\n\nNamanya Custom GPT. Dan ini gratis."
        },
        {
          "type": "content",
          "text": "## Apa itu Custom GPT?\n\nVersi ChatGPT yang kamu CUSTOM untuk kebutuhan spesifik.\n\nKasih instruksi, knowledge, dan contoh.\nDia jadi \"karyawan AI\" yang ngerti bisnis kamu.\n\n👉 Bukan GPT umum. Ini GPT KAMU."
        },
        {
          "type": "content",
          "text": "## Contoh Custom GPT untuk Bisnis\n\n1. \"Caption Writer\" — nulis caption IG sesuai brand voice kamu\n2. \"Sales Copy AI\" — bikin LP copy pakai framework PASTOR\n3. \"Customer Service Bot\" — jawab FAQ produk kamu\n4. \"Content Planner\" — generate ide konten berdasarkan niche kamu"
        },
        {
          "type": "content",
          "text": "## Cara Bikin (5 menit)\n\n1. Buka ChatGPT → Explore GPTs → Create\n2. Tulis instruksi: \"Kamu adalah [role] untuk bisnis [x]. Kamu membantu [tugas]. Tone: [tone]. Output format: [format].\"\n3. Upload knowledge (ebook kamu, SOP, brand guide)\n4. Save & publish\n\n👉 5 menit setup. Lifetime benefit."
        },
        {
          "type": "content",
          "text": "## Pro Tips\n\n- Upload ebook/produk kamu sebagai knowledge → AI tau isi produkmu\n- Upload 10 caption terbaik → AI belajar style kamu\n- Kasih \"rules\" yang ketat → output konsisten\n\n👉 Makin banyak context = makin powerful."
        },
        {
          "type": "cta",
          "text": "## Bikin Custom GPT pertamamu HARI INI.\n\nComment **\"AIBISNIS\"** buat template custom GPT.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Custom GPT = karyawan AI yang ngerti bisnis kamu persis. Setup 5 menit, manfaat selamanya.\n\nComment AIBISNIS 👇\n\n#customgpt #chatgpt #aiassistant #aibisnis"
    },
    {
      "day": 10,
      "date": "2026-05-23",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Framework PASTOR Bikin Copy yang Gak Bisa Ditolak",
      "topic": "Copywriting Framework",
      "prefix": "framework-pastor-bikin-copy-yang-gak-bisa-ditolak-20260523",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔥",
          "text": "# Framework copy yang bikin orang\n\n## GAK BISA NOLAK beli.\n\nNamanya PASTOR. Dan ini lebih kuat dari AIDA."
        },
        {
          "type": "content",
          "text": "## P — PROBLEM\n\nMulai dari masalah SPESIFIK.\n\n\"Kamu udah bikin 10 ebook tapi gak ada yang nembus 50 pembeli?\""
        },
        {
          "type": "content",
          "text": "## A — AMPLIFY\n\nBesarkan dampak masalahnya.\n\n\"Bayangkan 6 bulan lagi masih di posisi yang sama. Masih bikin produk yang gak ada yang beli.\""
        },
        {
          "type": "content",
          "text": "## S — STORY / SOLUTION\n\nCerita transformasi.\n\n\"Aku dulu di posisi itu. Sampai aku nemuin framework ini.\""
        },
        {
          "type": "content",
          "text": "## T — TRANSFORMATION + TESTIMONY\n\nTunjukkan HASIL nyata.\n\n\"Sekarang 200+ pembeli. Dan ini kata mereka: [testimoni]\""
        },
        {
          "type": "content",
          "text": "## O — OFFER\n\nKasih penawaran yang jelas.\n\n\"Semua framework ini aku rangkum di [produk].\""
        },
        {
          "type": "content",
          "text": "## R — RESPONSE (CTA)\n\n\"Daftar sekarang. Harga naik dalam 48 jam. Garansi 30 hari.\"\n\n👉 Jelas. Urgent. Low risk."
        },
        {
          "type": "cta",
          "text": "## SAVE framework PASTOR ini.\n\nComment **\"DIGITAL\"** buat template PASTOR siap pakai.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "PASTOR = AIDA on steroids. Problem → Amplify → Story → Transformation → Offer → Response.\n\nComment DIGITAL 👇\n\n#copywriting #framework #pastor #produkdigital #salespage"
    },
    {
      "day": 10,
      "date": "2026-05-23",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI untuk Bikin Konten Reels Script yang Viral",
      "topic": "AI Reels",
      "prefix": "ai-untuk-bikin-konten-reels-script-yang-viral-20260523",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎬",
          "text": "# 3 detik.\n\n## Itu waktu yang kamu punya\nsebelum orang SKIP reels kamu.\n\nAI bisa bantu nail 3 detik itu."
        },
        {
          "type": "content",
          "text": "## Framework Hook Reels\n\n\"Berikan 10 hook pembuka 3 detik untuk reels tentang [topik]. Format: kalimat pendek, kontroversial atau mengejutkan. Audience: [target].\"\n\nContoh output:\n- \"Kamu buang uang kalau masih lakuin ini.\"\n- \"1 hal ini bedain yang sukses dan yang gagal.\"\n\n👉 10 opsi. Pilih 1 terkuat."
        },
        {
          "type": "content",
          "text": "## Script Body (15-45 detik)\n\n\"Tulis script reels 30 detik. Hook: [dari step sebelumnya]. Format: 3 poin utama. Bahasa: casual, kayak ngobrol. NO intro, NO 'hai guys', langsung masuk.\"\n\n👉 Gak ada basa-basi = retention tinggi."
        },
        {
          "type": "content",
          "text": "## CTA (5 detik)\n\n\"Tulis CTA reels yang bikin orang: follow / comment / share / save. Pilih 1 action saja. Max 1 kalimat. Urgent.\"\n\nContoh: \"Save ini sebelum ilang dari feed kamu.\"\n\n👉 1 CTA > 4 CTA."
        },
        {
          "type": "content",
          "text": "## Batch Production\n\n1 jam AI scripting = 10-15 reels script.\n1 jam recording = 10-15 reels.\n\n👉 2 jam total = konten reels 2 minggu."
        },
        {
          "type": "cta",
          "text": "## SAVE formula script reels ini.\n\nComment **\"AIBISNIS\"** buat template script viral.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Hook 3 detik menentukan segalanya. AI bisa generate puluhan variasi hook dalam menit.\n\nComment AIBISNIS 👇\n\n#reelstips #reelsscript #aicontent #viralreels"
    },
    {
      "day": 11,
      "date": "2026-05-24",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "3 Angka yang WAJIB Kamu Track Setiap Hari",
      "topic": "Analytics",
      "prefix": "3-angka-yang-wajib-kamu-track-setiap-hari-20260524",
      "slides": [
        {
          "type": "hook",
          "emoji": "📊",
          "text": "# Kamu jualan produk digital\n\n## tapi gak track 3 angka ini?\n\nPantas gak berkembang."
        },
        {
          "type": "content",
          "text": "## Angka #1: Traffic ke Landing Page\n\nBerapa orang LIHAT LP kamu per hari?\n\nKalau di bawah 50/hari → masalahnya di DISTRIBUSI.\nBukan di produk. Bukan di harga.\n\n👉 Gak ada traffic = gak ada sales. Titik."
        },
        {
          "type": "content",
          "text": "## Angka #2: Conversion Rate\n\nDari yang lihat LP, berapa % yang BELI?\n\n- Di bawah 1% → LP-nya bermasalah\n- 1-3% → average\n- 3-5% → bagus\n- 5%+ → excellent\n\n👉 Naikin 1% aja bisa double revenue."
        },
        {
          "type": "content",
          "text": "## Angka #3: Average Order Value (AOV)\n\nRata-rata 1 customer belanja berapa?\n\nCaranaikin: bundle, upsell, cross-sell.\n\nDari Rp99rb → Rp149rb = revenue naik 50% tanpa tambah customer."
        },
        {
          "type": "content",
          "text": "## Rumus Simpel\n\nRevenue = Traffic × Conversion Rate × AOV\n\nNaikin SALAH SATU aja = revenue naik.\n\nNaikin KETIGANYA = revenue meledak."
        },
        {
          "type": "cta",
          "text": "## Cek 3 angka ini SEKARANG.\n\nComment **\"DIGITAL\"** buat template tracking dashboard.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Bisnis tanpa data = tebak-tebakan. Track 3 angka ini dan kamu akan tau persis dimana masalahnya.\n\nComment DIGITAL 👇\n\n#analytics #produkdigital #bisnisdigital #datadrivendecision"
    },
    {
      "day": 11,
      "date": "2026-05-24",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Pakai Claude Projects untuk Manage Seluruh Bisnis",
      "topic": "Claude Tips",
      "prefix": "cara-pakai-claude-projects-untuk-manage-seluruh-bi-20260524",
      "slides": [
        {
          "type": "hook",
          "emoji": "🧠",
          "text": "# 1 fitur Claude\n\n## yang bisa jadi \"otak kedua\" bisnis kamu.\n\nNamanya Projects. Dan ini game changer."
        },
        {
          "type": "content",
          "text": "## Apa itu Claude Projects?\n\nWorkspace di Claude dimana kamu bisa:\n- Upload dokumen (SOP, ebook, data)\n- Set instruksi permanent\n- Semua percakapan punya context yang sama\n\n👉 Kayak punya karyawan yang UDAH TAU semua tentang bisnis kamu."
        },
        {
          "type": "content",
          "text": "## Setup: Business Brain\n\n1. Bikin project: \"[Nama Bisnis] Brain\"\n2. Upload: brand guide, produk list, target audience, SOP\n3. Set instructions: \"Kamu adalah business assistant untuk [bisnis]. Kamu tau semua tentang produk, audience, dan strategi kami.\"\n\n👉 Sekarang setiap kali tanya, Claude udah punya context LENGKAP."
        },
        {
          "type": "content",
          "text": "## Use Cases\n\n- \"Bikin caption untuk produk A\" → Claude tau produk A\n- \"Analisa data sales minggu ini\" → upload spreadsheet → analisa\n- \"Bikin email ke customer\" → Claude tau tone brand kamu\n- \"Brainstorm produk baru\" → Claude tau audience kamu\n\n👉 Gak perlu brief ulang setiap kali."
        },
        {
          "type": "content",
          "text": "## Vs ChatGPT Custom GPT\n\nChatGPT: Custom GPT (semua orang bisa akses)\nClaude: Projects (private, lebih banyak context)\n\n👉 Untuk INTERNAL bisnis → Claude Projects.\nUntuk EXTERNAL (chatbot publik) → Custom GPT."
        },
        {
          "type": "cta",
          "text": "## Setup Claude Projects hari ini.\n\nComment **\"AIBISNIS\"** buat template project setup.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Claude Projects = second brain untuk bisnis kamu. Upload semua knowledge, dan Claude jadi business partner.\n\nComment AIBISNIS 👇\n\n#claudeai #aiprojects #aibisnis #productivitas"
    },
    {
      "day": 12,
      "date": "2026-05-25",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Waiting List yang Bikin Orang Antri Beli",
      "topic": "Pre-Launch",
      "prefix": "cara-bikin-waiting-list-yang-bikin-orang-antri-bel-20260525",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔥",
          "text": "# 89 orang ANTRI beli\n\n## sebelum produk aku launch.\n\nIni caranya bikin waiting list."
        },
        {
          "type": "content",
          "text": "## Kenapa Waiting List > Langsung Launch\n\nLangsung launch: berharap ada yang beli.\nWaiting list: UDAH TAU siapa yang mau beli.\n\n👉 Dari harap-harap → pasti."
        },
        {
          "type": "content",
          "text": "## Step 1: Teaser Content (H-14)\n\nBikin 3-5 konten tentang topik produk.\n\nDi setiap konten: \"Aku lagi siapin sesuatu tentang ini. Mau tau duluan?\"\n\n👉 Build curiosity."
        },
        {
          "type": "content",
          "text": "## Step 2: Landing Page Waiting List\n\nPage simpel:\n- Headline: \"Jadi yang pertama tau [produk]\"\n- Benefit: \"Dapat harga launch + bonus eksklusif\"\n- Form: nama + email\n\n👉 Ini lead capture kamu."
        },
        {
          "type": "content",
          "text": "## Step 3: Nurture (H-7)\n\nEmail ke waiting list:\n- Email 1: preview konten\n- Email 2: behind the scene\n- Email 3: \"BESOK launch. Siap?\"\n\n👉 Build anticipation."
        },
        {
          "type": "content",
          "text": "## Step 4: Exclusive Launch (H-0)\n\nWaiting list dapat akses 24 jam SEBELUM publik.\nHarga khusus cuma untuk mereka.\n\n👉 Mereka merasa special. Conversion rate 40%+."
        },
        {
          "type": "cta",
          "text": "## SAVE strategi waiting list ini.\n\nComment **\"DIGITAL\"** buat template LP waiting list.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Waiting list mengubah launch dari gambling jadi calculated win.\n\nComment DIGITAL 👇\n\n#waitinglist #launchstrategy #produkdigital #prelaunch"
    },
    {
      "day": 12,
      "date": "2026-05-25",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Workflow Bikin Landing Page dalam 45 Menit",
      "topic": "AI Landing Page",
      "prefix": "ai-workflow-bikin-landing-page-dalam-45-menit-20260525",
      "slides": [
        {
          "type": "hook",
          "emoji": "🏗️",
          "text": "# Landing page LENGKAP.\n\n## 45 menit. Dari nol.\n\nAI + template. Ini workflow-nya."
        },
        {
          "type": "content",
          "text": "## Menit 0-10: Wireframe\n\n\"Buatkan wireframe LP untuk [produk]. Framework PASTOR. Section: hero, problem, solution, features, testimonials, pricing, FAQ, CTA. Untuk setiap section, jelaskan apa yang harus ada.\"\n\n👉 AI jadi architect LP kamu."
        },
        {
          "type": "content",
          "text": "## Menit 10-25: Copywriting\n\nPer section:\n\"Tulis copy untuk section [x]. Produk: [detail]. Audience: [detail]. Tone: [x]. Max [x] kata.\"\n\n👉 Copy setiap section, satu per satu."
        },
        {
          "type": "content",
          "text": "## Menit 25-35: FAQ\n\n\"Berikan 7 FAQ yang paling mungkin ditanyakan calon pembeli [produk]. Untuk setiap FAQ, berikan jawaban yang menghilangkan keraguan. Max 50 kata per jawaban.\"\n\n👉 FAQ = objection handler. Sangat penting."
        },
        {
          "type": "content",
          "text": "## Menit 35-45: Build\n\nCopy semua ke builder:\n- Carrd.co (gratis, simpel)\n- Notion (gratis)\n- Atau minta AI bikin HTML langsung\n\n👉 Paste copy → atur layout → LIVE."
        },
        {
          "type": "content",
          "text": "## Hasil: LP LIVE dalam 45 menit.\n\nBukan LP sempurna.\nTapi LP yang EXIST dan bisa ditest.\n\nPerfect LP yang gak pernah live = 0 sales.\nOK LP yang live sekarang = mulai dapat data.\n\n👉 Launch first. Optimize later."
        },
        {
          "type": "cta",
          "text": "## SAVE workflow LP ini.\n\nComment **\"AIBISNIS\"** buat template LP copy lengkap.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "45 menit. LP live. Mulai dapat data. Optimize sambil jalan.\n\nComment AIBISNIS 👇\n\n#landingpage #aiworkflow #aibisnis #bisnisdigital"
    },
    {
      "day": 13,
      "date": "2026-05-26",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Kesalahan Email Marketing yang Bikin Subscriber Kabur",
      "topic": "Email Mistakes",
      "prefix": "kesalahan-email-marketing-yang-bikin-subscriber-ka-20260526",
      "slides": [
        {
          "type": "hook",
          "emoji": "🏃",
          "text": "# Subscriber kamu KABUR\n\n## setiap kali kamu kirim email?\n\nKamu pasti lakuin salah satu dari ini."
        },
        {
          "type": "content",
          "text": "## Kesalahan #1: Langsung Jualan di Email Pertama\n\nBaru subscribe → langsung dapat email:\n\"BUY NOW! DISKON 50%!\"\n\nReaksi: unsubscribe.\n\n👉 Email 1-3 harus VALUE. Jualan email 4+."
        },
        {
          "type": "content",
          "text": "## Kesalahan #2: Subject Line Boring\n\n\"Newsletter Edisi 23\" → siapa yang mau buka?\n\n\"Aku hampir delete email ini sebelum kirim\" → penasaran.\n\n👉 Subject line = hook. Sama pentingnya kayak slide pertama."
        },
        {
          "type": "content",
          "text": "## Kesalahan #3: Terlalu Panjang\n\nEmail 1000+ kata = gak ada yang baca.\n\n150-300 kata = sweet spot.\n\n👉 1 email = 1 topik = 1 CTA. Itu aja."
        },
        {
          "type": "content",
          "text": "## Kesalahan #4: Gak Konsisten\n\n3 email minggu pertama → hilang 2 bulan → tiba-tiba jualan.\n\n\"Siapa ini?\" → spam → unsubscribe.\n\n👉 Minimal 1x/minggu. Konsisten."
        },
        {
          "type": "content",
          "text": "## Email yang Bikin Orang NUNGGU:\n\n✅ Subject line yang bikin penasaran\n✅ Cerita personal di pembuka\n✅ 1 insight actionable\n✅ Pendek dan punchy\n✅ CTA yang jelas"
        },
        {
          "type": "cta",
          "text": "## Cek email terakhir kamu. Ada berapa kesalahan?\n\nComment **\"DIGITAL\"** buat template email sequence.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Email marketing yang bagus = subscriber NUNGGU email kamu. Yang jelek = langsung unsubscribe.\n\nComment DIGITAL 👇\n\n#emailmarketing #newsletter #produkdigital #bisnisdigital"
    },
    {
      "day": 13,
      "date": "2026-05-26",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "5 AI Tools Baru 2026 yang Belum Banyak Orang Tau",
      "topic": "New AI Tools",
      "prefix": "5-ai-tools-baru-2026-yang-belum-banyak-orang-tau-20260526",
      "slides": [
        {
          "type": "hook",
          "emoji": "🆕",
          "text": "# 5 AI tools BARU 2026\n\n## yang belum banyak orang tau.\n\nNomor 4 literal game changer."
        },
        {
          "type": "content",
          "text": "## #1: Claude Artifacts\n\nBikin app, calculator, dashboard LANGSUNG di chat.\nGak perlu coding. Gak perlu developer.\n\n👉 Bikin tools interaktif untuk customer kamu dalam hitungan menit."
        },
        {
          "type": "content",
          "text": "## #2: Perplexity AI\n\nSearch engine + AI. Jawab pertanyaan dengan SUMBER.\n\n👉 Riset pasar, cek fakta, analisa trend → lebih akurat dari ChatGPT untuk riset."
        },
        {
          "type": "content",
          "text": "## #3: Descript\n\nEdit video kayak edit dokumen teks. Hapus kata = video terpotong otomatis.\n\n👉 Edit reels/podcast tanpa skill editing."
        },
        {
          "type": "content",
          "text": "## #4: Bolt.new / Lovable\n\nDeskripsikan app yang kamu mau → AI BIKIN LANGSUNG.\n\nLP, calculator, dashboard, mini app.\n\n👉 \"Bikin LP untuk ebook tentang AI\" → LP jadi. Deploy. Live."
        },
        {
          "type": "content",
          "text": "## #5: Napkin AI\n\nPaste teks → auto generate visual/infografis.\n\n👉 Bikin konten visual dari tulisan. Perfect untuk carousel."
        },
        {
          "type": "cta",
          "text": "## SAVE list ini. Coba 1 minggu ini.\n\nComment **\"AIBISNIS\"** buat tutorial detail tiap tool.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Early adopter = competitive advantage. Coba sebelum kompetitor kamu tau.\n\nComment AIBISNIS 👇\n\n#aitoolsbaru #ai2026 #aibisnis #techtrend"
    },
    {
      "day": 14,
      "date": "2026-05-27",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Konten Carousel yang Orang Baca Sampai Slide Terakhir",
      "topic": "Content Strategy",
      "prefix": "cara-bikin-konten-carousel-yang-orang-baca-sampai--20260527",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎯",
          "text": "# 95% orang gak baca carousel kamu\n\n## sampai slide terakhir.\n\nIni cara fix-nya."
        },
        {
          "type": "content",
          "text": "## Kenapa Orang Stop\n\n- Slide 2-3 MEMBOSANKAN\n- Isinya bisa ditebak\n- Gak ada alasan buat lanjut\n\n👉 Setiap slide harus punya HOOK ke slide berikutnya."
        },
        {
          "type": "content",
          "text": "## Teknik #1: Open Loop\n\nTutup setiap slide dengan pertanyaan atau misteri:\n\"Tapi itu belum yang paling penting...\"\n\"Dan nomor 3 ini yang game changer.\"\n\n👉 Otak manusia GAK BISA berhenti kalau ada open loop."
        },
        {
          "type": "content",
          "text": "## Teknik #2: Pattern Break\n\nSlide 1-3: format yang sama.\nSlide 4: UBAH format total.\n\nDari teks → angka. Dari tips → story. Dari serius → humor.\n\n👉 Surprise = perhatian kembali."
        },
        {
          "type": "content",
          "text": "## Teknik #3: Escalation\n\nSetiap slide harus LEBIH menarik dari sebelumnya.\n\nTips biasa → tips unik → rahasia → mind-blowing.\n\n👉 Jangan taruh yang terbaik di slide 2. Taruh di slide 5-6."
        },
        {
          "type": "content",
          "text": "## Teknik #4: Mini Cliffhanger\n\n\"Di slide berikutnya aku kasih contoh nyata...\"\n\"Tapi tunggu — ada 1 hal yang kebanyakan orang salah paham...\"\n\n👉 Bikin setiap transisi jadi irresistible."
        },
        {
          "type": "cta",
          "text": "## SAVE 4 teknik ini.\n\nComment **\"DIGITAL\"** buat template carousel high-retention.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Carousel yang dibaca sampai akhir = dwell time tinggi = algoritma push lebih jauh.\n\nMaster 4 teknik ini dan watch your reach meledak.\n\nComment DIGITAL 👇\n\n#carouseltips #instagramstrategy #contentstrategy #produkdigital"
    },
    {
      "day": 14,
      "date": "2026-05-27",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara AI Bantu Kamu Bikin Keputusan Bisnis yang Lebih Baik",
      "topic": "AI Decision Making",
      "prefix": "cara-ai-bantu-kamu-bikin-keputusan-bisnis-yang-leb-20260527",
      "slides": [
        {
          "type": "hook",
          "emoji": "🧠",
          "text": "# Bingung ambil keputusan bisnis?\n\n## Suruh AI yang bantu ANALISA.\n\nBukan suruh AI yang putusin. KAMU yang putusin."
        },
        {
          "type": "content",
          "text": "## Framework: AI sebagai Devil's Advocate\n\n\"Aku mau [keputusan]. Berikan 5 alasan kenapa ini BAGUS dan 5 alasan kenapa ini BURUK. Jadilah kritis.\"\n\n👉 AI kasih perspektif yang kamu mungkin MISS."
        },
        {
          "type": "content",
          "text": "## Framework: Scenario Planning\n\n\"Kalau aku [opsi A], apa kemungkinan outcomes dalam 3 bulan? Kalau [opsi B]? Bandingkan pro-kontra keduanya.\"\n\n👉 Lihat consequences SEBELUM ambil action."
        },
        {
          "type": "content",
          "text": "## Framework: Risk Assessment\n\n\"Aku mau launch [produk] dengan budget [x]. Analisa: apa worst case scenario? Apa mitigation plan-nya? Apa minimum viable outcome?\"\n\n👉 Tau risiko = keputusan lebih confident."
        },
        {
          "type": "content",
          "text": "## Framework: Second Opinion\n\n\"Review strategi ini: [strategi kamu]. Apa yang kurang? Apa yang bisa di-improve? Kalau kamu jadi business consultant, apa advice kamu?\"\n\n👉 AI jadi consultant gratis 24/7."
        },
        {
          "type": "content",
          "text": "## PENTING\n\nAI BANTU analisa.\nTapi KAMU yang putusin.\n\nAI gak tau konteks personal, relationship, dan gut feeling kamu.\n\n👉 AI = data + analysis. Kamu = judgment + decision."
        },
        {
          "type": "cta",
          "text": "## Coba 1 framework ini buat keputusan yang lagi kamu hadapi.\n\nComment **\"AIBISNIS\"** buat template decision making.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI bukan buat menggantikan judgment kamu. AI buat memperkaya perspektif sebelum kamu memutuskan.\n\nComment AIBISNIS 👇\n\n#decisionmaking #aibisnis #strategibisnis #businessintelligence"
    },
    {
      "day": 15,
      "date": "2026-05-28",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Produk Rp499rb yang Orang Rela Bayar",
      "topic": "Premium Product",
      "prefix": "cara-bikin-produk-rp499rb-yang-orang-rela-bayar-20260528",
      "slides": [
        {
          "type": "hook",
          "emoji": "💎",
          "text": "# Produk Rp499.000\n\n## dan orang RELA bayar.\n\nBukan magic. Ini formula-nya."
        },
        {
          "type": "content",
          "text": "## Mindset Shift\n\nProduk Rp49rb: \"Apa yang bisa aku KASIH?\"\nProduk Rp499rb: \"TRANSFORMASI apa yang aku berikan?\"\n\n👉 Orang bayar mahal untuk PERUBAHAN, bukan informasi."
        },
        {
          "type": "content",
          "text": "## Elemen #1: Outcome yang Jelas\n\n❌ \"Belajar digital marketing\"\n✅ \"Dalam 60 hari, kamu punya sistem yang generate Rp5-10jt/bulan dari produk digital\"\n\n👉 Makin spesifik outcome = makin tinggi harga yang bisa kamu charge."
        },
        {
          "type": "content",
          "text": "## Elemen #2: Support / Akses ke Kamu\n\nProduk Rp49rb: download dan selesai.\nProduk Rp499rb: + grup diskusi + Q&A session + email support.\n\n👉 Akses ke KAMU = premium."
        },
        {
          "type": "content",
          "text": "## Elemen #3: Proof yang Overwhelming\n\n10+ testimoni dengan before-after.\nScreenshot hasil.\nVideo testimoni.\n\n👉 Makin banyak proof = makin gampang justify harga tinggi."
        },
        {
          "type": "content",
          "text": "## Elemen #4: Scarcity yang Real\n\n\"Cuma buka 50 slot karena aku support langsung.\"\n\nKalau ada support element → scarcity masuk akal.\n\n👉 Jangan fake scarcity. Orang bisa tau."
        },
        {
          "type": "cta",
          "text": "## Siap bikin produk premium pertamamu?\n\nComment **\"DIGITAL\"** buat template produk Rp499rb.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Kamu gak butuh 1000 customer × Rp49rb. Kamu butuh 50 customer × Rp499rb. Hasilnya lebih besar, effort lebih kecil.\n\nComment DIGITAL 👇\n\n#premiumproduk #produkdigital #highticket #bisnisdigital"
    },
    {
      "day": 15,
      "date": "2026-05-28",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Bikin AI-Powered FAQ yang Jawab Customer 24 Jam",
      "topic": "AI FAQ System",
      "prefix": "cara-bikin-ai-powered-faq-yang-jawab-customer-24-j-20260528",
      "slides": [
        {
          "type": "hook",
          "emoji": "🤖",
          "text": "# Customer tanya jam 2 pagi.\n\n## Kamu tidur.\n\nSiapa yang jawab?\n\nAI-powered FAQ system."
        },
        {
          "type": "content",
          "text": "## Level 1: FAQ Document\n\nBikin FAQ pakai AI:\n\"Berikan 20 pertanyaan yang paling mungkin ditanyakan tentang [produk]. Jawab setiap pertanyaan dalam 2-3 kalimat.\"\n\nTaruh di LP, story highlights, linktree.\n\n👉 50% pertanyaan terjawab tanpa DM."
        },
        {
          "type": "content",
          "text": "## Level 2: Auto-Reply ManyChat\n\nKeyword trigger di DM IG:\n- \"HARGA\" → auto kirim info harga\n- \"BONUS\" → auto kirim list bonus\n- \"TESTIMONI\" → auto kirim screenshot\n\n👉 70% pertanyaan terjawab otomatis."
        },
        {
          "type": "content",
          "text": "## Level 3: AI Chatbot (Chatbase)\n\nUpload semua FAQ + info produk.\nAI chatbot jawab pertanyaan APAPUN tentang produkmu.\nEmbed di LP.\n\n👉 90% pertanyaan terjawab. 24/7."
        },
        {
          "type": "content",
          "text": "## Hasil\n\nSebelum: 30+ DM per hari, jawab manual, capek.\nSetelah: 5-10 DM per hari (yang kompleks aja), sisanya auto.\n\nWaktu hemat: 1-2 jam PER HARI.\n\n👉 Itu 30-60 jam per bulan. Buat apa? Bikin produk baru."
        },
        {
          "type": "cta",
          "text": "## Mulai dari Level 1 HARI INI.\n\nComment **\"AIBISNIS\"** buat template FAQ system.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "3 level FAQ system. Mulai dari yang simpel, upgrade seiring bisnis grow.\n\nComment AIBISNIS 👇\n\n#faqsystem #automation #aibisnis #customerservice"
    },
    {
      "day": 16,
      "date": "2026-05-29",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "5 Tanda Produk Digital Kamu Siap Di-Scale",
      "topic": "Scaling Readiness",
      "prefix": "5-tanda-produk-digital-kamu-siap-di-scale-20260529",
      "slides": [
        {
          "type": "hook",
          "emoji": "🚀",
          "text": "# Jangan scale produk digital kamu\n\n## KECUALI 5 tanda ini sudah terpenuhi.\n\nScale terlalu cepat = buang uang."
        },
        {
          "type": "content",
          "text": "## Tanda #1: Conversion Rate Stabil\n\nLP kamu convert minimal 2% secara KONSISTEN.\n\nBukan sekali 5% terus turun ke 0.5%.\n\n👉 Stabil = siap dikasih lebih banyak traffic."
        },
        {
          "type": "content",
          "text": "## Tanda #2: Refund Rate di Bawah 5%\n\nKalau refund di atas 5% → produknya ada masalah.\n\nScale produk bermasalah = scale masalah.\n\n👉 Fix dulu. Baru scale."
        },
        {
          "type": "content",
          "text": "## Tanda #3: Ada Repeat Buyer\n\nOrang beli produk A → beli produk B.\n\n👉 Ini tanda kualitas terjaga. Baru LAYAK di-scale."
        },
        {
          "type": "content",
          "text": "## Tanda #4: Organic Sales Masih Jalan\n\nTanpa ads, masih ada yang beli?\n\n👉 Artinya produk + LP + funnel sudah works. Ads tinggal boost."
        },
        {
          "type": "content",
          "text": "## Tanda #5: Customer Merekomendasikan\n\nOrang cerita ke temennya tanpa kamu minta.\n\n👉 Word of mouth = tanda ultimate. Scale dengan ads = rocket fuel."
        },
        {
          "type": "cta",
          "text": "## Berapa tanda yang udah kamu penuhi?\n\nComment **\"DIGITAL\"** buat checklist scaling.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Scale terlalu cepat = buang uang. Scale di waktu yang tepat = rocket fuel.\n\nCek 5 tanda ini dulu.\n\nComment DIGITAL 👇\n\n#scaling #produkdigital #bisnisdigital #growthstrategy"
    },
    {
      "day": 16,
      "date": "2026-05-29",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI untuk Email Marketing — Open Rate 40 Persen",
      "topic": "AI Email Advanced",
      "prefix": "ai-untuk-email-marketing---open-rate-40-persen-20260529",
      "slides": [
        {
          "type": "hook",
          "emoji": "📧",
          "text": "# Open rate email kamu berapa?\n\n## 15%? 20%?\n\nAku dapat 40%. Ini rahasianya."
        },
        {
          "type": "content",
          "text": "## Rahasia #1: Subject Line AI-Generated\n\n\"Berikan 10 subject line untuk email tentang [topik]. Rules: max 6 kata, bikin penasaran, JANGAN clickbait. Audience: [target].\"\n\nTest 2-3 variasi. Pilih winner.\n\n👉 Subject line = 80% keputusan buka email."
        },
        {
          "type": "content",
          "text": "## Rahasia #2: Preview Text\n\n\"Preview text = kalimat yang muncul setelah subject di inbox.\"\n\n\"Buatkan preview text yang COMPLEMENT subject line [x]. Bikin makin penasaran. Max 10 kata.\"\n\n👉 Subject + preview = combo yang bikin HARUS buka."
        },
        {
          "type": "content",
          "text": "## Rahasia #3: Personalisasi\n\nBukan cuma \"Hai [Nama]\"\n\nTapi: segment audience → kirim email yang BERBEDA per segment.\n\n\"Tulis email untuk segment [sudah beli] tentang [upsell].\"\n\"Tulis email untuk segment [belum beli] tentang [nurturing].\"\n\n👉 Relevan = open."
        },
        {
          "type": "content",
          "text": "## Rahasia #4: Send Time\n\nTest kirim di:\n- Selasa/Rabu jam 9 pagi\n- Kamis jam 7 malam\n- Minggu jam 10 pagi\n\nTrack open rate. Setiap audience beda.\n\n👉 Data > asumsi."
        },
        {
          "type": "content",
          "text": "## Workflow\n\n1. AI generate 5 subject lines\n2. AI generate preview text\n3. AI draft email body\n4. Kamu edit + personalize\n5. A/B test 2 variasi\n6. Track & optimize\n\n👉 30 menit per email. 40% open rate achievable."
        },
        {
          "type": "cta",
          "text": "## SAVE strategi email ini.\n\nComment **\"AIBISNIS\"** buat template email 40% open rate.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Email marketing masih jadi channel dengan ROI tertinggi. 40% open rate bukan mimpi kalau pakai strategi yang bener.\n\nComment AIBISNIS 👇\n\n#emailmarketing #openrate #aibisnis #digitalmarketing"
    },
    {
      "day": 17,
      "date": "2026-05-30",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Affiliate Marketing untuk Produk Digital — Passive Sales Machine",
      "topic": "Affiliate",
      "prefix": "affiliate-marketing-untuk-produk-digital---passive-20260530",
      "slides": [
        {
          "type": "hook",
          "emoji": "🤝",
          "text": "# Orang lain yang jualin produkmu.\n\n## Kamu tinggal duduk.\n\nNamanya AFFILIATE MARKETING."
        },
        {
          "type": "content",
          "text": "## Konsep\n\nOrang lain promosiin produkmu.\nMereka dapat komisi per sale.\nKamu dapat sales tanpa effort marketing.\n\n👉 Win-win."
        },
        {
          "type": "content",
          "text": "## Berapa Komisi yang Fair?\n\n- Ebook/template: 30-50%\n- Course: 20-40%\n- Produk mahal: 15-30%\n\n👉 Komisi tinggi = affiliate lebih semangat promosiin."
        },
        {
          "type": "content",
          "text": "## Cara Setup\n\n1. Bikin program affiliate di Mayar/TipTip\n2. Siapkan affiliate kit (banner, copy, link)\n3. Rekrut 10-20 orang yang punya audience relevan\n4. Kasih mereka tools buat promosi\n\n👉 Setup 1x, jalan terus."
        },
        {
          "type": "content",
          "text": "## Tips: Pilih Affiliate yang TEPAT\n\n❌ Follower banyak tapi gak relevan\n✅ Follower sedikit tapi NICHE yang sama\n\n10 affiliate dengan 1000 followers niche > 1 affiliate dengan 100K random."
        },
        {
          "type": "content",
          "text": "## Hasil Realistis\n\n10 affiliate × rata-rata 5 sales/bulan × Rp99rb = Rp4.95 juta\n\nMinus komisi 40% = Rp2.97 juta PASSIVE.\n\n👉 Dan kamu gak ngapa-ngapain."
        },
        {
          "type": "cta",
          "text": "## SAVE strategi affiliate ini.\n\nComment **\"DIGITAL\"** buat template affiliate kit.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Affiliate = sales team yang kamu gak perlu gaji. Mereka dibayar berdasarkan HASIL.\n\nComment DIGITAL 👇\n\n#affiliatemarketing #produkdigital #passiveincome #salesstrategy"
    },
    {
      "day": 17,
      "date": "2026-05-30",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Pakai AI untuk Bikin Webinar yang Autopilot",
      "topic": "AI Webinar",
      "prefix": "cara-pakai-ai-untuk-bikin-webinar-yang-autopilot-20260530",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎤",
          "text": "# Webinar yang jalan SENDIRI.\n\n## Kamu rekam 1x.\n\n## Jual terus. 24/7.\n\nAI bikin ini possible."
        },
        {
          "type": "content",
          "text": "## Konsep: Evergreen Webinar\n\nRekam webinar 1x → setup replay otomatis → orang bisa nonton kapan aja → di akhir: offer produk.\n\n👉 Sales presentation yang jalan 24/7."
        },
        {
          "type": "content",
          "text": "## AI Bantu: Script\n\n\"Buatkan script webinar 45 menit tentang [topik]. Target: [audience]. Struktur:\n- 0-5 menit: hook + promise\n- 5-30 menit: 3 poin value\n- 30-40 menit: offer + demo\n- 40-45 menit: Q&A (pre-recorded)\n\nTone: conversational, energetic.\""
        },
        {
          "type": "content",
          "text": "## AI Bantu: Slides\n\nPrompt ke Gamma.app:\n\"Bikin presentasi webinar [topik]. [x] slides. Desain professional. Include data points dan visual.\"\n\n👉 Slides jadi dalam 5 menit."
        },
        {
          "type": "content",
          "text": "## AI Bantu: Follow-up\n\n\"Buatkan email sequence post-webinar:\n- Email 1 (H+0): replay link + summary\n- Email 2 (H+1): Q&A tambahan\n- Email 3 (H+2): offer + urgency\n- Email 4 (H+3): last chance\"\n\n👉 Nurturing otomatis setelah webinar."
        },
        {
          "type": "content",
          "text": "## Platform\n\n- Rekam: Zoom / Loom\n- Host: YouTube (unlisted) / EasyWebinar\n- Follow-up: MailerLite (free)\n\n👉 Total cost: bisa Rp0/bulan."
        },
        {
          "type": "cta",
          "text": "## SAVE workflow webinar ini.\n\nComment **\"AIBISNIS\"** buat template script webinar.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Webinar = highest converting content format. Rekam 1x, jual terus. AI bantu dari script sampai follow-up.\n\nComment AIBISNIS 👇\n\n#webinar #evergreenwebinar #aibisnis #salesstrategy"
    },
    {
      "day": 18,
      "date": "2026-05-31",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Meta Ads untuk Produk Digital — Budget Rp50rb per Hari",
      "topic": "Paid Ads",
      "prefix": "meta-ads-untuk-produk-digital---budget-rp50rb-per--20260531",
      "slides": [
        {
          "type": "hook",
          "emoji": "📢",
          "text": "# Budget Rp50.000/hari.\n\n## Bisa dapet berapa pembeli?\n\nIni studi kasus real."
        },
        {
          "type": "content",
          "text": "## Setup\n\n- Produk: Ebook Rp99rb\n- Budget: Rp50rb/hari = Rp1.5jt/bulan\n- Target: audience interest produk digital + AI\n- Format: carousel ads + video ads"
        },
        {
          "type": "content",
          "text": "## Hasil Bulan 1\n\n- Spend: Rp1.500.000\n- Link clicks: 1.847\n- Landing page views: 1.423\n- Purchases: 28\n- Revenue: Rp2.772.000\n\n**ROAS: 1.85x** (profit Rp1.27jt)"
        },
        {
          "type": "content",
          "text": "## Kenapa Gak Langsung Profit Besar?\n\nBulan 1 = BELAJAR.\n\nKamu belajar: audience mana yang convert, ads mana yang works, LP mana yang efektif.\n\n👉 Data ini EMAS untuk bulan 2, 3, dst."
        },
        {
          "type": "content",
          "text": "## Bulan 2 (setelah optimasi)\n\n- Spend: Rp1.500.000\n- Purchases: 51\n- Revenue: Rp5.049.000\n\n**ROAS: 3.37x** (profit Rp3.5jt)\n\n👉 Sama budget, tapi udah tau apa yang works."
        },
        {
          "type": "content",
          "text": "## Tips Mulai Ads\n\n1. Pastikan LP udah convert secara organik dulu\n2. Mulai Rp30-50rb/hari\n3. Test 3-5 variasi ads\n4. Matikan yang CTR di bawah 1% setelah 3 hari\n5. Scale yang ROAS di atas 2x"
        },
        {
          "type": "cta",
          "text": "## SAVE studi kasus ini.\n\nComment **\"DIGITAL\"** buat template ads strategy.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Rp50rb/hari bisa jadi investasi paling profitable kalau LP kamu udah siap. Jangan ads sebelum organic works.\n\nComment DIGITAL 👇\n\n#metaads #paidads #produkdigital #digitalmarketing"
    },
    {
      "day": 18,
      "date": "2026-05-31",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Prompt Framework RISEN — Output AI Selalu Konsisten",
      "topic": "Prompt Framework",
      "prefix": "prompt-framework-risen---output-ai-selalu-konsiste-20260531",
      "slides": [
        {
          "type": "hook",
          "emoji": "📐",
          "text": "# Output AI kamu GAK KONSISTEN?\n\n## Kadang bagus, kadang sampah?\n\nPakai framework RISEN. Problem solved."
        },
        {
          "type": "content",
          "text": "## R — ROLE\n\n\"Kamu adalah [role] dengan pengalaman [x] tahun di [industri].\"\n\nContoh: \"Kamu adalah email marketing specialist 8 tahun di industri e-commerce Indonesia.\"\n\n👉 Role = filter yang menentukan perspektif output."
        },
        {
          "type": "content",
          "text": "## I — INSTRUCTIONS\n\n\"Tugas kamu: [apa yang harus dilakukan]. Format: [format output]. Panjang: [batasan].\"\n\nContoh: \"Tulis email nurturing. Format: subject line + body. Max 200 kata.\"\n\n👉 Jelas dan spesifik."
        },
        {
          "type": "content",
          "text": "## S — STEPS\n\n\"Ikuti langkah ini:\n1. Mulai dengan [x]\n2. Lalu [y]\n3. Tutup dengan [z]\"\n\n👉 Step-by-step = output terstruktur."
        },
        {
          "type": "content",
          "text": "## E — EXAMPLES\n\n\"Berikut contoh yang aku suka: [contoh]. Bikin output yang mirip tapi untuk [context baru].\"\n\n👉 Contoh = shortcut ke kualitas."
        },
        {
          "type": "content",
          "text": "## N — NARROWING\n\n\"JANGAN: [yang harus dihindari]. HINDARI: [style/format yang salah]. FOKUS: [yang penting].\"\n\n👉 Batasan = output lebih fokus."
        },
        {
          "type": "content",
          "text": "## RISEN = KONSISTEN.\n\nRole + Instructions + Steps + Examples + Narrowing\n\n= Output yang SELALU bagus.\n\nBukan kadang bagus kadang jelek.\n\n👉 Master ini = master AI."
        },
        {
          "type": "cta",
          "text": "## SAVE framework RISEN.\n\nComment **\"AIBISNIS\"** buat template RISEN per use case.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Framework RISEN membuat output AI kamu konsisten. Gak lagi \"coba-coba\" yang kadang berhasil kadang gagal.\n\nComment AIBISNIS 👇\n\n#risen #promptframework #aibisnis #aimastery"
    },
    {
      "day": 19,
      "date": "2026-06-01",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Tripwire Offer yang Convert 30 Persen",
      "topic": "Tripwire",
      "prefix": "cara-bikin-tripwire-offer-yang-convert-30-persen-20260601",
      "slides": [
        {
          "type": "hook",
          "emoji": "🪤",
          "text": "# 30% orang yang download gratisan\n\n## langsung BELI produk berbayar.\n\nRahasia-nya? Tripwire offer."
        },
        {
          "type": "content",
          "text": "## Apa itu Tripwire?\n\nProduk murah (Rp19-49rb) yang ditawarkan SEGERA setelah orang download lead magnet gratis.\n\n\"Terima kasih! Mau upgrade ke versi lengkap? Cuma Rp29rb (24 jam only).\""
        },
        {
          "type": "content",
          "text": "## Kenapa Convert Tinggi?\n\nPsikologi: orang yang BARU SAJA ambil action (download gratis) punya momentum.\n\nMereka udah \"bergerak\" → lebih mudah ambil action lagi.\n\n👉 Strike while the iron is hot."
        },
        {
          "type": "content",
          "text": "## Contoh Tripwire\n\nLead magnet: \"5 Prompt AI Gratis\"\nTripwire: \"Mau 50 prompt lengkap + video tutorial? Cuma Rp29rb (biasanya Rp99rb)\"\n\n👉 Upgrade natural dari yang gratis."
        },
        {
          "type": "content",
          "text": "## Setup Simpel\n\n1. Thank you page setelah download\n2. Di page itu: tripwire offer\n3. Countdown timer 24 jam\n4. 1 tombol beli\n\n👉 Gak perlu LP terpisah. Thank you page cukup."
        },
        {
          "type": "content",
          "text": "## Angka Realistis\n\n100 download gratis → 25-35 beli tripwire.\n\n35 × Rp29rb = Rp1.015.000 dari orang yang tadinya cuma mau gratisan.\n\n👉 Funding untuk ads kamu."
        },
        {
          "type": "cta",
          "text": "## SAVE strategi tripwire ini.\n\nComment **\"DIGITAL\"** buat template tripwire offer.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Tripwire = cara mengubah orang yang cuma mau gratisan jadi pembeli. 30% conversion bukan mimpi.\n\nComment DIGITAL 👇\n\n#tripwire #salesfunnel #produkdigital #conversionstrategy"
    },
    {
      "day": 19,
      "date": "2026-06-01",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Pakai AI untuk Competitive Intelligence",
      "topic": "AI Competitive Intel",
      "prefix": "cara-pakai-ai-untuk-competitive-intelligence-20260601",
      "slides": [
        {
          "type": "hook",
          "emoji": "🕵️",
          "text": "# Tau PERSIS apa yang kompetitor kamu lakuin.\n\n## Legal. Ethical.\n\nPakai AI untuk competitive intelligence."
        },
        {
          "type": "content",
          "text": "## Step 1: Map Kompetitor\n\n\"Identifikasi 5-10 kompetitor di niche [x] Indonesia. Untuk masing-masing: nama, platform utama, jenis produk, range harga, unique selling point.\"\n\n👉 Overview lengkap landscape kompetisi."
        },
        {
          "type": "content",
          "text": "## Step 2: Analisa Konten Mereka\n\nCopy 10 caption terbaik kompetitor → paste ke AI:\n\"Analisa 10 caption ini. Pola apa yang muncul? Hook type apa yang paling sering? Tone apa yang dipakai? Apa yang bisa aku adopt?\"\n\n👉 Belajar dari yang sudah works."
        },
        {
          "type": "content",
          "text": "## Step 3: Gap Analysis\n\n\"Berdasarkan analisa kompetitor, apa yang BELUM mereka cover? Apa complaint customer mereka? Apa yang bisa aku tawarkan LEBIH BAIK?\"\n\n👉 Gap = opportunity kamu."
        },
        {
          "type": "content",
          "text": "## Step 4: Positioning\n\n\"Berdasarkan competitive landscape, sarankan positioning yang unik untuk bisnis aku. Apa yang bikin aku BEDA? Bagaimana cara komunikasikan diferensiasi ini?\"\n\n👉 Dari data → strategi."
        },
        {
          "type": "content",
          "text": "## Ethics Note\n\nINI BUKAN tentang copy kompetitor.\nINI TENTANG understand landscape → temukan celah → jadi LEBIH BAIK.\n\n👉 Learn from competition. Don't copy competition."
        },
        {
          "type": "cta",
          "text": "## Lakuin competitive intelligence HARI INI.\n\nComment **\"AIBISNIS\"** buat template analisa kompetitor.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Tau apa yang kompetitor lakuin bukan curang. Itu SMART. Yang penting: learn, don't copy.\n\nComment AIBISNIS 👇\n\n#competitiveintelligence #risetpasar #aibisnis #strategibisnis"
    },
    {
      "day": 20,
      "date": "2026-06-02",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "SOP Bisnis Produk Digital 1 Orang yang Bisa Scale",
      "topic": "Operations",
      "prefix": "sop-bisnis-produk-digital-1-orang-yang-bisa-scale-20260602",
      "slides": [
        {
          "type": "hook",
          "emoji": "📋",
          "text": "# Bisnis 1 orang\n\n## tapi perform kayak tim 5 orang.\n\nIni SOP-nya."
        },
        {
          "type": "content",
          "text": "## Senin: Content Day\n\nBatch bikin konten 1 minggu.\n- Draft pakai AI (1 jam)\n- Edit + personal touch (1 jam)\n- Desain di Canva (1 jam)\n- Schedule semua\n\n👉 3 jam. Konten 1 minggu beres."
        },
        {
          "type": "content",
          "text": "## Selasa-Rabu: Product Day\n\nFokus improve atau bikin produk.\n- Update ebook berdasarkan feedback\n- Bikin bonus baru\n- Develop produk berikutnya\n\n👉 Deep work. Gak ada distraction."
        },
        {
          "type": "content",
          "text": "## Kamis: Marketing Day\n\nOptimasi LP, review ads, kirim email.\n- Check analytics (30 menit)\n- Optimasi yang perform jelek\n- Nulis email newsletter\n\n👉 Data-driven improvement."
        },
        {
          "type": "content",
          "text": "## Jumat: Customer Day\n\nRespond DM, handle pertanyaan, minta testimoni.\n- Batch respond semua (1 jam)\n- Follow up pembeli (30 menit)\n- Request testimoni (15 menit)\n\n👉 Customer happy = repeat buyer."
        },
        {
          "type": "content",
          "text": "## Weekend: REST + Learn\n\nIstirahat.\nKalau mau: baca, riset, brainstorm.\nTapi jangan kerja.\n\n👉 Burnout = musuh terbesar solopreneur."
        },
        {
          "type": "cta",
          "text": "## SAVE SOP mingguan ini.\n\nComment **\"DIGITAL\"** buat template SOP detail.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Solopreneur yang sukses bukan yang kerja 24/7. Tapi yang punya SISTEM.\n\nComment DIGITAL 👇\n\n#solopreneur #sop #produkdigital #bisnisdigital #systemize"
    },
    {
      "day": 20,
      "date": "2026-06-02",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI untuk Bikin Mini Course Tanpa Rekam Video",
      "topic": "AI Text Course",
      "prefix": "ai-untuk-bikin-mini-course-tanpa-rekam-video-20260602",
      "slides": [
        {
          "type": "hook",
          "emoji": "📚",
          "text": "# Mini course.\n\n## Tanpa rekam video.\n## Tanpa show face.\n\nText-based course. Pakai AI."
        },
        {
          "type": "content",
          "text": "## Apa itu Text-Based Course?\n\nCourse yang 100% teks + gambar.\nFormat: email course atau PDF interaktif.\n\nGak perlu kamera.\nGak perlu editing.\nGak perlu studio.\n\n👉 Introvert-friendly. Budget-friendly."
        },
        {
          "type": "content",
          "text": "## Format: 5-Day Email Course\n\nHari 1: [Topik dasar]\nHari 2: [Framework]\nHari 3: [Implementation]\nHari 4: [Advanced tips]\nHari 5: [Action plan + offer produk utama]\n\n👉 AI tulis draft. Kamu edit. MailerLite kirim otomatis."
        },
        {
          "type": "content",
          "text": "## AI Workflow\n\nPer hari:\n\"Tulis lesson Day [x] tentang [topik]. Target: [audience]. Format: 500-700 kata. Include: 1 framework, 1 contoh, 1 exercise. Tutup dengan teaser Day berikutnya.\"\n\n👉 5 prompts = 5 lessons."
        },
        {
          "type": "content",
          "text": "## Monetisasi\n\nOpsi 1: GRATIS (sebagai lead magnet → upsell produk utama)\nOpsi 2: Rp49-99rb (standalone mini course)\nOpsi 3: GRATIS tapi ada upsell di Day 5\n\n👉 Opsi 3 paling efektif: value dulu → trust → offer."
        },
        {
          "type": "content",
          "text": "## Timeline\n\nDay 1: Plan + outline (30 menit)\nDay 2: Draft semua lessons pakai AI (2 jam)\nDay 3: Edit + personal touch (1 jam)\nDay 4: Setup di MailerLite (1 jam)\nDay 5: LAUNCH\n\n👉 5 hari. Mini course live."
        },
        {
          "type": "cta",
          "text": "## Bikin mini course kamu minggu ini.\n\nComment **\"AIBISNIS\"** buat template email course.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Gak punya kamera? Gak mau show face? Text-based course = solusinya. AI bikin draft, kamu edit.\n\nComment AIBISNIS 👇\n\n#minicourse #emailcourse #aibisnis #digitalproduct"
    },
    {
      "day": 21,
      "date": "2026-06-03",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Digital Product Membership Rp99rb per Bulan",
      "topic": "Membership",
      "prefix": "cara-bikin-digital-product-membership-rp99rb-per-b-20260603",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔐",
          "text": "# Rp99.000/bulan × 100 member\n\n## = Rp9.9 JUTA recurring.\n\n## Setiap. Bulan.\n\nIni cara bikin membership."
        },
        {
          "type": "content",
          "text": "## Kenapa Membership > Produk Satuan\n\nProduk satuan: jual sekali, selesai.\nMembership: jual sekali, dapet uang SETIAP BULAN.\n\n👉 Recurring revenue = bisnis yang predictable."
        },
        {
          "type": "content",
          "text": "## Format Membership Simpel\n\n- Konten eksklusif mingguan\n- Template/prompt baru setiap bulan\n- Grup diskusi\n- Monthly Q&A session\n\n👉 Gak perlu bikin course. Cukup KONSISTEN kasih value."
        },
        {
          "type": "content",
          "text": "## Pricing Sweet Spot\n\nRp49-99rb/bulan = sweet spot Indonesia.\n\nCukup murah buat \"kenapa gak?\"\nCukup mahal buat filter yang serius."
        },
        {
          "type": "content",
          "text": "## Retensi: Kunci Membership\n\nAkuisisi member baru itu mahal.\nRetain member yang ada itu murah.\n\n👉 Fokus bikin member STAY:\n- Value konsisten\n- Komunitas yang aktif\n- Update berkala"
        },
        {
          "type": "content",
          "text": "## Roadmap Realistic\n\n- Bulan 1-2: 10-20 member (dari audience existing)\n- Bulan 3-6: 30-60 member (konten + referral)\n- Bulan 6-12: 80-150 member\n\n100 member × Rp99rb = Rp9.9jt/bulan. EVERY MONTH."
        },
        {
          "type": "cta",
          "text": "## Tertarik bikin membership?\n\nComment **\"DIGITAL\"** buat template membership framework.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Recurring revenue = bisnis yang gak dimulai dari nol setiap bulan. Membership adalah cara termudah.\n\nComment DIGITAL 👇\n\n#membership #recurringrevenue #produkdigital #bisnisdigital"
    },
    {
      "day": 21,
      "date": "2026-06-03",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Bikin AI Dashboard Tracking Bisnis",
      "topic": "AI Dashboard",
      "prefix": "cara-bikin-ai-dashboard-tracking-bisnis-20260603",
      "slides": [
        {
          "type": "hook",
          "emoji": "📊",
          "text": "# Semua data bisnis kamu\n\n## dalam 1 dashboard.\n\nAI yang bikin. Gratis."
        },
        {
          "type": "content",
          "text": "## Masalah\n\nData dimana-mana:\n- Sales di payment platform\n- Followers di IG\n- Email di MailerLite\n- Ads di Meta\n\n👉 Gak ada 1 tempat untuk lihat KESELURUHAN."
        },
        {
          "type": "content",
          "text": "## Solusi: AI + Notion\n\n1. Bikin template Notion:\nPrompt: \"Buatkan template Notion dashboard untuk tracking bisnis produk digital. Include: revenue tracker, content calendar, customer database, KPI tracker.\"\n\n👉 AI design. Kamu implement di Notion (gratis)."
        },
        {
          "type": "content",
          "text": "## KPI yang Harus Di-track\n\n- Revenue harian/mingguan/bulanan\n- LP traffic + conversion rate\n- Email subscriber growth\n- Konten performance (save, share, reach)\n- Customer satisfaction (testimoni, refund rate)\n\n👉 What gets measured gets improved."
        },
        {
          "type": "content",
          "text": "## Weekly Review Routine\n\nSetiap Jumat, copy data ke AI:\n\"Ini data minggu ini: [data]. Bandingkan dengan minggu lalu. Apa yang improve? Apa yang decline? 3 action items untuk minggu depan?\"\n\n👉 15 menit review. Data-driven decisions."
        },
        {
          "type": "cta",
          "text": "## SAVE template dashboard ini.\n\nComment **\"AIBISNIS\"** buat Notion template dashboard.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Bisnis tanpa dashboard = berjalan buta. AI bisa bantu setup dashboard dalam 1 jam.\n\nComment AIBISNIS 👇\n\n#dashboard #datadriven #aibisnis #notiontips"
    },
    {
      "day": 22,
      "date": "2026-06-04",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Testimoni Video yang Lebih Powerful dari Teks",
      "topic": "Video Testimonial",
      "prefix": "cara-bikin-testimoni-video-yang-lebih-powerful-dar-20260604",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎥",
          "text": "# Testimoni teks: \"Bagus banget!\"\n\n## Testimoni video: bikin orang NANGIS mau beli.\n\nBeda level."
        },
        {
          "type": "content",
          "text": "## Kenapa Video > Teks\n\nTeks bisa di-fake.\nVideo susah di-fake.\n\nOrang lihat ekspresi, nada suara, emosi.\n\n👉 Trust level: teks 3/10. Video 9/10."
        },
        {
          "type": "content",
          "text": "## Script untuk Customer\n\nMinta mereka jawab 3 pertanyaan:\n\n1. \"Sebelum pakai [produk], situasi kamu gimana?\"\n2. \"Setelah pakai, apa yang berubah?\"\n3. \"Kamu recommend ini ke siapa?\"\n\n👉 Before → After → Recommendation. Natural."
        },
        {
          "type": "content",
          "text": "## Tips Rekam\n\n- HP aja cukup\n- Durasi 30-60 detik\n- Gak perlu editing fancy\n- RAW = lebih authentic\n\n👉 Makin \"amatir\" tampilannya = makin dipercaya."
        },
        {
          "type": "content",
          "text": "## Dimana Taruh\n\n- LP: di atas tombol beli\n- Story highlights: \"Kata Mereka\"\n- Ads: sebagai creative utama\n- Email: embed link\n\n👉 Video testimoni = conversion booster terkuat."
        },
        {
          "type": "cta",
          "text": "## Minta 3 customer kamu rekam video HARI INI.\n\nComment **\"DIGITAL\"** buat template request video testimoni.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "1 video testimoni 30 detik > 10 testimoni teks. Karena video gak bisa di-fake.\n\nComment DIGITAL 👇\n\n#videotestimonial #socialproof #produkdigital #conversionboost"
    },
    {
      "day": 22,
      "date": "2026-06-04",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI untuk Bikin Brand Voice Guide yang Konsisten",
      "topic": "AI Branding",
      "prefix": "ai-untuk-bikin-brand-voice-guide-yang-konsisten-20260604",
      "slides": [
        {
          "type": "hook",
          "emoji": "🗣️",
          "text": "# Konten kamu kadang formal,\n# kadang casual, kadang random.\n\n## Gak konsisten?\n\nKamu butuh BRAND VOICE GUIDE."
        },
        {
          "type": "content",
          "text": "## Apa itu Brand Voice?\n\nCara brand kamu \"ngomong.\"\n\nApple: clean, minimalis, confident.\nWendy's: sarcastic, bold, funny.\n\nKamu? ...kalau gak bisa jawab = masalah.\n\n👉 Brand voice = personality bisnis kamu."
        },
        {
          "type": "content",
          "text": "## AI Bikin Brand Voice Guide\n\nPrompt: \"Analisa 10 caption terbaik aku: [paste 10 caption]. Identifikasi: tone, vocabulary yang sering dipakai, pola kalimat, personality traits. Buatkan brand voice guide berdasarkan analisa ini.\"\n\n👉 AI extract pattern dari konten terbaik kamu."
        },
        {
          "type": "content",
          "text": "## Isi Brand Voice Guide\n\n1. Tone: [casual/professional/blak-blakan]\n2. DO: [kata-kata yang dipakai]\n3. DON'T: [kata-kata yang dihindari]\n4. Personality: [3 traits]\n5. Contoh kalimat: [5 contoh]\n\n👉 Upload ini ke AI setiap kali minta bikin konten."
        },
        {
          "type": "content",
          "text": "## Implementasi\n\nSetiap prompt mulai dengan:\n\"Gunakan brand voice guide ini: [paste guide]. Sekarang buatkan [konten].\"\n\n👉 Output AI jadi KONSISTEN dengan brand kamu.\nGak lagi random."
        },
        {
          "type": "cta",
          "text": "## Bikin brand voice guide HARI INI.\n\nComment **\"AIBISNIS\"** buat template brand voice.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Brand voice yang konsisten = brand yang diingat. AI bisa bantu extract dan maintain voice kamu.\n\nComment AIBISNIS 👇\n\n#brandvoice #branding #aibisnis #consistentcontent"
    },
    {
      "day": 23,
      "date": "2026-06-05",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Customer Avatar Worksheet — Tau Persis Siapa yang Akan Beli",
      "topic": "Customer Research",
      "prefix": "customer-avatar-worksheet---tau-persis-siapa-yang--20260605",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎯",
          "text": "# Kamu jualan tapi gak tau\n\n## SIAPA yang kamu ajak bicara?\n\nPantas konversinya jelek."
        },
        {
          "type": "content",
          "text": "## Apa itu Customer Avatar?\n\n\"Profil DETAIL\" 1 orang ideal customer kamu.\n\nBukan \"semua orang.\"\nBukan \"usia 18-45.\"\n\nTapi: \"Rina, 28 tahun, freelance designer yang frustasi gak bisa dapet client stabil.\""
        },
        {
          "type": "content",
          "text": "## 5 Pertanyaan Wajib\n\n1. Apa masalah TERBESAR mereka?\n2. Apa yang sudah mereka COBA tapi gagal?\n3. Apa OUTCOME impian mereka?\n4. Apa KETAKUTAN terbesar mereka?\n5. Dimana mereka NONGKRONG online?\n\n👉 Jawab ini = tau persis cara bicara ke mereka."
        },
        {
          "type": "content",
          "text": "## Cara Riset (Tanpa Survey)\n\n- Baca komentar di konten kompetitor\n- Baca review produk sejenis di marketplace\n- Baca diskusi di forum/grup Facebook\n- Lihat pertanyaan yang sering muncul di DM kamu\n\n👉 Jawaban mereka = bahasa marketing kamu."
        },
        {
          "type": "content",
          "text": "## Contoh Avatar\n\nNama: Andi\nUsia: 30\nPekerjaan: karyawan mau resign\nMasalah: mau income tambahan tapi gak punya waktu\nSudah coba: freelance, dropship (gagal)\nImpian: passive income Rp5jt/bulan\n\n👉 SEMUA copy kamu ditulis untuk ANDI."
        },
        {
          "type": "cta",
          "text": "## Bikin customer avatar kamu SEKARANG.\n\nComment **\"DIGITAL\"** buat template worksheet avatar.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Kalau kamu bicara ke semua orang, kamu bicara ke gak ada orang. Customer avatar = fokus.\n\nComment DIGITAL 👇\n\n#customeravatar #targetaudience #produkdigital #marketingresearch"
    },
    {
      "day": 23,
      "date": "2026-06-05",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Pakai AI untuk Cold Outreach yang Gak Diabaikan",
      "topic": "AI Outreach",
      "prefix": "cara-pakai-ai-untuk-cold-outreach-yang-gak-diabaik-20260605",
      "slides": [
        {
          "type": "hook",
          "emoji": "📩",
          "text": "# Cold DM / email kamu\n\n## selalu diabaikan?\n\nKarena kamu kirim yang SAMA ke semua orang.\n\nAI bisa bikin setiap pesan PERSONAL."
        },
        {
          "type": "content",
          "text": "## Masalah Cold Outreach\n\n\"Hai kak! Aku punya produk bagus nih...\"\n\nDelete.\n\nKenapa? Karena:\n- Generic\n- Gak personal\n- Langsung jualan\n- Copy-paste yang ketahuan"
        },
        {
          "type": "content",
          "text": "## AI-Powered Personalisasi\n\n\"Aku mau DM [nama]. Dia [deskripsi/bio]. Konten terakhirnya tentang [topik]. Buatkan DM yang: reference konten mereka, kasih value, baru introduce diri. Max 4 kalimat.\"\n\n👉 Setiap DM UNIK. Terasa genuine."
        },
        {
          "type": "content",
          "text": "## Template yang Works\n\nKalimat 1: Reference konten spesifik mereka\nKalimat 2: 1 insight/value tentang topik itu\nKalimat 3: Introduce diri singkat\nKalimat 4: Soft ask (bukan jualan)\n\n👉 4 kalimat. Gak lebih. Gak kurang."
        },
        {
          "type": "content",
          "text": "## Batch Process\n\n10 target → paste bio masing-masing ke AI → generate 10 personal DM → kirim.\n\nTotal waktu: 30 menit untuk 10 outreach yang PERSONAL.\n\n👉 Vs 3 jam kalau nulis manual."
        },
        {
          "type": "cta",
          "text": "## Coba outreach 5 orang HARI INI.\n\nComment **\"AIBISNIS\"** buat template cold outreach.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Cold outreach yang personal = response rate 5-10x lebih tinggi dari copy-paste. AI bikin personalisasi effortless.\n\nComment AIBISNIS 👇\n\n#coldoutreach #dmmarketing #aibisnis #networking"
    },
    {
      "day": 24,
      "date": "2026-06-06",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Update Produk Digital — Cara Bikin Pembeli Lama Beli Lagi",
      "topic": "Product Update",
      "prefix": "update-produk-digital---cara-bikin-pembeli-lama-be-20260606",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔄",
          "text": "# Pembeli lama kamu = goldmine.\n\n## Tapi kamu abaikan mereka.\n\nIni cara bikin mereka BELI LAGI."
        },
        {
          "type": "content",
          "text": "## Fakta\n\nProbabilitas jual ke customer baru: 5-20%.\nProbabilitas jual ke customer lama: 60-70%.\n\n👉 Customer lama = revenue termudah yang kamu abaikan."
        },
        {
          "type": "content",
          "text": "## Strategi #1: Product Update\n\n\"Ebook kamu udah di-update! Versi 2.0 dengan 5 bab baru.\"\n\n- Customer lama: akses gratis (goodwill)\n- Ini jadi alasan promosi BARU\n\n👉 Relaunch tanpa bikin produk baru."
        },
        {
          "type": "content",
          "text": "## Strategi #2: Exclusive Offer\n\n\"Karena kamu udah beli [produk A], aku kasih diskon 50% untuk [produk B].\"\n\n👉 Mereka udah trust. Barrier to buy = rendah."
        },
        {
          "type": "content",
          "text": "## Strategi #3: Ask for Input\n\n\"Aku lagi bikin produk baru. Sebagai customer, kamu mau aku bahas apa?\"\n\n👉 Mereka merasa dilibatkan = lebih loyal = lebih mau beli."
        },
        {
          "type": "content",
          "text": "## Action Plan\n\n1. Kirim email ke semua pembeli lama\n2. Kasih update/bonus gratis\n3. Tawarkan produk baru dengan diskon eksklusif\n4. Minta feedback dan testimoni\n\n👉 Lakukan ini SETIAP BULAN."
        },
        {
          "type": "cta",
          "text": "## Email pembeli lama kamu HARI INI.\n\nComment **\"DIGITAL\"** buat template re-engagement email.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Customer lama bukan masa lalu. Mereka masa depan revenue kamu.\n\nComment DIGITAL 👇\n\n#customerretention #produkdigital #bisnisdigital #repeatbuyer"
    },
    {
      "day": 24,
      "date": "2026-06-06",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Delegation Framework — Tau Kapan Pakai AI dan Kapan Gak",
      "topic": "AI Framework",
      "prefix": "ai-delegation-framework---tau-kapan-pakai-ai-dan-k-20260606",
      "slides": [
        {
          "type": "hook",
          "emoji": "⚖️",
          "text": "# Gak SEMUA task harus pakai AI.\n\n## Dan gak semua harus manual.\n\nIni framework kapan pakai, kapan gak."
        },
        {
          "type": "content",
          "text": "## Quadrant 1: AI WAJIB\n\n- Draft konten\n- Riset market\n- Brainstorm ide\n- Generate variasi copy\n- Analisa data\n\n👉 Task repetitif + pattern-based = AI domain."
        },
        {
          "type": "content",
          "text": "## Quadrant 2: AI BANTU, Kamu Finalize\n\n- Sales copy (AI draft, kamu edit)\n- Email marketing (AI structure, kamu personalize)\n- Strategi bisnis (AI analisa, kamu decide)\n\n👉 Kolaborasi. Best of both."
        },
        {
          "type": "content",
          "text": "## Quadrant 3: Kamu HARUS Manual\n\n- Relationship building (DM personal, networking)\n- Customer support yang sensitif\n- Strategic decisions\n- Content yang butuh deep personal story\n\n👉 Human touch gak bisa di-AI-kan."
        },
        {
          "type": "content",
          "text": "## Quadrant 4: Skip / Outsource\n\n- Task yang AI gak bisa DAN kamu gak perlu\n- Admin yang bisa di-outsource\n- Task yang gak generate revenue\n\n👉 Jangan habiskan waktu disini."
        },
        {
          "type": "content",
          "text": "## Action: Audit Waktu Kamu\n\nList semua task minggu ini.\nMasukin ke 4 quadrant.\n\nBerapa % di Q1-Q2 (AI bisa bantu)?\nBerapa % di Q3 (harus manual)?\nBerapa % di Q4 (skip/outsource)?\n\n👉 Goal: maximize Q1-Q2, protect Q3, eliminate Q4."
        },
        {
          "type": "cta",
          "text": "## SAVE framework ini.\n\nComment **\"AIBISNIS\"** buat template time audit.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI bukan jawaban untuk SEMUA. Tapi AI IS jawaban untuk BANYAK hal. Framework ini bantu kamu tau bedanya.\n\nComment AIBISNIS 👇\n\n#aidelegation #framework #aibisnis #productivitas"
    },
    {
      "day": 25,
      "date": "2026-06-07",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Evergreen Funnel yang Jual 24 Jam 7 Hari",
      "topic": "Evergreen Funnel",
      "prefix": "cara-bikin-evergreen-funnel-yang-jual-24-jam-7-har-20260607",
      "slides": [
        {
          "type": "hook",
          "emoji": "💤",
          "text": "# Jam 3 pagi.\n\n## Kamu tidur.\n\n## Ada notif: \"Kamu menerima pembayaran Rp99.000.\"\n\nIni namanya evergreen funnel."
        },
        {
          "type": "content",
          "text": "## Apa itu Evergreen Funnel?\n\nFunnel yang SELALU jalan.\nGak tergantung launch.\nGak tergantung kamu online.\n\n24/7. Auto. Consistent revenue."
        },
        {
          "type": "content",
          "text": "## Komponen\n\n1. Traffic source (konten/ads)\n2. Lead magnet → email capture\n3. Email sequence (otomatis)\n4. Sales page (selalu live)\n5. Payment (auto)\n6. Delivery (auto)\n\n👉 Setup 1x. Optimize terus."
        },
        {
          "type": "content",
          "text": "## Email Sequence Evergreen\n\nDay 0: Welcome + lead magnet\nDay 1: Value email\nDay 2: Story + lesson\nDay 3: Social proof\nDay 4: Offer + urgency\nDay 5: Last chance\n\n👉 Setiap subscriber masuk → dapat sequence ini otomatis."
        },
        {
          "type": "content",
          "text": "## Urgency yang Evergreen?\n\n\"Harga spesial ini cuma berlaku 48 jam setelah kamu join.\"\n\nGunakan countdown timer yang personalized.\n\n👉 Setiap orang punya deadline sendiri. Always fresh urgency."
        },
        {
          "type": "content",
          "text": "## Hasil Realistis\n\n50 email subscriber/minggu × 5% conversion rate × Rp99rb\n= 2-3 sales/minggu = Rp800rb-1.2jt/minggu\n= **Rp3-5 juta/bulan PASSIVE**\n\n👉 Tanpa launch. Tanpa live. Auto."
        },
        {
          "type": "cta",
          "text": "## SAVE blueprint evergreen funnel ini.\n\nComment **\"DIGITAL\"** buat template email sequence.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Evergreen funnel = mesin uang yang jalan 24/7. Setup effort besar di awal, passive setelahnya.\n\nComment DIGITAL 👇\n\n#evergreenfunnel #passiveincome #produkdigital #emailmarketing"
    },
    {
      "day": 25,
      "date": "2026-06-07",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Cara Bikin AI yang Nulis Seperti Kamu",
      "topic": "AI Voice Training",
      "prefix": "cara-bikin-ai-yang-nulis-seperti-kamu-20260607",
      "slides": [
        {
          "type": "hook",
          "emoji": "✨",
          "text": "# AI nulis kayak ROBOT?\n\n## Itu karena kamu belum \"ajarin\" dia GAYA kamu.\n\nIni cara bikin AI nulis persis kayak kamu."
        },
        {
          "type": "content",
          "text": "## Step 1: Kumpulkan 10-20 Tulisan Terbaik Kamu\n\nCaption, email, ebook excerpt — yang paling \"kamu banget.\"\n\n👉 Ini training data untuk AI."
        },
        {
          "type": "content",
          "text": "## Step 2: Minta AI Analisa\n\n\"Analisa 15 tulisan ini. Identifikasi:\n1. Pola kalimat favorit\n2. Kata-kata yang sering muncul\n3. Cara membuka dan menutup\n4. Tone dan personality\n5. Struktur paragraf\"\n\n👉 AI extract DNA tulisan kamu."
        },
        {
          "type": "content",
          "text": "## Step 3: Bikin Writing Style Guide\n\n\"Berdasarkan analisa, buatkan writing style guide. Include: do's, don'ts, vocabulary list, tone description, contoh kalimat khas.\"\n\n👉 Ini \"personality file\" kamu."
        },
        {
          "type": "content",
          "text": "## Step 4: Attach ke Setiap Prompt\n\n\"Gunakan style guide ini: [paste guide]. Sekarang tulis [konten] dengan gaya yang sama.\"\n\nAtau upload ke Claude Projects / ChatGPT Custom Instructions.\n\n👉 AI sekarang nulis kayak KAMU."
        },
        {
          "type": "content",
          "text": "## Before vs After\n\nTanpa training: \"Dalam era digital saat ini...\" (robot)\nDengan training: \"Jujur? Aku dulu juga skeptis...\" (kamu)\n\n👉 Bedanya: terasa MANUSIA vs terasa MESIN."
        },
        {
          "type": "cta",
          "text": "## Ajarin AI gaya nulis kamu HARI INI.\n\nComment **\"AIBISNIS\"** buat template voice training.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI yang nulis kayak kamu = konten yang scale TANPA kehilangan authenticity.\n\nComment AIBISNIS 👇\n\n#aiwriting #voicetraining #authenticity #aibisnis"
    },
    {
      "day": 26,
      "date": "2026-06-08",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Kolaborasi dengan Creator Lain — Shortcut Growth Tercepat",
      "topic": "Collaboration",
      "prefix": "kolaborasi-dengan-creator-lain---shortcut-growth-t-20260608",
      "slides": [
        {
          "type": "hook",
          "emoji": "🤝",
          "text": "# Cara tercepat grow?\n\n## Bukan konten. Bukan ads.\n\n## Kolaborasi."
        },
        {
          "type": "content",
          "text": "## Kenapa Kolaborasi > Solo\n\nKonten sendiri: reach audience KAMU saja.\nKolaborasi: reach audience KAMU + audience MEREKA.\n\n👉 1 kolaborasi = exposure ke ribuan orang baru yang RELEVAN."
        },
        {
          "type": "content",
          "text": "## Tipe Kolaborasi\n\n1. Guest post / carousel swap\n2. Joint live / Q&A\n3. Bundle produk bersama\n4. Affiliate saling promote\n5. Interview / podcast\n\n👉 Pilih yang paling cocok dengan style kamu."
        },
        {
          "type": "content",
          "text": "## Cara Approach\n\nDM template:\n\"Hai [nama]! Aku follow konten kamu dan suka banget [konten spesifik]. Aku punya ide kolaborasi yang bisa benefit audience kita berdua: [ide]. Tertarik discuss?\"\n\n👉 Spesifik. Kasih value. Gak cuma \"mau collab?\""
        },
        {
          "type": "content",
          "text": "## Tips Penting\n\n- Cari yang audience-nya OVERLAP tapi bukan kompetitor langsung\n- Mulai dari yang followernya SEJENIS, bukan yang jauh lebih besar\n- Kasih value DULUAN sebelum minta\n\n👉 Kolaborasi = relationship, bukan transaksi."
        },
        {
          "type": "cta",
          "text": "## DM 3 creator yang kamu admire HARI INI.\n\nComment **\"DIGITAL\"** buat template DM kolaborasi.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "1 kolaborasi yang tepat bisa kasih kamu growth yang butuh 6 bulan konten solo.\n\nComment DIGITAL 👇\n\n#kolaborasi #collaboration #instagramgrowth #produkdigital"
    },
    {
      "day": 26,
      "date": "2026-06-08",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI untuk Bikin Webinar Autopilot",
      "topic": "AI Webinar",
      "prefix": "ai-untuk-bikin-webinar-autopilot-20260608",
      "slides": [
        {
          "type": "hook",
          "emoji": "🎤",
          "text": "# Webinar yang jalan SENDIRI.\n\n## Rekam 1x. Jual terus. 24/7.\n\nAI bikin ini possible."
        },
        {
          "type": "content",
          "text": "## Evergreen Webinar\n\nRekam 1x → replay otomatis → offer di akhir.\n\n👉 Sales presentation 24/7."
        },
        {
          "type": "content",
          "text": "## AI Script\n\n\"Script webinar 45 menit [topik]. 0-5: hook. 5-30: 3 poin value. 30-40: offer. 40-45: Q&A.\"\n\n👉 45 menit script dalam 10 menit."
        },
        {
          "type": "content",
          "text": "## AI Slides + Follow-up\n\nGamma.app untuk slides. AI untuk 4-email post-webinar sequence.\n\n👉 Replay → value → offer → last chance."
        },
        {
          "type": "content",
          "text": "## Platform: Zoom + YouTube unlisted + MailerLite.\n\nTotal cost: Rp0.\n\n👉 Highest converting format. Zero ongoing cost."
        },
        {
          "type": "cta",
          "text": "## SAVE workflow webinar.\n\nComment **\"AIBISNIS\"** buat template script.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Webinar = highest converting format. Rekam 1x, jual terus. AI bantu dari script sampai follow-up.\n\nComment AIBISNIS 👇\n\n#webinar #aibisnis #evergreenwebinar"
    },
    {
      "day": 27,
      "date": "2026-06-09",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Black Friday Strategy untuk Produk Digital",
      "topic": "Promo Strategy",
      "prefix": "black-friday-strategy-untuk-produk-digital-20260609",
      "slides": [
        {
          "type": "hook",
          "emoji": "🖤",
          "text": "# Black Friday?\n\n## Kamu gak harus tunggu November.\n\nBikin \"Black Friday\" kamu sendiri. Kapan aja."
        },
        {
          "type": "content",
          "text": "## Konsep: Flash Sale Event\n\nBuat event promo BESAR 1-3 hari.\nDiskon 40-60%. Scarcity real.\n\n\"Anniversary Sale\"\n\"Birthday Sale\"\n\"10K Followers Sale\"\n\n👉 Event = alasan promo tanpa keliatan desperate."
        },
        {
          "type": "content",
          "text": "## Pre-Event (7 hari)\n\n- Teaser content: \"Something BIG is coming\"\n- Countdown di story\n- Waiting list untuk akses duluan\n\n👉 Build anticipation. Jangan tiba-tiba aja."
        },
        {
          "type": "content",
          "text": "## During Event (1-3 hari)\n\n- ALL products discounted\n- Bundle deals eksklusif\n- Bonus khusus event\n- Story setiap 2-3 jam\n\n👉 Treat this as your BIGGEST launch."
        },
        {
          "type": "content",
          "text": "## Post-Event\n\n- \"Terima kasih!\" content\n- Share angka (transparan)\n- Kumpulkan testimoni baru\n\n👉 Post-event content = content untuk event berikutnya."
        },
        {
          "type": "content",
          "text": "## Hasil Realistis\n\nEvent sale bisa generate 30-50% revenue BULANAN dalam 1-3 hari.\n\n👉 Lakukan 1x per quarter. Jangan terlalu sering (value turun)."
        },
        {
          "type": "cta",
          "text": "## SAVE strategi flash sale ini.\n\nComment **\"DIGITAL\"** buat template event sale.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Bikin event sale kamu sendiri. Gak harus nunggu tanggal kembar atau Black Friday.\n\nComment DIGITAL 👇\n\n#flashsale #promostrategy #produkdigital #bisnisdigital"
    },
    {
      "day": 27,
      "date": "2026-06-09",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Cold Outreach yang Gak Diabaikan",
      "topic": "AI Outreach",
      "prefix": "ai-cold-outreach-yang-gak-diabaikan-20260609",
      "slides": [
        {
          "type": "hook",
          "emoji": "📩",
          "text": "# Cold DM kamu selalu diabaikan?\n\n## Karena kirim yang SAMA ke semua.\n\nAI bikin setiap pesan PERSONAL."
        },
        {
          "type": "content",
          "text": "## Masalah\n\n\"Hai kak! Aku punya produk...\" → Delete.\n\nGeneric. Gak personal. Langsung jualan."
        },
        {
          "type": "content",
          "text": "## AI Personalisasi\n\n\"DM [nama]. Bio: [x]. Konten terakhir: [y]. Reference konten mereka, kasih value, baru intro. Max 4 kalimat.\"\n\n👉 Setiap DM UNIK."
        },
        {
          "type": "content",
          "text": "## Template\n\nKalimat 1: Reference konten spesifik mereka.\nKalimat 2: 1 insight value.\nKalimat 3: Intro singkat.\nKalimat 4: Soft ask.\n\n👉 4 kalimat. Gak lebih."
        },
        {
          "type": "content",
          "text": "## Batch: 10 target → paste bio → 10 personal DM → kirim.\n\n30 menit untuk 10 outreach PERSONAL.\n\n👉 Response rate 5-10x lebih tinggi dari copy-paste."
        },
        {
          "type": "cta",
          "text": "## Coba outreach 5 orang hari ini.\n\nComment **\"AIBISNIS\"** buat template outreach.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Cold outreach personal = response rate 5-10x lebih tinggi. AI bikin personalisasi effortless.\n\nComment AIBISNIS 👇\n\n#coldoutreach #networking #aibisnis"
    },
    {
      "day": 28,
      "date": "2026-06-10",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Produk Digital yang Jual Dirinya Sendiri",
      "topic": "Product Market Fit",
      "prefix": "cara-bikin-produk-digital-yang-jual-dirinya-sendir-20260610",
      "slides": [
        {
          "type": "hook",
          "emoji": "🧲",
          "text": "# Produk yang JUAL DIRINYA SENDIRI.\n\nGak perlu hard sell. Gak perlu ads.\n\nOrang datang sendiri."
        },
        {
          "type": "content",
          "text": "## Rahasia: Product-Market Fit\n\nKalau produk kamu PERSIS solve masalah yang orang AKTIF cari → mereka akan CARI kamu.\n\nBukan kamu yang cari mereka."
        },
        {
          "type": "content",
          "text": "## Tanda PMF\n\n- Orang share tanpa diminta\n- DM: \"ada produk tentang [x] gak?\"\n- Refund rate di bawah 2%\n- Customer jadi affiliate natural"
        },
        {
          "type": "content",
          "text": "## Cara Achieve\n\n1. Solve masalah SANGAT spesifik\n2. Deliver LEBIH dari dijanjikan\n3. Bikin experience MEMORABLE\n4. Make it shareable by design"
        },
        {
          "type": "content",
          "text": "## Contoh\n\n❌ \"Panduan Bisnis Online\" (generic)\n✅ \"Template DM Closing untuk Freelance Designer Indonesia\" (ultra spesifik)\n\nYang kedua = orang search dan NEMUIN kamu."
        },
        {
          "type": "cta",
          "text": "## Udah product-market fit?\n\nComment **\"DIGITAL\"** buat framework PMF.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Produk yang fit = marketing effortless. Produk gak fit = ads sebanyak apapun tetep struggle.\n\nComment DIGITAL 👇\n\n#productmarketfit #produkdigital #bisnisdigital"
    },
    {
      "day": 28,
      "date": "2026-06-10",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Voice Training — Bikin AI Nulis Persis Kayak Kamu",
      "topic": "AI Voice",
      "prefix": "ai-voice-training---bikin-ai-nulis-persis-kayak-ka-20260610",
      "slides": [
        {
          "type": "hook",
          "emoji": "✨",
          "text": "# AI nulis kayak ROBOT?\n\n## Belum diajarin GAYA kamu.\n\nIni cara fix-nya. Selamanya."
        },
        {
          "type": "content",
          "text": "## Step 1: Kumpulkan 10-20 tulisan terbaik kamu.\n\nCaption, email, excerpt — yang paling \"kamu banget.\""
        },
        {
          "type": "content",
          "text": "## Step 2: \"Analisa tulisan ini. Pola kalimat, kata favorit, cara buka-tutup, tone, personality.\"\n\n👉 AI extract DNA tulisan kamu."
        },
        {
          "type": "content",
          "text": "## Step 3: \"Bikin writing style guide: do's, don'ts, vocabulary, contoh kalimat khas.\"\n\n👉 Personality file kamu."
        },
        {
          "type": "content",
          "text": "## Step 4: Attach ke setiap prompt atau upload ke Claude Projects.\n\nSebelum: \"Dalam era digital saat ini...\"\nSetelah: \"Jujur? Aku dulu juga skeptis...\"\n\n👉 MANUSIA vs MESIN."
        },
        {
          "type": "cta",
          "text": "## Ajarin AI gaya kamu HARI INI.\n\nComment **\"AIBISNIS\"** buat template voice training.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "AI + voice training = konten yang scale TANPA kehilangan authenticity.\n\nComment AIBISNIS 👇\n\n#aiwriting #voicetraining #authenticity #aibisnis"
    },
    {
      "day": 29,
      "date": "2026-06-11",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Cara Bikin Sistem Referral yang Bikin Customer Jadi Salesforce",
      "topic": "Referral System",
      "prefix": "cara-bikin-sistem-referral-yang-bikin-customer-jad-20260611",
      "slides": [
        {
          "type": "hook",
          "emoji": "🔗",
          "text": "# Customer kamu bisa jadi SALES TEAM gratis.\n\n## Tanpa kamu minta.\n\nNamanya referral system."
        },
        {
          "type": "content",
          "text": "## Konsep\n\nCustomer recommend → temannya beli → customer dapat reward.\n\nWord of mouth + incentive = growth engine."
        },
        {
          "type": "content",
          "text": "## Setup Simpel\n\n\"Ajak 1 temen beli → kamu dapat [bonus/diskon/produk gratis]\"\n\nReward harus WORTH IT buat mereka."
        },
        {
          "type": "content",
          "text": "## Contoh Reward\n\n- 1 referral: diskon 30% produk berikutnya\n- 3 referral: 1 produk gratis\n- 5 referral: akses VIP / mentoring session\n\n👉 Tiered reward = motivasi terus refer."
        },
        {
          "type": "content",
          "text": "## Tools\n\n- Manual: Google Form + tracking spreadsheet\n- Auto: ReferralCandy, atau fitur built-in Mayar\n\n👉 Mulai manual. Automate setelah terbukti works."
        },
        {
          "type": "content",
          "text": "## Angka\n\n100 customer × 20% yang refer × 1 referral each = 20 customer BARU.\n\nCost: Rp0 ads. Hanya reward.\n\n👉 Cheapest acquisition channel."
        },
        {
          "type": "cta",
          "text": "## Setup referral system minggu ini.\n\nComment **\"DIGITAL\"** buat template referral.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Customer yang puas = sales team terbaik. Kasih mereka alasan (reward) untuk merekomendasikan.\n\nComment DIGITAL 👇\n\n#referral #wordofmouth #produkdigital #growthstrategy"
    },
    {
      "day": 29,
      "date": "2026-06-11",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "AI Brand Voice Guide Konsisten",
      "topic": "AI Branding",
      "prefix": "ai-brand-voice-guide-konsisten-20260611",
      "slides": [
        {
          "type": "hook",
          "emoji": "🗣️",
          "text": "# Konten kadang formal, kadang casual, kadang random.\n\n## Gak konsisten?\n\nBikin BRAND VOICE GUIDE pakai AI."
        },
        {
          "type": "content",
          "text": "## Brand Voice = cara brand kamu \"ngomong.\"\n\nApple: clean, confident.\nWendy's: sarcastic, bold.\n\nKamu? Kalau gak bisa jawab = masalah."
        },
        {
          "type": "content",
          "text": "## AI Generate Guide\n\n\"Analisa 10 caption terbaik aku: [paste]. Identifikasi tone, vocabulary, pola, personality. Bikin brand voice guide.\"\n\n👉 Extract pattern dari konten terbaik."
        },
        {
          "type": "content",
          "text": "## Isi Guide\n\n1. Tone: [casual/blak-blakan]\n2. DO: [kata yang dipakai]\n3. DON'T: [kata dihindari]\n4. Personality: [3 traits]\n5. Contoh kalimat: [5 contoh]\n\n👉 Upload ke AI setiap bikin konten."
        },
        {
          "type": "content",
          "text": "## Implementasi\n\nSetiap prompt: \"Gunakan brand voice guide ini: [guide]. Sekarang buatkan [konten].\"\n\n👉 Output KONSISTEN. Gak lagi random."
        },
        {
          "type": "cta",
          "text": "## Bikin brand voice guide hari ini.\n\nComment **\"AIBISNIS\"** buat template.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "Brand voice konsisten = brand yang diingat. AI bantu extract dan maintain voice kamu.\n\nComment AIBISNIS 👇\n\n#brandvoice #consistency #aibisnis #branding"
    },
    {
      "day": 30,
      "date": "2026-06-12",
      "slot": "pagi",
      "category": "Digital Product",
      "projectTitle": "Review Bulan 2 — Yang Berubah dan Yang Harus Diperbaiki",
      "topic": "Reflection",
      "prefix": "review-bulan-2---yang-berubah-dan-yang-harus-diper-20260612",
      "slides": [
        {
          "type": "hook",
          "emoji": "🏆",
          "text": "# 60 hari.\n\n## 60 konten produk digital.\n\nApa yang berubah di bisnis kamu?"
        },
        {
          "type": "content",
          "text": "## Bulan 1: Foundation\n\nValidasi, bikin produk, LP, pricing, funnel.\n\n👉 Kamu sekarang PUNYA sistem."
        },
        {
          "type": "content",
          "text": "## Bulan 2: Advanced\n\nCopywriting, psychology, scaling, ads, membership, collaboration.\n\n👉 Kamu sekarang tau cara GROW sistem itu."
        },
        {
          "type": "content",
          "text": "## Honest Check\n\n☐ Udah punya minimal 1 produk digital?\n☐ LP udah convert?\n☐ Ada email list?\n☐ Ada 5+ testimoni?\n☐ Revenue dari produk digital?\n\nKalau belum → eksekusi. Knowledge tanpa action = 0."
        },
        {
          "type": "content",
          "text": "## Next 30 Hari: Kamu Harus\n\n1. Launch atau relaunch 1 produk\n2. Bangun email list ke 100+\n3. Setup 1 evergreen funnel\n4. Bikin 1 kolaborasi\n5. Track 3 angka kunci setiap hari"
        },
        {
          "type": "cta",
          "text": "## Comment **\"DIGITAL\"** kalau 60 hari ini bermanfaat.\n\nShare ke temen yang butuh ini.\n\n**Follow** @dinarww buat konten bulan depan.",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "60 konten. Foundation + Advanced. Sekarang satu hal: EKSEKUSI.\n\nComment DIGITAL 👇\n\n#produkdigital #60daychallenge #reflection #bisnisdigital"
    },
    {
      "day": 30,
      "date": "2026-06-12",
      "slot": "malam",
      "category": "AI Bisnis",
      "projectTitle": "Review Bulan 2 AI — Kamu Sudah Jadi AI Power User",
      "topic": "AI Reflection",
      "prefix": "review-bulan-2-ai---kamu-sudah-jadi-ai-power-user-20260612",
      "slides": [
        {
          "type": "hook",
          "emoji": "🏆",
          "text": "# 60 hari pakai AI untuk bisnis.\n\n## Kamu bukan lagi pemula.\n\nKamu sekarang AI POWER USER."
        },
        {
          "type": "content",
          "text": "## Bulan 1: Foundation\n\nPrompt engineering, tools dasar, workflow simpel.\n\n👉 Kamu belajar CARA PAKAI AI."
        },
        {
          "type": "content",
          "text": "## Bulan 2: Mastery\n\nSystem prompt, mega prompt, RISEN framework, voice training, competitive intel, automation systems.\n\n👉 Kamu belajar CARA MASTER AI."
        },
        {
          "type": "content",
          "text": "## Yang Seharusnya Berubah\n\n- Content creation: dari jam → menit\n- Customer service: 70%+ automated\n- Decision making: data-informed\n- Revenue: growing consistently\n\nKalau belum? Review dan EXECUTE."
        },
        {
          "type": "content",
          "text": "## Next Level\n\n1. Build 3 Custom GPTs/Claude Projects\n2. Setup full automation (content → email → sales)\n3. Train AI dengan voice kamu\n4. Launch AI-powered product/service\n\n👉 Dari user → creator. Dari pengguna → builder."
        },
        {
          "type": "cta",
          "text": "## Comment **\"AIBISNIS\"** kalau 60 hari ini mengubah cara kamu berbisnis.\n\nShare ke temen yang butuh ini.\n\n**Follow** @dinarww",
          "creditName": "Dinar Wahyu Wibowo",
          "socials": [
            "IG @dinarww",
            "TikTok @dinarww",
            "YT @dinarww"
          ]
        }
      ],
      "caption": "60 hari. Dari pemula ke power user. Tapi ini baru permulaan — AI terus berkembang, dan kamu harus terus adaptasi.\n\nComment AIBISNIS 👇\n\n#aibisnis #60daychallenge #aimastery #reflection"
    }
  ]
}
export default DATA;

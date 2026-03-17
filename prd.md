Sip, berarti PRD-nya kita rapikan sesuai alur real yang kamu mau:

**bukan generate ide konten dari nol**, tapi:

1. kamu sudah punya script slide per slide,
2. app membaca format input baku,
3. app otomatis mapping ke layout slide,
4. preview,
5. edit ringan,
6. export image dengan prefix unik / ZIP.

Di bawah ini aku buat versi PRD yang lebih pas.

---

# PRD — Personal Instagram Carousel Renderer

## 1. Ringkasan Produk

Aplikasi web pribadi untuk mengubah **naskah carousel yang sudah jadi** menjadi **slide visual format Instagram 4:5 (1080x1350)** dengan layout yang sudah dikunci di code.

Fokus aplikasi:

* menerima input script slide-per-slide,
* merender otomatis ke layout yang sudah ditentukan,
* menampilkan preview,
* memungkinkan edit text,
* export tiap slide menjadi image,
* download per batch dengan nama file yang rapi dan tidak tercampur.

---

## 2. Tujuan Utama

Mempercepat proses dari **naskah carousel → visual siap upload** tanpa perlu design manual di Canva setiap kali.

### Outcome yang diinginkan

* tinggal paste script,
* klik generate,
* preview langsung jadi,
* edit seperlunya,
* export semua slide sebagai gambar.

---

## 3. Scope Produk

## In Scope

* Input script dalam format baku
* Parsing script menjadi beberapa slide
* Mapping tiap slide ke style template tertentu
* Preview hasil render
* Edit text per slide
* Export image PNG/JPG
* Download ZIP
* Prefix nama file per batch generate

## Out of Scope (v1)

* AI generate isi materi dari nol
* Drag-drop element bebas seperti Figma/Canva
* Dynamic layout builder
* Multi-user/collaboration
* Cloud sync kompleks

---

## 4. User Flow Final

### Flow utama

1. User menyiapkan script sesuai format baku
2. User paste ke input area
3. User isi metadata export:

   * prefix project
   * opsional tanggal / slug
4. System parsing script
5. System membuat slide sesuai type:

   * first slide = hook
   * middle slides = content
   * last slide = CTA / credit
6. User preview semua slide
7. User edit text bila perlu
8. User export ke PNG
9. System membuat file:

   * `prefix-01.png`
   * `prefix-02.png`
   * dst
10. User bisa download:

* satu per satu, atau
* ZIP semua slide

---

## 5. Konsep Layout

Karena style visual ingin **fix di code**, maka yang dinamis hanya:

* teks utama
* beberapa field pendukung tertentu
* data CTA / social media

Jadi sistem tidak perlu editor design kompleks.
Sistem hanya butuh:

* renderer komponen,
* editor text,
* style preset per tipe slide.

---

# 6. Jenis Slide

## 6.1 Hook Slide (Slide Pertama)

Tujuan:

* menarik perhatian
* jadi entry point carousel

Field utama:

* badge kecil opsional
* hook title
* subhook opsional

Karakter:

* visual paling kuat
* font besar
* kontras tinggi
* layout khusus

---

## 6.2 Content Slide (Slide Tengah)

Tujuan:

* menyampaikan poin utama
* menjaga ritme baca

Bisa dibagi beberapa subtype:

* `point`
* `list`
* `quote`
* `tip`
* `problem-solution`

Tapi untuk v1, cukup 1–2 layout middle agar simpel.

Field utama:

* heading
* body
* numbering opsional
* highlight text opsional

---

## 6.3 CTA / Credit Slide (Slide Akhir)

Tujuan:

* penutup
* CTA
* credit
* daftar sosial media

Field utama:

* CTA title
* CTA description
* nama brand / creator
* social handles
* closing note

Contoh isi:

* Follow untuk konten lain
* Simpan carousel ini
* DM kalau mau dibantu
* Instagram / TikTok / Threads / YouTube

---

# 7. Format Input Baku

Agar minim error, paling aman kita pakai **format semi-structured**.
Aku sarankan 2 opsi:

## Opsi terbaik untuk v1: JSON

Paling stabil untuk parsing.

Contoh:

```json
{
  "projectTitle": "cara bikin konten yang tidak sepi",
  "prefix": "konten-sepi-20260317",
  "slides": [
    {
      "type": "hook",
      "badge": "CONTENT STRATEGY",
      "title": "Kenapa kontenmu sepi padahal sudah rajin posting?",
      "subtitle": "Bukan karena algoritma doang."
    },
    {
      "type": "content",
      "title": "Masalah pertama: hook terlalu lemah",
      "body": "Kalau 1–2 detik pertama tidak menarik, orang tidak akan lanjut baca."
    },
    {
      "type": "content",
      "title": "Masalah kedua: isi terlalu muter",
      "body": "Carousel yang bagus cepat ke inti, tidak terlalu banyak pembukaan."
    },
    {
      "type": "content",
      "title": "Solusi",
      "body": "Pakai pola: hook kuat, 1 masalah per slide, penutup yang jelas."
    },
    {
      "type": "cta",
      "title": "Simpan carousel ini",
      "body": "Follow untuk insight konten, digital product, dan AI.",
      "creditName": "Dinar Wahyu Wibowo",
      "socials": [
        "@instagramkamu",
        "@tiktokkamu",
        "@threadskamu"
      ]
    }
  ]
}
```

---

## Opsi alternatif: Text Block Format

Lebih enak dipaste manual, tapi parsing lebih rawan.

Contoh:

```txt
PROJECT: cara bikin konten yang tidak sepi
PREFIX: konten-sepi-20260317

[SLIDE:HOOK]
BADGE: CONTENT STRATEGY
TITLE: Kenapa kontenmu sepi padahal sudah rajin posting?
SUBTITLE: Bukan karena algoritma doang.

[SLIDE:CONTENT]
TITLE: Masalah pertama: hook terlalu lemah
BODY: Kalau 1–2 detik pertama tidak menarik, orang tidak akan lanjut baca.

[SLIDE:CONTENT]
TITLE: Masalah kedua: isi terlalu muter
BODY: Carousel yang bagus cepat ke inti, tidak terlalu banyak pembukaan.

[SLIDE:CONTENT]
TITLE: Solusi
BODY: Pakai pola: hook kuat, 1 masalah per slide, penutup yang jelas.

[SLIDE:CTA]
TITLE: Simpan carousel ini
BODY: Follow untuk insight konten, digital product, dan AI.
CREDIT_NAME: Dinar Wahyu Wibowo
SOCIALS: @instagramkamu, @tiktokkamu, @threadskamu
```

---

# 8. Rekomendasi Final Format Input

Untuk minim error, aku sarankan:

## Gunakan JSON sebagai format utama

Karena:

* lebih mudah divalidasi
* gampang diparsing
* aman untuk automation
* gampang dihubungkan ke UI form nanti

Lalu di UI bisa ada:

* **JSON editor mode**
* **simple form mode**

Jadi user bisa pilih:

* paste JSON langsung, atau
* isi form per slide

---

# 9. Aturan Validasi Input

## Global validation

* `prefix` wajib ada
* minimal 2 slide
* maksimal misalnya 10 atau 15 slide di v1
* slide pertama wajib `hook`
* slide terakhir wajib `cta`

## Hook validation

* `title` wajib
* `subtitle` opsional
* `badge` opsional

## Content validation

* `title` wajib
* `body` wajib

## CTA validation

* `title` wajib
* `body` wajib
* `creditName` opsional
* `socials` opsional array

---

# 10. Struktur Data Internal

## Project

```ts
type CarouselProject = {
  id: string
  projectTitle?: string
  prefix: string
  createdAt: string
  slides: Slide[]
}
```

## Slide

```ts
type Slide = HookSlide | ContentSlide | CtaSlide
```

## Hook Slide

```ts
type HookSlide = {
  id: string
  type: "hook"
  badge?: string
  title: string
  subtitle?: string
}
```

## Content Slide

```ts
type ContentSlide = {
  id: string
  type: "content"
  title: string
  body: string
}
```

## CTA Slide

```ts
type CtaSlide = {
  id: string
  type: "cta"
  title: string
  body: string
  creditName?: string
  socials?: string[]
}
```

---

# 11. Layout Rules per Slide

## Hook Slide Rules

* title maksimal 2–4 baris
* subtitle maksimal 2 baris
* font size terbesar
* emphasis tinggi
* padding lebih lega
* bisa ada label kecil di atas

## Content Slide Rules

* title lebih kecil dari hook
* body lebih panjang
* jaga max lines agar tidak overflow
* kalau terlalu panjang, munculkan warning

## CTA Slide Rules

* CTA title besar
* body singkat
* credit area tetap
* daftar social media otomatis dirender di footer / bawah

---

# 12. Preview & Editing

## Preview Area

* tampilkan semua slide dalam urutan vertikal atau horizontal
* rasio fix 4:5
* preview final harus sangat mirip hasil export

## Editing Capabilities

Yang bisa diedit:

* text title
* text body
* badge
* social links
* urutan slide opsional

Yang tidak bisa diedit di v1:

* layout bebas
* posisi elemen manual
* ubah font dan style sesuka hati

Tujuannya biar app tetap cepat dan stabil.

---

# 13. Export Rules

## Format export

* PNG default
* JPG opsional nanti

## Penamaan file

Setiap batch generate pakai `prefix` yang sama.

Contoh:

```txt
konten-sepi-20260317-01.png
konten-sepi-20260317-02.png
konten-sepi-20260317-03.png
```

## ZIP export

Nama ZIP:

```txt
konten-sepi-20260317.zip
```

Isi:

```txt
konten-sepi-20260317-01.png
konten-sepi-20260317-02.png
konten-sepi-20260317-03.png
```

## Prefix generation

Kalau user tidak isi manual, sistem bisa auto-generate:

```txt
carousel-20260317-143025
```

Tapi idealnya tetap bisa custom.

---

# 14. UI Structure

## Layout halaman

### Kiri

* input JSON / form
* tombol generate
* tombol validate

### Tengah

* preview carousel

### Kanan

* editor text slide aktif
* tombol duplicate / delete slide
* export controls

---

# 15. Komponen yang Dibutuhkan

## Core Components

* `CarouselInputPanel`
* `CarouselPreview`
* `SlideRenderer`
* `HookSlideCard`
* `ContentSlideCard`
* `CtaSlideCard`
* `SlideEditorPanel`
* `ExportControls`

## Utility

* `parseCarouselInput()`
* `validateCarouselInput()`
* `generateExportPrefix()`
* `exportSlidesToImages()`
* `zipExportedImages()`

---

# 16. Functional Requirements

## FR-01 Input Parsing

System harus bisa membaca JSON input dan mengubahnya menjadi array slide.

## FR-02 Validation

System harus memvalidasi format sebelum render.

## FR-03 Render

System harus merender slide dengan style fix berdasarkan `type`.

## FR-04 Edit

System harus memungkinkan edit text per slide.

## FR-05 Export

System harus mengekspor seluruh slide menjadi image.

## FR-06 ZIP

System harus bisa menggabungkan hasil export ke ZIP.

## FR-07 Naming Consistency

System harus menjaga semua nama file dalam satu batch memakai prefix yang sama.

---

# 17. Non-Functional Requirements

* Render cepat
* Preview akurat terhadap hasil export
* Tidak pecah saat export
* Responsive minimal desktop-first
* Aman untuk text panjang dengan fallback warning
* Tidak tergantung koneksi berat jika style sudah local

---

# 18. Tech Recommendation

## Frontend

* Next.js
* Tailwind CSS
* Zustand
* shadcn/ui

## Export

* `html-to-image`

## ZIP

* `jszip`
* `file-saver`

## Optional Validation

* `zod`

---

# 19. Best Practice untuk Input Biar Minim Error

Aku sarankan format baku final seperti ini:

## Rules

* slide pertama selalu `hook`
* slide terakhir selalu `cta`
* middle slide selalu `content`
* jangan isi body terlalu panjang
* satu slide fokus satu ide
* social media taruh hanya di CTA slide
* prefix wajib unik atau deskriptif

## Template baku user

```json
{
  "projectTitle": "judul carousel",
  "prefix": "slug-unik-project",
  "slides": [
    {
      "type": "hook",
      "badge": "TOPIK",
      "title": "Judul hook utama",
      "subtitle": "Subjudul opsional"
    },
    {
      "type": "content",
      "title": "Poin 1",
      "body": "Penjelasan isi slide."
    },
    {
      "type": "content",
      "title": "Poin 2",
      "body": "Penjelasan isi slide."
    },
    {
      "type": "cta",
      "title": "Simpan & follow",
      "body": "Follow untuk konten lainnya.",
      "creditName": "Nama Brand / Nama Personal",
      "socials": ["@ig", "@tiktok", "@threads"]
    }
  ]
}
```

---

# 20. Keputusan Desain Produk

Supaya app ini enak dipakai harian, keputusan terbaik untuk v1 adalah:

* **layout fix di code**
* **content dinamis**
* **slide type terbatas**
* **JSON sebagai input utama**
* **preview + edit text**
* **export PNG + ZIP**
* **naming by prefix**

Ini jauh lebih cepat dibangun dan lebih cocok untuk kebutuhan pribadi dibanding bikin editor bebas.

---

# 21. MVP Final

## Harus ada

* input JSON
* validate input
* render hook/content/cta
* preview semua slide
* edit text
* export PNG
* ZIP download
* prefix file naming

## Bisa nanti

* import markdown ke JSON otomatis
* beberapa theme visual
* beberapa hook style
* beberapa CTA style
* autosave project
* history batch export

---

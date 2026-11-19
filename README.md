# Dokumentasi Website Katalog Produk Statis - PKK Kuliner & Komoditas Nusantara

**Nama Proyek:** Website Katalog Produk Statis PKK  
**Versi:** 2.0 (Autentik Data Riset BMC & Produk Kreatif Kewirausahaan)  
**Teknologi:** HTML5, CSS3, Bootstrap 5.3.3, Vanilla JavaScript (Tanpa Backend/Database)  
**Format Gambar:** WebP (Seluruh gambar produk & kategori teroptimasi < 150 KB)  
**Palet Tema:** Forest Green & Warm Amber (`#1b4332`, `#2d6a4f`, `#52b788`, `#d8f3dc`, `#f8961e`, `#f4f6f8`)

---

## 1. Ringkasan & Struktur Folder

Website katalog ini dibangun sesuai spesifikasi PRD Produk Katalog Statis dengan data bisnis riil dari riset BMC (Business Model Canvas) untuk 3 unit usaha:
1. **Kriuk Saujana:** Keripik Tempe Khas Malang (*Renyahnya Gak Dibuat-Buat!*)
2. **Serabona:** Serat Rasa Abon Nusantara Sapi & Ayam (*Cita Rasa Nusantara, Serat Khas Abon!*)
3. **Coffee Digital:** Kopi Murni Nusantara Dampit Malang (*Kopi Murni Nusantara dalam Genggaman Digital*)

```text
website-katalog/
├── index.html                                    # Landing page langsung berbentuk katalog produk lengkap + pencarian & filter
├── tentang-kami.html                             # Profil kolaborasi 3 brand, visi nilai mutu & pengemasan
├── katalog.html                                  # Halaman katalog lengkap dengan filter & live search
├── kontak.html                                   # Direktori Contact Person (CP) resmi Talita, Artha, dan Jessika
├── 404.html                                      # Halaman Not Found kustom
├── robots.txt                                    # Panduan perayap search engine
├── sitemap.xml                                   # Sitemap XML seluruh URL kanonis
├── kategori/
│   ├── keripik-tempe.html                        # Kategori Keripik Tempe (Kriuk Saujana)
│   ├── abon.html                                 # Kategori Abon Nusantara (Serabona)
│   └── kopi.html                                 # Kategori Kopi Nusantara (Coffee Digital)
├── produk/
│   ├── template-produk.html                      # Template master untuk produk baru
│   ├── kriuk-saujana-keripik-tempe-100g.html     # Original 100g (Rp10.000) &bull; CP: Talita (+62 815-5338-8310)
│   ├── kriuk-saujana-keripik-tempe-200g.html     # Original 200g (Rp20.000) &bull; CP: Talita (+62 815-5338-8310)
│   ├── serabona-abon-ayam-100g.html              # Abon Ayam 100g (Rp17.000) &bull; CP: Artha (+62 813-3363-3565)
│   ├── serabona-abon-sapi-100g.html              # Abon Sapi 100g (Rp24.000) &bull; CP: Artha (+62 813-3363-3565)
│   ├── coffee-digital-grade-robusta-dampit.html  # Robusta Dampit 250g (Rp26.000) &bull; CP: Jessika (+62 881-0266-96817)
│   ├── coffee-digital-premium-robusta-dampit.html# Premium Petik Merah 250g (Rp37.000) &bull; CP: Jessika (+62 881-0266-96817)
│   └── coffee-digital-premium-mix.html           # House Blend Mix 250g (Rp42.000) &bull; CP: Jessika (+62 881-0266-96817)
└── assets/
    ├── css/
    │   └── style.css                             # Custom CSS (Design tokens, no horizontal overflow, responsive)
    ├── js/
    │   ├── main.js                               # Floating back-to-top, mobile nav auto-close
    │   └── catalog.js                            # Filter kategori & pencarian instan sisi klien
    └── img/
        ├── general/                              # logo.svg, favicon.svg
        ├── categories/                           # .webp banner/kategori (< 150 KB)
        ├── products/                             # .webp foto produk katalog (< 150 KB)
        └── PRODUK PKK/                           # Photoshoot asli + folder webp_converted/ (< 150 KB)
```

---

## 2. Rincian Data Produk & Contact Person (CP)

| Produk | Varian | Harga | Kemasan | Contact Person (CP) | WhatsApp | Instagram |
|---|---|---|---|---|---|---|
| **Kriuk Saujana** | Original 100g | Rp 10.000 | Standing Pouch Zipper | **Talita** | `+62 815-5338-8310` | `@kriuksaujana__` |
| **Kriuk Saujana** | Original 200g | Rp 20.000 | Standing Pouch Zipper | **Talita** | `+62 815-5338-8310` | `@kriuksaujana__` |
| **Serabona** | Abon Ayam 100g | Rp 17.000 | Toples Jar PET Segel | **Artha** | `+62 813-3363-3565` | `@bon_boniga` |
| **Serabona** | Abon Sapi 100g | Rp 24.000 | Toples Jar PET Segel | **Artha** | `+62 813-3363-3565` | `@bon_boniga` |
| **Coffee Digital** | Grade Robusta Dampit 250g | Rp 26.000 | Pouch Foil Valve | **Jessika** | `+62 881-0266-96817` | `@coffeedigitall_` |
| **Coffee Digital** | Premium Robusta Dampit 250g | Rp 37.000 | Pouch Foil Valve | **Jessika** | `+62 881-0266-96817` | `@coffeedigitall_` |
| **Coffee Digital** | Premium Blend Mix 250g | Rp 42.000 | Pouch Foil Valve | **Jessika** | `+62 881-0266-96817` | `@coffeedigitall_` |

---

## 3. Fitur Utama & Kepatuhan PRD

1. **Landing Page Berbentuk Katalog (`index.html`):**
   - Menampilkan etalase 7 produk lengkap langsung di beranda.
   - Dilengkapi *Live Search Bar* dan tombol *Filter Kategori* instan yang berjalan di sisi klien tanpa refresh.
   - Hasil pencarian menampilkan *Counter* dinamis dan *Empty State* saat kata kunci tidak ditemukan.
2. **Halaman Produk Mandiri & Routing CP WhatsApp:**
   - Setiap produk memiliki halaman detail terpisah dengan spesifikasi lengkap (komposisi, legalitas, netto, rasa, saran penyajian, FAQ produk).
   - Tombol pesanan dan **Floating WhatsApp pada halaman produk diarahkan khusus ke CP produk tersebut** dengan pesan pembuka otomatis yang menyebutkan nama produk.
3. **Format Gambar WebP & File Size < 150 KB:**
   - Seluruh foto produk dikonversi menjadi `.webp` beresolusi tinggi dengan kompresi teroptimasi.
   - Seluruh file berada di rentang 50 KB – 135 KB (strictly di bawah batas maksimal 150 KB).
4. **Floating Action Buttons Hierarkis:**
   - **Back to Top:** Di posisi atas kanan bawah, muncul otomatis saat scroll > 300px.
   - **Floating WhatsApp:** Di posisi bawah kanan bawah.
5. **SEO & Skema JSON-LD Valid:**
   - Seluruh halaman dilengkapi meta title, meta description, canonical URL, Open Graph, Twitter Cards, dan Schema.org (`Product`, `BreadcrumbList`, `CollectionPage`, `Organization`).
6. **Bebas Horizontal Overflow:**
   - Telah diuji aman dan responsif pada layar sempit mobile (320px – 430px) hingga desktop.

---

## 4. Panduan Menjalankan

Karena website bersifat murni statis:
1. Cukup buka `index.html` pada browser modern (Chrome, Edge, Firefox, Safari).
2. Atau jalankan server statis lokal sederhana:
   ```bash
   npx serve .
   ```
   atau
   ```bash
   python -m http.server 8080
   ```
3. Seluruh fitur pencarian, filter, dropdown navigasi, dan tombol WhatsApp akan langsung berfungsi secara penuh.

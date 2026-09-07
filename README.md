# Portal Gamifikasi Informatika IFP Hisense

Website portal pembelajaran terpadu untuk Pelatihan Guru Informatika SMP dengan Interactive Flat Panel (IFP) Hisense. Siap dideploy langsung ke **Vercel** atau web server statis lainnya.

## 🌟 3 Materi Utama yang Dimuat:
1. **Materi PPT (12 Slide Interaktif)**:
   - Bersumber langsung dari slide presentasi `gamifikasi informatika smp.pptx`.
   - Dilengkapi viewer interaktif dengan navigasi slide, indikator progres, dan opsi unduh PPTX asli atau buka fullscreen.
2. **Contoh Live Game Edukasi**:
   - Menjalankan game *Zombie Defense Quiz IFP* langsung di browser.
   - Mode kuis simultan 2-4 tim, Web Audio API synthesis tanpa aset eksternal, dan touchscreen friendly.
3. **Master Prompt Engine & Bank Prompt**:
   - Generator prompt interaktif (*Master Prompt Generator v3*).
   - 3 tingkatan prompt siap salin: **Mudah**, **Sedang**, dan **Advance (Master)** dari dokumen panduan resmi.

---

## 🚀 Cara Deploy ke Vercel

### Opsi 1: Menggunakan Vercel CLI
Jalankan perintah berikut di terminal:
```bash
# Login atau inisialisasi vercel
npx vercel

# Untuk deploy ke production
npx vercel --prod
```

### Opsi 2: Menggunakan GitHub / GitLab / Bitbucket
1. Push repositori ini ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portal gamifikasi IFP"
   git branch -M main
   git remote add origin <URL_REPOSITORY_ANDA>
   git push -u origin main
   ```
2. Buka [vercel.com/new](https://vercel.com/new).
3. Import repositori ini.
4. Klik **Deploy** (tanpa perlu konfigurasi build command tambahan karena bersifat pure static web app).

---

## 📁 Struktur Berkas
- `index.html` : Halaman utama portal memuat 3 materi dengan navigasi tabs.
- `portal_data.js` : Data slide PPTX dan prompt levels terstruktur.
- `vercel.json` : Konfigurasi perutean & security headers untuk Vercel.
- `game_single_file.html` : Kode sumber game edukasi zombie tower defense mandiri.
- `master_prompt_generator.html` : Aplikasi generator master prompt interaktif.
- `presentasi_gamifikasi_informatika_ifp.html` : Slide presentasi web mandiri.
- `gamifikasi informatika smp.pptx` : Berkas presentasi PPTX asli.
- `portal-pelatihan-ifp.html` & `RounDown IFP.html` : Portal resmi rundown dan pelatihan guru 8 JP.

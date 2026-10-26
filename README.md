# 🚀 Panduan Sederhana Publikasi ke GitHub (3 Langkah Saja)

Website portofolio **Hasymi (MH Somaida)** sudah dikonfigurasi agar bisa online di GitHub Pages secara instan!

---

## ⚡ CARA 1: Cara Paling Mudah (1 Perintah Deploy)

### 1. Buat Repository di GitHub
1. Buka [github.com/new](https://github.com/new).
2. Isi nama repository (contoh: `portfolio`).
3. Pilih **Public**, lalu klik tombol hijau **Create repository**.

### 2. Hubungkan Proyek ke GitHub
Buka terminal di folder proyek ini, lalu jalankan:
```bash
git init
git add .
git commit -m "Upload portofolio"
git branch -M main
git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO.git
git push -u origin main
```
*(Ganti `USERNAME_ANDA` dan `NAMA_REPO` sesuai akun GitHub Anda)*

### 3. Online-kan dengan 1 Perintah!
Cukup ketik perintah ini di terminal:
```bash
npm run deploy
```
🎉 **Selesai!** Website Anda otomatis di-build dan langsung aktif di:
`https://USERNAME_ANDA.github.io/NAMA_REPO/`

---

## 🌐 CARA 2: Tanpa Terminal (Drag & Drop ke GitHub)

Jika Anda tidak ingin mengetik perintah di terminal:

1. Jalankan build di komputer Anda:
   ```bash
   npm run build
   ```
2. Buat repository baru di GitHub dengan nama: `USERNAME_ANDA.github.io`
3. Klik **Upload files** di GitHub.
4. Drag & drop (tarik) semua file yang ada di dalam folder **`dist`** langsung ke halaman GitHub.
5. Klik **Commit changes**.
6. Website Anda langsung online di alamat: `https://USERNAME_ANDA.github.io`

---

## 💻 Menjalankan di Komputer Lokal

```bash
# Install dependensi
npm install

# Jalankan server
npm run dev
```
Buka browser di: `http://localhost:3000`

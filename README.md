# Happy Birthday Web App

Website ucapan selamat ulang tahun interaktif dengan animasi balon, musik, lilin kue, dan pesan ucapan.

## Menjalankan Secara Lokal

Cukup buka `index.html` di browser atau jalankan local server:

```bash
npm install
npm run server-node
```

Buka `http://localhost:8081` di browser Anda.

## Build

Untuk mem-build seluruh aset statis ke folder `dist/`:

```bash
npm run build
```

## Deploy ke Vercel

1. Push repository ini ke GitHub.
2. Buka dashboard Vercel ([vercel.com](https://vercel.com)) dan klik **"Add New"** > **"Project"**.
3. Import repository GitHub Anda.
4. Vercel akan otomatis mendeteksi konfigurasi dari `vercel.json` (`outputDirectory: "dist"` dan `buildCommand: "npm run build"`).
5. Klik **"Deploy"**!

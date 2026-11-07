const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Bersihkan atau buat folder dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Daftar file yang perlu dicopy ke dist
const filesToCopy = [
  'index.html',
  'effect.js',
  'cake.less',
  'loading.css',
  'stylesheet.css',
  'favicon.ico',
  'b1.png',
  'b2.png',
  'b3.png',
  'b4.png',
  'b5.png',
  'b6.png',
  'b7.png',
  'Balloon-Border.png',
  'banner.png',
  'bd1.jpg',
  'bulb.png',
  'bulb_blue.png',
  'bulb_green.png',
  'bulb_orange.png',
  'bulb_pink.png',
  'bulb_red.png',
  'bulb_yellow.png',
  'cake128.png',
  'hbd.mp3',
  'tt.mp3',
  'uggreen.png',
  'vine.png'
];

let copiedCount = 0;
for (const file of filesToCopy) {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    copiedCount++;
  } else {
    console.warn(`File tidak ditemukan: ${file}`);
  }
}

// Buat _headers untuk Netlify (opsional, optimasi cache)
const headersContent = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
`;
fs.writeFileSync(path.join(distDir, '_headers'), headersContent);

console.log(`[BUILD SUCCESS] Berhasil menyalin ${copiedCount} file ke folder ./dist/`);


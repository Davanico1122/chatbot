
# 💬 Simple Web Chatbot (Offline)

Chatbot sederhana berbasis HTML, CSS, dan JavaScript yang dapat dengan mudah disematkan di website pribadi, portofolio, company profile, atau project statis lainnya.

## ✨ Fitur

- ✅ Ringan dan responsif
- ✅ Tanpa backend / database
- ✅ Mendukung Bahasa Indonesia & Inggris
- ✅ Chat bubble elegan di pojok kanan bawah
- ✅ Mudah dikustomisasi
- ✅ Bisa dijalankan secara **offline**

## 📂 Struktur File

```
chatbot/
├── index.html      ← Halaman utama chatbot
├── chatbot.css     ← Styling chatbot
└── chatbot.js      ← Logika interaktif chatbot
```

## 🌐 Demo

🔗 [Lihat demo di GitHub Pages](https://davanico1122.github.io/chatbot/)

## 🚀 Cara Pakai di Website Kamu

### 1. **Copy 3 file ini:**
- `index.html`
- `chatbot.css`
- `chatbot.js`

### 2. **Masukkan ke dalam folder `/chatbot` di proyekmu**

### 3. **Sematkan ke website utama dengan iframe atau include**

Contoh:
```html
<iframe src="/chatbot/index.html" width="320" height="480" style="border:0;"></iframe>
```

Atau tambahkan elemen tombol di HTML utama kamu:
```html
<script src="chatbot/chatbot.js" defer></script>
<link rel="stylesheet" href="chatbot/chatbot.css" />
```

Dan gunakan tombol untuk membuka chatbot dari halaman manapun.

---

## 💡 Cara Menambah Dialog Bot

Buka file `chatbot.js`, cari fungsi `getBotResponse(input)` lalu tambahkan:

```js
if (m.includes("your hobby")) return "I love helping people like you!";
```

Kamu bisa menambahkan sebanyak mungkin, baik Bahasa Indonesia maupun Inggris.

---

## 👤 Credits

Dibuat oleh: [Davanico Ady Nugroho](https://github.com/Davanico1122)  
Lisensi: Gratis digunakan untuk keperluan personal/non-komersial (boleh dimodifikasi)

---

## ❤️ Dukungan

Boleh bantu ⭐ repo ini atau bagikan ke teman yang butuh chatbot sederhana.

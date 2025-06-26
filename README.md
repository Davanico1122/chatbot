
# 🤖 Simple Chatbot AI - Multilingual (Indo & English)

A modern, offline-capable chatbot for your personal or portfolio website. Supports **Bahasa Indonesia** and **English**, with automatic language detection.

---

## 🇮🇩 Deskripsi (Bahasa Indonesia)

Chatbot AI ini adalah asisten sederhana berbasis JavaScript yang dapat dengan mudah ditanamkan di website statis. Cocok untuk portofolio, landing page, atau halaman kontak.

### ✨ Fitur:
- Bahasa otomatis: Indonesia & Inggris
- Tanpa backend / API (offline-ready)
- Ringan dan cepat dimuat
- Tampilan modern & responsif
- Gampang dimodifikasi

### 📁 Struktur File
```
chatbot/
├── index.html              # Halaman utama chatbot
├── chatbot-cool.css        # Gaya chatbot modern (glassmorphism)
├── chatbot.js              # Logika chatbot & input
├── getBotResponse-smart-long.js # Fungsi pintar mendeteksi bahasa
```

### 🚀 Cara Menggunakan
1. Upload semua file ke dalam folder `chatbot/` di proyek web kamu.
2. Sematkan ke halaman utama atau buka langsung `/chatbot/index.html`.
3. Tambahkan tombol di halaman utama jika ingin chatbot muncul on-click.

### 💬 Menambah Dialog
Edit file `getBotResponse-smart-long.js`, lalu tambahkan:

```js
if (m.includes("hobi")) return "Saya suka membantu pengguna seperti kamu!";
```

---

## 🇬🇧 Description (English)

This is a lightweight, offline chatbot assistant written in vanilla JavaScript — perfect for portfolio sites, contact pages, and small projects.

### ✨ Features:
- Auto language detection (Bahasa Indonesia & English)
- No backend or API needed
- Fully offline and fast
- Mobile-friendly design
- Easy to customize dialog

### 📁 File Structure
```
chatbot/
├── index.html              # Main chatbot page
├── chatbot-cool.css        # Modern UI styles
├── chatbot.js              # Core interaction logic
├── getBotResponse-smart-long.js # Multilingual smart response function
```

### 🚀 How to Use
1. Upload all files to a `chatbot/` folder inside your website project.
2. Link `index.html` or embed it using an iframe.
3. You can also include the chatbot via toggle button from any page.

### 💬 Adding New Dialog
Open `getBotResponse-smart-long.js` and insert:

```js
if (m.includes("your hobby")) return "I love helping users like you!";
```

---

## 👤 Creator
Made by [Davanico Ady Nugroho](https://github.com/Davanico1122)

License: Free to use & modify for personal/non-commercial purposes.

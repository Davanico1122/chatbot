# 💬 Simple AI Chatbot for Website – by Davanico

A modern, lightweight, and fully offline chatbot built using HTML, CSS, and JavaScript. Designed for portfolios, landing pages, or any personal website. This chatbot supports **dual language (English and Indonesian)** and can be customized easily.

---

## 🌟 Features

- 💡 Simple and responsive UI
- 🌙 Modern dark mode theme
- 🌐 Manual language switch (EN/ID)
- ⚙️ Fully offline (no server/API needed)
- 📦 No frameworks or external dependencies
- 💬 Smart preset responses
- 🧠 Easy to customize dialog

---

## 📁 Folder Structure

```
/chatbot-template/
├── index.html
├── chatbot-modern-dark.css
├── chatbot.js
├── getBotResponse-id.js
├── getBotResponse-en.js
└── README.md
```

---

## 🚀 How to Use

### 1. Clone or Download

You can [download this repository](https://github.com/your-repo/chatbot-template) as a ZIP or clone it via Git.

```bash
git clone https://github.com/yourusername/chatbot-template.git
```

### 2. Open `index.html`

Simply open the `index.html` file in your browser to see the chatbot in action.

You can also embed the chatbot in your existing website by copying these files and including them in your HTML page.

---

## 🔧 How to Install on Your Website

### Step 1: Include Stylesheet

Add this in the `<head>` of your HTML:

```html
<link rel="stylesheet" href="chatbot-modern-dark.css">
```

### Step 2: Add Chatbot HTML

Place this right before the closing `</body>` tag:

```html
<!-- Chatbot Toggle Button -->
<button class="chatbot-toggle" onclick="toggleChatbot()">💬</button>

<!-- Chatbot Container -->
<div class="chatbot-container" id="chatbot" style="display: none;">
  <div class="chatbot-lang">
    <label for="languageSelect">🌐</label>
    <select id="languageSelect" onchange="changeLanguage()">
      <option value="id">🇮🇩 ID</option>
      <option value="en">🇺🇸 EN</option>
    </select>
  </div>

  <div class="chatbot-header">AI Assistant</div>
  <div class="chat-messages" id="chatMessages">
    <div class="message bot">
      <div class="message-bubble">Halo! Saya AI Assistant. Ada yang bisa saya bantu? 😊</div>
    </div>
  </div>
  <div class="chat-input">
    <input 
      type="text" 
      id="messageInput" 
      placeholder="Ketik pesan..." 
      onkeypress="handleKeyPress(event)" 
      autocomplete="off"
    >
    <button onclick="sendMessage()">➤</button>
  </div>
</div>
```

### Step 3: Link Scripts

Add these just before the closing `</body>` tag as well:

```html
<script src="getBotResponse-id.js"></script>
<script src="getBotResponse-en.js"></script>
<script src="chatbot.js"></script>
```

---

## 🧠 Customizing Responses

Edit the files:

- `getBotResponse-id.js` → for Bahasa Indonesia
- `getBotResponse-en.js` → for English

Each file contains simple `if` statements that respond to user input. You can add or modify the conditions freely.

Example:

```js
if (m.includes("portfolio")) return "This is Davanico's portfolio. Enjoy exploring!";
```

---

## 💡 Tips

- You can change the chatbot style by editing `chatbot-modern-dark.css`
- For full multilingual support, add more response files like `getBotResponse-jp.js` and modify the dropdown
- Host it on GitHub Pages or Vercel for free

---

## 📜 License

This chatbot is **free to use** for personal and educational purposes. No attribution required — but support is appreciated! 😊

---

## 👤 Author

Created by **Davanico Ady Nugroho**  
📧 Email: davanico1122@gmail.com  
📱 WhatsApp: +62 8978143546  
📸 Instagram: [@davanico](https://instagram.com/davanico)

---
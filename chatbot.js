// chatbot.js lengkap dengan efek typing dan dukungan dua bahasa

const chatbot = document.getElementById('chatbot'); const chatMessages = document.getElementById('chatMessages'); const messageInput = document.getElementById('messageInput');

function toggleChatbot() { chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none'; }

function addTypingMessage(text, sender = 'bot') { const msgDiv = document.createElement('div'); msgDiv.className = message ${sender}; const bubble = document.createElement('div'); bubble.className = 'message-bubble'; msgDiv.appendChild(bubble); chatMessages.appendChild(msgDiv); chatMessages.scrollTop = chatMessages.scrollHeight;

let i = 0; const typingInterval = setInterval(() => { if (i < text.length) { bubble.textContent += text.charAt(i); chatMessages.scrollTop = chatMessages.scrollHeight; i++; } else { clearInterval(typingInterval); } }, 30); }

function addMessage(text, sender = 'bot') { const msgDiv = document.createElement('div'); msgDiv.className = message ${sender}; const bubble = document.createElement('div'); bubble.className = 'message-bubble'; bubble.textContent = text; msgDiv.appendChild(bubble); chatMessages.appendChild(msgDiv); chatMessages.scrollTop = chatMessages.scrollHeight; }

function sendMessage() { const msg = messageInput.value.trim(); if (!msg) return;

addMessage(msg, 'user'); messageInput.value = '';

// Tampilkan indikator "Typing..." const typingIndicator = document.createElement('div'); typingIndicator.className = 'message bot typing-indicator'; const bubble = document.createElement('div'); bubble.className = 'message-bubble'; bubble.textContent = 'Typing...'; typingIndicator.appendChild(bubble); chatMessages.appendChild(typingIndicator); chatMessages.scrollTop = chatMessages.scrollHeight;

setTimeout(() => { // Deteksi bahasa dari dropdown jika ada const langSelect = document.getElementById('languageSelect'); const lang = langSelect ? langSelect.value : detectLanguage(msg);

const response = lang === 'id' ? getBotResponseID(msg) : getBotResponseEN(msg);

// Hapus indikator "Typing..."
typingIndicator.remove();

// Efek mengetik
addTypingMessage(response, 'bot');

}, 1000); }

function handleKeyPress(e) { if (e.key === 'Enter') sendMessage(); }

function detectLanguage(text) { const idKeywords = ["halo", "selamat", "kamu", "apa", "siapa", "kontak", "terima", "portofolio", "project", "ngoding", "hari", "umur"]; const enKeywords = ["hello", "good", "you", "what", "who", "contact", "thank", "portfolio", "project", "coding", "day", "old"];

let idScore = 0, enScore = 0; const t = text.toLowerCase();

idKeywords.forEach(k => { if (t.includes(k)) idScore++; }); enKeywords.forEach(k => { if (t.includes(k)) enScore++; });

return idScore >= enScore ? 'id' : 'en'; }

function changeLanguage() { // Jika ingin mengganti greeting pertama berdasarkan bahasa, bisa ditambahkan di sini const lang = document.getElementById('languageSelect')?.value; const greeting = lang === 'id' ? 'Halo! Saya AI Assistant. Ada yang bisa saya bantu? 😊' : 'Hello! I am AI Assistant. How can I help you today? 😊';

chatMessages.innerHTML = ''; addTypingMessage(greeting); }


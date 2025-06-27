const chatbot = document.getElementById('chatbot');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');

function toggleChatbot() {
  chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
}

function addMessage(text, sender = 'bot') {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const msg = messageInput.value.trim();
  if (!msg) return;

  addMessage(msg, 'user');
  messageInput.value = '';

  setTimeout(() => {
    const lang = detectLanguage(msg);
    const response = lang === 'id' ? getBotResponseID(msg) : getBotResponseEN(msg);
    addMessage(response, 'bot');
  }, 400);
}

function handleKeyPress(e) {
  if (e.key === 'Enter') sendMessage();
}

// Bahasa Deteksi Sederhana
function detectLanguage(text) {
  const idKeywords = ["halo", "selamat", "kamu", "apa", "siapa", "kontak", "terima", "portofolio", "project", "ngoding", "hari", "umur"];
  const enKeywords = ["hello", "good", "you", "what", "who", "contact", "thank", "portfolio", "project", "coding", "day", "old"];

  let idScore = 0, enScore = 0;
  const t = text.toLowerCase();

  idKeywords.forEach(k => { if (t.includes(k)) idScore++; });
  enKeywords.forEach(k => { if (t.includes(k)) enScore++; });

  return idScore >= enScore ? 'id' : 'en';
}

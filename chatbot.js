const chatbot = document.getElementById('chatbot');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');

// Tampilkan / sembunyikan chatbot
function toggleChatbot() {
  chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
}

// Tambah pesan baru
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

// Fungsi kirim
function sendMessage() {
  const msg = messageInput.value.trim();
  if (!msg) return;

  addMessage(msg, 'user');
  messageInput.value = '';

  setTimeout(() => {
    const response = getBotResponse(msg);
    addMessage(response, 'bot');
  }, 600);
}

// Enter untuk kirim
function handleKeyPress(e) {
  if (e.key === 'Enter') sendMessage();
}

// Respons bot
function getBotResponse(input) {
  const m = input.toLowerCase();

  if (m.includes("halo") || m.includes("hai")) return "Halo juga! Senang bertemu denganmu.";
  if (m.includes("nama")) return "Saya AI Assistant. Kamu bisa panggil saya Bot 😊";
  if (m.includes("kontak")) return "Hubungi kami di admin@website.com";
  if (m.includes("terima kasih")) return "Sama-sama! Senang bisa membantu 🙌";
  if (m.includes("project") || m.includes("karya")) return "Lihat projek terbaru saya di bagian Project ya!";
  if (m.includes("website")) return "Website ini dibuat dengan HTML, CSS, dan JavaScript.";
  if (m.includes("siapa kamu")) return "Saya bot buatan Davanico, siap menemani pengunjung web ini.";
  if (m.includes("cuaca")) return "Maaf, saya belum bisa membaca cuaca 😅";
  if (m.includes("bye") || m.includes("dadah")) return "Sampai jumpa! 👋";
  if (m.includes("jam")) return `Sekarang jam ${new Date().toLocaleTimeString('id-ID')}`;
  if (m.includes("tanggal")) return `Hari ini ${new Date().toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })}`;

  return "Pertanyaan bagus! Tapi saya masih belajar memahami itu 🙏";
}

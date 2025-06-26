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
  if (m.includes("selamat pagi")) return "Selamat pagi! Semoga harimu menyenangkan 🌞";
  if (m.includes("selamat siang")) return "Selamat siang! Ada yang bisa saya bantu?";
  if (m.includes("selamat sore")) return "Selamat sore! Jangan lupa istirahat ya ☕";
  if (m.includes("selamat malam")) return "Selamat malam! Waktunya rehat 💤";

  if (m.includes("nama")) return "Saya AI Assistant. Kamu bisa panggil saya Bot 😊";
  if (m.includes("siapa kamu")) return "Saya bot buatan Davanico, siap menemani pengunjung web ini.";
  if (m.includes("umur")) return "Saya tidak punya umur, tapi saya baru dibuat kemarin 😄";
  if (m.includes("asal")) return "Saya tinggal di server, bisa dibilang nomaden 👻";

  if (m.includes("kontak")) return "Hubungi kami di admin@website.com atau melalui halaman Contact ya!";
  if (m.includes("email")) return "Email resmi: admin@website.com 📧";
  if (m.includes("wa") || m.includes("whatsapp")) return "Hubungi kami via WhatsApp di: 08xx-xxxx-xxxx 📱";

  if (m.includes("terima kasih") || m.includes("makasih")) return "Sama-sama! Senang bisa membantu 🙌";
  if (m.includes("bagus")) return "Terima kasih! Saya bantu yang terbaik 😊";
  if (m.includes("mantap")) return "Mantap juga kamu! 💪";

  if (m.includes("project") || m.includes("karya")) return "Lihat projek terbaru saya di bagian Project ya!";
  if (m.includes("portfolio") || m.includes("portofolio")) return "Ini adalah portofolio Davanico, semoga menginspirasi 💼";
  if (m.includes("belajar")) return "Terus semangat belajar, jangan takut gagal!";
  if (m.includes("ngoding") || m.includes("ngoding apa")) return "Saya suka ngoding pakai HTML, CSS, dan JavaScript 👨‍💻";

  if (m.includes("website")) return "Website ini dibuat dengan HTML, CSS, dan JavaScript.";
  if (m.includes("tools")) return "Tools yang digunakan: VS Code, Figma, GitHub, Vercel.";
  if (m.includes("hosting")) return "Website ini di-hosting menggunakan Vercel.";
  if (m.includes("github")) return "Link GitHub kamu bisa dicantumkan di halaman Project.";

  if (m.includes("chatgpt")) return "Saya bukan ChatGPT langsung, tapi saya dibuat mirip dengannya 😉";
  if (m.includes("ai") || m.includes("kecerdasan buatan")) return "Saya adalah bagian dari teknologi AI atau Artificial Intelligence.";

  if (m.includes("cuaca")) return "Maaf, saya belum bisa membaca cuaca 😅";
  if (m.includes("jam")) return `Sekarang jam ${new Date().toLocaleTimeString('id-ID')}`;
  if (m.includes("tanggal") || m.includes("hari ini")) return `Hari ini ${new Date().toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })}`;

  if (m.includes("kenapa")) return "Hmm... bisa dijelaskan lebih lanjut pertanyaannya?";
  if (m.includes("apa itu")) return "Silakan beri tahu topik spesifik yang kamu maksud ya.";
  if (m.includes("bagaimana")) return "Saya akan bantu sebisanya. Coba dijelaskan lebih detail ya.";

  if (m.includes("bye") || m.includes("dadah")) return "Sampai jumpa! 👋";
  if (m.includes("sampai jumpa")) return "Bye bye! Jangan lupa kembali lagi ya.";

  if (m.includes("help") || m.includes("bantuan")) return "Ketikkan pertanyaanmu dan saya akan bantu jawab semampu saya 🙋‍♂️";

  // Fallback jika tidak dikenali
  return "Pertanyaan bagus! Tapi saya masih belajar memahami itu 🙏";
}

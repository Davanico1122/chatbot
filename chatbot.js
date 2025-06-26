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
    const response = getBotResponse(msg);
    addMessage(response, 'bot');
  }, 500);
}

function handleKeyPress(e) {
  if (e.key === 'Enter') sendMessage();
}


function getBotResponse(input) {
  const m = input.toLowerCase();

  const isIndo = /halo|hai|selamat|nama|siapa|umur|asal|kontak|email|wa|makasih|terima kasih|bagus|mantap|karya|portofolio|belajar|ngoding|cuaca|jam|tanggal|kenapa|bagaimana|apa itu|bantuan/.test(m);

  if (isIndo) {
    if (m.includes("halo") || m.includes("hai")) return "Halo juga! Senang bertemu denganmu.";
    if (m.includes("selamat pagi")) return "Selamat pagi! Semoga harimu menyenangkan 🌞";
    if (m.includes("selamat siang")) return "Selamat siang! Ada yang bisa saya bantu?";
    if (m.includes("selamat sore")) return "Selamat sore! Jangan lupa istirahat ya ☕";
    if (m.includes("selamat malam")) return "Selamat malam! Waktunya rehat 💤";
    if (m.includes("nama")) return "Saya AI Assistant. Kamu bisa panggil saya Bot 😊";
    if (m.includes("siapa kamu")) return "Saya bot buatan Davanico, siap menemani pengunjung web ini.";
    if (m.includes("umur")) return "Saya tidak punya umur, tapi saya baru dibuat kemarin 😄";
    if (m.includes("asal")) return "Saya tinggal di server, bisa dibilang nomaden 👻";
    if (m.includes("kontak")) return "Hubungi kami di admin@website.com 📧";
    if (m.includes("email")) return "Email resmi: admin@website.com";
    if (m.includes("wa") || m.includes("whatsapp")) return "Hubungi kami via WhatsApp di: 08xx-xxxx-xxxx 📱";
    if (m.includes("terima kasih") || m.includes("makasih")) return "Sama-sama! Senang bisa membantu 🙌";
    if (m.includes("bagus") || m.includes("keren")) return "Terima kasih! Kamu juga hebat 💪";
    if (m.includes("mantap")) return "Mantap juga kamu! 🔥";
    if (m.includes("project") || m.includes("karya")) return "Lihat projek terbaru saya di bagian Project ya!";
    if (m.includes("portfolio") || m.includes("portofolio")) return "Ini adalah portofolio Davanico, semoga menginspirasi 💼";
    if (m.includes("belajar")) return "Terus semangat belajar, jangan takut gagal!";
    if (m.includes("ngoding")) return "Saya suka ngoding pakai HTML, CSS, dan JavaScript 👨‍💻";
    if (m.includes("website")) return "Website ini dibuat dengan HTML, CSS, dan JavaScript.";
    if (m.includes("tools")) return "Tools yang digunakan: VS Code, Figma, GitHub, Vercel.";
    if (m.includes("hosting")) return "Website ini di-hosting menggunakan Vercel.";
    if (m.includes("github")) return "Link GitHub kamu bisa dicantumkan di halaman Project.";
    if (m.includes("chatgpt")) return "Saya bukan ChatGPT langsung, tapi saya dibuat mirip dengannya 😉";
    if (m.includes("ai") || m.includes("kecerdasan buatan")) return "Saya adalah bagian dari teknologi AI.";
    if (m.includes("cuaca")) return "Maaf, saya belum bisa membaca cuaca 😅";
    if (m.includes("jam")) return `Sekarang jam ${new Date().toLocaleTimeString('id-ID')}`;
    if (m.includes("tanggal") || m.includes("hari ini")) return `Hari ini ${new Date().toLocaleDateString('id-ID', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })}`;
    if (m.includes("kenapa")) return "Hmm... bisa dijelaskan lebih lanjut pertanyaannya?";
    if (m.includes("bagaimana")) return "Saya akan bantu sebisanya. Coba dijelaskan lebih detail ya.";
    if (m.includes("apa itu")) return "Silakan beri tahu topik spesifik yang kamu maksud ya.";
    if (m.includes("bantuan") || m.includes("help")) return "Ketikkan pertanyaanmu dan saya akan bantu semampu saya 🙋‍♂️";
    if (m.includes("bye") || m.includes("dadah") || m.includes("sampai jumpa")) return "Sampai jumpa! 👋";
    return "Pertanyaan bagus! Tapi saya masih belajar memahami itu 🤖";
  }

  // ======== English Dialogs (Default) ========
  if (m.includes("hello") || m.includes("hi")) return "Hello! Nice to meet you 😊";
  if (m.includes("good morning")) return "Good morning! Wishing you a productive day!";
  if (m.includes("good afternoon")) return "Good afternoon! Let me know how I can assist you.";
  if (m.includes("good evening")) return "Good evening! Hope you had a great day.";
  if (m.includes("good night")) return "Good night! Sweet dreams. 😴";
  if (m.includes("your name") || m.includes("what is your name")) return "You can call me Bot!";
  if (m.includes("who are you")) return "I'm your personal AI Assistant built by Davanico.";
  if (m.includes("how old") || m.includes("age")) return "I'm a newborn bot, always learning!";
  if (m.includes("where are you from")) return "I'm from the cloud ☁️";
  if (m.includes("creator")) return "I was created by Davanico, a passionate web developer.";
  if (m.includes("contact")) return "Reach us at admin@website.com";
  if (m.includes("email")) return "Email: admin@website.com";
  if (m.includes("whatsapp") || m.includes("phone")) return "You can reach us on WhatsApp at +62 xxx-xxxx.";
  if (m.includes("thanks") || m.includes("thank you")) return "You're welcome! 😊";
  if (m.includes("great") || m.includes("awesome")) return "Thank you! You're amazing too 😄";
  if (m.includes("cool")) return "Glad you like it! 🔥";
  if (m.includes("project") || m.includes("portfolio")) return "You can check out my latest projects in the Project section.";
  if (m.includes("what do you do")) return "I help users interact with websites through simple chatbot responses.";
  if (m.includes("coding") || m.includes("programming")) return "I enjoy HTML, CSS, and JavaScript!";
  if (m.includes("tools")) return "Some tools I love: VS Code, GitHub, Figma, Vercel.";
  if (m.includes("hosting")) return "This site is hosted on Vercel.";
  if (m.includes("framework")) return "We might use Vanilla JS or even React!";
  if (m.includes("chatgpt")) return "I work offline, but I'm inspired by ChatGPT.";
  if (m.includes("ai")) return "Yes, I'm a simple AI chatbot!";
  if (m.includes("weather")) return "Sorry, I can't show real-time weather yet!";
  if (m.includes("time")) return `Current time: ${new Date().toLocaleTimeString('en-US')}`;
  if (m.includes("date") || m.includes("today")) return `Today is ${new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })}`;
  if (m.includes("how") || m.includes("why")) return "Could you please clarify your question?";
  if (m.includes("help")) return "Sure! Just type your question and I’ll try my best.";
  if (m.includes("bye") || m.includes("goodbye") || m.includes("see you")) return "Goodbye! Come back anytime 👋";
  return "That's a good question! I'm still learning to answer that. 🙏";
}

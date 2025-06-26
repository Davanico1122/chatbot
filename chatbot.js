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

  if (m.includes("hello") || m.includes("hi")) return "Hello! Nice to meet you 😊";
  if (m.includes("your name")) return "You can call me Bot!";
  if (m.includes("creator")) return "I was created by Davanico, a web developer.";
  if (m.includes("contact")) return "Reach us at admin@website.com.";
  if (m.includes("thank")) return "You're welcome!";
  if (m.includes("project")) return "You can check out my latest projects in the Project section.";
  if (m.includes("bye")) return "Goodbye! See you again 👋";
  if (m.includes("time")) return `It’s currently ${new Date().toLocaleTimeString('en-US')}`;
  if (m.includes("date")) return `Today is ${new Date().toLocaleDateString('en-US')}`;
  return "That's a good question! I'm still learning to answer that.";


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

// === English Dialogs ===
  if (m.includes("hello") || m.includes("hi")) return "Hello! Nice to meet you. 😊";
  if (m.includes("good morning")) return "Good morning! Have a great day ahead!";
  if (m.includes("good afternoon")) return "Good afternoon! How can I assist you today?";
  if (m.includes("good evening")) return "Good evening! Hope you're doing well.";
  if (m.includes("good night")) return "Good night! Rest well. 😴";

  if (m.includes("your name") || m.includes("who are you")) return "I'm your AI Assistant created by Davanico to help you here.";
  if (m.includes("how old") || m.includes("age")) return "I'm quite new! Just created recently. 😉";
  if (m.includes("where are you from")) return "I live in the cloud, always ready to help from anywhere!";

  if (m.includes("contact")) return "You can contact us at: admin@website.com 📧";
  if (m.includes("email")) return "Official email: admin@website.com";
  if (m.includes("whatsapp") || m.includes("phone")) return "Feel free to message us via WhatsApp at +62 xxx-xxxx.";

  if (m.includes("thank you") || m.includes("thanks")) return "You're welcome! I'm happy to help. 🙌";
  if (m.includes("great") || m.includes("awesome")) return "Thank you! You're awesome too! 😄";
  if (m.includes("cool")) return "Glad you think it's cool! 🔥";

  if (m.includes("project") || m.includes("portfolio")) return "You can check out my latest projects in the Project section!";
  if (m.includes("what do you do")) return "I can answer your questions and help guide you through this website.";
  if (m.includes("coding") || m.includes("programming")) return "I love HTML, CSS, and JavaScript! 👨‍💻";

  if (m.includes("tools")) return "Common tools: VS Code, GitHub, Figma, Vercel.";
  if (m.includes("hosting")) return "This website is hosted on Vercel.";
  if (m.includes("framework")) return "This site may use vanilla JS or even frameworks like React if needed.";

  if (m.includes("chatgpt")) return "I'm inspired by ChatGPT, but this version works offline using simple logic.";
  if (m.includes("ai")) return "Yes, I'm a simple AI chatbot designed for interactive portfolios.";

  if (m.includes("weather")) return "Sorry, I can't provide real-time weather info yet. 🌤️";
  if (m.includes("time")) return `Current time is ${new Date().toLocaleTimeString('en-US')}`;
  if (m.includes("date") || m.includes("today")) return `Today is ${new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })}`;

  if (m.includes("how") || m.includes("why")) return "Could you please clarify your question?";
  if (m.includes("help")) return "Sure! Type anything and I’ll try to help as best as I can.";

  if (m.includes("bye") || m.includes("goodbye") || m.includes("see you")) return "Goodbye! Feel free to come back anytime. 👋";
  if (m.includes("who are you") || m.includes("what is your name")) return "I'm your friendly AI Assistant!";


  // Fallback jika tidak dikenali
  return "That's an interesting question! I'm still learning to answer it better. 🙏";
}

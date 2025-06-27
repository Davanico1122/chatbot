const chatbot = document.getElementById('chatbot');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const languageSelect = document.getElementById('languageSelect'); // Ambil dropdown

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
    const selectedLang = languageSelect.value;
    let response = '';

    try {
      if (selectedLang === 'id') {
        response = getBotResponseID(msg);
      } else {
        response = getBotResponseEN(msg);
      }
    } catch (error) {
      response = "Oops! Bot tidak bisa merespons saat ini.";
      console.error("Error:", error);
    }

    addMessage(response, 'bot');
  }, 400);
}

function handleKeyPress(e) {
  if (e.key === 'Enter') sendMessage();
}


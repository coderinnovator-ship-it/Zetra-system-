import { login } from './auth.js';
import { sendMessage, listenMessages } from './chat.js';

const loginBtn = document.getElementById('loginBtn');
const sendBtn = document.getElementById('sendBtn');

loginBtn.onclick = () => {
  const name = document.getElementById('username').value.trim();
  if (!name) return;
  login(name);
};

sendBtn.onclick = () => {
  const input = document.getElementById('messageInput');
  if (!input.value) return;
  sendMessage(input.value);
  input.value = '';
};

listenMessages();

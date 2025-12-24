const messagesBox = document.getElementById("messages");
const input = document.getElementById("messageInput");

function render() {
  const msgs = JSON.parse(localStorage.getItem("zetra_msgs") || "[]");
  messagesBox.innerHTML = msgs.map(m => `<div>${m}</div>`).join("");
}

document.getElementById("sendBtn").onclick = () => {
  const msgs = JSON.parse(localStorage.getItem("zetra_msgs") || "[]");
  msgs.push(input.value);
  localStorage.setItem("zetra_msgs", JSON.stringify(msgs));
  input.value = "";
  render();
};

render();

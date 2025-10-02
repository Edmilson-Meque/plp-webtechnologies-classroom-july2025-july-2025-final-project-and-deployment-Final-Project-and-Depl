// Toggle mensagem na Home
function toggleMessage() {
  const msg = document.getElementById("msg");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
}

// Validação do formulário de contato
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formMsg = document.getElementById("formMsg");

  if (name && email && message) {
    formMsg.textContent = "✅ Mensagem enviada com sucesso!";
    formMsg.style.color = "green";
    return false; // evita refresh (apenas simulação)
  } else {
    formMsg.textContent = "⚠️ Preencha todos os campos!";
    formMsg.style.color = "red";
    return false;
  }
}

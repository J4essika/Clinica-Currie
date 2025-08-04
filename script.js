document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Sua mensagem foi enviada com sucesso!";
  this.reset();
});

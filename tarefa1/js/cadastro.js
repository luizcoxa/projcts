// Mostra a confirmação de cadastro sem enviar os dados a nenhum servidor.
// O navegador já validou os campos (required, type, pattern) antes deste evento.
const form = document.getElementById("form-cadastro");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const primeiroNome = form.elements.nome.value.trim().split(/\s+/)[0];
  const perfil = form.elements.perfil.value === "doador" ? "doador" : "voluntário";

  const titulo = document.createElement("h2");
  titulo.textContent = "Cadastro realizado com sucesso!";
  titulo.tabIndex = -1;

  const mensagem = document.createElement("p");
  mensagem.textContent = `Obrigado, ${primeiroNome}! Seu cadastro como ${perfil} foi registrado. Em breve a ONG Amigos dos Animais entrará em contato.`;

  const voltar = document.createElement("a");
  voltar.href = "index.html";
  voltar.textContent = "Voltar ao início";

  const area = form.closest("section");
  area.replaceChildren(titulo, mensagem, voltar);
  titulo.focus();
});

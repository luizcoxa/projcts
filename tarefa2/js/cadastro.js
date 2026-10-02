// Feedback do cadastro: alerta de erro, alerta de sucesso e toast.
// Nenhum dado é enviado a servidor; o navegador já validou (required, type, pattern).
const form = document.getElementById("form-cadastro");
const alertaErro = document.getElementById("alerta-erro");

// Quando o navegador bloqueia o envio por campo inválido, mostra o alerta de erro.
form.addEventListener("invalid", () => {
  alertaErro.hidden = false;
}, true);

form.addEventListener("input", () => {
  if (form.checkValidity()) alertaErro.hidden = true;
});

const modal = document.getElementById("modal-confirmacao");

// 1) Ao enviar, em vez de concluir direto, abre o modal de confirmação.
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const primeiroNome = form.elements.nome.value.trim().split(/\s+/)[0];
  const perfil = form.elements.perfil.value === "doador" ? "doador" : "voluntário";
  document.getElementById("modal-texto").textContent =
    `${primeiroNome}, você está se cadastrando como ${perfil}. Deseja confirmar o envio?`;
  modal.showModal();
});

// 2) Ao confirmar, fecha o modal e mostra o alerta de sucesso e o toast.
document.getElementById("modal-confirmar").addEventListener("click", () => {
  modal.close();

  const primeiroNome = form.elements.nome.value.trim().split(/\s+/)[0];
  const perfil = form.elements.perfil.value === "doador" ? "doador" : "voluntário";

  const alerta = document.createElement("div");
  alerta.className = "alerta alerta-sucesso";
  alerta.setAttribute("role", "status");

  const conteudo = document.createElement("div");
  const titulo = document.createElement("h2");
  titulo.textContent = "Cadastro realizado com sucesso!";
  titulo.tabIndex = -1;
  const mensagem = document.createElement("p");
  mensagem.textContent = `Obrigado, ${primeiroNome}! Seu cadastro como ${perfil} foi registrado. Em breve a ONG Amigos dos Animais entrará em contato.`;
  conteudo.append(titulo, mensagem);
  alerta.append(conteudo);

  const voltar = document.createElement("a");
  voltar.href = "index.html";
  voltar.className = "botao";
  voltar.textContent = "Voltar ao início";

  form.closest("section").replaceChildren(alerta, voltar);
  titulo.focus();
  mostrarToast(`Cadastro como ${perfil} enviado.`, "sucesso");
});

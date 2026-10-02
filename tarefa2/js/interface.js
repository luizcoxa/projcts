// Menu responsivo (abre/fecha no celular) e contador de caracteres da mensagem.
document.documentElement.classList.remove("sem-js");

const botaoMenu = document.querySelector(".botao-menu");
const menu = document.getElementById("menu-principal");

if (botaoMenu && menu) {
  const alternar = (abrir) => {
    menu.classList.toggle("aberto", abrir);
    botaoMenu.setAttribute("aria-expanded", String(abrir));
    botaoMenu.querySelector(".icone-menu").textContent = abrir ? "✕" : "🐾";
    botaoMenu.querySelector(".texto-menu").textContent = abrir ? "Fechar" : "Menu";
  };

  botaoMenu.addEventListener("click", () => {
    alternar(botaoMenu.getAttribute("aria-expanded") !== "true");
  });

  // Esc fecha o menu e devolve o foco ao botão
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    // fecha o submenu (dropdown) tirando o foco de dentro dele
    const submenuAtivo = document.activeElement.closest(".tem-submenu");
    if (submenuAtivo) document.activeElement.blur();
    if (menu.classList.contains("aberto")) {
      alternar(false);
      botaoMenu.focus();
    }
  });
}

const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador-mensagem");

if (mensagem && contador) {
  const max = mensagem.maxLength;
  const atualizar = () => {
    const restantes = max - mensagem.value.length;
    contador.textContent = `${restantes} caracteres restantes`;
    contador.classList.toggle("limite", restantes <= 50);
  };
  mensagem.addEventListener("input", atualizar);
  atualizar();
}

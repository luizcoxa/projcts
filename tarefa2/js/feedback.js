// Toasts: notificações não obstrutivas, empilhadas no canto da tela.
// Uso: mostrarToast("Mensagem", "sucesso" | "erro" | "aviso" | "info")
(function () {
  const ROTULOS = { sucesso: "Sucesso", erro: "Erro", aviso: "Atenção", info: "Informação" };

  function obterArea() {
    let area = document.getElementById("area-toasts");
    if (!area) {
      area = document.createElement("div");
      area.id = "area-toasts";
      area.className = "toasts";
      area.setAttribute("role", "region");
      area.setAttribute("aria-label", "Notificações");
      document.body.appendChild(area);
    }
    return area;
  }

  window.mostrarToast = function (mensagem, tipo = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    // erros são anunciados na hora (alert); os demais esperam o leitor terminar (status)
    toast.setAttribute("role", tipo === "erro" ? "alert" : "status");

    const texto = document.createElement("p");
    const titulo = document.createElement("strong");
    titulo.textContent = ROTULOS[tipo] || ROTULOS.info;
    texto.append(titulo, document.createTextNode(` ${mensagem}`));

    const fechar = document.createElement("button");
    fechar.type = "button";
    fechar.className = "toast-fechar";
    fechar.setAttribute("aria-label", "Fechar notificação");
    fechar.textContent = "✕";

    const remover = () => toast.remove();
    fechar.addEventListener("click", remover);
    toast.append(texto, fechar);
    obterArea().appendChild(toast);

    setTimeout(remover, 6000);
    return toast;
  };

  // Botões de demonstração (página de componentes): data-toast="tipo"
  document.querySelectorAll("[data-toast]").forEach((botao) => {
    botao.addEventListener("click", () => {
      mostrarToast(botao.dataset.mensagem || "Ação concluída.", botao.dataset.toast);
    });
  });

  // Modais: data-modal="id" abre; data-fechar-modal fecha; clicar no fundo escurecido também fecha
  document.querySelectorAll("[data-modal]").forEach((botao) => {
    botao.addEventListener("click", () => document.getElementById(botao.dataset.modal).showModal());
  });
  document.querySelectorAll("dialog").forEach((modal) => {
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
    modal.querySelectorAll("[data-fechar-modal]").forEach((b) => b.addEventListener("click", () => modal.close()));
  });
})();

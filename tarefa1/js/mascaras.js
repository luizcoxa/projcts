// Máscaras de entrada para CPF, telefone e CEP.
// A cada tecla: remove o que não é número, limita os dígitos e insere a pontuação.
const formatos = {
  cpf: {
    max: 11,
    aplicar: (d) => d
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  },
  telefone: {
    max: 11,
    aplicar: (d) => d
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
  },
  cep: {
    max: 8,
    aplicar: (d) => d.replace(/^(\d{5})(\d)/, "$1-$2")
  }
};

document.querySelectorAll("input[data-mascara]").forEach((campo) => {
  const { max, aplicar } = formatos[campo.dataset.mascara];

  campo.addEventListener("input", () => {
    // quantos dígitos havia antes do cursor, para não pular o cursor ao editar no meio
    const antes = campo.value.slice(0, campo.selectionStart).replace(/\D/g, "").length;
    const digitos = campo.value.replace(/\D/g, "").slice(0, max);
    campo.value = aplicar(digitos);

    let contados = 0;
    let pos = 0;
    while (pos < campo.value.length && contados < antes) {
      if (/\d/.test(campo.value[pos])) contados++;
      pos++;
    }
    campo.setSelectionRange(pos, pos);
  });
});

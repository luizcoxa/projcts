# Resposta dos estados interativos (campo de 3500 caracteres)

Contagem: 2235 de 3500.

```
BOTÕES (.botao e button[type="submit"])
Todos os botões partem do mesmo estado base: fundo var(--cor-primaria) #8a4b08, texto branco, border-radius de 8px e transition: background 0.2s, transform 0.2s. Cada pseudo-classe muda propriedades específicas:
- :hover: o fundo escurece para var(--cor-primaria-escura) #5e3305 e transform: translateY(-2px) faz o botão "subir", indicando que é clicável. Nos botões secundários (verdes) o fundo vai de #1f6f5c para #14493c.
- :focus-visible: outline: 3px solid var(--cor-foco) #1a5fb4 com outline-offset: 2px, regra global que também vale para links, campos e select. Aparece só na navegação por teclado, sem poluir o clique do mouse.
- :active: o fundo escurece ainda mais (#3f2203), transform volta a translateY(0) e entra box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.35), dando a sensação de botão pressionado.
- :disabled e [aria-disabled="true"]: fundo var(--neutro-300) #d9c7b0, texto var(--neutro-700) #4a4540 (contraste de cerca de 6:1), cursor: not-allowed, transform: none e sem sombra, para não parecer clicável.
Os cartões (.card) também têm :hover, com translateY(-4px) e sombra maior (--sombra-forte), em transition de 0.2s.

FORMULÁRIOS (feedback de preenchimento)
Campos de texto, e-mail, telefone, data, select e textarea têm borda de 2px em var(--neutro-700), e a transition: border-color 0.2s, box-shadow 0.2s deixa a mudança suave.
- :hover: a borda passa para a cor primária.
- :focus: borda azul (--cor-foco) e box-shadow: 0 0 0 3px rgba(26, 95, 180, 0.2), um halo que destaca o campo ativo.
- :user-valid: borda verde var(--cor-sucesso) #1f6f5c e ícone de check (✓) no lado direito, com background-image em SVG.
- :user-invalid: borda vermelha var(--cor-erro) #b00020, fundo rosado #fff5f6 e ícone de erro (✕) no lado direito.
Usei :user-valid e :user-invalid (e não :valid e :invalid) para o erro só aparecer depois que a pessoa interage, sem mostrar campos vazios em vermelho ao abrir a página. O ícone garante que a informação não dependa só da cor, o que ajuda quem tem daltonismo.
Nas opções de rádio, .opcao:has(input:checked) muda a borda para verde e o fundo para #e7f3ef. O contador de caracteres da mensagem fica vermelho e em negrito quando restam 50 ou menos.
```

# Resposta do Design System (campo de 3500 caracteres)

Cole o texto abaixo no campo. Contagem: 2667 de 3500.

```
O Design System está no bloco :root do arquivo css/estilo.css, com variáveis nativas (custom properties) reaproveitadas em todas as páginas. Mudar um valor ali atualiza o site inteiro.

CORES (12 variáveis, mais que as 8 exigidas)
Primárias: --cor-primaria #8a4b08 (marrom, cabeçalho e botões), --cor-primaria-escura #5e3305 (títulos e rodapé), --cor-primaria-clara #f3e3cf (faixas de destaque).
Secundárias: --cor-secundaria #1f6f5c (verde, ações de cadastro e estado "marcado"), --cor-secundaria-escura #14493c, --cor-destaque #c2410c (linha de realce).
Neutras: --neutro-900 #2b2b2b (texto), --neutro-700 #4a4540 (texto secundário e bordas de campos), --neutro-300 #d9c7b0 (bordas), --neutro-100 #fdf8f1 (fundo), --branco #ffffff.
Sistema: --cor-erro #b00020, --cor-sucesso #1f6f5c, --cor-foco #1a5fb4, além de sombras em rgba(43, 43, 43, 0.12) e rgba(43, 43, 43, 0.18).

TIPOGRAFIA (5 níveis)
--texto-pequeno 0,875rem (rodapé e contador), --texto-base 1rem (corpo), --titulo-3 1,25rem (h3), --titulo-2 1,75rem (h2) e --titulo-1 clamp(2rem, 5vw, 2.75rem) (h1, que se ajusta sozinho ao tamanho da tela). A fonte é a do sistema (Segoe UI, Roboto, Arial), que carrega rápido em conexões lentas, e as medidas em rem respeitam o zoom escolhido pelo usuário.

ESPAÇAMENTOS (escala modular de base 8px)
--esp-1 0,25rem (4px), --esp-2 0,5rem (8px), --esp-3 1rem (16px), --esp-4 1,5rem (24px), --esp-5 2rem (32px), --esp-6 3rem (48px) e --esp-7 4rem (64px). Todo margin, padding e gap usa esses valores: esp-2 e esp-3 dentro de botões e campos, esp-4 dentro de cards, esp-5 e esp-6 entre seções. Isso dá ritmo visual constante e evita números soltos no código.

JUSTIFICATIVAS
Acessibilidade: medi o contraste das combinações principais. Texto sobre o fundo: 13,4:1. Branco sobre primária: 6,8:1; sobre secundária: 6,0:1; sobre destaque: 5,2:1; primária-escura sobre primária-clara: 8,6:1. Todos acima do mínimo AA (4,5:1). Bordas de campos usam --neutro-700 para ficar visíveis. Há foco visível de 3px (--cor-foco), link para pular ao conteúdo, aria-current no menu, aria-expanded no botão do menu, contador de caracteres com aria-live e animações desligadas em prefers-reduced-motion. Nenhuma informação depende só da cor: o erro mostra também borda e fundo diferentes, e o menu atual fica em negrito.
Contexto das ONGs: tons terrosos e o verde transmitem acolhimento, cuidado e confiança, adequados à causa animal. O público é variado, com voluntários de várias idades e celulares simples. Por isso a interface tem fonte legível, botões grandes (mínimo de 48px de altura), layout responsivo com Flexbox e Grid, poucas cores por tela e fontes do sistema, sem peso extra.
```

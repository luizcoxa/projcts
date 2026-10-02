# Resposta do menu dropdown e menu condensado (campo de 3000 caracteres)

```
PROCESSO DE TRANSFORMAÇÃO (menu horizontal para menu condensado)

1) Estado padrão (telas largas): o menu é horizontal. Em "nav ul" usei display: flex com gap, e o cabeçalho (.cabecalho) usa display: flex; justify-content: space-between. O botão .botao-menu começa com display: none, então só existe no celular.

2) Ocultar os submenus em resolução padrão: o item "Projetos" é o <li class="tem-submenu"> (position: relative) e o submenu é o <ul class="submenu"> (position: absolute; top: 100%). Ele fica escondido com opacity: 0; visibility: hidden; transform: translateY(-8px). A exibição usa as pseudo-classes .tem-submenu:hover > .submenu (mouse) e .tem-submenu:focus-within > .submenu (teclado), que mudam para opacity: 1; visibility: visible; transform: translateY(0). Transição: transition: opacity, transform, visibility 0.2s.

3) Acionamento no celular: a media query @media (max-width: 767px) exibe o .botao-menu (display: flex), deixa o nav com width: 100% e o cabeçalho com flex-wrap: wrap. A lista "#menu-principal > ul" passa a flex-direction: column; overflow: hidden; max-height: 0, ficando recolhida. O submenu vira position: static, visível e recuado dentro do menu.

4) Lógica de abertura: um JavaScript pequeno (interface.js) alterna a classe .aberto no #menu-principal e o atributo aria-expanded no botão ao clicar. O seletor "#menu-principal.aberto > ul" muda para max-height: 480px, e transition: max-height 0.3s ease anima a abertura. Esc fecha o menu.

5) Ícone do menu: em vez das três barras, usei um ícone temático da causa animal, a patinha 🐾, junto do texto "Menu" dentro do botão (.icone-menu e .texto-menu), para ficar claro mesmo a quem não conhece o símbolo do hambúrguer. Ao abrir, o JavaScript troca para "✕ Fechar". O botão tem fundo claro, para dar contraste ao ícone, e altura mínima de 48px.

MEDIA QUERIES: max-width: 767px aciona o menu condensado; a partir de 768px nenhuma regra recolhe o menu, então vale o estado padrão (horizontal, com dropdown), e a media query min-width: 768px só aumenta o espaçamento do main; @media (prefers-reduced-motion: reduce) desliga as transições.
```

# Respostas do Grid de 12 colunas e breakpoints

## Campo 1: CSS Grid de 12 colunas e os 5 breakpoints (1984 de 2500)

```
GRID DE 12 COLUNAS (css/estilo.css)
O contêiner .grade-12 usa display: grid com grid-template-columns: repeat(12, 1fr) e gap entre os itens (--esp-4, aumentando para --esp-5 a partir de 1024px). Todo filho direto começa ocupando as 12 colunas (grid-column: span 12) e tem min-width: 0 para o conteúdo não estourar a largura. Para distribuir os blocos criei classes utilitárias .col-1 até .col-12, cada uma com grid-column: span N, e variações por breakpoint (.col-sm-N, .col-md-N, .col-lg-N, .col-xl-N, .col-xxl-N), que entram dentro de @media (min-width). Assim o mesmo elemento muda de largura conforme a tela, sem alterar o HTML.

Onde foi aplicado:
- Página inicial: "Quem Somos" usa col-12 col-md-6 no texto e na imagem (empilhados no celular, lado a lado no tablet); os cards "Como você pode ajudar" usam col-12 col-sm-6 col-lg-4.
- Projetos: os 3 cards usam col-12 col-sm-6 col-lg-4 (1, 2 e 3 por linha).
- Cadastro: cada fieldset também é um grid de 12 colunas; os campos usam col-12 col-md-6 (um por linha no celular, dois no tablet) e Nome, Endereço e Cidade ficam em col-12.
Os cards são flex em coluna, então têm a mesma altura em cada linha.

OS 5 BREAKPOINTS (@media, abordagem mobile-first)
1) min-width: 480px, celulares grandes: ativa as classes col-sm-*, e os cards passam para 2 por linha.
2) min-width: 768px, tablets: ativa col-md-*, o menu hambúrguer some e vira barra horizontal, o texto e a imagem ficam lado a lado, o formulário passa para 2 colunas e o espaçamento do main aumenta.
3) min-width: 1024px, notebooks: ativa col-lg-*, com 3 cards por linha e gap maior.
4) min-width: 1280px, desktops: ativa col-xl-* e amplia o contêiner (--largura-max) de 1100px para 1200px.
5) min-width: 1600px, telas panorâmicas: ativa col-xxl-*, amplia o contêiner para 1400px e aumenta o texto base para 1,125rem.
Além deles, @media (max-width: 767px) cuida só do menu recolhido, e prefers-reduced-motion remove animações. Testei de 360px a 1600px sem rolagem horizontal.
```

## Campo 2: os cinco breakpoints em pixels e a estratégia (839 de 1000)

```
Os cinco breakpoints, todos em min-width (mobile-first):
1) 480px: celulares grandes.
2) 768px: tablets.
3) 1024px: notebooks.
4) 1280px: desktops.
5) 1600px: telas panorâmicas (ultrawide).

Estratégia: o CSS base já atende o celular, com uma coluna e o menu recolhido. A cada breakpoint só se acrescenta o que muda, usando as classes do grid de 12 colunas (.col-sm-N, .col-md-N, .col-lg-N, .col-xl-N, .col-xxl-N). Os cards vão de 1 para 2 por linha (480px) e para 3 (1024px). Em 768px o menu vira horizontal e o formulário usa 2 colunas. Em 1280px e 1600px o contêiner cresce (1200px e 1400px) e o texto aumenta, evitando telas largas vazias. Assim o template (cabeçalho, faixa de título, main e rodapé) se repete em todas as páginas, e o código fica enxuto, sem repetir regras. Os pontos de quebra seguem larguras reais de dispositivos.
```

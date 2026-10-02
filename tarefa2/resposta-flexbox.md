# Módulos com Flexbox (botão "Adicionar módulo estrutural")

Cada módulo = um clique em "Adicionar módulo estrutural". Cole o nome (até 150) e as propriedades (até 500).

## 1
**Nome:** `.cabecalho (cabeçalho do site: marca, botão de menu e navegação)`
**Propriedades:** `display: flex; align-items: center (alinha marca e menu na vertical); justify-content: space-between (marca à esquerda, navegação à direita); gap: var(--esp-3); no celular, flex-wrap: wrap (o menu desce para a linha de baixo).`

## 2
**Nome:** `nav ul (menu de navegação principal)`
**Propriedades:** `display: flex; gap: var(--esp-2) para os links lado a lado. Abaixo de 768px, flex-direction: column deixa os itens empilhados no menu hambúrguer (max-height: 0 recolhe e .aberto expande).`

## 3
**Nome:** `.card (cartão de projeto e de ação)`
**Propriedades:** `display: flex; flex-direction: column: imagem em cima e corpo embaixo. Como o card é item do Grid, estica e todos ficam com a mesma altura na linha. overflow: hidden mantém os cantos arredondados na imagem.`

## 4
**Nome:** `.card-corpo (texto e botão dentro do cartão)`
**Propriedades:** `display: flex; flex-direction: column; gap: var(--esp-2); flex: 1 (ocupa o espaço restante do card). No botão: margin-top: auto empurra o botão para o rodapé do cartão e align-self: flex-start evita que ele estique na largura toda.`

## 5
**Nome:** `.campo (rótulo + campo + mensagem do formulário)`
**Propriedades:** `display: flex; flex-direction: column; gap: var(--esp-1). Rótulo e campo ficam empilhados com espaço constante; o campo ocupa a largura toda da coluna do Grid.`

## 6
**Nome:** `.opcoes e .opcao (escolha voluntário ou doador)`
**Propriedades:** `.opcoes: display: flex; flex-wrap: wrap; gap: var(--esp-3), e as opções quebram de linha em telas estreitas. .opcao: display: flex; align-items: center; gap: var(--esp-2) centraliza o botão de rádio com o texto.`

## 7
**Nome:** `body (estrutura da página com rodapé fixo no fim)`
**Propriedades:** `display: flex; flex-direction: column; min-height: 100vh. O main recebe flex: 1 e cresce para ocupar o espaço livre, empurrando o rodapé para o fim da tela mesmo em páginas com pouco conteúdo.`

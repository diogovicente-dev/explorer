# Focus Timer

## Estruturando HTML

- para este aplicativo não é necessário usar tags semânticas
- para ajudar a encontrar o aplicativo cria-se uma tag `meta` de apoio (no html)
- essa tag vai no 'head' do html

```html
<meta name="description" content="temporizador estilo pomodoro" />
```

- incluir um ícone para aparecer na guia do site

```html
<link rel="shortcut icon" href="./assets/favicon.svg" type="image/x-svg" />
```

## Adicionando ícones

- local para buscar / inserir ícones
  {https://phosphoricons.com/}
- biblioteca externa
- na bilbioteca é possível entender como usar na `web`

## Iniciando estilos e variáveis e Estilizando Relógios e botões

- usando a função `clamp`
- inserir 3 valores:

1. valor mímino aceitável
2. valor médio (que irá flutuar)
3. valor máximo

## CSS not para remover botões da tela

- estado da aplicação: pensando quando a aplicação vai estar 'rodando' = running
- classe 'running' e clase 'music-on' para ocultar os botões de acordo com o estado da aplicação
- css not
- estratégia para fazer no css as 'lógicas' de ocultar / exibir os botões

```css
.running .ph-play-circle,
.running .ph-timer,
.music-on .ph-speaker-none,
/* 
nesse 'pseudo' class not, o css pega o elemento do html tag <html> que não tem a classe 'running' e 'music-on', então pega o elemento (classe) e oculta se não tiver
*/
html:not(.running) .ph-play-circle,
html:not(.running) .ph-pause-circle,
html:not(.music-on) .ph-speaker-high {
  display: none;
}
```

## Estilos para o light mode

- estratégia: copiar as cores de um estilo e colar no outro estilo
- inverter as cores de fundo e texto
- mesma estratégia para os botões do estilo dark/light mode usando o `css:not`

## Adicionando acessibilidade aos botões

- adicionar uma classe 'screen reader only' para os textos nos elementos <span>
- buscar "sr-only" na internet para implementar os valores
- sr-only oculta visualmente elementos, mas deixa visível para leitores de tela

```css
.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;

  margin: -1px;
  padding: 0px;
  border: 0;
  appearance: none;
}
```

## Adicionando a lógica do light mode

- lembrar do `defer` sempre de inserir o script, para deixar o js por 'último' até a página carregar
- `document.getElementById("toggle-mode")` - igual ao querySelector, mas pega pelo 'id' adicionado para o elemento html
- `document.documentElement` está pegando o a tag 'html' do arquivo html
- construído a alteração para acessibilidade também

## Construindo o módulo FocusTimer

- o que é o 'estado'? momento da aplicação
- qual estado inicial? quais os atributos iniciais da aplicação?
  -- minutos, segundos, está rodando?, está mudo?

## Registrando eventos dos botões

- sempre pensar os passos que a aplicação irá ter: quando ela começa.., os próximos passos,
- modularizando eventos e elementos
- `event.target` => ao clicar ele identifica qual é o elemento clicado (testar em F12 - ferramenta desenvolvedor no navegador)

## Dataset para controle das ações

- estratégia 'dataset' para elementos html
- no html, inserir uma propriedade `data-` no elemento (no caso do projeto, no button)
- depois do sinal de 'menos - ' podemos inserir qualquer informação para criar a propriedade
- no caso do projeto, foi criado `data-action`
- inserir um valor para essa propriedade - no projeto, para o botão 'play' foi inserido o valor `toggleRunning`

```html
<button data-action="toggleRunning" class="ph ph-play-circle">
  <!-- <span class="sr-only">Iniciar contador</span> -->
</button>
```

- no projeto, com a estratégia de pegar o 'clique' dentro dos 'controls', que retornava no console-log o elemento, com a nova estratégia irá retornar o valor da propriedade = 'toggleRunning'

```js
controls.addEventListener("click", event => {
  const action = event.target.dataset.action
  // capturando as ações de clique definidas
})
```

## Conectando as primeiras ações

- nova forma de executar uma função, dada a estratégia de criação dos módulos (um módulo apenas com as ações)
- dataset criado com os mesmos nomes das funções que seriam criadas, para criar o link entre elas (capturar a ação e chamar a função)

```js
actions[action]()
```

```js
import * as functions from "./functions.js"
// esse tipo de importação, tud o que tem em functions.js será importado como functions
// functions retorna como um objeto, e as funções, constantes, etc.. que forem exportadas do arquivo functions.js serão acessadas como propriedades de um objeto
```

## Alterando o estado da aplicação conforme a ação

- toggleRunning - estado tem que ser diferente do estado atual
- adicionar a classe `running` no elemento HTML

```html
<html lang="pt-br" class="running">
  <head></head>
  <body></body>
</html>
```

- a função `.toggle()`sempre retorna um verdadeiro ou falso
- se removeu, retorna false, se inseriu, retorna true
- por essa função 'toogle' é inserido no estado da aplicação
- estado da aplicação é importante nesse contexto, tem que sempre estar atualizado / certo

## Atualizando o display do contador

- atualizar o display do contador
- `nullish coaleasing operator`

```js
export function updateDisplay(minutes, seconds) {
  minutesup = minutes ?? state.minutes
  // o operador ?? é o nullish
  // se o minutes (do lado direito da atribuição) for nulo, então pega o state.minutes atribui ao 'minutes'
  // se tiver um valor, atribui o valor
}
```

- inserir a regra de atualizar os minutos e segundos
- depois 'exporta' os elementos

```js
String(minutes).padStart(2, "0")
// pad start para criar uma 'máscara' para o texto / campo
// nesse caso, quero 2 casas, se não tiver 2 dígitos, insere um 'zero' no início
```

## Estruturando o countdown

- função setTimeout() do JS
- possui parâmentros:
  -- 1. função
  -- 2. tempo para execução (em milissegundos)
- vai executar uma função depois de determinado tempo

```js
setTimeout(() => {}, 1000)
/* callback function */
```

- recursividade (uma função que chama ela mesma)
- a recursividade deve ser parada em algum momento

## Lógica do countdown

- transformando minutos e segundos para o tipo 'number' para poder usar o decremento
- dado o valor inicial, não permitido ficar negativo (segundos e minutos)

## Alterando contéudo de uma tag com contenteditable

- função que seta como 'editável'

```js
export function set() {
  el.minutes.setAttribute("contenteditable", true)
}
```

## Limpando o conteúdo de uma tag com evento de focus

- em um módulo foi implementado que, quando clicar no 'set', focar no campo 'minutes'
- no módulo 'events', foi criada a função 'listener' para que, quando vier o 'focus' no elemento (minutes), o campo seja 'limpado'

```js
export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
  /* aqui eu 'foco' nos minutos do focustimer */
}

/*
Função criada para 'limpar' quando focado
*/
export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })
}
```

## Aceitando apenas números no contador

- expressão regular = olhar determinados caracteres no JS
- dado o evento (onkeypress), a função `.test()` irá testar o caractere 'um a um' conforme digitado (no caso desse projeto)
- a função retorna `true` ou `false`: se for true, permite digitar; se for false, não permite
-

```js
event => /a/.test()
event => /\d/.test() // aqui estou validando
/* 
Nestas expressões, o 'a' representa o caractere 'A'
o \d é uma 'variável' que representa apenas números
*/
```

## Finalizando a escolha dos minutos do temporizador

- não permitir valores acima de 60 minutos
- ao sair do 'focus' o sistema já atualiza tudo

```js
addEventListener("blur")
/* o blur é quando 'sai' do foco de um elemento ou campo */
```

## Adicionando sons na aplicação

- `new Audio()` para inicializar um som, construtor interpretado pela DOM do JS
- igual a tag <audio> do HTML
- no HTML tem que adicionar o som e a propriedade `controls` na tag <audio> para habilitar

```js
export const buttonPressAudio = new Audio("./assets/button-press.wav")
// aqui já criei o áudio, faltando configurar as manipulações dele
```

```js
sounds.buttonPressAudio.play()
/* 
executando o som conforme módulo 'sounds' importado = .play()
*/
```

- executar um som no final da aplicação (despertador)
  -- adicionar o som quando os minutos forem menor do que "zero" - timer

```js
if (minutes < 0) {
  reset()
  kitchenTimer.play()
  return
}
```

## Corrigindo o Acúmulo de Timeout

- do jeito que estava, todas as vezes que clica no 'play' vai chamar novamente a função
- vai 'acumulando' todas as vezes que eu cliquei
- solução: armazenar todas as vezes que eu cliquei no estado da aplicação
- criar um 'id' no estado da aplicação, todas as vezes que iniciar o 'countdown' limpar o id

```js
export function countdown() {
  clearTimeout(state.countdownId)
  // código
  state.countdownId = setTimeout(() => countdown(), 1000)
  /* 
  Atribuído id a cada 'setimeout'
  */
}
```

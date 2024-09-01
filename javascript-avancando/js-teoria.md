# Avançando no JS

## Introdução a DOM

- Documento Object Model
  -- Modelagem do documento como objeto JS
- Representação do HTML em objetos JavaScript
  -- Atributos e Métodos
- Criado pelo Navegador
  -- É uma interace (API) usada pelo navegador
  -- Interface entre JS e HTML
- JS usa a DOM para se conectar ao HTML
  -- DOM não é JS
- Manipular o HTML com JS
  -- Modificar o HTML, os estilos e até disparar ações

Pelo DevTools é possível ver os objetos

- window
- document

## Manipulando a DOM

- Para manipular um elemento, no JS é preciso tratar esse elemento como uma variável, ou seja, ao usar o document.querySelector() eu preciso associar a uma variável, para que em JS eu possa manipular essa variável com os métodos necessários.
  **Element e Node**

As TAGs HTML podem ser chamadas de node (nó) ou element (elemento)

- pegando um elemento

```js
const h1 = document.querySelector("h1") // HTML Element

// query = pesquisa
// selector = seletor
```

- pegando vários elementos

```js
const links = document.querySelectorAll("a") // Node List - devolve uma lista de 'nós'

// nodelist é quase um array, mas não é um array
```

- recebendo e modificando valores

```js
console.log(h1.innerText) // imprime o texto da tag h1 (que foi criada (variável h1))
```

```js
console.log(h1.innerHTML) // imprime o HTML dentro da tag (se aplicável)
```

```js
h1.innerText = "Novo" // aqui estou atribuindo um novo texto à tag H1
```

- alterar estilos, adicionar classes

```js
// alterando estilo
h1.style.backgroundColor = "red"
```

```js
// adicionando classe
h1.classList.add("hide")
```

```js
// removendo classes
h1.classList.remove("hide")
```

```js
// alterando entre as classes
h1.classList.toggle("hide")
```

## Capturando valor do formulário e Adicionando a Lógica

**Jogo da Adivinhação**

- vincular o 'script' do JS no index.html
  -- deixar como última tag do 'body' para manipular corretamente a DOM

- Criar uma função para capturar o valor do formulário
- propriedade 'onclick' ser inserida no elemento (botão)

```html
<!-- no onclick chama uma função -->
<button onclick="handleClick(event)">Tentar</button>
```

```js
// criar uma variável de controle externa à função
xAttempts = 1
// criar o número randômico
const randomNumber = Math.round(Math.random() * 10)

// no JS cria-se uma função para executar o que precisa ser executado quando clicar no botão Tentar Novamente
function handleClick(event) {
  // redefine a configuração para não ficar carregando a página todas as vezes
  event.preventDefault()

  // cria-se uma variável para capturar o input, atribuindo a essa variável o que foi inserido no elemento de id = #inputNumber
  const inputNumber = document.querySelector("#inputNumber")

  // faço a condicional para exibir a próxima tela
  if (Number(inputNumber.value) == randomNumber) {
    // aqui eu vou adicionar a classe 'hide' em um elemento e ocultar em outro
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    // os seletores são os mesmos do CSS
    // .screen 1 para classe; # para id;

    // aqui altera-se o conteúdo do h2 que estava escondido, para exibir a quantidade de tentativas
    document.querySelector(
      ".screen2 h2"
    ).innerText = `Você acertou em ${xAttemps} tentativas!`
  }

  xAttempts++
}
```

## Eventos

- DOM direcionada a eventos _Event-driven_
- Eventos é tudo o que acontece na página:
  -- carregamento do documento, aparição de elementos
  -- modificação de propriedades da página
  -- cliques de mouse e digitação do teclado
  -- interação com sons, imagens, vídeos
  -- outros
- Reações
  -- o sistema executa uma reação sempre que uma ação é feita na página
- DOM - 2 fases
  -- as ações executadas e as reações (funções) que sã oexecutadas

```js
// função que existe dentro de elementos HTML (tags)
// precisa de 2 argumentos: 1 ação (tipo do evento), 1 função
// função callback /
button.addEventListener()
```

```html
<button>Clique Aqui</button>
<p class="hide">Estou escondido, mas vou aparecer</p>
```

```css
.hide {
  display: none;
}
```

```js
// selecionando o botão
const button = document.querySelector("button")
/*
 adicionando um 'listener' ao botão: 2 argumentos
 1. tipo de ação/evento (click)
 2. função (callback) de reação ao evento
*/
button.addEventListener("click", handleClick)

/*
função com o que desejo executar
*/
function handleClick() {
  document.querySelector("p").classList.toggle("hide")
}
```

## Aplicando eventos e callbacks

- É possível inserir os eventos nas tags HTML
- na tag, digitar 'on' que irá aparecer vários `on + nome do evento`
- entretanto, não é responsabilidade do HTML

- no código, eu removo o "onclick" da tag <button> e adiciono um "id" para tratar via JS
- adiciono um `addEventListener` no JS para o botão

```html
<button id="buttonTry" /*onclick="handleClick(event)"*/>Tentar</button>
```

```js
const buttonTry = document.querySelector("#buttonTry")
buttonTry.addEventListener("click", handleTryClick) // handle é a função 'callback'
```

- função callback é muito importante em JS, é quando uma função é passada como argumento de outra função, e ela 'espera' a primeira ser executada.

## Revisão

- botão dentro do formulário - existe um padrão que podemos 'remover'
  -- adiciona o click e usa a função (método) `.preventDefault`
- função callback (quando passamos um função com argumento de outra função)
- tags sem 'conteúdo interno' - usa `.value` para pegar o valor
- função `.addEventListener` que 'escuta' o evento
- React, Angular, Etc. não permitem manipular a DOM assim (criação de uma DOM virtual)
- a DOM virtual manipula a DOM do navegador

## Refatorando e algumas funcionalidades

- organização do código
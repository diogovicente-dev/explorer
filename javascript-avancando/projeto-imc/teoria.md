## Iniciando o Projeto

- pode ser inserida a tag `script` dentro da tag `head` do HTML, mas é necessário inserir o atributo `defer`
- quando manipulamos direto a `DOM`
- serve para indicar uma 'execução posterior', porque no momento da leitura da linha o 'body' ainda não foi lido.

```html
<head>
  <script src="./main.js" defer></script>
</head>
```

## Estilizando o projeto

- CSS
  -- dica de criação se uma classe `container` para fazer os alinhamentos (grid, gaps, centralizar, etc)

```css
.container {
  display: grid;
  place-content: center /* centraliza o conteúdo */
```

- no projeto foi reutilizada a mesma classe para fazer o modal que irá aparecer posteriormente

## Formulário HTML

- usar a tag form
  -- dentro criar uma classe `input-wrapper`
  -- `label` - for (colocar o id do input)
  -- `input` - id (criar um id para o input)

- `svg`
  -- se eu quiser alterar alguma propriedade do arquivo SVG (tamanho, cor, etc) deve 'colar' o svg direto no html
  -- se não for necessário, inserie como uma <img>

## Estilos

- para 'quebrar' a linha do label e do input, usar `width: 100%`
- seletor:
  -- no caso abaixo, estou pegando a classe 'input-wrapper' (a segunda escrita) que tem uma classe anterior a ela (a primeira escrita) com o nome 'input-wrapper'

```css
.input-wrapper + .input-wrapper {
  color: blue;
}
div + .input-wrapper {
  color: blue;
}
/* pegue o input-wrapper que tem anterior a ele uma div*/
```

## Iniciando JavaScript

- <button type="submit"> dentro do <form> sempre irá submeter as informações (enviar) e recarregar a página
- na URL ao clicar no botão, parece um "?" no fim do link
- fazer o botão não regarregar a página

- como submeter o formulário?

1. na tag <form> inserir onsubmit="function"

```html
<form onsubmit="calcIMC"></form>
```

2. deixar a responsabilidade para o JavaScript:

```js
// o form é uma variável que recebe o 'elemento form'
form.onsubmit = function () {}

form.onsubmit = () => {}

form.onsubmit = handleSubmit
function handleSubmit() {}
```

## Apresentando resultado do IMC no modal

- foi necessário criar uma tag <span> em volta do 'título' com o texto do IMC para que não perca a informação do 'botão' close que tem

## Estruturando dados do Modal

- a ideia é 'separar' o que é responsabilidade do modal
- criar um 'objeto' com as funções dentro;
  -- object literal
- o nome da função é a propriedade que será chamada

```js
const Modal = {
  open () {
    "Código aqui"
  }
  close () {
    "Código aqui"
  }

  /* a função abaixo é a mesma coisa da de cima */
  reset: function () {}
}
```

- chamando externo:

```js
Modal.open()
Modal.close()
```

## Modularizando o Modal popup

- separar cada 'módulo' em arquivos diferentes
- antes no javascript, cada arquivo '.js' criado tinha que ser adicionado na tag <script> de forma individual para funcionar
- e poderia usar as variáveis normalmente no código (sem import x export)

```html
<script src="./main.js"></script>
<script src="./modal.js"></script>
<script src="./utils.js"></script>
```

- com o novo modelo, basta informar apenas o script principal e adicionar o atributo `type="module"`

```html
<script src="./main.js" type="module">
```

_Objetivo_

- deixar o código mais limpo
- fácil manutenção depois do código pronto
- fácil leitura

- no arquivo `modal.js` tem que utilizar o `export`
- no arquivo `main.js` tem que usar o `import`

```js
// no arquivo js do modal
export const Modal = {}
// ou
export { Modal }

// no arquivo js principal
import { Modal } from "./modal.js"
```

## Fechando o modal pelo teclado

- fechar pela tecla `esc` do teclado
- dica para saber o 'nome' da tecla
- imprimir no console conforme abaixo

```js
window.addEventListener("keydown", handleKeydown)
function handleKeydown(event) {
  console.log(event.key)
}
```

## Validando Dados

- criação de uma função para validar se a informação é número
- função `isNan()`
- o retorno da função `isNan()` se passado uma string vazia, entende como um número, então precisa validar a string vazia

```js
if (showAlertError) {
  return
  // esse return dentro do if, como no código estiver dentro da função, a função como um todo para de executar
  // se entrar no if, a função para de executar
}
```

## Modularizando a caixa de alerta de erro

- criar um novo módulo do 'alert-error', criar um objeto para estruturar
- object literal
  -- caputar o elemento
  -- abrir e fechar o alert-error

## Modularizar as funções utilitárias

- funções 'imc' e 'notANumber'
- criar um arquivo '.js' com o nome 'utils'

## Refatorando a função de submit, aplicando regras de Clean Code

- Clean Code = código limpo = Robert Cecil Martin (uncle bob)
- regras para código limpo
  -- nomes das variáveis explicativas
  -- funçõex enxutas
  -- não inserir comentários desnecessários
  -- viu algo 'errado', melhore sempre

- dica no começo:
  -- fazer funções grandes mesmo
  -- ir avançando em fazer pequenas funções
  -- não existe a maneira perfeita!

## Desafio

- Fechar a janela de erro ao digitar no campo
- dica: evento de nome `input`

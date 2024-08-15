### Introdução

**Aprendizado**
Aprender por conceitos e aprender na prática = ambos ao mesmo tempo

**Escolas tradicionais**
Sempre conceitos são inseridos primeiramente; porém programação é prática - entender o conceito e praticar

**Javascript**
Não é igual HTML e CSS, precisa ser conceituado também para o entendimento completo.
É necessário um pouco de conceito antes de iniciar Javascript

**Como estudar o conceito?**
Anotar as ideias, anotar os conceitos, anotar tudo!
No primeiro momento será mais complicado, mas durante a prática será melhor absorvido!
Não se assustar com os conceitos, o mercado busca apenas a prática!

**Javascript**

O que pode ser feito com JavaScript?

- Criar applicações web, mobile (react native), desktop (electron)
- Linguagem obrigatória para programação front-end web

**Evolução**

- comunidade cresce sempre e linguagem sempre evoluindo

**Curso**

- Tipos de Dados
- Variáveis
- Funções
- Condicionais
- Estruturas de Repetição

**Como vai funcionar?**

- Conceitos e Fundamentos
- Prática
- Revisão

### Primeiros Passos

**Sintaxe**
A importância da Sintaxe - escrever textos de maneiras corretas

- Todas as linguagem tem sintaxe - maneira correta de escrever
- Uma boa comunicação necessida de uma boa sintaxe
- 82% dos erros dos iniciantes estão na sintaxe

```js
console.log("Bem vindos ao Starter")
```

Erros de sintaxe comuns: pontos em local errado, falta de aspas, tipo de dados divergente, aspas no lugar errado, erro na escrita, etc...

**Maneiras de Executar o Javascript**
3 maneiras de executar o javascript
1 - utilizar o browser (navegador)
2 - codepen-io (direto)
3 - vscode - arquivo - HTML (dentro da tag script que vai "puxar")

**Adicionando arquivos JS**

arquivo
"script.js" - importante o arquivo ser js no final
padrão: criar com nome minúsculo, sem acento, sem espaços

```html
<body>
  <script src="./scripts.js"><script> <!--exemplo de arquivo javascript-->
<body>
```

crir um arquivo '.js' e adicioná-lo dentro do elemento "body" do html, através da tag <script>

**Comentários**

```js
//comentário em jacascript - duas barras - comentario em linha
/* mais igual no css, comentário de bloco */
```

_Entendimento_
A execução do Javascript pode ser vista na ferramenta de desenvolvedor, F12 no teclado, na aba "console";
Mesmo sem aparecer nada em tela (navegador), o código javascript está rodando "por trás"

### Tipos de Dados

**Introdução**

- Elementos da linguagem (gramática = tipos de dados)
- Escrever corretamente

- Enriquecer o vocabulário (palavras) para escrever melhor e mais

* Saber como escrever
* Saber os significados
* continuar aprendendo, para crescer o vocabulário

* Conceito e escrita

> Aprender os tipos de dados mais utilizados na linguagem

- É possível aprender 80% de uma língua nova, com cerca de 20% do vocabulário?
- ingles, por exemplo, se soubermos certa de 1000 - 2000 palavras podemos "dominar" a linguagem em grande parte

**String**

- String: cadeia de caracteres (textos)

"" // aspas duplas
'' // aspas simples
`` // template literals ou template strings (duas crases)

Dependento do texto (string) que for escrito, eu altero aspas duplas e aspas simples;

- se precisar inserir aspas duplas e simples, uso as crases
- ao utilizas as crases, é possível quebrar linhas
- ao usar as crases posso usar expressões dentro da própria string (interpolação)

```js
console.log("Bem vindo")
console.log("Bem vindo")
console.log("Bem vindo 'alunos' ao dia de hoje")
console.log('Bem vindo "alunos" ao dia de hoje')
console.log(`Bem vindo 'alunos' "ao" dia de hoje`)
console.log(`
Bem Vindo Alunos
Ao dia de Hoje
`)
console.log(`Bem vindo $(1+1) alunos`)
```

**Number**
Identificadores de númmeros
Tipos de números
// Inteiros
// Reais (float)
// Infinito => Infinity (geralmente não é comum ver isso para representar o infinito)

- posso usar Infinity para comparar números
  // Nan - Not a Number

```js
console.log(Infinity)
console.log(12 + 12)
console.log(33)
console.log(12 / "adas") //o resultado dessa expressão é Nan - not a number (número dividido por string)
console.log(33 === Infinity)
```

**Boolean**
Somente dois valores
Verdadeiro (true) ou Falso (false)

```js
console.log(true)
console.log(false)
```

Tipo de dados muito utilizado para a lógica (resultado de função, de condição, etc)

**Undefined vs Null**
Undefined

- Indefinido
  > Indefinido é algo que realmente não irá existir internamente (chamar uma função que não existe, uma variável que não existe)

Null

- Nulo
- Objeto que não tem nada dentro (vazio)
- Diferente de indefinido
  > Nulo o objeto em JS existe, porém ele não tem informação nenhuma, está 'vazio'; no exemplo chamar um objeto que existe, mas não tem "nada" dentro dele, é null

**Object**

> Objeto - Dado Estrutural
> Propriedades / Atributos
> Funcionalidades / Métodos

{propridades: "valor"}

Objetos se relacionam com "coisas" reais do nosso mundo.
Todo objeto possuirá atributos, poderá ter métodos (funções)

> Programação orientada a objetos (estudar posteriormente)

```js
console.log({
  //propriedades/atributos do objeto
  name: "Diogo",
  age: 36,
  married: true,
  smoke: false,

  //funcões (métodos) do objeto
  walk: function () {
    console.log('andar')
  },
  talk: function(),
  drive: function()
})
```

**Array**

- Vetores
- Uma lista, uma agrupamento de dados
- Diferente do Objeto, que possui atributos e métodos, o array é uma lista de "coisas", lista de objetos (talvez)
- Array declarado entre colchetes

```js
console.log(["Diogo", 36, "Teste", "Leite", "Ovos"])
```

**Conclusão**

- Conforme o ESMAScript (órgão que padroniza o javascript) standard temos 9 tipos de dados:

* Data types
  - Primitive / Primitive value
  - Structural
  - Structural Primitive

> Primitivos

- Não é um objeto e seus valores são imutáveis, não sofrem alterações

* String
* Number
* Boolean
* Undefined
* Symbol
* BigInt

> Estruturais

- Possui funcionalidades, atributos, etc

- Object
  - Array
  - Map
  - Set
  - Date
  - ...
- Function

> Primitivo Estrutural / Structural Root Primitive

- Null

Ao mesmo tempo é primitivo e estrutural

> Javascript => orientado a objeto

### Variáveis

**Conhecendo as variáveis**

- Variável: ao criar uma variável, um "espaço" na memória é criado para armazenar a informação na variável (de acordo com o tipo de dado)

- Nomes simbólicos para receber algum valor (de acordo com os tipos de dados - string, boolean, number, etc..)
- Atalhos de códigos
- Identificadores
- 3 palavras reservadas para criar uma variável
  - var
  - let
  - const

```html
<script>
  //var
  var clima = "Quente" // aqui estou declarando a variável e atribuindo um valor a ela 'Quente'
  clima = "Frio" // aqui, com a variável criada, eu já consigo atribuir um novo valor à variável
  console.log(clima)

  //let

  let clima = "Quente"
  //basicamente o mesmo comportamento da 'var'

  //const

  const clima = "quente"
  clima = "frio"

  //nesse cenário de variável const, irá gerar um erro em tempo de execução, pois a variável clima é const e não pode ter o seu valor alterado
</script>
```

**Tipos Dinâmicos**

- O JavaScript é uma linguagem fracamente tipada e dinâmica
  - Existem linguagens fortemente tipadas, que necessitam que na declaração das variáveis, o tipo de dado seja criado junto na declaração
  - No JavaScript, o tipo é definido quando for atribuído um valor (dado) à variável
- Variáveis não precisam ter um tipo previamente definido
  - OS tipos de dados das variáveis podem ser alterado, exceto quando declarada como 'const', se alterar acusa erro durante a aplicação
- Podemos mudar o conteúdo da variável

> Na linguagem mais moderda de JavaScript, são utilizados apenas const e let para declaração de variáveis

```html
<script>
  let clima // aqui estou declarando a variável, observe que não tem o tipo de dado definido nela

  let clima = true //aqui o JS entende que é uma variável boolean
  clima = "Teste" // aqui eu alterei o tipo da variável, alterando para String
</script>
```

```c
  int idade; /*aqui, em linguagem C, por exemplo, eu preciso definir o tipo da variável*/
```

**Scope e var**

Scope => Escopo

- Determina a visibilidade de alguma variável no JS (escopo da variável)

> Block Statement

- declaração de bloco
- o bloco também criará um novo escopo, chamado block-scoped

```html
<script>
  //aqui é fora do escopo
  {
    let x = 0 // aqui está dentro de um bloco
  }
  //aqui é fora do escopo
</script>
```

_var_
var é global, e poderá funcionar fora de um escopo de bloco

- var é local, e também global = global entende-se tudo o que existe dentro da tag <script>
- hoisting

```html
<script>
  console.log("existe x antes do bloco?", x)
  //nesse contexto, o JS reconhece que existe a variável "x", porém ela fica "undefined", pois o valor dela foi definido posteriormente
  // aplica-se o conceito de hoisting = elevação

  {
    var x = 10 // aqui está dentro de um bloco, block-scoped
  }

  console.log("existe x depois do bloco?", x)
  // aqui o JS irá imprimir o valor corretamente
</script>
```

**Scope let e const**

- const e let são locais e só funcionam no escopo onde foi criada
- se declarar uma variável let em escopo superior e alterar o valor dela em escopo inferior, o valor é atualizado; com const não é possível
- nao usa var na linguagem para evitar bugs relacionados com o escopo e visibilidade dela, pois é mais flexível

```html
<script>
  console.log("existe y antes?", y)
  // aqui também vai dar erro, como se o y não existisse, fora do escopo do bloco
  {
    console.log("existe y antes?", y)
    //dentro do bloco, vai dar erro, porque ele não trabalha como o hoisting igual do var, ele entende que tem um y;
    let y = 0
    console.log("existe y depois?", y)
    // aqui vai funcionar normal, depois de atribuir um valor a y
  }
  console.log("existe y depois?", y)
  // aqui também vai dar erro, como se o y não existisse, fora do escopo do bloco
</script>
```

```html
<script>
  let y = 1
  {
    y = 0 // aqui o JS sobre o escopo para procurar a variável y
    console.log("existe y depois?", y)
  }
  console.log("existe y depois?", y)
</script>
```

**Nomeando Variáveis**

- JS é case-sensitive (sensível a maiúsculas e minúsculas)
- KS aceita a cadeia de caracteres Unicode (aspas, acentos)

> Posso

- iniciais com esses caracteres especiais $ e \_
- iniciar com letras
- colocar acentos
- letras maiúsculas e minúsculas fazer diferença

> Não posso

- iniciar com números
- colocar espaços vazios no nome

> Ideal

- criar nomes que façam sentido
- que explique o que a variável é ou faz
- camelCase (preferencial usar este)
- snake_case
- escrever em inglês - usar só em inglês

### Praticando e Avançando

**Declaration assignmet var**

- Variáveis e tipos de dados

```html
<script>
  // declaration
  // aqui é declarar uma variável (sem atribuir valor)
  var name

  // assignment
  // atribuição de valor

  name = "Diogo"

  // ver o tipo de dado inserido na variável

  console.log(typeof name)
</script>
```

**Agrupando declarações**

```html
<script>
  // aqui eu declaro as variáveis de uma vez
  let name, age, isHuman

  //aqui atribuo os valores
  name = "Diogo"
  age = 36
  isHuman = true

  //imprimindo variáveis na função console.log (múltiplos argumentos na função)
  console.log(name, age, isHuman)
</script>
```

**Concatenando e interpolando variáveis**

```html
<script>
  let name, age, isHuman
  name = "Diogo"
  age = 36
  isHuman = true

  //escrita de texto + variávei = concatenando valores => o "+" concatena
  console.log("O " + name + " tem " + age + " anos.")

  //interpolando valores com template literals or template strings
  //usar a "crase" e "embrulhar" a variável em ${variavel}
  console.log(`O ${name} tem ${age} anos.`)
</script>
```

**Objetos - Objects**

```html
<script>
  //criando um objeto
  const person = {
    name: "Diogo",
    age: 36,
    weight: 88.6,
    isAdmin: true
  }

  //como acessar cada atributo do objeto para imprimir
  //exemplo para impressão: "nomeDaVariável" + "." + "nomeDoAtributo"
  console.log(
    `${person.name} tem ${person.age} anos e pesa ${person.weight} quilos.`
  )
</script>
```

**Arrays**
Arrays = Vetores
Cada informação é armazenada em uma posição, iniciando sempre na posição [0] zero.

- Nos arrays é possível misturar os diferentes tipos de dados (strings, numeros, objetos, etc..), entretanto isso não é adequado para o dia a dia

```html
<script>
  // aqui estou criando um array, observe que está misturado string e um objeto
  const animals = [
    'Lion',
    'Monkey',
    'Cat'
    {
      name: 'Dog',
      age: 2
    }
   ]
  console.log(animals)
  // aqui está imprimindo todo o array em tela

  console.log(animals.lenght)
  // aqui eu consigo saber o tamanho do array

  // como acessar as informações dentro do array = utilizando colchetes e dentro deles inserindo a posição do array
  console.log(animals[0])
  // aqui estou acessando o elemento "zero" do array, os arrays iniciam sua posição a partir no "0"
  // o resultado desse console-log será imprimir na tela o nome Lion
  console.log(animals[3])
  // aqui estou acessando o objeto dentrod o array
  // para acessar uma propriedade do objeto dentro do array, sigo com o mesmo padrão para acessar o objeto
  console.log(animals[3].name)
  // aqui será impresso em tela "Dog"
</script>
```

### Funções

**Functions**

Por que iremos usar funções? Para que serve?

1. Explicar o que o "pedaço" do código quer dizer, dar significado
2. Repetir trecho do código que for necessário, sem necessidade de ficar "copiando e colando", reutilização do código

Declaration (declaração da função) = Function statement

```js
//declaração da função / function
function createPhrases() {
  console.log("Revisar é mãe do conhecimento")
  console.log("Estudar todos os dias")
  console.log("Praticar sempre")
}
```

A função "armazena" para execução quando for "chamada"
Executar a função

```js
createPhrases()
//apenas chamar o nome da função
```

**Argumentos e Parâmetros**

É possível declarar uma função em uma variávei

```js
const sum = function () {}

// function expression
// function anonymous

// aqui a função tem nome "sum"

sum() // aqui eu estou chamando a função declarada acima
```

Paramaters = parâmetros da função

```js
// parâmetros - inseridos entre os parênteses
// parâmentros são os atributos criados na construção da função
const sum = function (number1, number2) {
  console.log(number1 + number2)
}

// arguments - argumentos
// os valores que passamos para invocar a função são chamados de argumentos
sum(2, 3)
// aqui eu estou chamando a função declarada acima, passando dois parâmetros, conforme função
//em tela, será impresso 5 como resultado
```

**Retornando valores dentro da função**

- Toda função sempre retorna alguma coisa
- Quando uma função não tem a palavra chave (palavra reservada) "return", sempre irá retornar undefined
- Uma função quando encontra a linha do "return" sempre para a execução e retorna o que estará imediatamente posterior

```js
//aqui é uma função sem retorno (return)
function sum(n1, n2) {
  console.log(n1 + n2)
}

let number1 = 10
let number2 = 20

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)

// no caso abaixo, a interpolação vai "retornar" o que está sendo retornado pela função, ou seja, undefined, pois não tem a palavra return;
// nesse cenário, é executada a função (imprime o console.log) e depois, na interpolação, é exibido o retorno a função
console.log(`A somente entre eles é é ${sum(number1, number2)}`)

//
function sum(n1, n2) {
  total = n1 + n2
  return total
  // inserindo a palavra reservada return
}

let number1 = 10
let number2 = 20

// com o return, a interpolação vai funcionar normalmente
console.log(`A somente entre eles é é ${sum(number1, number2)}`)
```

- Escopo da função = se for declarar/criar uma variável dentro da função, sempre utilizar as palavras let / const.
- Não deixar a variável criada SEM palavra let/const, pois após a execução da função em escopo superior, a variável "aparece" em escopo diferente.
- Se criar uma variável dentro do escopo da função sem as palavras reservadas (let / const) ela pode ser acessada fora do escopo, podendo trazer problemas na aplicação

```js
function sum(n1, n2) {
  let total = n1 + n2
  return total
  // aqui a variável total está sendo criada e declarada corretamente
}
```

**Function Scope**

- Tomar cuidado sempre como será criada a função, para que os escopos não fiquem "embaralhados" no código
- Nos exemplos foram criadas variáveis com os mesmos nomes para realmente "causar confusão"

```js
// caso 1: neste cenário o retorno do console.log é undefined
let subject

function createThink(subject) {
  return subject
}

console.log(createThink(subject))
```

```js
// caso 2: neste cenário, as duas impressões saem 'create video'
let subject = "create video"

function createThink(subject) {
  return subject
}

console.log(subject)
console.log(createThink(subject)) // aqui estou passando a variável 'let subject' do escopo de fora para executar a função
```

```js
// caso 3: neste cenário, as impressões saem diferentes
let subject = "create video"

function createThink(subject) {
  subject = "study"
  // definidno que o subject é 'study' dentro da função, não importa o que estou passando para ela no parâmetro, sempre ela será alterada para study
  return subject
}

console.log(subject)
console.log(createThink(subject))
```

```js
// caso 4: cenário sem parâmetro na função
let subject = "create video"

// removendo o parâmetro da função
function createThink() {
  // o JS entende que esse subject é do escopo anterior, portanto ele "considera" o subject de fora
  subject = "study"
  return subject
}

console.log(subject)
// na primeira impressão, será impresso em tela 'create video'
console.log(createThink(subject))
// o retorno da função irá retornar 'study'
console.log(subject)
// após a execução da função, a variável 'subject' tem seu valor alterado por causa da execução da função, então nesse caso retorna 'study' também
```

**Function Hoisting**

- O JS vai aplicar o hoisting dependedo da maneira que for criada a função.
- Se for declarada/criada "normal", na declaração padrão, o hoisting existe; se for declarada/criada em forma de expressão, não acontece

```js
// neste caso, o JS faz o hoisting

// chamando a função antes da inicialização
sayMyName()

// função declarada
function sayMyName() {
  console.log("Diogo")
}
```

```js
// neste caso, o JS não faz o hoisting

// chamando a função antes da inicialização
sayMyName()

// função declarada com expressão
const sayMyName = function {
  console.log("Diogo")
}
```

**Arrow Function**

- Jeito moderno de declarar uma função em modelo de expressão
- na declaração, eu "removo" a palavra reservada _function_, deixo os parênteses normais e, entre os parênteses e chaves, insiro uma "seta" e aí abro as chaves
- o comportamento é normal, não tem nada de diferente
- lembrando que este tipo de declaração de função não tem hoisting

```js
const sayMyName = () => {
  console.log("Diogo")
}
```

**Callback function**

- acontece quando passamos uma função como "argumento" de outra função
- os argumentos de uma função podem ser dos diversos tipos: números, strings, objetos, boolean, e também uma função

```js
function sayMyName(name) {
  console.log("aqui é antes de executar a callback")
  //o parâmentro name é uma função (esperado), então ele tem que ser executado aqui dentro da função
  name()
  console.log("aqui é depois de executar a callback")
}

// aqui estou chamando a função, passando como argumento outra função
sayMyName(() => {
  console.log("aqui é callback")
})
```

**Funções Construtoras**

- Function() contrutor
- Geralmente as funções construturas iniciam em letra maiúscula (boa prática)
- expressão 'new' -> instanciar um novo objeto
- criar um objeto
- this keyword
- as funções construtoras possibilitam adicionar propriedades para "todos" os objetos criados utilizando-se da mesma estrutura
- já existem várias funções construtoras no javascript padronizadas iniciando com letra maiúscula

```js
function Person(name) {
  this.name = name
}
//new seguido da função se torna uma função construtura, e irá retornar para a constante "person" um objeto
const person = new Person("Diogo")
// a variável 'person' será terá referência dentro da função, com a utilização da palavra chave 'this', e vice-versa
```

```js
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}
const person = new Person("Diogo")
console.log(person.walk())
```

### Manipulando Dados

**Prototype**

- O JS é uma linguagem baseada em protótipos
- O JS encapsula todos os tipos de dados como se fossem objetos
- Podemos acessar atributos/propriedades simplesmente inserindo um "." (ponto) após o tipo de dado, pois já existem diversas propriedades
- Espécie de propriedades nativas do JS
- Para o JS, todos os dados "são objetos"

```js
// prototype-based language
// prototype chain = cadeia de protótipos
// __proto__
```

```js
// os atributos são "buscados" de forma ascendente, o JS encapsula os dados como um objeto

console.log("String")
console.log("diogo".length)
// nesse caso, o '.lenght' é uma propriedade padrão, que retorna o tamanho da string

console.log("Array")
console.log(["a", "b", "c"].length)
// nesse caso, o '.lenght' é uma propriedade padrão, que retorna a quantodade de itens do array

console.log("Number")
console.log((14256.15).toExponential())
// nesse caso, o '.toExponential' transforma o número em exponencial, base 10
```

**Type conversion coersion**

- Type conversion (typecasting) vs Type coersion
  -- typecasting (explicitamente altera, nós forçamos essa alteração)
  -- type coersion (geralmente o JS altera, o JS força a alteração)
- alteração de um tipo de dado para outro tipo

```js
console.log("9" + 5)
// neste cenário, o JS força a alteração do tipo de dado "number" do número 5 para string
// a impressão em tela será '95', ou seja, o JS fez uma concatenação
// aqui é Type Coersion

console.log(Number("9") + 5)
// neste segundo cenário eu forço a alteração do tipo de dado string para number com a função
// a impressão em tela será 14, ou seja, aqui será feita uma soma matemática
// aqui é Type Conversion (typecastning)
```

**String em Números**

- para transformar, usar funções existentes:

```js
let string = "123"
Number(string)
// função 'Number' transforma string em números, mas se quiser manipular a 'string' como número, tem que atribuir, a função não altera o valor da variável
// obviamente a string tem que ter apenas números

let number = 456
String(number)
// função 'String' transforma números em string
```

**Contando caracteres e dígitos**

- utilizar o atributo '.length' após a variável(ou dado)

```js
let string = "Inconstitucionalissimamente"
console.log(string.length)
// aqui vai iprimir a quantidade de caracteres

let number = 45896
console.log(String(number).length)
// o tipo de dado 'number' não tem a função '.length', vai dar erro se colocar direto ela;
// neste caso, deve-se transformar o número em string
// o JS conta a quantidade de caracteres, no caso, inferimos que é a quantidade de dígitos
```

**Casas Decimais**

- trocar um número quebrado, transformar para 2 casas decimais e trocar ponto por vírgula

```js
let number = 46556.50654098
console.log(number.toFixed(2).replace(".", ",")) // neste caso, o número virou uma "string", por causa da substituição pela vírgula

// a função toFixed() é atrelada a um objeto do tipo number (método)
// posso atrelar várias funções colocando "pontos" após o "objeto"
```

**Maiúsculas e Minúsculas**

- transformar maiúsculas e minúsculas (transforma todo o string)

```js
let word = "Hello World"
word.toUpperCase()
word.toLowerCase()
```

**Separando Strings**

- separar um texto que contem espaços, em um novo array
- transformar o array em texto novamente, onde era espaço inserir 'underline'"
- _split_ e _join_

```js
let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
// a função split esta separando a 'frase' por espaços (conforme argumento passado), a função "elimina" os espaços em branco e cria o array; se passar uma letra, vai elminar a letra
console.log(myArray)

let prhaseWithUnderscore = myArray.join("_")
// a função join agrupa as informações; no caso, o argumento _ agrupa as informações com um _; se não passar nada, fica tudo junto; se passar um espaço, volta a frase inicial
console.log(prhaseWithUnderscore)
```

**Encontrando palavras em frases**

- verificar se o texto tem uma palavra específica
- _includes_ => o includes é case sensitive - diferença entre maiúsculas e minúsculas
- includes retorna true or false

```js
let phrase = "Eu quero viver o amor!"
phrase.includes("Amor")
// pesquisando desta maneira, o resultado será falso, porque Amor != amor

phrase.includes("amor")
// neste caso, será verdadeiro
```

**Criando array com construtor**

- _new Array ()_
- pode ser criado um new array com elementos ou com tamanho

```js
let array = new Array("a", "b", "c")
// novo array com elementos definidos
let array1 = new Array(10)
// aqui neste segundo estou construindo um array com 10 posições (tamanho), porém vazios
```

**Elementos do Array**

- função para contar os elementos do array
  -- .length - igual para caracteres da string

```js
// contagem de elementos do array
;["a", "b", "c", "d"].length
```

**String para Arrays**

- transformar uma cadeia de caracteres (string) em elementos de um array
  -- função nativa ==> Array.from('arg') - arg é a string que quero transformar

```js
let word = "paralelepípedo"

// aqui pode ser criado um array da string 'word', cada caractere será uma posição do array
Array.from(word)
```

**Manipulando Arrays**

- adicionar um item no fim
  -- .push('arg') => arg é o que quero inserir

- adicionar um item no início do array
  -- .unshift('arg') => arg é o que quero inserir

- remover do fim
  -- .pop()

- remover do começo
  -- .shift()

- pegar somente alguns elementos do array
  -- .slice('arg1', 'arg2')
  --- arg1 = posição inicial do array = a partir de qual quero "cortar" o array
  --- arg2 = posição final do array = qual posição quero "terminar o corte" do array

- remover 1 ou mais itens do array
  -- .splice('arg1', 'arg2')
  --- arg1 = posição array inicial = index
  --- arg2 = quantos elementos quero remover (a partir do arg1)

- encontrar a posição de um elemento do array
  -- .indexOf('arg') = encontrar o índice para manipulação posterior

```js
const techs = ["html", "css", "js"]

// adicionando item no fim
techs.push("nodejs")

// adicionando item no início
techs.unshift("c#")

// remover item do fim
techs.pop()

// remover item do início
techs.shift()

// pegar elementos do array
techs.slice(0, 2) // retorna os 3 primeiros itens do array
techs.slice(0, 0) // aqui "não deveria exibir nada"

// remover 1 ou mais itens do array
techs.splice(0, 1) // aqui estou removendo, a partir do elemento de index 0, 1 elemento
techs.splice(0, 2) // aqui estou removendo, a partir do elemento de index 0, 2 elementos

// encontrar o index do elemento
let index = techs.indexOf("js") // estou procurando o index do objeto 'js'
techs.splice(index, 1) // aqui estou passando o index encontrado para remover o objeto, por exemplo
```

### Expressões e Operadores

**Expressões e Operadores**

- Expressions
  -- qualquer linha de código do JS

```js
// aqui é uma expressão
let number = 1
```

- Operators
  -- que tem 1, 2 ou 3 argumentos / parâmetros
  -- Binary
  -- Unary
  -- Ternary

```js
console.log(5 + 2) // operador Binary
console.log(.indexOf()) // operador unário
console.log(true? 'alo': 'nada')
```

**New**

- _new_ é uma expressão para criar um novo objeto
- utilizar as funções construturas que já existem por padrão no JS, mas também funções que podemos criar
- _left-hand-side expression_

```js
let name = new String("Diogo")
let age = new Number(36)
console.log(name, age)
```

**Typeof delete**

- Operadores Unários comuns
- _typeof_ e _delete_

```js
let name = 'Diogo'
console.log(typeOf(name)) // operador unário

const person = {
  name = 'Diogo'
  age = 36
}

delete person.age // operador unário

console.log(person)
```

**Operadores aritméticos**

```js
// multiplicação = sinal ' * '
let number = 2 * 3

// divisão = sinal ' / '
number = 15 / 3

// adição = sinal ' + '
number = 18 + 5

// subtração - sinal ' - '
number = 20 - 15

// resto da divisão - sinal ' % '
let remainder
remainder = 11 % 3 // aqui o 'remainder' vai retornar o resto da divisão

// incremento - sinal ' ++ '
let increment = 0
increment++ // adiciona '1' depois
increment++
++increment // aqui eu incremento 'antes'

// decremento - sinal ' -- '
let decrement = 0
decrement--
--decrement

// exponencial - sinal ' ** '
number = 3 ** 3
```

**Grouping Operator**

- sinal de grouping = parênteses ( )
- posso usar os parênteses dentro de expressões

```js
let number = (2 + 3) * 5
```

**Operadores de Comparação: igual a e diferente de**

- comparar valores e retornar um boolean na comparação

-- sinal _igual a_ -- ==> '=='
-- sinal _diferente de_ -- ==> '!='

```js
let one = 1
let two = 2

// igual a
// vai imprimir na tela true ou false, de acordo com a comparação feita
console.log(two == 1)
console.log(one == "1")

// diferente de
// também vai imprimir em tela true ou false
console.log(one != two)
console.log(one != 1)
console.log(one != "1")
```

**Operadores de comparação: estritamente igual e estritamente diferente**

- além de comparar os valores, o estritamente também compara os tipos de dados
- igual / diferente em seu valor e em seu tipo
- retorna _true_ ou _false_

```js
let one = 1
let two = 2

// estritamente igual ' === '

// o primeiro vai dar false, porque '1' é string
console.log(one === "1")
// o segunda será true, pois o valor e o tipo são iguais
console.log(one === 1)

// estritamente diferente ' !== '

// o primeiro vai dar true, porque '2' é string
console.log(two !== "2")
// o segunda será false, porque o valor é igual e o tipo também, então a validação "!==" retorna false
console.log(two !== 2)
```

**Operadores de comparação maior e menor (igual)**

- operadores maior, maior igual, menor, menor igual
- operadores: _>_, _>=_, _<_ e _<=_
- igual na matemática, retorna _true_ ou _false_

```js
let one = 1
let two = 2

// maior '>' , maior igual '>='
console.log(one > two) // false
console.log(one >= 1) // true
console.log(two >= 1) // true

// menor '<', menor igual '<='
console.log(one < two) // true
console.log(one <= 1) // true
console.log(two <= 2) // true
console.log(two < 2) // false
```

**Operadores de atribuição**

```js
// assignment - atribuição simples sinal ' = '
let x = 2

// addition assignment = sinal ' += '
// x = x + 2
x += 2

// subtraction assignment = sinal ' -= '
// x = x - 2
x -= 2

// multiplication assignment = sinal ' *= '
// x = x * 2
x *= 2

// divison assignment = sinal ' /= '
// x = x / 2
x /= 2

// remainder assignment = sinal ' %= '
// x = x % 2
x %= 2

// exponential assignment = sinal ' **= '
// x = x ** 2
x **= 2
```

**Operadores Lógicos**

- _logical operators_
- 2 valores booleanos, quando verificados, resultará verdadeiro ou falso

- && - operador 'AND' - 'E'
- 2 valores tem que ser verdadeiros para ser _true_

- || - operador 'OR' - 'OU'
- apenas 1 dos valores pode ser verdadeiro, para ser _true_, se ambos falsos, aí sim é _false_

- ! - operador 'NOT' - 'NÃO'
- operador inverte o valor: se _false_, fica _true_, e vice versa.

```js
let pao = true
let queijo = true
// aqui vai imprimir true
console.log(pao && queijo)

let pao = false
let queijo = true
// aqui vai imprimir false
console.log(pao && queijo)

// aqui vai imprimir true
console.log(pao || queijo)

// aqui vai imprimir false (inverte o resultado - nega o resultado)
console.log(!pao)
```

**Operador condicional ternário**

- operador que precisa de uma condição, e dois resultados (boolean)
- se uma condição, então um valor, senão, outro valor
- se a condição for verdadeira, escreve o primeiro; senão escreve o segundo

```js
let age = 16
const canDrive = age >= 18 ? "can drive" : "can't drive"
console.log(canDrive)
// esse cenário, 'age >= 18' é a condição
// 'can drive' é o que deve ser feito se a condição for verdadeira
// 'cant drive' é o que deve ser feito se a condição for falsa
```

**Operadores para string**

- string operator
- comparar caractere por caractere ( 'a' == 'a')
- concatenação ( + ) => retorna a união de duas strings

```js
console.log("alpha" + "bet")

let alpha = "alpha"
alpha += "bet"
console.log(alpha + 345) // aqui vai imprimir 'alphabet365'
```

**Falsy e truthy**

- conceitos de type conversion (transformado via código) e type coersion (JS transforma)
  _Falsy_
- Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
- valores que podem ser inseridos no lugar do boolean que o JS considera 'falsy'
  -- false
  -- 0
  -- -0 (menos zero)
  -- "" (string vazia)
  -- null
  -- undefined
  -- Nan

```js
// exemplo em operador ternário
console.log(true ? "true" : "false") // aqui retorna true
console.log(0 ? "true" : "false") // aqui retorna false
console.log("" ? "true" : "false") // aqui retorna false
console.log(NaN ? "true" : "false") - // aqui retorna false
```

_Truthy_

- Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
- valores que podem ser inseridos no lugar do boolean que o JS considera 'truthy'
  -- true
  -- {} (objeto vazio)
  -- [] (array vazio)
  -- 1
  -- 3.23
  -- "0" (string com alguma coisa)
  -- "false" (string com alguma coisa)
  -- -1 (menos 1)
  -- Infinity
  -- -Infinity

```js
// exemplo em operador ternário
console.log(true ? "true" : "false") // aqui retorna true
console.log({} ? "true" : "false") // aqui retorna true
console.log("0" ? "true" : "false") // aqui retorna true
console.log(3.23 ? "true" : "false") - // aqui retorna true
console.log(Infinity ? "true" : "false") - // aqui retorna true
```

**Precedência dos operadores**

- Operator precedence

- grouping ( )
- negação e incremento ! ++ --
- multiplicação e divisão '\*' /'
- adição e subtração + -
- relacional < <= > >= (resultado disso é boolean)
- igualdade == != === !==
- AND &&
- OR ||
- condicional ?:
- assingment = += -= \*=

### Condicionais e Controle de Fluxo

**Fluxo da Aplicação**

- Controle de fluxo
- o fluxo normal é ler linha a linha
- inserir casos onde é possível 'desviar' o fluxo, de acordo com o que é desejado (algoritmo)
- controle de erros na aplicação, capturar erros

**If e Else**

- muda o fluxo da aplicação
- Se .... Senão

```js
if (true) {
} else if (true) {
} else {
}
```

- sempre que for verdadeiro, entra nas linhas de código logo após do if;
- não é obrigado a colocar o _else_, apenas o _if_ pode ser suficiente
- _else if_ para 'aninhar' mais de uma condicional
- nos parênteses sempre um condicional (verdadeiro ou falso)
- dica: usar no lugar das condicionais, variáveis que se 'justifiquem' a condição; atribuir à variável a condição desejada

```js
let temperature = 37
let highTemperature = temperature >= 37.8 // aqui a variável highTemperature recebe um valor boolean
```

**Switch**

- vários caminhos
- semelhante ao if e else, mas com estruturas diferentes

```js
// estrutura do switch
switch (expression) {
  case "a":
    // código
    break
  case "b":
    // código
    break
  default:
    // código
    break
}
```

- dada uma expressão, o JS vai procurar e todos os casos a expressão
- o _break_ é importante para 'quebrar' a continuação do código e pular para a próxima sequência da aplicação;
- se não tiver o break, a aplicação irá passar todos todos os casos até encontrar um _break_
- _break_ tem o sentido de parar a aplicação, controlar o fluxo

**Throw e Try/Catch**

- throw => lançar
- try...catch => tentar e capturar
- _try catch_ não trava a aplicação em caso de algum erro
- _throw_ lança o erro para fora (exemplo de uma função)

```js
function sayMyName(name = "") {
  if (name === "") {
    throw new Error("Nome é obrigatório")
    // o throw para a execução da função
  }
}

try {
  sayMyName()
} catch (e) {
  console.log(e)
}

// qualquer dos dois jeitos
throw new Error("Erro")
throw "Erro"

try {
  // código - função - tentar alguma coisa
} catch (e) {
  // se der erro, o catch captura o throw e trata dentro da aplicação
  console.log(e) // imprime o erro
}

// nesse fluxo da aplicação, se cair no erro, a aplicação não trava, ela continua
// sem o tratamento dá erro 'Uncaught' no console
```

### Estruturas de Repetição

**For**

- for(inicialização de uma variável; condição de continuação para o loop; expressão final) {expressão}
- _break_ e _continue_

```js
// aqui vai imprimir os números de 0 até 50
for (let i = 0; i <= 50; i++) {
  console.log(i)
}

// se eu quiser que o loop pare em algum lugar, insiro uma condiçã e utilizo o break
for (let i = 0; i <= 50; i++) {
  if (i === 21) {
    break
  }
  // neste cenário, quando o i for 21, o loop pára e não imprime mais nenhum em tela
  console.log(i)
}

// se eu quiser ignorar alguma coisa, utilizo o continue
for (let i = 0; i <= 50; i++) {
  if (i === 21) {
    continue
  }
  // neste cenário, quando o i for 21, o loop pula o 21 e continua o loop
  console.log(i)
}
```

**While**

- while(true)
- while deve ser usado quando não saberemos o momento da parada da repetição
- o for a gente sabe o momento da parada do loop

```js
let i = 0
while (i < 10) {
  console.log(i)
  i++
}
// variável inicializando fora da estrutura
// inserir o incremento (decremento) dentro do bloco de código do while
```

**For of**

- vai criar um loop de uma variável prévia - strings e arrays

```js
let name = "Diogo"
let names = ["Neriani", "Bento", "Alice"]

for (let char of name) {
  console.log(char)
  // aqui cada caractere está sen 'impresso' de forma separada
}

for (let name of names) {
  console.log(name)
  // aqui cada nome do array names será impresso em tela
}
```

**For in**

- cria um loop em cima de um objeto

```js
let person = {
  name: 'Diogo'
  age: 36
  weight: 82.2
}

for (let property in person) {
  console.log(property) // aqui vai imprimir os nomes das propriedades: name, age e weight
  console.log(person[property]) // aqui vai imprimir os valores das propriedades
}
```

# Intrododução à programação, lógica e algoritmos com JavaScript

## Visão Geral

- Lógica
  -- maneira de pensar, raciocinar, organização racional dos pensamentos, das ideias
- Algoritmos
  -- sequencia de passos lógicos para executar determinada tarefa
  -- dependendo do cenário que temos, criamos o algoritmo
- Learn by doing
  -- neste etapa, o aprendizado será feito durante a escrita de código
  -- aprender fazendo
- Por que JS?
  -- linguagem de programação web
  -- interação na página
  -- captura e tratamento de dados
  -- linguagem interpretada, dinâmica, multi paradigma, moderna e vida
  -- interpretada diferente de outra linguagem que precisa 'compilar' ex.: Java
  -- paradigma: forma de pensamento: ex.: elixir linguagem com pensamento funcional (tudo é função); no Java, pensamento de orientação a objetos;
  -- roda no navegador
  -- front-end, back-end, mobile e desktop
  -- comunidade e oportunidades
- Aprendizado nesta etapa
  -- variáveis, tipos e estrutura de dados, funções, fluxo da aplicação, estrutura de repetição, operadores matemáticos e lógicos

## Perguntando nome e mostrando mensagem

- instrução no código (exemplo do alert () )
- tag _script_ no html para inserir o JS codificado

```html
<script src="./script.js"></script>
<!-- colocar o 'src' para o caminho do JS -->
```

- passo para programar:

  1. fazer o que eu sei (codificar)
  2. pegue um problema e divida em problemas menores
  3. sempre que observarmos que algo irá mudar na aplicação, ou seja, que vai variar, aplicar uma variável

- executar funções (chamar as funções)
- variáveis
- concatenação

- funções:
  1. alert () - abre um modal de alerta (erro, pergunta, etc) no navagador
  2. prompt () - abre um modal para inserção de algum dado (no navegador)

```js
let userName = prompt("Qual é o seu nome?")
alert("Olá, " + userName + " !!")
// função alert já funciona, abrindo o 'modal' na página, no início não é necessário saber o que está acontecendo
// função prompt também já possui 'coisas' executando por trás
```

## Somar dois números

```js
alert("Iremos somar dois números")
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")
```

- prompt = o tipo de dado que o prompt devolve é string
- se eu usar direto o resultado do que foi capturado no prompt para somar, vai concatenar

- neste cenário, vai concatenar, em vez de somar;

```js
alert(numberOne + numberTwo)
```

como transformar os dados?
type conversion - converter os dados para um tipo number

```js
alert(Number(numberOne) + Number(numberTwo))
let result = Number(numberOne) + Number(numberTwo)
alert("Resultado Final: " + result)
```

## Operações Matemáticas

- capturar 2 números e fazer as operações matemáticas
  -- soma, subtração, multiplicação, divisão e resto da divisão
  -- para cada operação, mostrar o alerta com o resultado

- melhorar a lógica de programação:
  -- fazer perguntas corretas
  -- entender o problema
  -- nem todas as vezes os passos estão claros

```js
let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

// aqui estou 're-atribuindo' o valor e transformando o dado em 'número', pois a função string retorna 'string'
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

// com os resultados não serão alterados, declaramos como const

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto da Divisão: " + restDiv)
```

## Melhorando Algoritmos e Lógica de Programação

- entender problemas
- pensamento crítico e lógico
- pergunta ruim é aquela perguta que não é feita

**1. Pensar**

- é necessário tempo para pensar
- para quem está começanco, esse tempo é maior
  -- conteúdo básico de palavras, conceitos, etc..
- é necessário evitar interrupções
- para quem não treinou o foco, é muito fácil ser interrompido

**2. Questionar e entender**

- com as melhoras perguntas, vem as melhores respostas
- para entender o problema, precisamos continuar perguntando até encontrar a solução
- para entender, precisamos aprender a ler e interpretar o problema

**3. Praticar**

- quanto mais praticar, melhor vai ficar
  -- pequenos problemas, pedaços, devagar
- vai levar tempo! Por isso, será necessário paciência no processo
- quebrar o problema em pequenos pedaços, e colocar no código, devagar
- a ideia não é criar a melhor solução no início
- _A PRÁTICA É SEMPRE, EM TODO O MOMENTO, NÃO APENAS NO INÍCIO_

**4. Estrutura de dados e Algoritmos**

- algoritmos é a sequencia de passos para completar uma tarefa
- programação é tudo sobre dados, como manupilar eles, gardar, capturar

**5. Ver código**

- ver código
- tentar entender o código dos outros
- aprenderemos de outras maneiras de pensar o problema
- aprenderemos outros algoritmos
- procurar explicar o que o código está fazendo
- você vai encontrar código bom e códgo ruim

## Calculando a média de um estudante

- solicitar o nome do alune e as 3 notas do bimestre
- se o aluno passou, dar os parabéns; se o aluno não passou, motivar o aluna a dar o seu melhor
- Em ambos os casos, mostrar o nome do aluno e a mensagem

```js
let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
// aqui o 'result' será um boolean => verdadeiro ou falso, devido aos operadores de comparação
average = average.tofixed(2)
let result = average > 6

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else {
  alert(
    student +
      " estude para a prova de recuperação, sua média foi de: " +
      average
  )
}
```

- Dicas
  -- não repetir código
  -- facilitador em manutenção dos códigos

## Criando lista de compra

**Estrutura de Dados**

- desafio: captura 10 itens para compor uma lista de supermercado
- após capturar, imprima a lista, separada por vírgulas

[] vetores
[] estruturas de repetição

- laço de repetição

```js
// no desafio tem um lista finita de itens
// array sempre começa do índice '0' zero

// criando um array fora do laço de repetição 'for'
let items = []

// laço para capturar a lista
for (let item = 0; item < 10; item++) {
  items[item] = prompt(`Digite o ${i + 1}º item: `)
}
alert(items)
```

## Jogo da adivinhação

**Jogo da advinhação**

      Apresente a mensagem ao usuário:
      "Advinhe o número que estou pensando? Está entre 0 e 10"

      Crie um lógica para gerar um número aleatório
      e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

      Enquanto o usuário não adivinhar o número, mostrar a mensagem:
      "Erro, tente novamente:"

      Caso o usuário acerte o número, apresentar a mensagem:
      "Parabéns! Você advinhou o número em x tentativas"

      Substitua o "x" da mensagem, pelo número de tentativas

- controlar o fluxo da aplicação
- while
- Math. => pacote de funcionalidades matemáticas
- Math.random(), Math.ceil(x), Math.floor(x), Math.round(x)
- o While funciona apenas quando a condição for verdadeira, ou seja, precisamos colocar a lógica sempre como verdadeira

```js
let result = prompt(
  "Adivinhe o número que eu estou pensando? Está entre 0 e 10."
)
const randomNumber = Math.round(Math.random() * 10)

let attempts = 1

while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente")
  attempts++
}

if (attempts == 1) {
  alert(
    `Parabéns! O núnero que eu pensei foi ${randomNumber} e você adivinhou o número em ${attempts} tentativa!`
  )
} else {
  alert(
    `Parabéns! O núnero que eu pensei foi ${randomNumber} e você adivinhou o número em ${attempts} tentativas!`
  )
}
```

## Ganhando mais informações sobre a linguagem com ajuda do VSCode

- ao descansar o mouse sobra algo no vscode, tem uma 'explicação' do que está digitado
- exemplo: Math (variável intrínseca).round() (método)
- é possível estudar via VScode; ele vai dar dicar de tudo o que está digitado, ajuda com o entendimento de funções, métodos, variáveis, etc..

## Interagindo com um menu de opções - parte 1

- Analisar antes de implementar

- Perguntar:

1. Quais os dados de entrada eu terei? (inputs)
2. Quais as variáveis?
3. Qual o caminho ideal (fluxo ideal)
4. Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativos)
5. Quais os tratamentos de dados preciso fazer? (estrutura de dados, funções)
6. Qual é a saída, ou quais os dados de saída esperada? (outputs)

**Problema**

Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa

---

O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
Se não houver nenhum item cadastrado, mostrar a mensagem:
"Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

```js
/*respondendo às perguntas:
Dados de Entrada:
1. número desejado
2. item da lista
Variáveis:
1. opção digitada
2. lista de itens
Caminho ideal:
1. Qualquer caminho que não gere erro
Tratamento de Dados
1. Ao capturar o número da opção, transformar string para número
*/

let option = Number(
  prompt(`
Olá usuário! Digite o número da opção desejada
1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa

`)
)
// fazer o tratamento do erro se inserir string

let items = []

while (option != 3) {
  option = Number(
    prompt(`
      Olá usuário! Digite o número da opção desejada
      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair do programa
    `)
  )

  if (option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item)
  } else if (option == 2) {
    if (items.length == 0) {
      alert("Não existem itens cadastrado")
    } else {
      alert(items)
    }
  } else {
    alert("Bye")
  }
}
```

## Interagindo com um menu de opções - parte 2

- cenário onde o menu seja muito grande
- estrutura [switch]

```js
// no switch não é boolean, é uma expressão
// essa lógica substitui os if - else do código anterior

switch (option) {
  case 1:
    let item = prompt("Digite o nome do item")
    items.push(item)
    break
  case 2:
    if (items.length == 0) {
      alert("Não existem itens cadastrado")
    } else {
      alert(items)
    }
    break
  case 3:
    alert("Tchau")
    break
  default:
    alert("Opção inválida, tente novamente.")
}
```

## Estruturando dados com Objetos

- criar uma lista de pacientes
  -- cada paciente dentro da lista deverá conter nome, idade, peso e altura
  -- escreva uma lista contendo o nome dos pacientes

- estruturar os dados
- object literal => criação de objeto 'na mão' com o modelo padrão
- for .. of

```js
// objetos criados na mão, lista de pacientes
let patients = [
  {
    name: "Luiz",
    age: 32,
    weight: 100,
    height: 190
  },
  {
    name: "Maria",
    age: 20,
    weight: 56,
    height: 171
  },
  {
    name: "José",
    age: 35,
    weight: 80,
    height: 179
  }
]

// acessar as propriedades

// maneiras diferentes de fazer
// while
let i = 0
while (i != patients.length) {
  alert(patients[i].name)
  i++
}

// for
for (let i = 0; i < patients.lenght; i++) {
  alert(patients[i].name)
}

// for .. of
for (let patient of patients) {
  alert(patient.name)
}
```

## Calculando IMC dos Pacientes com Funções

- Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima
  -- "Paciente X possui o IMC de: Y"
  -- Onde X é o nome do paciente e Y é o IMC desse paciente
  -- Crie uma função para fazer o cálculo de IMC
  -- peso / (altura x altura)

- Considerando o mesmo código da aula anterior:

```js
let patients = [
  {
    name: "Luiz",
    age: 32,
    weight: 100,
    height: 190
  },
  {
    name: "Maria",
    age: 20,
    weight: 56,
    height: 171
  },
  {
    name: "José",
    age: 35,
    weight: 80,
    height: 179
  }
]

// cenário não ideal, para cada 'paciente' eu preciso criar algo parecido.
alert(`
  O Paciente ${patients[0].name} possui o IMC de:
  ${(patients[0].weight / (patients[0].height / 100) ** 2).toFixed(2)}

`)

// resolvendo de forma inteligente - função

// passando um objeto na função
// como estou passando um objeto conhecido, eu já considero as propriedades dentro da função

function imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function printPatientImc(patient) {
  return `
  O Paciente ${patient.name} possui o IMC de:
  ${imc(patient.weight, patient.height)} 
  `
}

for (let patient of patients) {
  let messageImc = printPatientImc(patient)
  alert(messageImc)
}
```

## Mais conceitos, revisão, finalização e próximos passos

- escrever camelCase
- códigos sempre em inglês

**variáveis**

- let, var, const
  -- quando declaramos um array / objeto como const, eu posso alterar o conteúdo, porque o tipo não altera
  -- usar apenas const e let, prioritariamente, por causa das regras de visibilidade
  -- se declarar uma variável sem as palavras reservadas, é visualizada em todo lugar

```js
const a = []
// aqui eu atribuo um valor
a[0] = "a"
// aqui eu altero o valor do 'índice'
a[0] = "b"
```

**tipos de dados**

- string, number, boolean, undefined, null
  -- string - entre aspas, template literals (interpolação)
  -- number - inteiros, flutuantes
  -- boolean - 2 opções - tru - false
  -- undefined - não existe
  -- null - deveria existir, mas está vazio!

**estrutura de dados**

- arrays e objects
  -- arrays acesso as posições, objeto acesso as propriedades

```js
const myArray = [1, 2, 3, "1", "a"]

const myObject = { property: "value" }
```

**funções**

- criar funções
  -- named, anonymous, arrow
  -- argumentos, parâmetros e retorno
  -- execução

```js
// named
function myFunction() {}
// anonymous
const myFunction = function () {}
// arrow
const myFunction = () => {}

// argumentos e retorno
function sum(a, b) {
  return a + b
}

// a função arrow não exige a palavra return quando tem apenas uma linha de retorno
const sum = (a, b) => a + b

// execução
myFunction()
sum(1, 2)
```

**fluxo da aplicação**

- if, else if, else
  -- se condição verdadeira, sempre entra no 'if'; se for false, vai para o 'else'

- switch
  -- case, default, break
  -- não é um boolean de parâmetro, mas sim uma expressão
  -- menus

```js
if (true) {
  alert("Se verdadeiro entra aqui")
} else {
  alert("Se falso entra aqui")
}

const number = 1
switch (number) {
  case 1:
    alert("Incluir")
    break
  case 2:
    alert("Sair")
    break
  default:
    alert("Opção inválida")
}
```

**estruturas de repetição**

- while, for, for..of, for..

-- while: continua enquanto a condição seja verdadeira, utilizada quando não sabemos a quantidade de repetições
-- for (tradicional): utilizado com um 'índice' declarado para percorrer
-- for..of (tirar uma propriedade de dentro do objeto e já percorrer)

**operadores**

```js
//group operator
()

//matemáticos
*
**
%
/
+
-

//lógicos
&& // E
|| // OU
! // negação

// comparação - relacional
>
<
>=
<=
==
!=
===
!==

// atribuição
=
*=
/=
+=
-=

// oitros operadores
typeof
++ // incremento
-- // decremento
{} // objeto ou bloco de códigos
[] // array
, // separa elementos no array, objeto,

```

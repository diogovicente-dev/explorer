// Exercícios

//1. Declare um variável de nome weight

let weight // no javascript podemos finalizar o statement com ; ou sem igual nas aulas

//2. Que tipo de dado é a variável acima?
// como não tem valr atribuído a ela, é undefined

console.log(typeof weight) // descobrir o tipo de dado

/*3. Declare uma variável e atribua valores para cada um dos dados
  name: string
  age: number (integer)
  stars: number (float)
  isSubscribed: Boolean
*/

let name = "Diogo"
let age = 36
let stars = 4.8
let isSubscribed = true

/*4. A variável student abaixo é de que tipo de dados?

let student = {}

// Objeto

4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

4.2 Mostre no console as seguintes mensagens /* <name> de idade <age> pesa <weight> pelos valores de cada objeto */

let student = {
  name: "Diogo",
  age: 36,
  weight: 79.5,
  isSubscribed: true
} // Resposta 2
console.log(typeof student) // Resposta 1
console.log(student)

console.log(
  `${student.name}, de idade ${student.age}, pesa ${student.weight} kg pelos valores de cada objeto`
)

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio

let students = []

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [student]

//7. Coloque no console o valor da posição zero do array acima

console.log(students[0])

//8. Crie um novo student e coloque ele na posição 1 do Array students

let student1 = {
  name: "João",
  age: 32,
  weight: 75.5,
  isSubscribed: false
}

students[1] = student1 // não tão seguro a inserção
// posso reatribuir o array inteiro
/* let students = [
  student,
  student1  
]

console.log(students)

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou /* console.log(a) var a = 1 */

console.log(a) // undefined, porque a atribuição do valor est´depois da função; como o JS faz hoisting, ele entende que a variável existe
var a = 1

// se fosse let, o hoisting não existe (apenas para var)

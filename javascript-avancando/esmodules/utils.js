// essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar
const message = "Mensagem Exportada pelo Default"
export default message
// para importar o 'default', no arquivo 'main' o nome da variável não precisa ser o mesmo

// named export
// se preciar exportar mais de uma informação, é necessario usar o mesmo nome, sem o 'default'
const text = "texto"
const number = "23"
export { text, number }
export const type = "tipo do que?"
export const today = Date.now()
const double = number => number * 2
export { double }

const data = new Date()
const greeting = name => `hello ${name}`

export { data, greeting }

export function sum(a, b) {
  return a + b
}

const summ = (a, b) => a + b
const multi = (a, b) => a * b
const sub = (a, b) => a - b
const divide = (a, b) => a / b

export { summ, sub, multi, divide }

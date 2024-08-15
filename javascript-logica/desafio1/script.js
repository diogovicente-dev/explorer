let numberOne = Number(prompt("Digite o primeiro número: "))
let numberTwo = Number(prompt("Digite o segundo número: "))

const sum = (a, b) => a + b
const subtraction = (a, b) => a - b
const multiplication = (a, b) => a * b
const division = (a, b) => a / b
const restOfDivision = (a, b) => a % b

let sumResult = sum(numberOne, numberTwo)
alert(`A soma dos dois números é: ${sumResult}`)

let subtractionResult = subtraction(numberOne, numberTwo)
alert(`A subtração dos dois números é: ${subtractionResult}`)

let multiplicationResult = multiplication(numberOne, numberTwo)
alert(`A multiplicação dos dois números é: ${multiplicationResult}`)

let divisionResult = division(numberOne, numberTwo)
alert(`A divisão dos dois números é: ${divisionResult.toFixed(2)}`)

let restOfDivisionResult = restOfDivision(numberOne, numberTwo)
alert(`O resto da divisão dos dois números é: ${restOfDivisionResult}`)

let restOfDivisionOfSumResult = sumResult % 2

if (restOfDivisionOfSumResult == 0) {
  alert(`A soma dos dois números é par: ${sumResult}`)
} else {
  alert(`A soma dos dois números é impar: ${sumResult}`)
}

if (numberOne == numberTwo) {
  alert(`Os números inseridos são iguais:
      Número 1: ${numberOne}
      Número 2: ${numberTwo}
    `)
} else {
  alert(`Os números inseridos são diferentes:
      Número 1: ${numberOne}
      Número 2: ${numberTwo}
    `)
}

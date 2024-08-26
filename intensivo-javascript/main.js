/*1*/
console.log("Hello World")

/*2*/
let number1 = 10
let number2 = 5

let result = number1 + number2
console.log(result)

/*3*/
let variable = 2

switch (typeof variable) {
  case "number":
    console.log("É um número")
    break
  default:
    console.log("Não é um número")
}

/*4*/

let variable2 = "2"

switch (typeof variable2) {
  case "string":
    console.log("É uma string")
    break
  default:
    console.log("Não é uma string")
}

/*5*/

let variable3 = true

if (variable3 == true) {
  console.log("É um booleano")
} else if (variable3 == false) {
  console.log("É um booleano")
} else {
  console.log("Não é um booleano")
}

/*6*/
let number3 = 10
let number4 = 5

let subResult = number3 - number4
console.log(subResult)

/*7*/
let number5 = 10
let number6 = 5

let multiResult = number5 * number6
console.log(multiResult)

/*8*/
let number7 = 10
let number8 = 5

let divResult = number7 / number8
console.log(divResult)

/*9*/
let number9 = 10

let restResult = number9 % 2

if (restResult == 0) {
  console.log("O número é par")
} else {
  console.log("Não é um número par")
}

/*10*/
let number10 = 17

let restResult1 = number10 % 2

if (restResult1 == 1) {
  console.log("O número é impar")
} else {
  console.log("Não é um número impar")
}

import "./utils.js"
import qualquernome, {
  double,
  number,
  text,
  type,
  today,
  data,
  greeting
} from "./utils.js"

// renomeando a função importada
import { sum as soma } from "./utils.js"

console.log(qualquernome)
console.log(text, number, type)
console.log(today)
console.log(double(25))
console.log(data, greeting("Diogo"))
console.log(soma(5, 8))

import * as calculator from "./utils.js"

// quando importo múltiplos, uso como se fosse um objeto com várias propriedades

console.log(calculator.multi(5, 25))

// Variáveis
let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")
let xAttemps = 1

// Eventos
// estou colocando a responsabilidade no JS
buttonTry.addEventListener("click", handleTryClick)
buttonReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", playAgain)

// Funções
// função callback

/*
desafios:
1) não permitir números menores do que 0 e maiores do que 10
2) não contar as tentativas se o campo for nulo ou vazio
*/

function handleTryClick(event) {
  event.preventDefault()
  // como o botão está dentro de um form, a página entende que tem que tomar alguma ação, esta expressão previne
  // o padrão de comportamento de um botão dentro de um formulário é enviar o formulário (submit), nesse cenário a gente impede esse comportamento padrão do botão quando dentro de um form (tag <form>)
  const inputNumber = document.querySelector("#inputNumber")
  // dentro do querySelector é igual (parecido) com o seletor CSS que é usado

  if (Number(inputNumber.value) == randomNumber) {
    // aqui eu vou adicionar a classe 'hide' em um elemento e ocultar em outro
    //screen1.classList.add("hide")
    //screen2.classList.remove("hide")
    // os seletores são os mesmos do CSS
    // .screen 1 para classe; # para id;

    toggleScreen()
    screen2.querySelector(
      "h2"
    ).innerText = `Você acertou em ${xAttemps} tentativas!`
  }

  if (inputNumber.value < 0 || inputNumber.value > 10) {
    alert("Número incorreto, tente novamente")
    inputNumber.value = ""
  } else if (inputNumber.value == "") {
    alert("Insira um número válido")
  } else {
    inputNumber.value = ""
    xAttemps++
  }
}

// criando uma função para adicionar ao evento
function handleResetClick() {
  toggleScreen()
  xAttemps = 1
  randomNumber = Math.round(Math.random() * 10)
}

// criando uma função para tratar a adição - remoção da classe para ocultar
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

// função para capturar o evento de 'pressionar enter no teclado' para reiniciar o jogo
function playAgain(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}

/* Variáveis */
const home = document.querySelector("#home")
const fortune = document.querySelector("#fortune")
const openFortune = document.querySelector("#fortuneCookie")
const newFortune = document.querySelector("button")
const luckMessage = document.querySelector(".luckText p")

const fortuneList = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
]

/* Eventos */
openFortune.addEventListener("click", handleClickOpenFortune)
newFortune.addEventListener("click", handleClickNewFortune)
document.addEventListener("keydown", handleEnter)

/* Funções */
function handleClickOpenFortune() {
  toggleScreen()
  pickFortune()
}

function handleClickNewFortune() {
  toggleScreen()
}

function handleEnter(event) {
  if (event.key == "Enter" && fortune.classList.contains("hide")) {
    handleClickOpenFortune()
  }
}

function toggleScreen() {
  home.classList.toggle("hide")
  fortune.classList.toggle("hide")
}

function pickFortune() {
  let lenghtOfFortuneList = fortuneList.length
  let fortunePhraseIndex = Math.round(Math.random() * (lenghtOfFortuneList - 1))
  luckMessage.innerText = fortuneList[fortunePhraseIndex]
}

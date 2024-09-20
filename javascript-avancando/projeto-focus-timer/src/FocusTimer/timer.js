import state from "./state.js"
import * as el from "./elements.js"
import { reset, toggleMusic } from "./actions.js"
import { kitchenTimer, bgAudio } from "./sounds.js"

export function countdown() {
  clearTimeout(state.countdownId)

  if (!state.isRunning) {
    return
  } /* para não iniciar quando clicar no 'pause' */

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play()
    toggleMusic()
    return
  }

  updateDisplay(minutes, seconds)

  /* aplicando a recursividade, chamando a mesma função de countdown */
  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}

/* import * animate from "animejs" */
import confetti from "canvas-confetti"

const btn = document.getElementById("btn")
const timer = document.getElementById("timer")

btn.onclick = () => {
    const timer = setInterval(() => {
        confetti()
    },1000)

    setTimeout (() => {
        clearInterval(timer)
    },1000)
}
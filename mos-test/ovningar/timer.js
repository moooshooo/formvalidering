/* import * animate from "animejs" */
import confetti from "canvas-confetti"

const btn = document.getElementById("btn")
const timer = document.getElementById("timer")

/* btn.onclick = () => {
    const timer = setInterval(() => {
        confetti()
    },1000)

    setTimeout (() => {
        clearInterval(timer)
    },1000)
} */

btn.onclick = () => {
    let timeleft = 5
    
    const countDown = () => {
        timer.textContent = timeleft
        if (timeleft > 0) {
            timeleft--
            setTimeout(countDown, 1000)
        }else {
            timer.textContent = "Kabom"
            confetti()
        }
    }

   countDown()
}

/* btn.onclick = () => {
    setTimeout(() => {
        confetti()
    }, 1000) // kör confetti efter 1 sekund
} */
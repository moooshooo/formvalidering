import confetti from 'canvas-confetti'
import validator from 'email-validator'

const emailIn = document.getElementById("email")
const form = document.getElementById("form")
const regBtn = document.getElementById("regBtn")
const msg = document.getElementById("msg")

submitBtn.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const email = emailIn.value

    if (validator.validate(email)){
        msg.textContent = "Bra lilla gubbe"
        confetti()
    } else {
        msg.textContent = "Nja"
        msg.style.color = "#990000"
    }
})


/* If (email.trim = "") {
    validator.validate("email")
    console.log("I think this is validated!")
}

yippy.onclick = () => {
  confetti()
} */
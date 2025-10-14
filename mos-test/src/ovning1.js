const randomColor = require('randomcolor')

const result = document.getElementById("result")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    result.style.color = "red"
})

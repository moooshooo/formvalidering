import randomColor from "randomcolor";

const btn = document.getElementById("btn")

btn.onclick = () =>  {
    document.body.style.backgroundColor = randomColor()
}

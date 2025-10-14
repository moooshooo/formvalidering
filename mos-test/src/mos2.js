import validator from "email-validator";
import confetti from "canvas-confetti";

const msg = document.getElementById("msg");
const emailIn = document.getElementById("email");
const form = document.getElementById("form2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailIn.value;

  if (validator.validate(email)) {
    msg.textContent = "Duktig";
    msg.style.color = "green";
    console.log("yeiii")
    confetti();
    form.reset();
  } else {
    msg.textContent = "Du suger";
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    console.log("nooo la policia")
  }
});


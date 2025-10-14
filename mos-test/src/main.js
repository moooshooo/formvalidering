import './style.css'
/* import confetti from 'canvas-confetti' */
import validator from "email-validator"

import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

/* document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
setupCounter(document.querySelector('#counter')) 
*/

const email = document.getElementById("email")
const msg = document.getElementById("msg")

/* const validator = required("email-validator") */
validator.validate(email)

const validateForm = () => {

  if (validator) {
    console.log("Yeiiii")
  } else {
    console.log("buuuu")
  }

}



/* const validera = () => {

  if (validator.validate("email")) {
    console.log("Yeiiii")
  } else {
    console.log("buuuu")
  }
  
} */

/* 
const validate = require("email-validator") */




/* const submitBtn = document.getElementById("submit")

submitBtn.onclick = () => {
  confetti()
} */
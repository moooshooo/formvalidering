import { animate, utils, createDraggable, spring } from 'animejs';

const logo = document.getElementById("logo")
const btn = document.getElementById("btn")
let rotations = 0;

// Created a bounce animation loop
animate('#logo', {
  scale: [
    { to: 1.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: spring({ bounce: .7 }) }
  ],
  loop: true,
  loopDelay: 250,
});

// Make the logo draggable around its center
createDraggable('#logo', {
  container: [0, 0, 0, 0],
  releaseEase: spring({ bounce: .7 })
});

// Animate logo rotation on click
const rotateLogo = () => {
  rotations++;
  btn.innerText = `rotations: ${rotations}`;
  animate("#logo", {
    rotate: rotations * 360,
    ease: 'out(4)',
    duration: 1500,
  });
}

btn.addEventListener('click', rotateLogo);
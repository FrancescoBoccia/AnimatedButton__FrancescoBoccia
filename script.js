"use strict";

// DOM MANIPULATION

const containerButton = document.querySelectorAll(".insideButton");
const buttonContent = document.querySelector(".buttonContent");
const animationWave = document.querySelector(".wave");
const buttonRadiusAnimation = document.querySelector(".button__radius");

const order1 = document.querySelector(".order1");
const order2 = document.querySelector(".order2");
const order3 = document.querySelector(".order3");
const order4 = document.querySelector(".order4");

// LOGIC

containerButton.forEach((animation, i) => {
  animation.addEventListener("click", function () {
    let pixel = 200;

    if (i == 3) {
      addAnimation();
      setTimeout(removeAnimation, 799);
      setTimeout(function () {
        buttonContent.style.transform = `translate(${pixel}px)`;
      }, 799);
      order1.classList.add("shake");
    }

    if (i == 2) {
      addAnimation();
      setTimeout(removeAnimation, 799);
      setTimeout(function () {
        buttonContent.style.transform = `translate(${(pixel += 200)}px)`;
      }, 799);
      order2.classList.add("shake");
    }

    if (i == 1) {
      addAnimation();
      setTimeout(removeAnimation, 799);
      setTimeout(function () {
        buttonContent.style.transform = `translate(${(pixel += 400)}px)`;
      }, 799);
      order3.classList.add("shake");
    }

    if (i == 0) {
      buttonContent.style.order = "0";
      addAnimation();
      setTimeout(removeAnimation, 799);
      setTimeout(function () {
        buttonContent.style.transform = `translate(${(pixel -= 200)}px)`;
      }, 799);
      order4.classList.add("shake");
    }
  });
});

// FUNCTIONS

function removeAnimation() {
  animationWave.classList.remove("wave-animation");
  order1.classList.remove("shake");
  order2.classList.remove("shake");
  order3.classList.remove("shake");
  order4.classList.remove("shake");

  buttonRadiusAnimation.style.zIndex = "-1";
}

function addAnimation() {
  animationWave.classList.add("wave-animation");
  buttonRadiusAnimation.style.zIndex = "4";
}

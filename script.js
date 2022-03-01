const containerButton = document.querySelector(".containerButton");
const arrowButton = document.querySelectorAll("button");
const animationWave = document.querySelector(".wave");
const buttonRadius = document.querySelector(".button__radius");
const container = document.querySelector(".container");

arrowButton.forEach((span, i) =>
  span.addEventListener("click", function () {
    if (i === 3) {
      buttonRadius.style.zIndex = "10";

      setTimeout(setTime, 500);
    }
    // setTimeout(setTime, 2000);
    // containerButton.style.transition = "1s ease";
    // containerButton.style.transform = "translate(100%)";
    if (i === 2) {
      buttonRadius.style.zIndex = "10";
      setTimeout(setTime2, 500);
    }
    if (i === 1) {
      buttonRadius.style.zIndex = "10";
      setTimeout(setTime3, 500);
    }
    if (i === 0) {
      buttonRadius.style.zIndex = "10";
      setTimeout(setTime4, 500);
    }
    animationWave.classList.add("wave-animation");
    container.classList.add("shake");

    console.log(i);
  })
);

function setTime() {
  containerButton.style.transition = "1s ease";
  containerButton.style.transform = "translate(100%)";
  buttonRadius.style.zIndex = "-1";
  animationWave.classList.remove("wave-animation");
}
function setTime2() {
  containerButton.style.transition = "1s ease";
  containerButton.style.transform = "translate(200%)";
  buttonRadius.style.zIndex = "-1";
  animationWave.classList.remove("wave-animation");
}
function setTime3() {
  containerButton.style.transition = "1s ease";
  containerButton.style.transform = "translate(300%)";
  buttonRadius.style.zIndex = "-1";
  animationWave.classList.remove("wave-animation");
}
function setTime4() {
  containerButton.style.transition = ".1s ease";
  containerButton.style.transform = "translate(0%)";
  buttonRadius.style.zIndex = "-1";
  animationWave.classList.remove("wave-animation");
}

// z-index: 1; of button and button content

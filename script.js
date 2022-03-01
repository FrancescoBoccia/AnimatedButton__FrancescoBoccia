const containerButton = document.querySelector(".containerButton");
const arrowButton = document.querySelectorAll("button");
const animationWave = document.querySelector(".wave");

arrowButton.forEach((span, i) =>
  span.addEventListener("click", function () {
    animationWave.classList.add("wave-animation");
    setTime();
    // setTimeout(setTime, 2000);
    // containerButton.style.transition = "1s ease";
    // containerButton.style.transform = "translate(100%)";
    if (i === 2) {
      containerButton.style.transform = "translate(200%)";
    }
    if (i === 1) {
      containerButton.style.transform = "translate(300%)";
    }
    if (i === 0) {
      containerButton.style.transition = ".1s ease";
      containerButton.style.transform = "translate(0%)";
    }
    console.log(i);
  })
);

function setTime() {
  containerButton.style.transition = "1s ease";
  containerButton.style.transform = "translate(100%)";
}

// z-index: 1; of button and button content

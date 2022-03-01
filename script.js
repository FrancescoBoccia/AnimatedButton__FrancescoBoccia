const containerButton = document.querySelectorAll(".insideButton");
const arrowButton = document.querySelectorAll("button");
const animationWave = document.querySelector(".wave");
const buttonRadius = document.querySelector(".button__radius");
const container = document.querySelector(".button");

// arrowButton.forEach((span, i) =>
//   span.addEventListener("click", function () {
//     if (i === 3) {
//       buttonRadius.style.zIndex = "10";

//       setTimeout(setTime, 500);
//     }
//     if (i === 2) {
//       buttonRadius.style.zIndex = "10";
//       setTimeout(setTime2, 500);
//     }
//     if (i === 1) {
//       buttonRadius.style.zIndex = "10";
//       setTimeout(setTime3, 500);
//     }
//     if (i === 0) {
//       buttonRadius.style.zIndex = "10";
//       setTimeout(setTime4, 500);
//     }
//     animationWave.classList.add("wave-animation");
//     container.classList.add("shake");

//     console.log(i);
//   })
// );

// function setTime() {
//   containerButton.style.transition = "1s ease";
//   containerButton.style.transform = "translate(100%)";
//   buttonRadius.style.zIndex = "-1";
//   animationWave.classList.remove("wave-animation");
// }
// function setTime2() {
//   containerButton.style.transition = "1s ease";
//   containerButton.style.transform = "translate(200%)";
//   buttonRadius.style.zIndex = "-1";
//   animationWave.classList.remove("wave-animation");
// }
// function setTime3() {
//   containerButton.style.transition = "1s ease";
//   containerButton.style.transform = "translate(300%)";
//   buttonRadius.style.zIndex = "-1";
//   animationWave.classList.remove("wave-animation");
// }
// function setTime4() {
//   containerButton.style.transition = ".1s ease";
//   containerButton.style.transform = "translate(0%)";
//   buttonRadius.style.zIndex = "-1";
//   animationWave.classList.remove("wave-animation");
// }

containerButton.forEach((animation, i) => {
  animation.addEventListener("click", function () {
    console.log(animation);
    const index3 = document.querySelector(".index3");
    const index2 = document.querySelector(".index2");
    const index1 = document.querySelector(".index1");
    const index0 = document.querySelector(".index0");

    if (animation.classList.contains("index3")) {
      index3.style.transform = "translate(100%)";
      index2.style.transform = "translate(100%)";
    }

    if (animation.classList.contains("index2")) {
      index2.style.transform = "translate(200%)";
      index1.style.transform = "translate(200%)";
    }

    if (animation.classList.contains("index1")) {
      index1.style.transform = "translate(300%)";
      index0.style.transform = "translate(300%)";
    }

    if (animation.classList.contains("index0")) {
      container.style.transform = "translate(0%)";
    }
  });
});

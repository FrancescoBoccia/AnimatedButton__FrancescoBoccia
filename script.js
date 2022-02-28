const containerButton = document.querySelector(".containerButton");
const buttonTransfomr = document.querySelector(".button");
const arrowButton = document.querySelectorAll("button");

arrowButton.forEach((span, i) =>
  span.addEventListener("click", function () {
    containerButton.style.transition = "1s ease";
    containerButton.style.transform = "translate(100%)";
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

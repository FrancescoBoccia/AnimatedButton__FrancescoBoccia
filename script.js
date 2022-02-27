const containerButton = document.querySelector(".containerButton");
const buttonTransfomr = document.querySelector(".button");
const arrowSpan = document.querySelectorAll("span");

arrowSpan.forEach((span, i) =>
  span.addEventListener("click", function () {
    containerButton.style.backgroundColor = "red";
    containerButton.style.transition = "4s ease-in-out";
    containerButton.style.transform = "translate(100%)";
  })
);

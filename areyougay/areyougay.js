function showResult(answer) {
  if (answer === "yes") {
    alert("I know ! 😉");
  } else {
    alert("hehe :(");
  }
}

function moveNo() {
  const noButton = document.getElementById("no");
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  noButton.style.position = "absolute";
  noButton.style.left = newX + "px";
  noButton.style.top = newY + "px";
}

document.getElementById("yes").addEventListener("mouseenter", function () {
  this.style.transform = "scale(10)";
});

document.getElementById("yes").addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
});

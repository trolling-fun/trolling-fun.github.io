document.getElementById("you").addEventListener("click", function () {
  alert("Be at my place by 8 PM");
});

document.getElementById("pizza").addEventListener("mouseenter", function () {
  moveButton("pizza");
});

document.getElementById("salad").addEventListener("mouseenter", function () {
  moveButton("salad");
});

function moveButton(buttonId) {
  const button = document.getElementById(buttonId);
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  button.style.position = "absolute";
  button.style.left = newX + "px";
  button.style.top = newY + "px";
}

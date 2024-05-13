document.getElementById("you").addEventListener("click", function () {
  alert("I KNOW !!!!!");
});

document.getElementById("a").addEventListener("mouseenter", function () {
  moveButton("a");
});

document.getElementById("b").addEventListener("mouseenter", function () {
  moveButton("b");
});
document.getElementById("c").addEventListener("mouseenter", function () {
  moveButton("c");
});
document.getElementById("d").addEventListener("mouseenter", function () {
  moveButton("d");
});
document.getElementById("f").addEventListener("mouseenter", function () {
  moveButton("f");
});
document.getElementById("g").addEventListener("mouseenter", function () {
  moveButton("g");
});
document.getElementById("h").addEventListener("mouseenter", function () {
  moveButton("h");
});
document.getElementById("i").addEventListener("mouseenter", function () {
  moveButton("i");
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

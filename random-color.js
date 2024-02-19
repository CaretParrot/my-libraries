var colors = ["red", "orange", "yellow", "lime", "green", "seafoam", "teal", "sky", "blue", "purple", "magenta", "pink"];
var randomIndex = Math.floor(Math.random() * 12);
var pickedColor = [`var(--${colors[randomIndex]}-50)`, `var(--${colors[randomIndex]}-60)`, `var(--${colors[Math.floor(randomIndex)]}-70)`, `var(--${colors[Math.floor(randomIndex)]}-80)`];

var elements = document.body.querySelectorAll("*");
for (var k = 0; k < elements.length; k++) {
  elements[k].style.backgroundColor = pickedColor[1];
}

document.body.style.backgroundColor = pickedColor[0];
document.documentElement.backgroundColor = pickedColor[0];

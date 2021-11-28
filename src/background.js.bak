const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function getRandomIndex(object) {
  const selectedIndex = Math.floor(Math.random() * object.length);
  return selectedIndex;
}

function changeBackgroundColor() {
  const selectedColor1 = colors[getRandomIndex(colors)];
  const selectedColor2 = colors[getRandomIndex(colors)];
  htmlBody.style.background = `linear-gradient(0.25turn, ${selectedColor1}, ${selectedColor2})`;
}

const htmlBody = document.querySelector("body");
const giveMeColorButton = document.querySelector("button#change-color");

changeBackgroundColor();
giveMeColorButton.addEventListener("click", changeBackgroundColor);

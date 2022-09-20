const canvasEle = document.getElementById("canvas");
const btnEle = document.getElementById("button");
const colors = [
  "#1BF11F",
  "#E77777",
  "#E9DF64",
  "#56E3C0",
  "#9471D9",
  "#E86AEA",
  "#EA86BF",
];
const changeColor = function () {
  let randomNumber = Math.trunc(Math.random() * colors.length) + 1;
  canvasEle.style.backgroundColor = colors[randomNumber];
};
btnEle.addEventListener("click", changeColor);

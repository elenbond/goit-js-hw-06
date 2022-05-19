function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
// console.log(buttonChangeColor);

const spanColor = document.querySelector(".color");
// console.log(spanColor);

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
};

buttonChangeColor.addEventListener("click", changeColor);
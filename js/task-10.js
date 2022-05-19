function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector(`input[type = "number"]`);
console.log(inputAmount);
const buttonCreate = document.querySelector(`button[data-create]`);
console.log(buttonCreate);
const buttonDestroy = document.querySelector(`button[data-destroy]`);
console.log(buttonDestroy);
const boxes = document.querySelector("#boxes");
console.log(boxes);

let firstDivHeight = 30;
let firstDivWidth = 30;

const createBoxes = (amount) => {
  amount = inputAmount.value;
  for (let i = 0; i < amount; i += 1) {
    const createNewDiv = document.createElement("div");
    if (firstDivHeight > createNewDiv.style.height) {
      firstDivHeight += 10;
      firstDivWidth += 10;
    } else {
      firstDivHeight = 30;
      firstDivWidth = 30;
      const firstCreatedDiv = document.createElement("div");
      firstCreatedDiv.style.height = `${firstDivHeight} px`;
      firstCreatedDiv.style.width = `${firstDivWidth} px`;
      firstCreatedDiv.style.backgroundColor = getRandomHexColor();
      boxes.append(firstCreatedDiv);
      console.log(`${firstDivWidth} px`);
    }
    createNewDiv.style.height = `${firstDivHeight} px`;
    createNewDiv.style.width = `${firstDivWidth} px`;
    createNewDiv.style.backgroundColor = getRandomHexColor();

    console.log(createNewDiv);
    console.log(createNewDiv.style.width);
    // console.log(createNewDiv.previousElementSibling);
  }
}
const destroyBoxes = () => {
  for (let i = 0; i < boxes.children.length; i += 1) {
    console.log([i]);
    boxes.children[i].remove();
    [i] = [i - 1];
  }
}
buttonDestroy.addEventListener("click", destroyBoxes);
buttonCreate.addEventListener("click", createBoxes);
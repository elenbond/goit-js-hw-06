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


buttonCreate.addEventListener("click", createBoxes);
let firstDivHeight = 30;
let firstDivWidth = 30;

// const createBoxes = (amount) => {
//   amount = inputAmount.value;
//   for (let i = 0; i < amount; i += 1) {
//     const createNewBox = document.createElement("div");
//     if()


//   }



//   // const amountOfCreatedBoxes = document.createElement("div") * amount;
//   // boxes.append(...amountOfCreatedBoxes);
//   return amountOfCreatedBoxes;
// }
// // boxes.append(createBoxes);


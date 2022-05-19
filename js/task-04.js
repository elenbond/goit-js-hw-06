const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);
// console.log(buttonDecrement);
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
// console.log(buttonIncrement);

let counterValue = 0;
const buttonValue = document.querySelector("#value");
// console.log(buttonValue);

const handleClickDecrement = () => {
    counterValue -= 1;
    buttonValue.textContent = counterValue;
};
buttonDecrement.addEventListener("click", handleClickDecrement);

const handleClickIncrement = () => {
    counterValue += 1;
    buttonValue.textContent = counterValue;
}
buttonIncrement.addEventListener("click", handleClickIncrement);
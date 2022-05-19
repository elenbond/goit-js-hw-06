const inputFontSize = document.querySelector("#font-size-control");
// console.log(inputFontSize);

const textSize = document.querySelector("#text");
// console.log(textSize);

const inputSize = (event) => {
    const currentValue = event.currentTarget.value;
    textSize.style.fontSize = currentValue + "px";
};

inputFontSize.addEventListener("input", inputSize);
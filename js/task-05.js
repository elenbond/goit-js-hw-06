const inputField = document.querySelector("#name-input");
// console.log(inputField);

const outputName = document.querySelector("#name-output");
// console.log(outputName);

const inputName = (event) => {
    outputName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        outputName.textContent = "Anonymous";
    } else if (event.currentTarget.value != "") {
        outputName.textContent = event.currentTarget.value;
    };
};

inputField.addEventListener("keyup", inputName);
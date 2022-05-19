const inputSymbols = document.querySelector("#validation-input");
// console.log(inputSymbols);

const input = (event) => {
    const inputDataInteger = Number(inputSymbols.dataset.length);
    if (event.currentTarget.value.length === inputDataInteger) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
    } else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    };
};

inputSymbols.addEventListener("blur", input);
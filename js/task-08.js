const form = document.querySelector(".login-form");
console.log(form);

const inputEmail = document.querySelectorAll(`input[type = "email"]`);
console.log(inputEmail);

const inputPassword = document.querySelectorAll(`input[type = "password"]`);
console.log(inputPassword);

const handleSubmit = (event) => {
    event.preventDefault();
    const { elements: {email, password} } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Please, fill in all the fields!");
    }
    else {
        const submitValues = {
            email: email.value,
            password: password.value,
        };
        console.log(submitValues);
    };
    event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);
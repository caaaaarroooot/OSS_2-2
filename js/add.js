const nameInput = document.getElementById("name");
// const usernameInput = document.getElementById("username");
// const addressInput = document.getElementById("address1");
// const countrySelect = document.getElementById("country-select");
// const stateSelect = document.getElementById("state-select");
// const birthdaySelect = document.getElementById("birthDay");
// const emailInput = document.getElementById("email");
// const address2Input = document.getElementById("address2");
const mybutton = document.getElementById("btn");

const errorMessageName = document.getElementById("error-message-name");
// const errorMessageUsername = document.getElementById("error-message-username");
// const errorMessageAddress = document.getElementById("error-message-address1");
// const errorMessageCountry = document.getElementById("error-message-country");
// const errorMessageState = document.getElementById("error-message-state");

function validateField(input, errorMessage) {
    const value = input.value.trim();
    if (!value) {
        input.classList.add("error");
        input.classList.remove("success");
        errorMessage.classList.add("active");
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        errorMessage.classList.remove("active");
        return true;
    }
}

function isValid() {
    let isValid = true;

    isValid = validateField(nameInput, errorMessageName);
    // isValid = validateField(usernameInput, errorMessageUsername) && isValid;
    // isValid = validateField(addressInput, errorMessageAddress) && isValid;
    // isValid = validateField(countrySelect, errorMessageCountry) && isValid;
    // isValid = validateField(stateSelect, errorMessageState) && isValid;
    return isValid;
}

function handleSubmit() {
    // birthdaySelect.classList.add("success");
    // address2Input.classList.add("success");
    // emailInput.classList.add("success");
    if (isValid()) {
        document.form1.submit();
        alert("submit success");
    }
}

function mouseon() {
    mybutton.classList.add("mouseOn");
}

function mouseout() {
    mybutton.classList.remove("mouseOn");
}

// function keyDown(event) {
//     console.log(event.key);
// }

// nameInput.addEventListener("keydown", keyDown);

nameInput.addEventListener("input", () => {
    validateField(nameInput, errorMessageName);
});

// usernameInput.addEventListener("input", () => {
//     validateField(usernameInput, errorMessageUsername);
// });

// addressInput.addEventListener("input", () => {
//     validateField(addressInput, errorMessageAddress);
// });

// countrySelect.addEventListener("change", () => {
//     validateField(countrySelect, errorMessageCountry);
// });

// stateSelect.addEventListener("change", () => {
//     validateField(stateSelect, errorMessageState);
// });

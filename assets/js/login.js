const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

//Toggle between login and signup
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); 
        forms.classList.toggle("show-signup");
    })
})


// Phone number validation
function validatePhoneNumber(phoneNumber) {
    const phoneNumberPattern = /^[0-9]{10}$/;
    return phoneNumber.match(phoneNumberPattern);
}

// PIN validation
function validatePIN(pin) {
    const pinPattern = /^[0-9]{4}$/;
    return pin.match(pinPattern);
}

// Handle input field validation
function showError(inputField, errorMessage) {
    const errorElement = inputField.parentElement.querySelector(".error");
    errorElement.textContent = errorMessage;
    inputField.classList.add("error-input");
    inputField.classList.remove("success-input");
}

function showSuccess(inputField) {
    const errorElement = inputField.parentElement.querySelector(".error");
    errorElement.textContent = "";
    inputField.classList.remove("error-input");
    inputField.classList.add("success-input");
}

// Handle form submissions
const signupForm = document.querySelector(".signup form");
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const phoneNumberInput = document.querySelector(".signup .phone-number");
    const pinInput = document.querySelector(".signup .pin");
    const confirmPinInput = document.querySelector(".signup .confirm-pin");

    const phoneNumber = phoneNumberInput.value;
    const pin = pinInput.value;
    const confirmPin = confirmPinInput.value;

    if (!validatePhoneNumber(phoneNumber)) {
        showError(phoneNumberInput, "Please enter a valid phone number with 10 digits.");
    } else {
        showSuccess(phoneNumberInput);
    }

    if (!validatePIN(pin)) {
        showError(pinInput, "Please enter a valid 4-digit PIN.");
    } else {
        showSuccess(pinInput);
    }

    if (pin !== confirmPin) {
        showError(confirmPinInput, "PINs do not match.");
    } else {
        showSuccess(confirmPinInput);
    }

    if (validatePhoneNumber(phoneNumber) && validatePIN(pin) && pin === confirmPin) {
        alert("Signup successful!");
    } 
});

const loginForm = document.querySelector(".login form");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const phoneNumberInput = document.querySelector(".login .phone-number");
    const pinInput = document.querySelector(".login .pin");

    const phoneNumber = phoneNumberInput.value;
    const pin = pinInput.value;

    if (!validatePhoneNumber(phoneNumber)) {
        showError(phoneNumberInput, "Please enter a valid phone number with 10 digits.");
    } else {
        showSuccess(phoneNumberInput);
    }

    if (!validatePIN(pin)) {
        showError(pinInput, "Please enter a valid 4-digit PIN.");
    } else {
        showSuccess(pinInput);
    }

    if (validatePhoneNumber(phoneNumber) && validatePIN(pin)) {
        alert("Login successful!");
    }
});



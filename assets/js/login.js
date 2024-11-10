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


// E-mail validation
function validateEMail(eMail) {
    const eMailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return eMail.match(eMailPattern);
}

// Password validation
function validatePassword(password) {
    const passwordPattern = /^[0-9]{6}$/;
    return password.match(passwordPattern);
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
const signUptButton = document.querySelector(".signUp");
signUptButton.addEventListener("click", function (e) {
// const signupForm = document.querySelector(".signup form");
// signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const eMailInput = document.querySelector(".signup .e-mail");
    const passwordInput = document.querySelector(".signup .password");
    const confirmPasswordInput = document.querySelector(".signup .confirm-password");

    const eMail = eMailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!validateEMail(eMail)) {
        showError(eMailInput, "Please enter a valid E-mail Address.");
    } else {
        showSuccess(eMailInput);
    }

    if (!validatePassword(password)) {
        showError(passwordInput, "Please enter a valid 6-digit Password.");
    } else {
        showSuccess(passwordInput);
    }

    if (password !== confirmPassword) {
        showError(confirmPasswordInput, "Passwords do not match.");
    } else {
        showSuccess(confirmPasswordInput);
    }

    // if (validateEMail(eMail) && validatePassword(password) && password === confirmPassword) {
    //     alert("Signup successful!");
    // } 
});

const logIntButton = document.querySelector(".logIn");
logIntButton.addEventListener("click", function (e) {
// const loginForm = document.querySelector(".login form");
// loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const eMailInput = document.querySelector(".login .e-mail");
    const passwordInput = document.querySelector(".login .password");

    const eMail = eMailInput.value;
    const password = passwordInput.value;

    if (!validateEMail(eMail)) {
        showError(eMailInput, "Please enter a valid E-mail Address.");
    } else {
        showSuccess(eMailInput);
    }

    if (!validatePassword(password)) {
        showError(passwordInput, "Please enter a valid 6-digit Password.");
    } else {
        showSuccess(passwordInput);
    }

    // if (validateEMail(eMail) && validatePassword(password)) {
    //     alert("Login successful!");
    // }
});

// Forgot Password Notification 

function forgotNotification(){
    const forgot = document.querySelector('.forgotNotification');
    forgot.classList.add('active')
    setTimeout(() => {
    forgot.classList.remove("active");
}, 5000);
}

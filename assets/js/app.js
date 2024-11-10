// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyABwQpzIJhk5vkNbdC_FazG8FpMyVVfjrA",
authDomain: "urbanway-e1936.firebaseapp.com",
projectId: "urbanway-e1936",
storageBucket: "urbanway-e1936.appspot.com",
messagingSenderId: "957989416352",
appId: "1:957989416352:web:7176885570c30084dc48c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signUp.addEventListener('click', (e) => {
    e.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;


    if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid), {
                email: email,
                password: password
            })

            alert("Signed Up Successfully");
            console.log(user);
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode);
            // console.log(errorMessage);
            // ..
        });
    } else {
        alert("Passwords doesn't match");
    }
});

logIn.addEventListener('click', (e) => {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const date = new Date();
        update(ref(database, 'users/' + user.uid), {
                last_login: date,
            })

        alert("Logged In Successfully");
        console.log(user);
        // ...
    })
    .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
    });
});
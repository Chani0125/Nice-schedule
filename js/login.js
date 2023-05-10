// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXSl6PdMy6sW9TK3lXo_hfHZqSrJOxVsU",
  authDomain: "nice-schedule-4b83e.firebaseapp.com",
  projectId: "nice-schedule-4b83e",
  storageBucket: "nice-schedule-4b83e.appspot.com",
  messagingSenderId: "53683114195",
  appId: "1:53683114195:web:fef7e8eca2f30cbb4a8426",
  measurementId: "G-F5Q5YLJEKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const auth = getAuth();

document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signUpEmail = document.getElementById('signUpEmail').value
    const signUpPassword = document.getElementById('signUpPassword').value

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            // Signed in
            alert("회원가입 성공");
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            alert("회원가입 실패");
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

})

document.getElementById('signInButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signInEmail = document.getElementById('signInEmail').value
    const signInPassword = document.getElementById('signInPassword').value
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            // Signed in
            alert("로그인 성공");
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            alert("로그인 실패");
            const errorCode = error.code;
            const errorMessage = error.message;
        });

})

// import React, { useState } from "react";
// import { Redirect } from "react-router-dom"

// const LoginForm = () => {
//       const login = async (e) => {
//       e.preventDefault();
//       try {
//         await auth.signInWithEmailAndPassword(email, password);
//         setLoggedIn(true);
//       } catch (error) {
//         alert("Invalid email or password");
//       }
//     };
  
//     return (
//       <div>
//         {loggedIn && <Redirect to="/calendar" />}
//         <form onSubmit={login}>
//           <label>
//             Email:
//             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           <br />
//           <button type="submit">Log In</button>
//         </form>
//       </div>
//     );
//   };
  
//   export default LoginForm;
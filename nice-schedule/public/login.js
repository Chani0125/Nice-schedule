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
import { Navigate } from 'react-router-dom';

const auth = getAuth();

export default function Redirect() {
  return <Navigate to="./calender.html"></Navigate>;
}

document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signUpEmail = document.getElementById('signUpEmail').value
    const signUpPassword = document.getElementById('signUpPassword').value

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            // Signed in
            alert("회원가입 성공");
            // ...
        })
        .catch((error) => {
            alert("회원가입 실패");
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

})

const login = document.querySelector(".signInButton");

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
            login.innerHTML += '<Redirect to="/index.html" />';
            const errorCode = error.code;
            const errorMessage = error.message;
        });

})

// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         alert("회원가입 성공");
//         setIsAuthenticated(true);
//       })
//       .catch((error) => {
//         alert("회원가입 실패");
//         console.error(error);
//       });
//   };

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         alert("로그인 성공");
//         setIsAuthenticated(true);
//       })
//       .catch((error) => {
//         alert("로그인 실패");
//         console.error(error);
//       });
//   };

//   if (isAuthenticated) {
//     return <Redirect to="/index.html" />;
//   }

//   return (
//     <div>
//       <form onSubmit={handleSignUp}>
//         <input type="text" name="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" name="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">회원가입</button>
//       </form>
//       <form onSubmit={handleSignIn}>
//         <input type="text" name="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" name="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">로그인</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
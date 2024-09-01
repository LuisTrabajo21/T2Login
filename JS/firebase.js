// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyOlxTUXJBqc8VZsBwwiDWWUJYEffGCWQ",
  authDomain: "login-fb-61ccd.firebaseapp.com",
  projectId: "login-fb-61ccd",
  storageBucket: "login-fb-61ccd.appspot.com",
  messagingSenderId: "45105387928",
  appId: "1:45105387928:web:1dc905440dfaa3ffb4b3ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

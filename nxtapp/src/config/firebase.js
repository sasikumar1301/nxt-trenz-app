// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIfXqQVDoM6NsZo4-cYYG-cu9KgJEp9_k",
  authDomain: "meta-verse-login-page.firebaseapp.com",
  projectId: "meta-verse-login-page",
  storageBucket: "meta-verse-login-page.appspot.com",
  messagingSenderId: "474864330032",
  appId: "1:474864330032:web:b0d146876b115c11e114f5",
  measurementId: "G-5Y9G68W761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


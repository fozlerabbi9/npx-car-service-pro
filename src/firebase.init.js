// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcvs3iPN29LjvlctsnJhVHAWPR566NXjw",
  authDomain: "npx-genius-car-service.firebaseapp.com",
  projectId: "npx-genius-car-service",
  storageBucket: "npx-genius-car-service.appspot.com",
  messagingSenderId: "33187499050",
  appId: "1:33187499050:web:354dfa631ffbc7e3270753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
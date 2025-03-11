// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// //TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKOe6Wf0TBTJSL8PUbCDMFrVhkZOHk5kI",
  authDomain: "netflixgpt-be859.firebaseapp.com",
  projectId: "netflixgpt-be859",
  storageBucket: "netflixgpt-be859.firebasestorage.app",
  messagingSenderId: "817534997503",
  appId: "1:817534997503:web:334f8d0ab71f45cbaacdca",
  measurementId: "G-Z5JG4N52JZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

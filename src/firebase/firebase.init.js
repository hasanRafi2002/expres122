// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRzzL1Pd8nh3xcA3HOt4UWKzN55PSOfhY",
  authDomain: "asgn101.firebaseapp.com",
  projectId: "asgn101",
  storageBucket: "asgn101.firebasestorage.app",
  messagingSenderId: "464440244370",
  appId: "1:464440244370:web:1a04d13209faaabc7f0e4b",
  measurementId: "G-HJWCBW6WFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
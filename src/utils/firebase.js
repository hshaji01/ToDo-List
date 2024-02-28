// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArhB9wg2INgVbarO17s1Z3fXh5iTx23n4",
  authDomain: "to-do-list-bd1d8.firebaseapp.com",
  projectId: "to-do-list-bd1d8",
  storageBucket: "to-do-list-bd1d8.appspot.com",
  messagingSenderId: "529517569308",
  appId: "1:529517569308:web:625acc34fb4aaf4dbcc6d9",
  measurementId: "G-S2TBG7RC3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
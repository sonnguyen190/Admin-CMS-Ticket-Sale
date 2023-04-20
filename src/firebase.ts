// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "ticket-51478.firebaseapp.com",
  projectId: "ticket-51478",
  storageBucket: "ticket-51478.appspot.com",
  messagingSenderId: "893139775932",
  appId: "1:893139775932:web:dd1522f25f58037bedfbb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);


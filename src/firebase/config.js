// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1TMT7bt99KlrcYkuk0_tBfPPr85u9ipw",
  authDomain: "react-journal-app-1cfa8.firebaseapp.com",
  projectId: "react-journal-app-1cfa8",
  storageBucket: "react-journal-app-1cfa8.appspot.com",
  messagingSenderId: "312978224348",
  appId: "1:312978224348:web:37fb963fde0777f8fdf019"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
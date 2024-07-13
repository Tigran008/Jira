// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmyK72afbl7TLqLi9lF0brSkSamlUJsc0",
  authDomain: "my-project-97152-dbc6d.firebaseapp.com",
  projectId: "my-project-97152-dbc6d",
  storageBucket: "my-project-97152-dbc6d.appspot.com",
  messagingSenderId: "400221798863",
  appId: "1:400221798863:web:979171f96b9bc6b95192ba",
  measurementId: "G-E0VYYRSFYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app, auth, db, getFirestore, setDoc, getDoc, doc
}
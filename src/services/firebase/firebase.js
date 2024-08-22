// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, setDoc, getDocs, doc, getDoc, collection, updateDoc, arrayUnion } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFGUBpa_nKQGqILdqrdOTWMkYa1ZXnjC4",
  authDomain: "jira-1ebc5.firebaseapp.com",
  projectId: "jira-1ebc5",
  storageBucket: "jira-1ebc5.appspot.com",
  messagingSenderId: "396386233238",
  appId: "1:396386233238:web:330433fc2ed51b60aa0bb7",
  measurementId: "G-GXD0T00J4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 


export {
    app, 
    auth,
    db, 
    updateDoc, 
    getDocs, 
    getDoc, 
    collection, 
    getFirestore, 
    setDoc, 
    doc, 
    arrayUnion,
    onAuthStateChanged
}

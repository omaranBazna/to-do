// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { collection,getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALjaXrNUVFDCPe8bxzIhV3oMzz38Avaws",
  authDomain: "to-do-c14ce.firebaseapp.com",
  projectId: "to-do-c14ce",
  storageBucket: "to-do-c14ce.appspot.com",
  messagingSenderId: "432463058770",
  appId: "1:432463058770:web:0ba5e858bdef9a651bcc8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVdLwRjN5gq6eK3w8TC63qaiMEaH-6U6o",
  authDomain: "crestmart-428da.firebaseapp.com",
  projectId: "crestmart-428da",
  storageBucket: "crestmart-428da.appspot.com",
  messagingSenderId: "735896111834",
  appId: "1:735896111834:web:b64cfd7efe16d4b65f33e3",
  measurementId: "G-2H36TEM5ZV"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth";
import  "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvPdF_zQqBwymams5QUupfGcIznt8kv4",
  authDomain: "clone-1aa8c.firebaseapp.com",
  projectId: "clone-1aa8c",
  storageBucket: "clone-1aa8c.appspot.com", // <-- verify in Firebase console
  messagingSenderId: "188774810795",
  appId: "1:188774810795:web:e588d5d6ed89e6a0bc63ee",
  measurementId: "G-SRTVGJ9L7S"
};

// Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

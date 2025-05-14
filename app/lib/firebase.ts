// app/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj3b0QBpMtMj5RMS735vjiS0Dvb_R6Oc8",
  authDomain: "posturous-b52a9.firebaseapp.com",
  projectId: "posturous-b52a9",
  storageBucket: "posturous-b52a9.firebasestorage.app",
  messagingSenderId: "87246791949",
  appId: "1:87246791949:web:ef4e370cd2a390aab57c44",
  measurementId: "G-JW7ZGW580D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

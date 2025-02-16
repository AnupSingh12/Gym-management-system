import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpXVVq7ik7t7wywcuUqqZrl4HGnnb1Plc",
    authDomain: "gym-management-system-c6f73.firebaseapp.com",
    projectId: "gym-management-system-c6f73",
    storageBucket: "gym-management-system-c6f73.firebasestorage.app",
    messagingSenderId: "314378890510",
    appId: "1:314378890510:web:a711bfbcd995085fff3b5f",
    measurementId: "G-NJRTPT5EEV"
  };

 export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
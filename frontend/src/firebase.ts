import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Substitua os valores abaixo pelos dados do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDsevUqlpesFgtGg28mmxvosnDrDL13S8",
  authDomain: "declaracao-67269.firebaseapp.com",
  projectId: "declaracao-67269",
  storageBucket: "declaracao-67269.firebasestorage.app",
  messagingSenderId: "950613980854",
  appId: "1:950613980854:web:75775c5fc6537cc5f7d817",
  measurementId: "G-G1PJVM7ZP6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
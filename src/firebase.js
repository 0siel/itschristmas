// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXzV2gdLqnpJtd2zt4h0tqv99BWwzA-CE",
  authDomain: "itschristmas.firebaseapp.com",
  projectId: "itschristmas",
  storageBucket: "itschristmas.firebasestorage.app",
  messagingSenderId: "750736207282",
  appId: "1:750736207282:web:a3971d9c986c054a0508ab",
  measurementId: "G-42NDCHFQ50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
export const db = getFirestore(app);

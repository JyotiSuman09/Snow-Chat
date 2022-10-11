// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMOTGZHtS1_7mFOUDWCgMN3yCutRzPrM",
  authDomain: "snow-chat-c4bfe.firebaseapp.com",
  projectId: "snow-chat-c4bfe",
  storageBucket: "snow-chat-c4bfe.appspot.com",
  messagingSenderId: "762500831493",
  appId: "1:762500831493:web:77c27429c85a89def7ff6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
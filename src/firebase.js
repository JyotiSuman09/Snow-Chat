// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXoqPppRdL8_MGY8-GMFJcC1HgUnaRLiE",
  authDomain: "chat-app-6c240.firebaseapp.com",
  projectId: "chat-app-6c240",
  storageBucket: "chat-app-6c240.appspot.com",
  messagingSenderId: "948423127033",
  appId: "1:948423127033:web:9505a704dbd663109a9728"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
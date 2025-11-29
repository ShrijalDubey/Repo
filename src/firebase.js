import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASEHyl71bvXub2Ut-crEY5p66ZtvnD-Ys",
  authDomain: "repo-9fcb3.firebaseapp.com",
  projectId: "repo-9fcb3",
  storageBucket: "repo-9fcb3.firebasestorage.app",
  messagingSenderId: "268558013403",
  appId: "1:268558013403:web:eb4a99342970a9ec874dfe",
  measurementId: "G-44Y6TVMPMN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

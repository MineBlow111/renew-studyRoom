import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "REPLACEME",
  authDomain: "testyappayappadoo.firebaseapp.com",
  projectId: "testyappayappadoo",
  storageBucket: "testyappayappadoo.firebasestorage.app",
  messagingSenderId: "357937408509",
  appId: "1:357937408509:web:5f877b227b75eb7bf79194"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const storage = getStorage();

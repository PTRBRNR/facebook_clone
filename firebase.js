import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBafwg3uLtTvGhCGnUWVi4fsIrEktJpH9Q",
  authDomain: "facebook-clone-ptr.firebaseapp.com",
  projectId: "facebook-clone-ptr",
  storageBucket: "facebook-clone-ptr.appspot.com",
  messagingSenderId: "124954926453",
  appId: "1:124954926453:web:617b62f404585de2ca073c",
  measurementId: "G-VS49TW468Z",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

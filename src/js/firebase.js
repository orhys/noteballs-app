// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHghtELKeakF0qaGnf5muf7V0OAZiMbmU",
  authDomain: "noteballs-app-d78f3.firebaseapp.com",
  projectId: "noteballs-app-d78f3",
  storageBucket: "noteballs-app-d78f3.appspot.com",
  messagingSenderId: "256270798922",
  appId: "1:256270798922:web:9d58605c21cc214e7756b3",
  measurementId: "G-996YNEH9EK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth };

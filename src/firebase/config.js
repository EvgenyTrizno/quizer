import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNCwWnlAjvvh1ULcDdVcfA-aWcfluHNfM",
  authDomain: "star-wars-5c4fc.firebaseapp.com",
  projectId: "star-wars-5c4fc",
  storageBucket: "star-wars-5c4fc.appspot.com",
  messagingSenderId: "384954473331",
  appId: "1:384954473331:web:d89965b725ddf3a9e34306",
  measurementId: "G-SHWFRX9KMZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }
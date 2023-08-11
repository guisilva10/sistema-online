// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi3LDvvIiaQwNVJ_IiZDukz9MShUpwNR8",
  authDomain: "sistema-on-f6ca8.firebaseapp.com",
  projectId: "sistema-on-f6ca8",
  storageBucket: "sistema-on-f6ca8.appspot.com",
  messagingSenderId: "23306593002",
  appId: "1:23306593002:web:1565d97edb532d91266d93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
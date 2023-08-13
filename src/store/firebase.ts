import {  initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

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
const firebase = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebase);
const storage = getStorage(firebase);

export {
  firebase,
  db,
  auth,
  storage,
  signInWithEmailAndPassword,
  signOut,
  collection,
  addDoc,
  doc,
  getDoc,
  getDownloadURL,
  ref,
  uploadBytesResumable,
  query,
  where
}
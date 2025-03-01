// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore,collection,addDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjU2BjrrhpjQYEWxKN6ozdl3hA7dLvGNA",
  authDomain: "kanban-board-f1d35.firebaseapp.com",
  projectId: "kanban-board-f1d35",
  storageBucket: "kanban-board-f1d35.firebasestorage.app",
  messagingSenderId: "35060570392",
  appId: "1:35060570392:web:78d30313fa90e7c13fe66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)

export {db,collection,addDoc}
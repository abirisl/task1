// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGd8ST2ZD04ceXuJ1oIN7zr15Dai-6jsE",
  authDomain: "task1-68d19.firebaseapp.com",
  projectId: "task1-68d19",
  storageBucket: "task1-68d19.appspot.com",
  messagingSenderId: "128314670215",
  appId: "1:128314670215:web:1148a9be0b99ceec728c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

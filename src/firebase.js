
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOVHJO8975hrzGfrtTskHjfu2eW18GJaQ",
  authDomain: "expense-app-64ad9.firebaseapp.com",
  projectId: "expense-app-64ad9",
  storageBucket: "expense-app-64ad9.appspot.com",
  messagingSenderId: "811198447497",
  appId: "1:811198447497:web:dc8406174c9e141bd7ab58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
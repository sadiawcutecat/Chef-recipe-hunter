// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQlxy4qPtDsheCAGIr9o-NbbbQhXO1xHY",
  authDomain: "b710-chef-recipe-hunter.firebaseapp.com",
  projectId: "b710-chef-recipe-hunter",
  storageBucket: "b710-chef-recipe-hunter.appspot.com",
  messagingSenderId: "450284452587",
  appId: "1:450284452587:web:a48f344340be8e637c9cae"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;




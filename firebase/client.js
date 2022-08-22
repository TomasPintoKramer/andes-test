// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEh1yBEAeyXUiPqlHiLjqglqee-UML2QU",
  authDomain: "heyandes-14714.firebaseapp.com",
  projectId: "heyandes-14714",
  storageBucket: "heyandes-14714.appspot.com",
  messagingSenderId: "1095347485504",
  appId: "1:1095347485504:web:591dc99012be7c925458a5",
  measurementId: "G-BNNK08W4EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

// module.exports=db;
export default db;

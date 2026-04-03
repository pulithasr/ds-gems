import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbLeO7zhPSPGK7ZUCuWeHqm3waWYy-T40",
  authDomain: "ds-gems-4dbb1.firebaseapp.com",
  databaseURL: "https://ds-gems-4dbb1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ds-gems-4dbb1",
  storageBucket: "ds-gems-4dbb1.firebasestorage.app",
  messagingSenderId: "223993211805",
  appId: "1:223993211805:web:fee9fd0d4708926d7a5d74",
  measurementId: "G-BDD3YJRZQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
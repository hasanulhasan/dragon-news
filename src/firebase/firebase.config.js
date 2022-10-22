// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0cisHlLQlcDOC_AwxmOY05enP2qjWw6U",
  authDomain: "dragon-news-d8f1c.firebaseapp.com",
  projectId: "dragon-news-d8f1c",
  storageBucket: "dragon-news-d8f1c.appspot.com",
  messagingSenderId: "575035330408",
  appId: "1:575035330408:web:9f847ac1e0fe175fc810dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
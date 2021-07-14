import firebase from "firebase"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCBtVTY4mIg-0oEtS2D-ceM8zVtjjK69bI",
  authDomain: "ecom-challenge-b60f0.firebaseapp.com",
  projectId: "ecom-challenge-b60f0",
  storageBucket: "ecom-challenge-b60f0.appspot.com",
  messagingSenderId: "464628231238",
  appId: "1:464628231238:web:04a37afac318561fb1ae47",
  measurementId: "G-99L5W8Y39L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBZRR8HjHa4BOulWjCtj3e9oNLKYOFdEEw",
  authDomain: "todo-advance.firebaseapp.com",
  databaseURL: "https://todo-advance.firebaseio.com",
  projectId: "todo-advance",
  storageBucket: "todo-advance.appspot.com",
  messagingSenderId: "815710979446",
  appId: "1:815710979446:web:8cfae5d6267e18ff432657",
  measurementId: "G-PKF3JBT93N",
});

const db = firebase.firestore();

export default db;
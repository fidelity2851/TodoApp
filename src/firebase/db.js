import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2ookg1YSse7M71Bkmd-Eu9WwRELd9a6k",
  authDomain: "todoapp-ad828.firebaseapp.com",
  databaseURL: "https://todoapp-ad828-default-rtdb.firebaseio.com/",
  projectId: "todoapp-ad828",
  storageBucket: "todoapp-ad828.appspot.com",
  messagingSenderId: "760128773341",
  appId: "1:760128773341:web:d22c8c0900835a25f00f34"
};
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();

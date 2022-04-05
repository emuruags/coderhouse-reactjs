// import * as firebase from 'firebase';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSnTgMj5wXpsYtJrEGxu2tkYwFiWcJyUA",
  authDomain: "coderhouse-reactjs-ecommerce.firebaseapp.com",
  projectId: "coderhouse-reactjs-ecommerce",
  storageBucket: "coderhouse-reactjs-ecommerce.appspot.com",
  messagingSenderId: "545453854318",
  appId: "1:545453854318:web:88b86e627a85789a94607f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}

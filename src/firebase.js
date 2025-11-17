// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7MfXex-AG3rJzlXiM2D_CGp3P7zPujLw",
  authDomain: "backendlessproject-141d5.firebaseapp.com",
  projectId: "backendlessproject-141d5",
  storageBucket: "backendlessproject-141d5.firebasestorage.app",
  messagingSenderId: "2165308151",
  appId: "1:2165308151:web:536950e60db06e2fcdf1f2",
  databaseURL: "https://backendlessproject-141d5-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Firestore (for chat messages)
export const db = getFirestore(app);*/


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7MfXex-AG3rJzlXiM2D_CGp3P7zPujLw",
  authDomain: "backendlessproject-141d5.firebaseapp.com",
  databaseURL: "https://backendlessproject-141d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "backendlessproject-141d5",
  storageBucket: "backendlessproject-141d5.firebasestorage.app",
  messagingSenderId: "2165308151",
  appId: "1:2165308151:web:536950e60db06e2fcdf1f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(app);




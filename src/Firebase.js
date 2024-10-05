// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOGX4nMdhr6Vc0Zu9V8NX-NJP5Np3hCOc",
  authDomain: "my-app-27741.firebaseapp.com",
  projectId: "my-app-27741",
  storageBucket: "my-app-27741.appspot.com",
  messagingSenderId: "327416564725",
  appId: "1:327416564725:web:ca68f07a19c9a1f7882ebc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;

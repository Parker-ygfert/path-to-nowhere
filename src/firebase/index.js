// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const env = import.meta.env

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: 'path-to-nowhere-b1391.firebaseapp.com',
  projectId: 'path-to-nowhere-b1391',
  storageBucket: 'path-to-nowhere-b1391.appspot.com',
  messagingSenderId: env.VITE_MESSAGE_SNEDER_ID,
  appId: env.VITE_APP_ID,
  measurementId: env.VITE_MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db }

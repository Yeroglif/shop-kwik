// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINSENDERID,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
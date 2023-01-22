// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING,
  appId:process.env.REACT_APP_APPID,
  measurementId:process.env.REACT_APP_MEASUREMENT
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth=getAuth(app);
let provider=new GoogleAuthProvider(auth);
let db=getFirestore(app);
let storage=getStorage(app);

export {auth, provider, db , storage}
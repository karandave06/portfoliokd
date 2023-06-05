import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBhLaiM-gNPWImVeJRRe3F5frhdPiiBvXM",
    authDomain: "karan-portfolio-d770e.firebaseapp.com",
    projectId: "karan-portfolio-d770e",
    storageBucket: "karan-portfolio-d770e.appspot.com",
    messagingSenderId: "665217638323",
    appId: "1:665217638323:web:0078561c87ae1211caf5c6",
    measurementId: "G-JERF1HLWDM"
  };

    export const app = initializeApp(firebaseConfig);

     const db = getFirestore();

     export default db
    
 
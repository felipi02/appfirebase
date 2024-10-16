
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDg6bPFN3UwZX4W7WDYIHE9cycGpI8A8rk",
    authDomain: "appbancodedados-7a20e.firebaseapp.com",
    projectId: "appbancodedados-7a20e",
    storageBucket: "appbancodedados-7a20e.appspot.com",
    messagingSenderId: "883929220271",
    appId: "1:883929220271:web:99a80bb3b2451606d6805a",
    measurementId: "G-GPLP4264XS"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);


// Inicializa o Firestore
const db = getFirestore(app);
const auth = getAuth(app); // auth
export { db, auth };

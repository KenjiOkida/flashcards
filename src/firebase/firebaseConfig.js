import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0jFYFATjERf__xz6v9O7xMW-mBmKy-3Q",
    authDomain: "mindbooster-7c98d.firebaseapp.com",
    projectId: "mindbooster-7c98d",
    storageBucket: "mindbooster-7c98d.appspot.com",
    messagingSenderId: "191594399888",
    appId: "1:191594399888:web:b193be095ccd0546b5b015"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = initializeFirestore(app, {experimentalForceLongPolling: true});
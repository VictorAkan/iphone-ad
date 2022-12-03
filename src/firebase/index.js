// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKU1gncDwiFKsD-YEegCMgk0whAKzeL6o",
    authDomain: "iphone-add.firebaseapp.com",
    projectId: "iphone-add",
    storageBucket: "iphone-add.appspot.com",
    messagingSenderId: "88236554703",
    appId: "1:88236554703:web:0b27428d53e8d5e351baba",
    measurementId: "G-DRPXZ0FHRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
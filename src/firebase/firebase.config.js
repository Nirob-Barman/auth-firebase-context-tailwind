// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL-aVe0fVsNLx2_CIGJox_0fQPwrWBzoE",
    authDomain: "auth-firebase-context-ta-5ff2c.firebaseapp.com",
    projectId: "auth-firebase-context-ta-5ff2c",
    storageBucket: "auth-firebase-context-ta-5ff2c.appspot.com",
    messagingSenderId: "645038054901",
    appId: "1:645038054901:web:567a28cfa07e4133dbd4bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
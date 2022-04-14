// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9NzYNq5FsKxwsIZ1mzqComXRay0_N6-s",
    authDomain: "genius-car-service-2554d.firebaseapp.com",
    projectId: "genius-car-service-2554d",
    storageBucket: "genius-car-service-2554d.appspot.com",
    messagingSenderId: "7627096205",
    appId: "1:7627096205:web:71490495607def966622c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

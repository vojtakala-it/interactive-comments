import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDB_BjtJT41oZ8EnMnS4wXACcpyApOZWm8",
    authDomain: "interactive-comments-e444d.firebaseapp.com",
    databaseURL: "https://interactive-comments-e444d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "interactive-comments-e444d",
    storageBucket: "interactive-comments-e444d.appspot.com",
    messagingSenderId: "356799377344",
    appId: "1:356799377344:web:54e59a7272168907576225",
    measurementId: "G-33VRTN44ZJ"
};

const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;

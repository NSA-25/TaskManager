import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCStskskRqlmtCYDIvOOhGohPreaPmepxo",
    authDomain: "task-manager-dcc11.firebaseapp.com",
    projectId: "task-manager-dcc11",
    storageBucket: "task-manager-dcc11.appspot.com",
    messagingSenderId: "763213306982",
    appId: "1:763213306982:web:7a1d677e446f4018a321a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export { auth as default};
export {}

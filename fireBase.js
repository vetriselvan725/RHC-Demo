import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firesstore";


const firebaseConfig = {
    apiKey: "AIzaSyB_IAtrtd9FLtVtaGbHRAU4-u56r5Z37-4",
    authDomain: "task-18253.firebaseapp.com",
    projectId: "task-18253",
    storageBucket: "task-18253.firebasestorage.app",
    messagingSenderId: "824991349205",
    appId: "1:824991349205:web:e0ba9ee219ef0d4bb3a55c",
    measurementId: "G-PVEPTYBX7P"
  };

const app= firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

export default app;
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyBKBHLLUqC9dOyqZ-o7bLS-0_LSXJYHCvk",
    authDomain: "react-app-curse-92732.firebaseapp.com",
    projectId: "react-app-curse-92732",
    storageBucket: "react-app-curse-92732.appspot.com",
    messagingSenderId: "52377741337",
    appId: "1:52377741337:web:e20a79b37af0a8d65c2288"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAthProvider,
    firebase
}

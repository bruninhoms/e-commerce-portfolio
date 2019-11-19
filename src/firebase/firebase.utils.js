import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD9snnM1QU-_H1-MU2XiPDaajrl41-Hez4",
        authDomain: "e-commerce-portfolio-5f04c.firebaseapp.com",
        databaseURL: "https://e-commerce-portfolio-5f04c.firebaseio.com",
        projectId: "e-commerce-portfolio-5f04c",
        storageBucket: "e-commerce-portfolio-5f04c.appspot.com",
        messagingSenderId: "1012719812308",
        appId: "1:1012719812308:web:9cd2a67dedde0dc7498541",
        measurementId: "G-9KCFCHMFM2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
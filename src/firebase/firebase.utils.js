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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch(error){
                        console.log('Error creating user', error.message);
                }
        }

        return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
        const collectionRef = firestore.collection(collectionKey);

        const batch = firestore.batch();
        objectsToAdd.forEach(obj => {
                const newDocRef = collectionRef.doc();
                batch.set(newDocRef, obj);
        });

        return await batch.commit();

};

export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map(doc => {
                const {title, items} = doc.data();

                return {
                        routeName: encodeURI(title.toLowerCase()),
                        id: doc.id,
                        title,
                        items
                }
        });

        return transformedCollection.reduce((accumulator, collection) => {
                accumulator[collection.title.toLowerCase()] = collection;
                return accumulator;
        } , {});
};

export const getCurrentUser = () => {
        return new Promise((resolve, reject) => {
                const unsubscribe = auth.onAuthStateChanged(userAuth => {
                        unsubscribe();
                        resolve(userAuth);
                }, reject)
        })
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();

providerGoogle.setCustomParameters({ prompt: 'select_account' });
providerFacebook.setCustomParameters({ prompt: 'select_account' });

export default firebase;
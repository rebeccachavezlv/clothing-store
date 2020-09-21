import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9lTB16v52xn8q1-KAW0jXUtUMn5I0YdI",
    authDomain: "clothing-store-62d84.firebaseapp.com",
    databaseURL: "https://clothing-store-62d84.firebaseio.com",
    projectId: "clothing-store-62d84",
    storageBucket: "clothing-store-62d84.appspot.com",
    messagingSenderId: "691143386915",
    appId: "1:691143386915:web:a9aad743a677da2b5c4e96",
    measurementId: "G-TB9C50NWV3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
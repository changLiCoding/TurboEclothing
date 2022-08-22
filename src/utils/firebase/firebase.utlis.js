import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyANGCttKiTfV7Lp03QmVDyVirYpFbFzK30",
    authDomain: "turboeclothingdb.firebaseapp.com",
    projectId: "turboeclothingdb",
    storageBucket: "turboeclothingdb.appspot.com",
    messagingSenderId: "576089958110",
    appId: "1:576089958110:web:763b1a9ca53a29c37b444f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
}
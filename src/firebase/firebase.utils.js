// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBl2laN53gN5sniSRQxfKDbVUy_qmp5Dbs',
  authDomain: 'crwn-db-3e43a.firebaseapp.com',
  projectId: 'crwn-db-3e43a',
  storageBucket: 'crwn-db-3e43a.appspot.com',
  messagingSenderId: '359183218194',
  appId: '1:359183218194:web:ba5a640f448ec6ffcf0acb',
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Get the Firestore instance
const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth.uid);
  const usersCollectionRef = collection(db, 'users');

  const userRef = doc(db, `users/${userAuth.uid}`);
  const userSnap = await getDoc(userRef);


  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    const newUser = {
      displayName,
      email,
      createdAt,
      ...additionalData,
    };

    try {
      await setDoc(doc(usersCollectionRef, userAuth.uid), newUser);
      console.log('Saved user to DB. User: ', newUser);
    } catch (error) {
      console.error('Error creating user ', error);
    }
  }

  return onSnapshot.bind(null, userRef);
};

export default app;

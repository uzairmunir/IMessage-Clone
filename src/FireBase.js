import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4bBavvHZi3fkdHTlhLyLLMfQQkvT58mc',
  authDomain: 'imessage-clone-4b90c.firebaseapp.com',
  projectId: 'imessage-clone-4b90c',
  storageBucket: 'imessage-clone-4b90c.appspot.com',
  messagingSenderId: '71386801069',
  appId: '1:71386801069:web:6161df803040069e2cf724',
  measurementId: 'G-L6VDBFQWEQ',
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

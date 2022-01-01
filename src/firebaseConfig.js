import {initializeApp} from 'firebase/app';
import {
    getFirestore,
    collection
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDYrCq0JVkyVwo9xkwuq_1EKLExu72wAw",
    authDomain: "cart-b1b76.firebaseapp.com",
    projectId: "cart-b1b76",
    storageBucket: "cart-b1b76.appspot.com",
    messagingSenderId: "254473861866",
    appId: "1:254473861866:web:d85c770ed27ad8402a7593"
  };

initializeApp(firebaseConfig);

const db =getFirestore();

export default db;
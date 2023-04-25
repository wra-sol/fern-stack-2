import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: ""
  projectId: "fern",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const firebase = initializeApp (firebaseConfig);
const auth = getAuth(firebase);
const db = getDatabase(firebase);

export {firebase, auth, db};

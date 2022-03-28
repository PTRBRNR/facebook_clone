import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkoIwqxj5MukNH36pvDTcSkzwcmcDNkWE",
  authDomain: "facebook-clone-ptr-20936.firebaseapp.com",
  projectId: "facebook-clone-ptr-20936",
  storageBucket: "facebook-clone-ptr-20936.appspot.com",
  messagingSenderId: "559512847326",
  appId: "1:559512847326:web:efeab9c012d915132f134f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };

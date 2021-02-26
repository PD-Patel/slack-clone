// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCL-3P6cAjsYVamKvsnrLkevqqY9hlVbFk",
  authDomain: "slack-clone-9715b.firebaseapp.com",
  projectId: "slack-clone-9715b",
  storageBucket: "slack-clone-9715b.appspot.com",
  messagingSenderId: "466721214449",
  appId: "1:466721214449:web:ac0e11eed64961aff4be50",
  measurementId: "G-K63KM4JYNS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, storage };
export default db;

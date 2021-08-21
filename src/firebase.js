import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpums1QXZ1bsrXHDMxbkyJ6Tko4oIYy6s",
  authDomain: "netflix-clone-aba8f.firebaseapp.com",
  projectId: "netflix-clone-aba8f",
  storageBucket: "netflix-clone-aba8f.appspot.com",
  messagingSenderId: "840891863785",
  appId: "1:840891863785:web:44cf3a46d80b7cdad9d678",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDOxH_AzrKb43LC_nhswSEyiRr7KXRq1nU",
  authDomain: "facebook-95d1b.firebaseapp.com",
  projectId: "facebook-95d1b",
  storageBucket: "facebook-95d1b.appspot.com",
  messagingSenderId: "814914430234",
  appId: "1:814914430234:web:b50cc2c19254e8bceef8a3",
  measurementId: "G-7ZMSHNMG27"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3fmN-Y5n7N61eKyjFXPvqkiXs0pJCJSs",
  authDomain: "fir-react-15cb5.firebaseapp.com",
  projectId: "fir-react-15cb5",
  storageBucket: "fir-react-15cb5.appspot.com",
  messagingSenderId: "241516147958",
  appId: "1:241516147958:web:62ae7722db44f597eaa8d7"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
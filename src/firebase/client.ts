// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA38Y5YbMsddBO5BKNNc5jq9feEFU_hjec",

  authDomain: "ofertio.firebaseapp.com",

  projectId: "ofertio",

  storageBucket: "ofertio.appspot.com",

  messagingSenderId: "421007077404",

  appId: "1:421007077404:web:33b916214582b0aef8afd9"

};


// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
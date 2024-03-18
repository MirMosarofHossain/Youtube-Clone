// import firebase from 'firebase/app'
// import 'firebase/auth'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0wdkaS5dB-qx4G_QX4ZYj9ce5iQj2XzI",
    authDomain: "youtub-e-clone-m7.firebaseapp.com",
    projectId: "youtub-e-clone-m7",
    storageBucket: "youtub-e-clone-m7.appspot.com",
    messagingSenderId: "185695685143",
    appId: "1:185695685143:web:55fa8565718d847a052a52"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth();
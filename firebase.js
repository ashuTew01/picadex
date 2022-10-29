// import { getFirestore } from "firebase/firestore";
// import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyBpcfmjxEu1EueWJC9oCfg9baRBYThF3Gc",
    authDomain: "picadex-4b110.firebaseapp.com",
    projectId: "picadex-4b110",
    storageBucket: "picadex-4b110.appspot.com",
    messagingSenderId: "679174596746",
    appId: "1:679174596746:web:5d89d6766d20f9ae5ce573",
    measurementId: "G-PMBRGBXLS5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();
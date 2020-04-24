/* eslint-disable */
import firebase from 'firebase';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDsF2cfFXVVsEqASYJcAty_XLRaOjJ_nv8",
    authDomain: "quarantine-days-25ba6.firebaseapp.com",
    databaseURL: "https://quarantine-days-25ba6.firebaseio.com",
    projectId: "quarantine-days-25ba6",
    storageBucket: "quarantine-days-25ba6.appspot.com",
    messagingSenderId: "1094397626964",
    appId: "1:1094397626964:web:9de96d9f498a0955f8bbc1",
    measurementId: "G-2YLYEV88BE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyALfCf9JOkDrA-FrHrSvvummpqjXI9QNDY",
    authDomain: "ingredient-cfs.firebaseapp.com",
    databaseURL: "https://ingredient-cfs.firebaseio.com",
    projectId: "ingredient-cfs",
    storageBucket: "ingredient-cfs.appspot.com",
    messagingSenderId: "1008342103491",
    appId: "1:1008342103491:web:550fed1e9dfa1abf9af976"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
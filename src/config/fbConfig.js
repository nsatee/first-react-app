import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGTwSIVn2to7mjscIbGxxBBas_spXaKc0",
    authDomain: "net-ninja-marioplan-d67bb.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-d67bb.firebaseio.com",
    projectId: "net-ninja-marioplan-d67bb",
    storageBucket: "net-ninja-marioplan-d67bb.appspot.com",
    messagingSenderId: "195136094434"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
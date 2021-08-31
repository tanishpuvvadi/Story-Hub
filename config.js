import * as firebase from 'firebase';
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyBMycq5wS5Y6T5H0MyWtGjWONu3bClI5c8",
    authDomain: "story-hub-d126e.firebaseapp.com",
    projectId: "story-hub-d126e",
    storageBucket: "story-hub-d126e.appspot.com",
    messagingSenderId: "144361513035",
    appId: "1:144361513035:web:6be58f7b64c8a2e30eedce"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

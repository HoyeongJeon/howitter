import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCSZLHmuXn4ovDAbZ88kS6n-z-FJIIFXJI",
    authDomain: "howitter.firebaseapp.com",
    projectId: "howitter",
    storageBucket: "howitter.appspot.com",
    messagingSenderId: "724640637069",
    appId: "1:724640637069:web:9298070ba353caf72242c4"
};

export default firebase.initializeApp(firebaseConfig);
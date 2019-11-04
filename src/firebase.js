import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC4TJloc8plveFCpySGRFAc9STV6mgs05s",
    authDomain: "todoist-tut-7540c.firebaseapp.com",
    databaseURL: "https://todoist-tut-7540c.firebaseio.com",
    projectId: "todoist-tut-7540c",
    storageBucket: "todoist-tut-7540c.appspot.com",
    messagingSenderId: "208112583755",
    appId: "1:208112583755:web:35c1999c1b2e3d7c42b9ce"
});

export {firebaseConfig as firebase };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyCGNKnOn6wuCZNpSpy33EsbX_UDRSBdwcU",
    authDomain: "barter-32042.firebaseapp.com",
    databaseURL: "https://barter-32042.firebaseio.com",
    projectId: "barter-32042",
    storageBucket: "barter-32042.appspot.com",
    messagingSenderId: "881993137953",
    appId: "1:881993137953:web:b9b2a4429d1671ef258860",
    measurementId: "G-CKZJ4KSWGQ"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
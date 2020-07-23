import * as firebase from  'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAZHZXBnPNenb6NFC8r5Wpa3xExSeeU4EU",
    authDomain: "react-discussion-board-c197e.firebaseapp.com",
    databaseURL: "https://react-discussion-board-c197e.firebaseio.com",
    projectId: "react-discussion-board-c197e",
    storageBucket: "react-discussion-board-c197e.appspot.com",
    messagingSenderId: "81193505685",
    appId: "1:81193505685:web:6cdee706c315ab94bb1c9c"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

// export DataBase reference
export default fireDb.database().ref();
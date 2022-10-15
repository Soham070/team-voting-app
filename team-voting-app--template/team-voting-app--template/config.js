import firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyAdTZpeHzcgPHmydFseytmuPtRFRwTcqFQ",
  authDomain: "voting-app-60dd0.firebaseapp.com",
  databaseURL: "https://voting-app-60dd0-default-rtdb.firebaseio.com",
  projectId: "voting-app-60dd0",
  storageBucket: "voting-app-60dd0.appspot.com",
  messagingSenderId: "609638859504",
  appId: "1:609638859504:web:c08fb82510dd05535c7835"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
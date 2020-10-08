import * as firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCTSJYwVm4t1AFbdsiUHDQVjcRx07HjaTI",
    authDomain: "todo-app-by-react.firebaseapp.com",
    databaseURL: "https://todo-app-by-react.firebaseio.com",
    projectId: "todo-app-by-react",
    storageBucket: "todo-app-by-react.appspot.com",
    messagingSenderId: "784680134048",
    appId: "1:784680134048:web:3c4824674782304c5c30c5"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7iS-W13NU4fNYnlvnVue0DJaWfDR-RsU",
  authDomain: "the-sad-project.firebaseapp.com",
  databaseURL: "https://the-sad-project.firebaseio.com",
  projectId: "the-sad-project",
  storageBucket: "the-sad-project.appspot.com",
  messagingSenderId: "809619850750",
  appId: "1:809619850750:web:b8e4a3ccbbb84131202caf",
  measurementId: "G-H2JX2J50CC",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

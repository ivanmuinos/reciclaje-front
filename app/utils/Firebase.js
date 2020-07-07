import firebase from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyCT4bP1xDv-y1mjxddJybBgRCNOT7UmilM",
  authDomain: "reciclaje-faa5c.firebaseapp.com",
  databaseURL: "https://reciclaje-faa5c.firebaseio.com",
  projectId: "reciclaje-faa5c",
  storageBucket: "reciclaje-faa5c.appspot.com",
  messagingSenderId: "973077624854",
  appId: "1:973077624854:web:352e609e0aca3d182d9d37",
  measurementId: "G-K9SMF4HG2Y"
  
};

  export const firebaseApp = firebase.initializeApp(firebaseConfig);


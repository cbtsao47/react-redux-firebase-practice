import firebase from "firebase/app"; //import just app functionality
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0l6DMlMbZqwNH4gfuyHFcg_oRWio-rs0",
  authDomain: "net-ninja-marioplan-3eef5.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-3eef5.firebaseio.com",
  projectId: "net-ninja-marioplan-3eef5",
  storageBucket: "",
  messagingSenderId: "456435054004"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true }); // set to true to make sure it works

export default firebase;

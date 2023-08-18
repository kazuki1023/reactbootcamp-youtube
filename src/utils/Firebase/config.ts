import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCm8ZVPFvB4O5YVyNqA-16zWrRpbxd0RVQ",
  authDomain: "react-bootcamp-78947.firebaseapp.com",
  projectId: "react-bootcamp-78947",
  storageBucket: "react-bootcamp-78947.appspot.com",
  messagingSenderId: "236750478038",
  appId: "1:236750478038:web:fc2e6a6e2f856cae1c4777",
};
firebase.initializeApp(firebaseConfig);
export const fireAuth = firebase.auth();
export const storage = firebase.storage();

// firestoreのfirebaseモジュール
export const firestore = firebase.firestore();

export default firebase;
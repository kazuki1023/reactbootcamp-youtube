import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBz8Biwxhal2nW1iBQTqI1aqkBmaZ7zpPw",
  authDomain: "reactbootcamp-f2155.firebaseapp.com",
  projectId: "reactbootcamp-f2155",
  storageBucket: "reactbootcamp-f2155.appspot.com",
  messagingSenderId: "77915777042",
  appId: "1:77915777042:web:45a4f0295dc22411d610cb",
  measurementId: "G-ZF7HPCC89L"
};

// firebaseパッケージをAPI Keyで初期化
// Firebaseコンソールでさksウエイ他アプリとReactを紐づける処理
firebase.initializeApp(firebaseConfig);

// 認証用のfirebaseモジュール
export const fireAuth = firebase.auth();

// ストレージ用のfirebaseモジュール
export const storage = firebase.storage();

// 初期化済みのfirebaseパッケージを確実に使用するためのexport defaultでfirebaseパッケージをexport
export default firebase;

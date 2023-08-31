import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASkoO0p_KLxVhIF5eAaL2w7BJlzdKWOi4",
  authDomain: "newslatter-4d8fa.firebaseapp.com",
  projectId: "newslatter-4d8fa",
  storageBucket: "newslatter-4d8fa.appspot.com",
  messagingSenderId: "402823048662",
  appId: "1:402823048662:web:676e31bdff51d16b100877",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

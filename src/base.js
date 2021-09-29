import * as firebase from "firebase/app";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBYxudpXLAB8sfKXsrW-3pL1AbxWJHcN-0",
//   authDomain: "frb-fls-example.firebaseapp.com",
//   databaseURL: "https://frb-fls-example.firebaseio.com",
//   projectId: "frb-fls-example",
//   storageBucket: "frb-fls-example.appspot.com",
//   messagingSenderId: "971492637412",
//   appId: "1:971492637412:web:7726a345b7189eacc74af1",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCgldcIJ3QOlAniQ0zMmHEj7PbNCqMWBo0",
  authDomain: "upload-file-306ad.firebaseapp.com",
  projectId: "upload-file-306ad",
  storageBucket: "upload-file-306ad.appspot.com",
  messagingSenderId: "915413354747",
  appId: "1:915413354747:web:81ef7fc9426fe1baebc85e",
  measurementId: "G-GCTXD9X27N",
};

export const app = firebase.initializeApp(firebaseConfig);

// ===================================================================
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCgldcIJ3QOlAniQ0zMmHEj7PbNCqMWBo0",
//   authDomain: "upload-file-306ad.firebaseapp.com",
//   projectId: "upload-file-306ad",
//   storageBucket: "upload-file-306ad.appspot.com",
//   messagingSenderId: "915413354747",
//   appId: "1:915413354747:web:81ef7fc9426fe1baebc85e",
//   measurementId: "G-GCTXD9X27N",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

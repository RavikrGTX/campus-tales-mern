// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thepharmacast-9fea2.firebaseapp.com",
  projectId: "thepharmacast-9fea2",
  storageBucket: "thepharmacast-9fea2.appspot.com",
  messagingSenderId: "391065824355",
  appId: "1:391065824355:web:7e4ea94f6b0dbd1f96dc56",
//   measurementId: "G-VK8VRKVK77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
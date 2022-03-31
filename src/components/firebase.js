
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBIphwvTGIXYuE5eccNyyM0Wv6jLHvJmE",
  authDomain: "duolate-e7fbb.firebaseapp.com",
  projectId: "duolate-e7fbb",
  storageBucket: "duolate-e7fbb.appspot.com",
  messagingSenderId: "348517205689",
  appId: "1:348517205689:web:3217dc1a111cd2b89a3d68",
  measurementId: "G-S3XG1K0QTZ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
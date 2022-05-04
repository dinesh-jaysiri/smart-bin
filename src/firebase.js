import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXgUsU3PpGER7knX9MpFd5e5mygDzTmtM",
  authDomain: "smart-waste-bin-5e906.firebaseapp.com",
  databaseURL: "https://smart-waste-bin-5e906-default-rtdb.firebaseio.com",
  projectId: "smart-waste-bin-5e906",
  storageBucket: "smart-waste-bin-5e906.appspot.com",
  messagingSenderId: "674838861512",
  appId: "1:674838861512:web:5e92ba778a860c237377fd",
  measurementId: "G-T9L0E7Z5S7",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);


// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set, get, push, onValue, update, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCrMV79R5waYLz8FCiIiVBgqssdZhho7zI",
  authDomain: "new-d7ab5.firebaseapp.com",
  databaseURL: "https://new-d7ab5-default-rtdb.firebaseio.com",
  projectId: "new-d7ab5",
  storageBucket: "new-d7ab5.firebasestorage.app",
  messagingSenderId: "479486644815",
  appId: "1:479486644815:web:f832d85aa5931ca603503a",
  measurementId: "G-P26Z3Y4PV3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, ref, set, get, push, onValue, update, remove };

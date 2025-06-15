
import "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcR5RnGuTCMUXuGTbVqdj_1pcJ1n77kTk",
  authDomain: "duty-table-c6d39.firebaseapp.com",
  projectId: "duty-table-c6d39",
  storageBucket: "duty-table-c6d39.appspot.com",
  messagingSenderId: "411618930133",
  appId: "1:411618930133:web:e2f36c58e848ebf5521fa5"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();

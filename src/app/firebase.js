import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2yGL2_6PhRmL7j-8QyAQlvMk8ZeBORwc",
    authDomain: "discordclone-d493b.firebaseapp.com",
    databaseURL: "https://discordclone-d493b.firebaseio.com",
    projectId: "discordclone-d493b",
    storageBucket: "discordclone-d493b.appspot.com",
    messagingSenderId: "532558673029",
    appId: "1:532558673029:web:98cabd4ba47ef4562665ec"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
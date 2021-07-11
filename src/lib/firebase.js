import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// here is where we import the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAb7YcIlhDLE8kQt8MqL8m_E-LyOJtcBPs",
  authDomain: "instagram-clone-fb42d.firebaseapp.com",
  projectId: "instagram-clone-fb42d",
  storageBucket: "instagram-clone-fb42d.appspot.com",
  messagingSenderId: "611960777556",
  appId: "1:611960777556:web:62d9ff7242bc3af05e76c1",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where we call the seed file, ONLY ONCE
// june 30, 2021: database seeded, removed code to avoid errors

export { firebase, FieldValue };

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9lYaPseUA2zCByKUMqHobl08PBypnC40",
  authDomain: "todoapp-3ccfb.firebaseapp.com",
  projectId: "todoapp-3ccfb",
  storageBucket: "todoapp-3ccfb.appspot.com",
  messagingSenderId: "861937966530",
  appId: "1:861937966530:web:ad9566781cd4b30a708a5b",
  measurementId: "G-B0CHD0R0DN",
}; 
const app = initializeApp(firebaseConfig); 
const auth = getAuth(); 

const register = async (email, password) => {
  const result = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;//u.e
      // ...
    })
    .catch((error) => {
      const errorCode = error.code; 
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return error;
    });

  return result;
};

const login = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth,email, password);
  return result.user;
};


export { register, login };

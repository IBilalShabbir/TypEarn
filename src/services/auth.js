// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import { socket } from "../utils/socket";

const firebaseConfig = {
  apiKey: "AIzaSyBhu-h7lQiRR90qhzBz_v4hw-Jt1Uz8tRU",
  authDomain: "typearn-web.firebaseapp.com",
  projectId: "typearn-web",
  storageBucket: "typearn-web.appspot.com",
  messagingSenderId: "651985784658",
  appId: "1:651985784658:web:e6ae7b5881ef3f4fe3f48b",
  measurementId: "G-Y934XL12C3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function googleLogin(setUser, setIsLogin) {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      socket.send("1" + " " + user?.email);
      setUser(user);
      setIsLogin(false);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("google error", errorCode, errorMessage, email, credential);
      // ...
    });
}

export function facebookLogin(setUser, setIsLogin) {
  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      socket.send("1" + " " + user?.email);
      setUser(user);
      setIsLogin(false);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log("facebook error", errorCode, errorMessage, email, credential);
    });
}

export function logout(setUser) {
  signOut(auth).then(() => {
    setUser(null);
    window.location.href = "/";
  });
}

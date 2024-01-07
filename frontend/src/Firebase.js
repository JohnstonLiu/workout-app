import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence } from "firebase/auth";
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyDk0O3hWhslWVM_b7lhSc6OOWQGefmozbk",
  authDomain: "workoutapp-410219.firebaseapp.com",
  projectId: "workoutapp-410219",
  storageBucket: "workoutapp-410219.appspot.com",
  messagingSenderId: "264471468477",
  appId: "1:264471468477:web:4252a521f68c3d3c411ad4",
  measurementId: "G-HCY8YT9VLM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
(async() => {
    setPersistence(auth, browserSessionPersistence);
})();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName;
        const user_id = result.user.uid;
        const email = result.user.email;
        const profilePic = result.user.profilePic;

        const user = { name: email };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    })
    .catch((error) => {
        console.log(error);
    });
};

const authenticateToken = (req, res, next) => {

}
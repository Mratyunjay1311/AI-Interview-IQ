
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-interview-iq-4a051.firebaseapp.com",
  projectId: "ai-interview-iq-4a051",
  storageBucket: "ai-interview-iq-4a051.firebasestorage.app",
  messagingSenderId: "347747073967",
  appId: "1:347747073967:web:c1d98f4d236d6a9a46395a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}

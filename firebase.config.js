import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBjNGSqPBUAZnjSqzzSglrxpFHnI8V0itY",
  authDomain: "fir-auth-3210a.firebaseapp.com",
  projectId: "fir-auth-3210a",
  storageBucket: "fir-auth-3210a.firebasestorage.app",
  messagingSenderId: "734529867092",
  appId: "1:734529867092:web:7415442fd06dd44ed94cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
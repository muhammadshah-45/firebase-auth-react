import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
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

// Google sign-in function  
const googleProvider = new GoogleAuthProvider();  

export const signInWithGoogle = async (e) => {  
  e.preventDefault()
  try {  
    const result = await signInWithPopup(auth, googleProvider);  
    const user = result.user;  
    console.log("User Info: ", user);  
    // Do something with the user info, like storing it in your state  
  } catch (error) {  
    console.error("Error during sign-in: ", error);  
    // Handle error (like showing a message to the user)  
  }  
}; 
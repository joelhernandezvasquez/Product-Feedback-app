import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () =>{
 try {
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
        const {displayName,email,photoURL,uid} = result.user;
     
        return{
            success:true,
            //User info
            displayName,
            email,
            photoURL,
            uid
        }
    } 
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            success:false,
            errorMessage
        }
    }
}


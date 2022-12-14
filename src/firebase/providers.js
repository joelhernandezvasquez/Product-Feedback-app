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

export const logInWithEmailAndPassword = async ({email,password}) =>{
    try{
      const result = await signInWithEmailAndPassword(FirebaseAuth,email,password);
      const {uid,email:userEmail,displayName,photoURL} = result.user;
      const userInfo = {
        uid,
        userEmail,
        displayName,
        photoURL
      }
      return{
        success:true,
          userInfo
      }
    }
    catch(err) {
        const errorMessage = err.message;
        return{
           success:false,
           errorMessage
        }
      
    }
}

export const registerUserEmail = async ({email,password,displayName}) =>{

  try{
     const result = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
      const {uid,photoURL} = result.user;

       // Updating the display name in firebase
    await updateProfile(FirebaseAuth.currentUser,{displayName});
  
     return{
      success:true,
      uid,
      email,
      displayName,
      photoURL
     }

  }
  catch(error){
       return{
        success:false,
        errorMessage:error.message
       }
  }
}


export const logoutFirebase = async () =>{
    return await FirebaseAuth.signOut();
  }


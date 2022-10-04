
import { async } from "@firebase/util";
import { signInWithGoogle,logInWithEmailAndPassword, registerUserEmail, logoutFirebase } from "../../firebase/providers";
import { login,checkingCredentials, logout } from "./authSlice";

export const startGoogleSignIn = () =>{
     return async (dispatch) =>{
        try{
           dispatch(checkingCredentials());

           const result = await signInWithGoogle();
            
           if(result.success){
            const userInfo = {
                uid:result.uid,
                displayName:result.displayName,
                email:result.email,
                photoURL:result.photoURL,
                errorMessage:null
            }
              dispatch(login(userInfo))
           }
        }
        catch(err){
            dispatch(logout(err))
        }
    }
}
export const startLoginWithEmailAndPassword = (email,password) =>{
    return async(dispatch) =>{
            
        dispatch(checkingCredentials())
            const result = await logInWithEmailAndPassword({email,password});
             console.log(result);
            if(!result.success)  return dispatch(logout(result))
              
             dispatch(login(result.userInfo))

    }
}

export const startCreatingUserWithEmailAndPassword = (email,password,displayName) =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());
        const {success,uid,photoURL,errorMessage}= await registerUserEmail({email,password,displayName})
        if(!success) return dispatch(logout({errorMessage}));

        dispatch(login({uid,email,displayName,photoURL}));
        
    }
}

export const startLoginOut = ()=>{
    return async(dispatch) =>{
        const result = logoutFirebase();
        dispatch(logout());
    }
}
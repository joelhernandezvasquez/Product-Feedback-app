
import { signInWithGoogle,logInWithEmailAndPassword } from "../../firebase/providers";
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
            if(!result.success) dispatch(logout(result))
              
             dispatch(login(result.userInfo))

    }
}
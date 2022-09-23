
import { signInWithGoogle } from "../../firebase/providers";
import { login,checkingCredentials } from "./authSlice";

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
        catch(err){}
    }
}
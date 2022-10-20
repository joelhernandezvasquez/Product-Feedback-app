
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadFeedbacks } from "../../helpers/loadsFeedback";
import { errorMessage, getFeedbacks } from "./feedbackSlice";



export const startLoadingFeedbacks = () =>{
  
    return async( dispatch) =>{
       // loading all the feedbacks from firestore to display in the front
       const result = await loadFeedbacks();
       
       if(!result) dispatch(errorMessage(result.message))
      
        dispatch(getFeedbacks(result.feedbacks))
        
    }
}
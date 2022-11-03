
import { collection, deleteDoc, doc, setDoc,getFirestore  } from "firebase/firestore/lite";
import { loadFeedbacks } from "../../helpers/loadsFeedback";
import { addNewFeedback, errorMessage, getFeedbacks, setSaving } from "./feedbackSlice";

export const startLoadingFeedbacks = () =>{
  
    return async( dispatch) =>{
       // loading all the feedbacks from firestore to display in the front
       const result = await loadFeedbacks();
       
       if(!result) dispatch(errorMessage(result.message))
      
        dispatch(getFeedbacks(result.feedbacks))
        
    }
}

export const startSavingFeedback = ({feedbackTitle,feedbackComment,category}) =>{
    return async (dispatch) =>{

      try{
          dispatch(setSaving());
          const db = getFirestore();
         const newDoc = doc(collection(db,`feedback`));

      const feedbackToFirestore = {
        title:feedbackTitle,
        category:category,
        detail:feedbackComment,
        vote:0,
        comments:[],
       status:'Planned'
      }
    
       await setDoc(newDoc,feedbackToFirestore,{merge:true});
       dispatch(addNewFeedback(feedbackToFirestore));
      }
      catch(error){
        console.log(error.errorMessage);
      }
       
    }
}
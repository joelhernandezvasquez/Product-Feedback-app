
import { collection, deleteDoc, doc, setDoc,getFirestore,} from "firebase/firestore/lite";
import {updateDoc } from 'firebase/firestore';
import { FirebaseDB } from "../../firebase/config";
import { loadFeedbacks } from "../../helpers/loadsFeedback";
import { addNewFeedback, errorMessage, getFeedbacks, setSaving, updateFeedback } from "./feedbackSlice";
import { getFeedback } from "../../helpers/getFeedback";

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

export const startPostingComment = ({feedbackId,post,commentId}) =>{
  
  return async (dispatch,getState) =>{
      
    try{
        dispatch(setSaving());
        const {feedbacks} = getState().feedback;
        const {displayName,photoURL,email} = getState().auth;
      
        const feedbackRef = doc(FirebaseDB,`feedback/${feedbackId}`);
        const feedback = getFeedback(feedbacks,feedbackId);

        const fireStoreComment = {
          id:commentId,
          userName:displayName,
          userEmail:email,
          photoURL,
          comment: post
        }
        const newFeedback = {
          id:feedback.id,
          status:feedback.status,
          title:feedback.title,
          detail:feedback.detail,
          vote:feedback.vote,
          category:feedback.category,
          comments:[...feedback.comments,fireStoreComment]
        }

        await setDoc(feedbackRef,{comments:[...feedback.comments,fireStoreComment]},{merge:true});
        dispatch(updateFeedback({feedbackId,newFeedback}));
        
     
      }
      catch(err){
        console.log(err);
      }
    }
}
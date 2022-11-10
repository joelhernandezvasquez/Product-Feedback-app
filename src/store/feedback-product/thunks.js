
import { collection, deleteDoc, doc, setDoc,getFirestore,addDoc} from "firebase/firestore/lite";
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
          const dbRef = collection(db,`feedback`);

      const feedbackToFirestore = {
        title:feedbackTitle,
        category:category,
        detail:feedbackComment,
        vote:0,
        comments:[],
       status:'Planned'
      }

      const resp = await addDoc(dbRef,feedbackToFirestore);
      feedbackToFirestore.id = resp.id
  
       dispatch(addNewFeedback(feedbackToFirestore));
      }
      catch(error){
        console.log(error.errorMessage);
      }
       
    }
}

export const startPostingComment = ({feedbackId,commentToPost,commentId}) =>{
  console.log(feedbackId)
  return async (dispatch,getState) =>{
     
    try{
        dispatch(setSaving());
        const {feedbacks} = getState().feedback;
        const {displayName,photoURL,email} = getState().auth;
       
        const feedbackReference = doc(FirebaseDB,`feedback/${feedbackId}`);
        const feedbackSelected = getFeedback(feedbacks,feedbackId);
    
        const commentToPostOnDatabase = {
          id:commentId,
          userName:displayName,
          userEmail:email,
          photoURL,
          comment: commentToPost
        }

        const updatedFeedbackSelected = {
          id:feedbackSelected.id,
          status:feedbackSelected.status,
          title:feedbackSelected.title,
          detail:feedbackSelected.detail,
          vote:feedbackSelected.vote,
          category:feedbackSelected.category,
          comments:[...feedbackSelected.comments,commentToPostOnDatabase]
        }

        await setDoc(feedbackReference,{comments:[...feedbackSelected.comments,commentToPostOnDatabase]},{merge:true});
        dispatch(updateFeedback({feedbackId,updatedFeedbackSelected}));
      
      }
      catch(err){
        console.log(err);
      }
    }
}
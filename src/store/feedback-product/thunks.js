
import { collection, deleteDoc, doc, setDoc,getFirestore,addDoc} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadFeedbacks } from "../../helpers/loadsFeedback";
import { addNewFeedback, errorMessage, getFeedbacks, setSaving, updateFeedback } from "./feedbackSlice";
import { getFeedback } from "../../helpers/getFeedback";
import { async } from "@firebase/util";


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
          comment: commentToPost,
          replies:[]
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
        dispatch(updateFeedback({feedbackId,updatedFeedbackSelected,message:'Comment has been posted.'}));
      
      }
      catch(err){
        console.log(err);
      }
    }
}

export const startPostingReplies = ({feedbackId,commentId,reply}) =>{
  return async (dispatch,getState) =>{
   
     try{
    
       dispatch(setSaving());
      const{feedbacks} = getState().feedback;
      const {displayName,email,photoURL} = getState().auth;
      const feedbackSelected = getFeedback(feedbacks,feedbackId);
      const feedbackReference = doc(FirebaseDB,`feedback/${feedbackId}`);
      const commentSelected = getFeedback(feedbackSelected.comments,commentId);
   
     const replyToPost = {
      userName:displayName,
      userEmail:email,
      avatar:photoURL,
      reply:reply
     }

      const updatedComment = {
        id:commentSelected.id,
        userName:commentSelected.userName,
        userEmail:commentSelected.userEmail,
        photoURL:commentSelected.photoURL,
        comment: commentSelected.comment,
        replies:[...commentSelected.replies,replyToPost]
      }

      const updatedFeedbackSelected = {
        id:feedbackSelected.id,
        status:feedbackSelected.status,
        title:feedbackSelected.title,
        detail:feedbackSelected.detail,
        vote:feedbackSelected.vote,
        category:feedbackSelected.category,
        comments: feedbackSelected.comments.map((comment)=> comment.id === commentId ? updatedComment:comment)
      }
    
        await setDoc(feedbackReference,{comments:updatedFeedbackSelected.comments},{merge:true});
          dispatch(updateFeedback({feedbackId,updatedFeedbackSelected,message:'Your Reply has been posted'}));
     
     }
     catch(err){
      console.log(err);
     }
  }
}


export const startPostingVotes = ({feedbackId}) =>{
 
    return async (dispatch,getState) =>{
       try{
        dispatch(setSaving());
         const {feedbacks} = getState().feedback;
        const feedbackSelected = getFeedback(feedbacks,feedbackId);
        const feedbackReference = doc(FirebaseDB,`feedback/${feedbackId}`);
        const updatedVote = feedbackSelected.vote + 1;
       
        const updatedFeedbackSelected = {
         ...feedbackSelected,
         vote:updatedVote
        }
      
       await setDoc(feedbackReference,{vote:updatedVote},{merge:true});
       dispatch(updateFeedback({feedbackId,updatedFeedbackSelected,message:'Vote has been posted'}));
       }
       
       catch(err){
        console.log(err);
       }
    }
}

export const startEditingFeedback = ({feedbackId,title,category,status,detail}) =>{
   
  return async (dispatch,getState) =>{
    try{
      dispatch(setSaving());
      const {feedbacks} = getState().feedback;
      const feedbackSelected = getFeedback(feedbacks,feedbackId);
      const feedbackReference = doc(FirebaseDB,`feedback/${feedbackId}`);
      
      const updatedFeedbackSelected = {
        ...feedbackSelected,
        title,
        category,
        status,
        detail
      }

      await setDoc(feedbackReference,{title,category,status,detail},{merge:true});
      dispatch(updateFeedback({feedbackId,updatedFeedbackSelected,message:`${title} feedback has been updated`}))

    }
    catch(err){
      console.log(err);
    }
  }
   
}
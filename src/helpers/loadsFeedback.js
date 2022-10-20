
import { collection,getDocs,getFirestore } from 'firebase/firestore';

export const loadFeedbacks = async () =>{
  
  try{
    const db = getFirestore();
    const feedbackRef = collection(db,"feedback");
    const docsSnap = await getDocs(feedbackRef);
 
     const feedbacks = [];
     
     docsSnap.forEach(doc => {
    feedbacks.push({id:doc.id,...doc.data()}); 
 })
 return {
  success:true,
  feedbacks
 }
}
  
catch(error){
  return{
    success:false,
    message:error.message
  }
 
}
}
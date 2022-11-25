import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { getFeedback } from '../helpers/getFeedback';

export const UseFeedback = (idParam = 0) => {
    const {feedbacks} = useSelector((state)=> state.feedback);
    const [feedback,setFeedback] = useState();
   
    useEffect(()=>{
        if(idParam === 0){
            throw new Error("idParam is missing, please need to pass idParam as an argument");
        }
        setFeedback(getFeedback(feedbacks,idParam)); 
       },[feedbacks])
     
       const handleChange = ({target}) =>{
        setFeedback({...feedback,[target.name]:target.value})
      }
  
    return {
        feedback,
        ...feedback,
        handleChange
    }
}

import { useEffect,useState} from 'react';
import {ReturnPreviousPage} from '../components/ReturnPreviousPage/ReturnPreviousPage';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import { getFeedback } from '../../helpers/getFeedback';
import { FeedbackItem } from '../components/FeedbackList/FeedbackItem';
import { PostComment } from '../components/PostComment/PostComment';

export const FeedbackDetail = () => {
  const {id} = useParams();
  const {feedbacks} = useSelector((state)=> state.feedback);
  const [feedback,setFeedback] = useState();

  useEffect(()=>{
     setFeedback(getFeedback(feedbacks,id)); 
  },[feedbacks])
 

  return (
    <section className="max-width-wrapper feedback-detail-container">
     <header className='d-flex d-flex-space-between'>
       <ReturnPreviousPage/>
       <Link to={"/"}> <button className='btn-blue btn-edit-feedback capitalize'>edit feedback</button>  </Link>
    </header>

     {feedback && <FeedbackItem {...feedback}/>}
      <PostComment/>
  
    </section>
  )
}

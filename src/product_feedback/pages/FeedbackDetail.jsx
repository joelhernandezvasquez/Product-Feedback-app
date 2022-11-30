import { UseFeedback } from '../../hooks/UseFeedback';
import {ReturnPreviousPage} from '../components/ReturnPreviousPage/ReturnPreviousPage';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { FeedbackItem } from '../components/FeedbackList/FeedbackItem';
import { PostComment } from '../components/PostComment/PostComment';
import { CommentList } from '../components/comments/CommentList';

export const FeedbackDetail = () => {
  const {id} = useParams();
  const {feedback} = UseFeedback(id);

  return (
    <section className="max-width-wrapper feedback-detail-container">
     <header className='d-flex d-flex-space-between'>
       <ReturnPreviousPage/>
       <Link to={`/feedback-edit/${id}`}> <button className='btn-blue btn-edit-feedback capitalize'>edit feedback</button>  </Link>
    </header>

     {feedback && <FeedbackItem {...feedback}/>}

     
    {feedback?.comments.length > 0 && <CommentList comments = {feedback.comments}/>}
    

      <PostComment/>
  
    </section>
  )
}

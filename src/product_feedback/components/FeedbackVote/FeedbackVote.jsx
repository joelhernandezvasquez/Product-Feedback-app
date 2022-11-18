
import { useLocation, useParams } from "react-router-dom"
import { getBasePathURL } from "../../../helpers";
import {FEEDBACK_DETAIL_ROUTE} from '../../../constant';
import { useDispatch } from "react-redux";
import { startPostingVotes } from "../../../store/feedback-product/thunks";

export const FeedbackVote = ({vote}) => {

  const {pathname} = useLocation();
  const {id} = useParams()
  const dispatch = useDispatch();
  
  const handleVote = () =>{
    const basedUrl = getBasePathURL(pathname);
    
    if(basedUrl === FEEDBACK_DETAIL_ROUTE){
      dispatch(startPostingVotes({feedbackId:id}));
     }
     
  }
  return (
    <div className="feedback-item-views primary-border-radius d-flex d-flex-align-center" onClick={handleVote}>
    <svg className="feedback-item-views-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> 
    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
    <p className="feedback-item-count">{vote}</p> 
  </div>
  )
}

import PropTypes from 'prop-types';
import { useNavigate,useLocation } from 'react-router-dom';
import CommentIcon from "../../../assets/comment.svg";
import { FeedbackVote } from '../FeedbackVote/FeedbackVote';

export const FeedbackItem = ({id,title,detail,category,comments,vote}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () =>{
    if(location.pathname === '/'){
      navigate(`/feedback-detail/${id}`);
    }
  }

  return (
    <li className="feedback-item primary-border-radius" onClick={handleNavigation}>
 
        <div className="feedback-item-header">
           <h2 className="feedback-item-title">{title}</h2> 
           <p className="feedback-item-description">{detail}</p>
           <span className="feedback-item-category primary-border-radius">{category}</span>
        </div>

        <FeedbackVote vote={vote}/>
       
       <div className="feedback-item-comments-amount d-flex d-flex-align-center">
        <img src = {CommentIcon} alt=""/>
       <p> {comments.length}</p> 
       </div>
   
    </li>
  )
}

FeedbackItem.propTypes = {
  title:PropTypes.string.isRequired,
  detail:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired,
  comments:PropTypes.array.isRequired,
  vote:PropTypes.number.isRequired
}

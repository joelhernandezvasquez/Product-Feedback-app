import PropTypes from 'prop-types';
import { useNavigate,useLocation } from 'react-router-dom';
import CommentIcon from "../../../assets/comment.svg";

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

        <div className="feedback-item-views primary-border-radius d-flex d-flex-align-center">
          <svg className="feedback-item-views-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> 
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
          <p className="feedback-item-count">{vote}</p> 
        </div>
       
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

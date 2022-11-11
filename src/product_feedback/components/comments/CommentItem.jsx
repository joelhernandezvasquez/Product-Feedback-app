import Proptypes from 'prop-types';
export const CommentItem = ({photoURL,userName,userEmail,comment}) => {
  return (
    <li className='comment-item'>
     
        <img className='comment-item-avatar' src={photoURL} alt={`${userName} profile`}/>
        <p className='comment-item-profile-info'>
          <span className='comment-profile-name'>{userName}</span>
          <span className='comment-profile-email'>{userEmail}</span>
        </p>
     
        <button className='btn-reply capitalize'>reply</button>
      
      <p className='comment-text'>
        {comment}
      </p>
    </li>
  )
}

CommentItem.prototype = {
  photoURL:Proptypes.string.isRequired,
  userName:Proptypes.string.isRequired,
  userEmail:Proptypes.string.isRequired,
  comment:Proptypes.string.isRequired
}

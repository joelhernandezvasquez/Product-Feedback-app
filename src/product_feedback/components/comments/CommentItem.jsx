import Proptypes from 'prop-types';
import { UseToogle } from '../../../hooks/UseToogle';
import { PostReply } from '../postReply/PostReply';
import { Reply } from './Reply';
export const CommentItem = ({id,photoURL,userName,userEmail,comment,replies}) => {
  const {isToggle,toggle} = UseToogle(false);

  return (
    <li className='comment-item'>
     
        <img className='comment-item-avatar' src={photoURL} alt={`${userName} profile`}/>
        <p className='comment-item-profile-info'>
          <span className='comment-profile-name'>{userName}</span>
          <span className='comment-profile-email'>{userEmail}</span>
        </p>
     
        <button className='btn-reply capitalize' onClick={()=> toggle()}>reply</button>
      <p className='comment-text'>
        {comment}
      </p>
       
       <ul style={{paddingInlineStart:'30px'}}>
       {replies?.map((reply,index)=>{
        return <Reply key={index} {...reply}/>
        })}
       </ul>
      

      {isToggle && <PostReply commentId = {id}/>}


    </li>
  )
}

CommentItem.prototype = {
  photoURL:Proptypes.string.isRequired,
  userName:Proptypes.string.isRequired,
  userEmail:Proptypes.string.isRequired,
  comment:Proptypes.string.isRequired
}

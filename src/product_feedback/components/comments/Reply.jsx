
export const Reply = ({userName,avatar,reply,userEmail}) => {
  return (
   <li className="comment-item reply-item">
      <img className='comment-item-avatar' src={avatar} alt={`${userName} profile`}/>
      <p className='comment-item-profile-info'>
          <span className='comment-profile-name'>{userName}</span>
          <span className='comment-profile-email'>{userEmail}</span>
        </p>

        <button className='btn-reply capitalize'>reply</button>
      
      <p className='comment-text'>
        {reply}
      </p>
   </li>
  )
}

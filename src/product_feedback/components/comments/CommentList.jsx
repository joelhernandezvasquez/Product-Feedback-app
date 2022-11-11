import Proptypes from 'prop-types';
import { CommentItem } from "./CommentItem";

export const CommentList = ({comments}) => {
  
  return (
    <section className='comment-wrapper primary-border-radius'>
    <h2>4 Comments</h2>
    <ul className='comment-list primary-border-radius'>
      {comments.map((comment)=>{
        return <CommentItem key={comment.id} {...comment}/>
      })}
      </ul>

      </section>
  )
}
CommentList.proptypes = {
  comments:Proptypes.array.isRequired
}
import { CommentItem } from "./CommentItem"


export const CommentList = ({comments}) => {
  
  return (
    <ul>
      {comments.map((comment)=>{
        return <CommentItem key={comment.id} {...comment}/>
      })}
      </ul>
  )
}

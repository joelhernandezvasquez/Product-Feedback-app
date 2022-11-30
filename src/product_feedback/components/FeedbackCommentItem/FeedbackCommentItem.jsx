import CommentIcon from "../../../assets/comment.svg";

export const FeedbackCommentItem = ({comments}) => {
  return (
    <div className="feedback-item-comments-amount d-flex d-flex-align-center">
    <img src = {CommentIcon} alt=""/>
   <p> {comments.length}</p> 
   </div>
  )
}

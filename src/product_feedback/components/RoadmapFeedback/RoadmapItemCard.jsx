import { FeedbackVote } from "../FeedbackVote/FeedbackVote";
import { FeedbackCommentItem } from "../FeedbackCommentItem/FeedbackCommentItem";
import { setBackgroundStatus, setBorderStatus } from "../../../helpers";

export const RoadmapItemCard = ({title,status,detail,category,vote,comments}) => {

  return (
    <li style={setBorderStatus(status)} className='roadmap-item-card'>
     <p className="roadmap-status-text"> <span style={setBackgroundStatus(status)} className="status-indicator"></span> {status} </p>
     <h3 className="roadmap-item-card-title">{title}</h3>
     <p style={{marginBottom:'16px'}} className="feedback-item-description">{detail}</p>
     <span className="feedback-item-category primary-border-radius">{category}</span>
     
     <div className="roadmap-item-card-footer">
     <FeedbackVote vote={vote}/>
     <FeedbackCommentItem comments = {comments}/>
     </div>

    </li>
  )
}

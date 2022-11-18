import {UseForm} from '../../../hooks/UseForm';
import { useDispatch } from 'react-redux';
import { startPostingReplies } from '../../../store/feedback-product/thunks';
import { useParams } from 'react-router-dom';

const formData = {postReply:''};
const requiredFields = {
    postReply:{}
}
export const PostReply = ({commentId}) => {
    const dispatch = useDispatch();
    const {postReply,handleChange,resetForm} = UseForm(formData,requiredFields);
    const params = useParams();
  
    const handlePostReply = (event) =>{
        event.preventDefault();
        dispatch(startPostingReplies({feedbackId:params.id,commentId,reply:postReply}))
    }

    return (
    <form className="post-reply-form" onSubmit={handlePostReply}>
       <textarea 
       className="primary-border-radius"
       name="postReply"
       value={postReply}
       onChange={handleChange}
       required
       >

        </textarea>
        <button className="btn-post-reply capitalize">post reply</button>
    </form>
  )
}

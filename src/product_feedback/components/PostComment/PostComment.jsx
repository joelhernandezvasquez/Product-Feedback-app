import {useState,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startPostingComment } from '../../../store/feedback-product/thunks';
import {UseForm} from '../../../hooks/UseForm';
import { v4 as uuidv4 } from 'uuid';

const formData = {postComment:''};
const requiredFields = {
    postComment:{}
}

export const PostComment = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const {postComment,handleChange} = UseForm(formData,requiredFields);
  const [characterCount, setCharacterCount] = useState(0);
  const textAreaRef = useRef();

   const getCharacterCount = () =>{
    return textAreaRef.current.value.length <= 250;
   }

   const handleCharacterCount =() =>{
      const charactersLeft = textAreaRef.current.value.length;
   
      if(getCharacterCount()){
        setCharacterCount(charactersLeft);
        return;
      }
}
 const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(startPostingComment({feedbackId:params.id,post:postComment,commentId:uuidv4()}))
 }
    return (
    <div className="post-comment primary-border-radius">
        <h2 className="capitalize post-comment-main-heading">add comment</h2>
        <form onSubmit={handleSubmit}>
            <textarea 
            className="post-comment-input"
            name="postComment"
            value={postComment}
            placeholder="Type your comment here"
            onChange={handleChange}
            onKeyUp = {handleCharacterCount}
            maxLength="250"
            ref = {textAreaRef}
            required
            >
         </textarea>
            
            <div className="post-comment-button-control d-flex d-flex d-flex-align-center d-flex-space-between">
              <p className="character-count-description">{`${250 - characterCount}`} Characters left</p>
              <button className="btn-purple capitalize primary-border-radius">post comment</button>
            </div>
        </form>
    </div>
  )
}
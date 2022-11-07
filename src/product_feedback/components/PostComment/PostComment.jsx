import {useState,useRef} from 'react';
import {UseForm} from '../../../hooks/UseForm';

const formData = {postComment:''};
const requiredFields = {
    postComment:{}
}

export const PostComment = () => {
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
    return (
    <div className="post-comment primary-border-radius">
        <h2 className="capitalize post-comment-main-heading">add comment</h2>
        <form>
            <textarea 
            className="post-comment-input"
            name="postComment"
            value={postComment}
            placeholder="Type your comment here"
            onChange={handleChange}
            onKeyUp = {handleCharacterCount}
            maxLength="250"
            ref = {textAreaRef}
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


import { useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseForm } from "../../../hooks/UseForm";
import { UseToast} from '../../../hooks/UseToast';
import { DropdownFilterWrapper } from "../DropdownFilterWrapper/DropdownFilterWrapper";
import { Error } from "../../../error/Error";
import { isFound } from "../../../helpers/isFound";
import { startSavingFeedback} from "../../../store/feedback-product/thunks";
import  iconFeedback from '../../../assets/icon-new-feedback.svg';

const formData = {feedbackTitle:'',feedbackComment:''};
const requiredFields = {
  feedbackTitle:{},
 feedbackComment:{},
}

export const CreateFeedbackForm = () => {
   const {feedbackMessage} = useSelector((state)=> state.feedback);
  const {feedbackTitle,feedbackComment,handleChange,validateForm,errors,resetForm} = UseForm(formData,requiredFields);
  const dispatch = useDispatch()
  const optionFilterRef = useRef();
  UseToast(feedbackMessage,resetForm);

   const handleSubmit = (e) =>{
    e.preventDefault();
    if(validateForm()){
      dispatch(startSavingFeedback({feedbackTitle,feedbackComment,category:optionFilterRef.current}))
    }
  }

  return (
    <form className='feedback-form primary-border-radius' onSubmit={handleSubmit}>
     
      <img className="icon-feedback" src={iconFeedback} alt=""/>
      <h1 className="feedback-form-title fw-700">Create New Feedback</h1>
   
      <div className="feedback-input-field">
        <label htmlFor="feedback-title">  Feedback Title <p>Add a short, descriptive headline</p> </label>
       <input 
       className={`feedback-input ${errors.length > 0 && feedbackTitle==='' && isFound(errors,'feedbackTitle') && 'error-input'}`} 
       type="text" 
       id="feedback-title" 
       name="feedbackTitle" 
       aria-required='true' 
       value={feedbackTitle}
       onChange = {handleChange}
       />
       {errors.length > 0 && feedbackTitle === ''&& <Error cssStyling={'error-text'}> <p> Cannot be empty</p></Error>}
      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-category"> Category <p>Choose a category for your feedback</p>
      </label>

      <DropdownFilterWrapper optionFilterRef = {optionFilterRef}/>

      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-comment">  Feedback Detail <p>Include any specific comments on what should be improved, added, etc.</p>
      </label>
       <textarea 
       name="feedbackComment" 
       className={`feedback-comment form-input ${errors.length > 0 && feedbackComment==='' && isFound(errors,'feedbackComment') && 'error-input'}`}
       aria-required='true' 
       value={feedbackComment}
       onChange = {handleChange}
       >
       </textarea>
       {errors.length > 0 && feedbackComment === ''&& <Error cssStyling={'error-text'}> <p> Cannot be empty</p></Error>}
       
      </div>

      <div className="feedback-form-btn-container">
        <button className="capitalize"> add feedback</button>
        <button className="capitalize btn-black" onClick={resetForm}> cancel</button>
      </div>
    
    </form>
  )
}
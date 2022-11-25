import { useRef} from "react";
import { useParams,useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { UseFeedback } from "../../../hooks/UseFeedback";
import { UseToast } from "../../../hooks/UseToast";
import { startEditingFeedback } from "../../../store/feedback-product/thunks";
import { DeleteFeedback } from "./DeleteFeedback";
import { DropdownFilterWrapper } from "../DropdownFilterWrapper/DropdownFilterWrapper";
import { statusCategory,categoryDropdown } from "../../../constant";
import  iconEditFeedback from '../../../assets/icon-edit-feedback.svg';

export const EditFeedbackForm = () => {
    const {id} = useParams();
    const {feedbackMessage} = useSelector((state)=> state.feedback);
    const optionFilterRef = useRef();
    const statusFilterRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {feedback,handleChange} = UseFeedback(id);
    UseToast(feedbackMessage);

    const saveChanges = (event) =>{
       event.preventDefault();
        dispatch(startEditingFeedback(
          {feedbackId:id,title:feedback.title,category:optionFilterRef.current,status:statusFilterRef.current,detail:feedback.detail}));
    }
   
    const cancelChanges = () =>{
      navigate("/");
    }
    
  return (
    <form className='feedback-form primary-border-radius'>

      <img className="icon-feedback" src={iconEditFeedback} alt=""/>
      <h1 className="feedback-form-title fw-700">Editing `{feedback?.title}`</h1>
      <div className="feedback-input-field">
        <label htmlFor="feedback-title">  Feedback Title <p>Add a short, descriptive headline</p> </label>
       <input 
       className={`feedback-input`} 
       type="text" 
       id="feedback-title" 
       name="title" 
       aria-required='true'
       value = {feedback?.title} 
       onChange = {(e) => handleChange(e)}
       />
      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-category"> Category <p>Choose a category for your feedback</p>
      </label>

      {feedback?.category && 
      <DropdownFilterWrapper 
      optionFilterRef = {optionFilterRef} 
      statusCategory = {feedback?.category} 
      menuOptions = {categoryDropdown}
      />
      } 
      </div>

      <div className="feedback-input-field">
      <label htmlFor="feedback-comment">Update Status<p>Change feature state</p>
      </label>

     {feedback?.status && 
      <DropdownFilterWrapper
     optionFilterRef={statusFilterRef}
     statusCategory = {feedback?.status}
     menuOptions = {statusCategory}
   />
     }
     </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-comment">  Feedback Detail <p>Include any specific comments on what should be improved, added, etc.</p>
      </label>
       <textarea 
       name="detail" 
       className={`feedback-comment form-input`}
       aria-required='true' 
       value={feedback?.detail}
       onChange = {(e)=> handleChange(e)}
       >
       </textarea>
      </div>

      <div className="feedback-form-edit-btn-containers">
        <div>
        <button className="capitalize" onClick={saveChanges}> save changes</button>
        <button className="capitalize btn-black" onClick={cancelChanges}> cancel</button>
        </div>
          <DeleteFeedback feedbackId={id}/>
      </div>
    </form>
  )
}

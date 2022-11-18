import { useRef,useState} from "react";
import { DropdownFilterWrapper } from "../DropdownFilterWrapper/DropdownFilterWrapper";
import  iconEditFeedback from '../../../assets/icon-edit-feedback.svg';
import { DropdownFilter } from "../dropdownFilter/DropdownFilter";
import { statusCategory } from "../../../constant";

export const EditFeedbackForm = () => {
    const optionFilterRef = useRef();
    const [statusCategoryFilter,setStatusCategoryFilter] = useState(statusCategory[0].option);

    const handleFilterOption = (option) =>{
       
    }
    
  return (
    <form className='feedback-form primary-border-radius'>
      <img className="icon-feedback" src={iconEditFeedback} alt=""/>
      <h1 className="feedback-form-title fw-700">Editing data text will goes here</h1>
      <div className="feedback-input-field">
        <label htmlFor="feedback-title">  Feedback Title <p>Add a short, descriptive headline</p> </label>
       <input 
       className={`feedback-input`} 
       type="text" 
       id="feedback-title" 
       name="feedbackTitle" 
       aria-required='true' 
       />
      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-category"> Category <p>Choose a category for your feedback</p>
      </label>

      <DropdownFilterWrapper optionFilterRef = {optionFilterRef}/>

      </div>

      <div className="feedback-input-field">
      <label htmlFor="feedback-comment">Update Status<p>Change feature state</p>
      </label>

      <div className="feedback-input d-flex d-flex-align-center d-flex-space-between">
        <span style={{fontSize:'0.875rem'}}>{statusCategoryFilter}</span>
        <svg className={`feedback-item-views-icon`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> 
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
        </svg>
      </div>

      <DropdownFilter
         options = {statusCategory}
         filterOption={statusCategoryFilter} 
         handleFilterOption={handleFilterOption}
         dropdownBodyCSSClass = {`dropdown-feedback primary-border-radius`}
         dropdownMenuCSSClass ={"dropdown-menu-feedback"}
      />
      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-comment">  Feedback Detail <p>Include any specific comments on what should be improved, added, etc.</p>
      </label>
       <textarea 
       name="feedbackComment" 
       className={`feedback-comment form-input`}
       aria-required='true' 
       >
       </textarea>
       
      </div>

      <div className="feedback-form-edit-btn-containers">
        <div>
        <button className="capitalize"> save changes</button>
        <button className="capitalize btn-black"> cancel</button>
        </div>
      
        <button className="capitalize btn-red"> delete </button>
      </div>
    </form>
  )
}

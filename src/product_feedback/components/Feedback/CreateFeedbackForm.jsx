
import { DropdownFilter } from "../dropdownFilter/DropdownFilter";
import { categoryOptions } from "../../../constant";
import iconFeedback from '../../../assets/icon-new-feedback.svg';

export const CreateFeedbackForm = () => {
    const filterOption = 'Feature';
    const handleFilterOption = () =>{}
  
    return (
    <form className='feedback-form primary-border-radius'>
      <img className="icon-feedback" src={iconFeedback} alt=""/>
      <h1 className="feedback-form-title fw-700">Create New Feedback</h1>
      
      <div className="feedback-input-field">
        <label htmlFor="feedback-title"> 
            Feedback Title 
            <p>Add a short, descriptive headline</p>
      </label>
       <input className="feedback-input" type="text" id="feedback-title" name="feedback-title" value=""/>
      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-category"> 
           Category 
            <p>Choose a category for your feedback</p>
      </label>

      <div className="feedback-input d-flex d-flex-align-center d-flex-space-between">
        <span style={{fontSize:'0.875rem'}}>{filterOption}</span>
        <svg className="feedback-item-views-icon rotate-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> 
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
        </svg>
      </div>
      
      <DropdownFilter 
       options = {categoryOptions}
       filterOption={filterOption} 
       handleFilterOption={handleFilterOption}
       dropdownBodyCSSClass = {"dropdown-feedback"}
       dropdownMenuCSSClass ={"dropdown-menu-feedback"}
       />

      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-comment"> 
        Feedback Detail
            <p>Include any specific comments on what should be improved, added, etc.</p>
      </label>
       <textarea name="feedback-comment" className="feedback-comment"></textarea>
      </div>

      <div className="feedback-form-btn-container">
        <button className="capitalize"> add feedback</button>
        <button className="capitalize btn-black"> cancel</button>
      </div>
    
    </form>
  )
}

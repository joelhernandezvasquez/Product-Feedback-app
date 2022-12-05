import { useState,useCallback,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'; 
import { UseToogle } from '../../../hooks/UseToogle';
import { filterFeedback,sortFilterFeedback } from '../../../store/feedback-product/feedbackSlice';
import { DropdownFilter } from '../dropdownFilter/DropdownFilter';
import { dropdownFilterOptions } from '../../../constant';
import { ShowSuggestionQuantity } from '../../views/ShowSuggestionQuantity';
import {getFeedbackByFilterOption } from '../../../helpers/getFeedbackByComments';


export const SuggestionFilter = () => {
  
  const{isToggle,toggle} = UseToogle(false);
  const [filterOption,setFilterOption] = useState(dropdownFilterOptions[0].option);
  const {feedbackFiltered,feedbacks,currentCategory} = useSelector((state)=> state.feedback);
  const dispatch = useDispatch();

  const handleFilterOption = useCallback((option) =>{
    dispatch(sortFilterFeedback(option));
    setFilterOption(option);
    toggle();
  },[isToggle])
  
  useEffect(()=>{
 
  function filterFeedbacksByComments(){
     if(feedbackFiltered?.length > 0){
      const dataFiltered = getFeedbackByFilterOption(feedbackFiltered,filterOption);
       dispatch(filterFeedback(dataFiltered));
     }
   }

  filterFeedbacksByComments();
  },[filterOption,feedbacks])
 
  return (
    <section className="max-width-wrapper">
      
      <div className='suggestion-filter d-flex d-flex-space-between'>
       
       <ShowSuggestionQuantity/>
       
       <div className="suggestion-dropdown d-flex d-flex-align-center">
        <p>Sort by :</p>
        <button className="capitalize btn-plain fw-700 d-flex d-flex-align-center" onClick={()=> toggle()}>
            <span>{filterOption}</span>
            <svg className={isToggle ? 'rotate':undefined}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" alt="">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </button>
       </div>

       {isToggle && (
       <DropdownFilter 
       options = {dropdownFilterOptions}
       filterOption={filterOption} 
       handleFilterOption={handleFilterOption}
       dropdownBodyCSSClass = {"dropdown-suggestion"}
       dropdownMenuCSSClass ={"dropdown-menu"}
       />
       )}
        <Link className="capitalize btn-add-feedback" to="/feedback"> + add feedback</Link>
        </div> 
    </section>
  )
}

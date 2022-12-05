import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {setCategory,filterFeedback} from '../../../store/feedback-product/feedbackSlice';
import {getFeedbackByFilterOption } from '../../../helpers/getFeedbackByComments';
import { categoryOptions } from "../../../constant";

export const CategoryFeedback = ({closeMenu}) => {
  
 const {currentCategory,currentFilterOption,feedbacks} = useSelector((state)=> state.feedback);

 const dispatch = useDispatch();

  const onChangeCategory = (option) =>{
    dispatch(setCategory(option));
       if(!closeMenu) return ;
    closeMenu();
  }
  
  useEffect(()=>{

    const filterFeedbacks = () =>{
     if(currentCategory === 'All'){
       const feedbackSorted = getFeedbackByFilterOption(feedbacks,currentFilterOption);
       dispatch(filterFeedback(feedbackSorted)); 
       return;
     }

     const dataFiltered = getFeedbackByFilterOption(feedbacks.filter((feedback) => feedback.category === currentCategory),currentFilterOption);
     dispatch(filterFeedback(dataFiltered));
   }
    filterFeedbacks();
 },[currentCategory,feedbacks])
  
    return (
    <ul className="category-feedback-container content">
      {categoryOptions.map(({option,id})=>{
        return (
        <li key={id}> 
        <button 
         className={`btn-opaque-pink ${option===currentCategory && 'isSelected'}`}
         onClick = {()=>onChangeCategory(option)}
         >
          {option}
          </button>
        </li>
        )
      })}
    </ul>
  )
}
CategoryFeedback.propTypes = {
  closeMenu:PropTypes.func
}

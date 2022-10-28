import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {setCategory,filterFeedback} from '../../../store/feedback-product/feedbackSlice';
import { categoryOptions } from "../../../constant";

export const CategoryFeedback = ({closeMenu}) => {
  
 const {currentCategory,feedbacks} = useSelector((state)=> state.feedback);

 const dispatch = useDispatch();

  const onChangeCategory = (option) =>{
    dispatch(setCategory(option));
       if(!closeMenu) return ;
    closeMenu();
  }
  
  useEffect(()=>{
  
    const filterFeedbacks = () =>{
     if(currentCategory === 'All'){
      dispatch(filterFeedback(feedbacks)); 
       return;
     }
     const dataFiltered = feedbacks.filter((feedback) => feedback.category === currentCategory);
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

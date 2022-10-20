
import { useSelector,useDispatch } from "react-redux";
import {setCategory} from '../../../store/feedback-product/feedbackSlice';
import { categoryOptions } from "../../../constant";

export const CategoryFeedback = ({closeMenu}) => {
  
 const {currentCategory} = useSelector((state)=> state.feedback);
 const dispatch = useDispatch();

  const onChangeCategory = (item) =>{
    dispatch(setCategory(item));
    closeMenu();
  }
  
    return (
    <ul className="category-feedback-container content">
      {categoryOptions.map(({item,id})=>{
        return (
        <li key={id}> 
        <button 
         className={`btn-opaque-pink ${item===currentCategory && 'isSelected'}`}
         onClick = {()=>onChangeCategory(item)}
         >
          {item}
          </button>
        </li>
        )
      })}
    </ul>
  )
}

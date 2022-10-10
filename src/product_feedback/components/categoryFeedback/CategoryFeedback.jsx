
import {useState} from 'react';
import { categoryOptions } from "../../../constant";

export const CategoryFeedback = ({closeMenu}) => {
  
  const [options ,setOptions] = useState(0);

  const selectOption = (id) =>{
    setOptions((c) => id);
    closeMenu();
  }
  
    return (
    <ul className="category-feedback-container content">
      {categoryOptions.map(({item,id})=>{
        return (
        <li key={id}> 
        <button 
         className={`btn-opaque-pink ${id===options && 'isSelected'}`}
         onClick = {selectOption}
         >
          {item}
          </button>
        </li>
        )
      })}
    </ul>
  )
}

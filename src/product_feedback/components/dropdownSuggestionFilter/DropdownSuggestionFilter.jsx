
import { dropdownFilterOptions } from "../../../constant";

export const DropdownSuggestionFilter = ({filterOption,handleFilterOption}) => {
  
    return (
    <aside role="dialog" className="dropdown-suggestion">
        <ul className="dropdown-menu">
          {dropdownFilterOptions.map(({id,option})=>{
              if(filterOption!==option) 
             return <li key={id} onClick={()=>handleFilterOption(option)}>{option}</li>
          })}
        </ul>
    </aside>
  )
}

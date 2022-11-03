import { useState ,useEffect} from "react";
import { UseToogle } from "../../../hooks/UseToogle";
import { DropdownFilter } from "../dropdownFilter/DropdownFilter";
import { categoryDropdown } from "../../../constant";


export const DropdownFilterWrapper = ({optionFilterRef}) => {
   
    const {isToggle,toggle} = UseToogle(false);
    const [filterOption,setFilterOption] = useState(categoryDropdown[4].option);
   
    
    const handleFilterOption = (option) =>{
        setFilterOption(option);
        toggle();
    }

    useEffect(()=>{
      optionFilterRef.current = filterOption;
    },[filterOption])

  return (
    <>
    <div className="feedback-input d-flex d-flex-align-center d-flex-space-between" 
       onClick={()=> toggle()}
      >
        <span style={{fontSize:'0.875rem'}}>{filterOption}</span>
        <svg className={`feedback-item-views-icon ${!isToggle  && 'rotate-down'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> 
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
        </svg>
      </div>
      <DropdownFilter 
       options = {categoryDropdown}
       filterOption={filterOption} 
       handleFilterOption={handleFilterOption}
       dropdownBodyCSSClass = {`dropdown-feedback primary-border-radius ${isToggle && 'open-drodpdown'} `}
       dropdownMenuCSSClass ={"dropdown-menu-feedback"}
       />
     </>
  )
}

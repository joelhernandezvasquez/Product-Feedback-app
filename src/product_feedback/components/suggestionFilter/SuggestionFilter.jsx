import {Link} from 'react-router-dom'; 
import { useState} from 'react';
import { UseToogle } from '../../../hooks/UseToogle';
import { DropdownSuggestionFilter } from '../dropdownSuggestionFilter/DropdownSuggestionFilter';
import { dropdownFilterOptions } from '../../../constant';
export const SuggestionFilter = () => {
  
  const{isToggle,toggle} = UseToogle(false);
  const [filterOption,setFilterOption] = useState(dropdownFilterOptions[0].option);

  const handleFilterOption = (option) =>{
    setFilterOption(option);
    toggle();
  }
 
  return (
    <section className="max-width-wrapper suggestion-filter d-flex d-flex-space-between">
       
       <div className="suggestion-dropdown d-flex d-flex-align-center">
        <p>Sort by :</p>
        <button className="capitalize btn-plain fw-700 d-flex d-flex-align-center" onClick={()=> toggle()}>
            <span>{filterOption}</span>
            <svg className={isToggle ? 'rotate':undefined}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" alt="">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </button>

       </div>

       {isToggle && <DropdownSuggestionFilter filterOption={filterOption} handleFilterOption={handleFilterOption}/>}
       <Link className="capitalize btn-add-feedback" to="/feedback"> + add feedback</Link>

    </section>
  )
}

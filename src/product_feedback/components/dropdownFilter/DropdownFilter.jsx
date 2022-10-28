import PropTypes from 'prop-types';

export const DropdownFilter = (
  {options,filterOption,handleFilterOption,dropdownBodyCSSClass,dropdownMenuCSSClass}) => {
   console.log(options)
    return (
    <aside role="dialog" className={dropdownBodyCSSClass}>
        <ul className={dropdownMenuCSSClass}>
          {options.map(({id,option})=>{
              if(filterOption!==option) 
             return  <li key={id} onClick={()=>handleFilterOption(option)}>{option}  </li>
          })}
        </ul>
    </aside>
  )
}

DropdownFilter.propTypes = {
  options:PropTypes.array.isRequired,
  filterOption:PropTypes.string.isRequired,
  handleFilterOption:PropTypes.func.isRequired,
  dropdownBodyCSSClass:PropTypes.string.isRequired,
  dropdownMenuCSSClass:PropTypes.string.isRequired
}
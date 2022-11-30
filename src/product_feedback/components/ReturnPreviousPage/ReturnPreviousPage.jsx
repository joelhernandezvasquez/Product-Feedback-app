import {Link,useNavigate} from 'react-router-dom';

export const ReturnPreviousPage = ({arrowColor ='#4661E6'}) => {
    const navigate = useNavigate();
  
    return (
  
  <Link className='d-flex d-flex-align-center router-link' onClick={()=>navigate(-1)}> 
        <svg className='icon-arrow-left' width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L2 5l4-4" stroke={arrowColor} stroke-width="2" fill="none" fill-rule="evenodd"/>
        </svg>
        Go Back 
  </Link>
  
  )
}

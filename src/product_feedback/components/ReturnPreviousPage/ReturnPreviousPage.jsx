import {Link,useNavigate} from 'react-router-dom';
import IconArrowLeft from '../../../assets/icon-arrow-left.svg';

export const ReturnPreviousPage = () => {
    const navigate = useNavigate();
  return (
  
  <Link className='d-flex d-flex-align-center router-link' onClick={navigate(-1)}> 
        <img className='icon-arrow-left' src={IconArrowLeft} alt=""/>  
        Go Back 
  </Link>
  
  )
}

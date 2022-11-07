import {ReturnPreviousPage} from '../ReturnPreviousPage/ReturnPreviousPage';
import { Link } from 'react-router-dom';

export const FeedbackDetails = () => {
  return (
    <header className='d-flex d-flex-space-between'>
       <ReturnPreviousPage/>
       <Link> <button className='btn-blue btn-edit-feedback capitalize'> edit feedback</button> </Link>
    </header>
  )
}

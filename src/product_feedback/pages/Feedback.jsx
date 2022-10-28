import { CreateFeedbackForm } from '../components/Feedback/CreateFeedbackForm';
import {Link} from 'react-router-dom';
import IconArrowLeft from '../../assets/icon-arrow-left.svg';

export const Feedback = () => {
  return (
    <section className="feedback-wrapper">
     <Link className='d-flex d-flex-align-center router-link'> <img className='icon-arrow-left' src={IconArrowLeft} alt=""/>  Go Back </Link>
    
     <CreateFeedbackForm/>
    
    </section>
  )
}

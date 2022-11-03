import { CreateFeedbackForm } from '../components/Feedback/CreateFeedbackForm';
import { ReturnPreviousPage } from '../components/ReturnPreviousPage/ReturnPreviousPage';

export const Feedback = () => {
  return (
    <section className="feedback-wrapper">
     
     <ReturnPreviousPage/>
     <CreateFeedbackForm/>
    
    </section>
  )
}

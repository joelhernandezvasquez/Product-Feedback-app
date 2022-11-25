import { EditFeedbackForm } from '../components/Feedback/EditFeedbackForm';
import { ReturnPreviousPage } from '../components/ReturnPreviousPage/ReturnPreviousPage';

export const EditFeedback = () => {
  return (
    <section className="feedback-wrapper">
     <ReturnPreviousPage/>
     <EditFeedbackForm/>
   </section>
  )
}

import { useSelector } from "react-redux";
import { FeedbackItem } from "./FeedbackItem";
import { EmptyComments } from "../../views/EmptyComments";

export const FeedbackList = () => {
  const {feedbacks,feedbackFiltered} = useSelector((state) => state.feedback);

  return (
    <section className="max-width-wrapper feedback-list">
      { feedbacks?.length > 0 ? (
              <ul aria-labelledby="Feedback-List">
                 {feedbackFiltered.map((item)=>{
                      return <FeedbackItem key={item.id} {...item} />
                  })} 
            </ul>)
              :
              <EmptyComments/>
      }
    </section>
   
  )
}

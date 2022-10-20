import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { FeedbackItem } from "./FeedbackItem";
import { EmptyComments } from "../../views/EmptyComments";

export const FeedbackList = () => {
  const {feedbacks,currentCategory} = useSelector((state) => state.feedback);
  const [feedbacksFiltered,setFeedbacksFiltered] = useState([]);
  
useEffect(()=>{
  
   const filterFeedbacks = () =>{
    if(currentCategory === 'All'){
      setFeedbacksFiltered(feedbacks); 
      return;
    }
    const feedbackFiltered = feedbacks.filter((feedback) => feedback.category === currentCategory);
    setFeedbacksFiltered(feedbackFiltered);
  }
   filterFeedbacks();
},[currentCategory,feedbacks])

  return (
    <section className="max-width-wrapper feedback-list">
      { feedbacks?.length > 0 ? (
              <ul aria-labelledby="Feedback-List">
                 {feedbacksFiltered.map((item)=>{
                      return <FeedbackItem key={item.id} {...item} />
                  })} 
            </ul>)
              :
              <EmptyComments/>
      }
    </section>
   
  )
}

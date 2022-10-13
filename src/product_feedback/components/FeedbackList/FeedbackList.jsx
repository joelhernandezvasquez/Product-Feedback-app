import { FeedbackItem } from "./FeedbackItem"

const feedbackItems = [
{
  feedbackId:0,
  title:'Add tags for solutions',
  description:'It would help people with light sensitivities and who prefer dark mode.',
  category:'Enhancement',
  commentsAmount:2,
  views:112
},
{
    feedbackId:1,
    title:'Add tags for solutions',
    description:'It would help people with light sensitivities and who prefer dark mode.',
    category:'Enhancement',
    commentsAmount:5,
    views:99
  }

]

export const FeedbackList = () => {
  return (
    <section className="max-width-wrapper feedback-list">
       <ul aria-labelledby="Feedback-List">
     {feedbackItems.map((item)=>{
        return <FeedbackItem key={item.feedbackId} {...item} />
     })} 
    </ul>
    </section>
   
  )
}

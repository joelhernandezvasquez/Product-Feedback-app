import { CategoryFeedback } from "../categoryFeedback/CategoryFeedback"
import { RoadmapFeedback } from "../RoadmapFeedback/RoadmapFeedback"
import { FeedbackBox } from "./FeedbackBox"

export const FeedbackBoardHeader = () => {
  return (
    <section className="feedback-board-header max-width-wrapper">
       <FeedbackBox/>
       <CategoryFeedback/>
       <RoadmapFeedback/>
    </section>
  )
}


import { CategoryFeedback } from "../categoryFeedback/CategoryFeedback"
import { RoadmapFeedback } from "../RoadmapFeedback/RoadmapFeedback"

export const FeedbackBoardMenu = ({closeMenu}) => {

  return (
   
   <aside className="feedbackBoardMobileMenu">
       
       <div className="feedbackMenuContent">
        <CategoryFeedback closeMenu = {closeMenu}/>
        <RoadmapFeedback/>
       </div>
    </aside>
  )
}

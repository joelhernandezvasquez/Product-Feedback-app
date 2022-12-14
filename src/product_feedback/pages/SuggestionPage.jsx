
import { FeedbackBoard } from "../components/FeedbackBoard/FeedbackBoard";
import { FeedbackList } from "../components/FeedbackList/FeedbackList";
import { SuggestionFilter } from "../components/suggestionFilter/SuggestionFilter";

export const SuggestionPage = () => {

  return (
    <div className="suggestion-wrapper"> 
     <header>
        <FeedbackBoard/>
     </header>

     <main className="pink-clr">
      <SuggestionFilter/>
      <FeedbackList/> 
     </main>
    </div>
  )
}

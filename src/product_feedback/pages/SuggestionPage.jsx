import { FeedbackBoard } from "../components/FeedbackBoard/FeedbackBoard"
import { SuggestionFilter } from "../components/suggestionFilter/SuggestionFilter"

export const SuggestionPage = () => {

  return (
    <> 
     <header>
        <FeedbackBoard/>
     </header>

     <main>
      <SuggestionFilter/>
     </main>
    </>
  )
}

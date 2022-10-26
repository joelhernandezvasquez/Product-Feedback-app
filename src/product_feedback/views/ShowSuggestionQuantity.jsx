
import suggestionBulbIcon  from "../../assets/suggestionBulb.svg";
import { useSelector } from "react-redux";

export const ShowSuggestionQuantity = () => {
    const {feedbackFiltered} = useSelector((state)=> state.feedback);

  return (
    <div className='suggestion-count-container d-flex-align-center'>
        <img className="suggestion-count-icon" src={suggestionBulbIcon} alt=""/>
        <p className=" fw-700 suggestion-count-heading"> {feedbackFiltered.length} Suggestions</p>
    </div>
  )
}

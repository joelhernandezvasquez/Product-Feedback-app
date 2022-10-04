import { useDispatch } from "react-redux"
import { startLoginOut } from "../../store/auth/thunks";

export const SuggestionPage = () => {
 const dispatch = useDispatch();

  return (
    <> 
    SuggestionPage 

    <button 
     onClick={()=> dispatch(startLoginOut())}
      >
      Log Out
      </button>
    
    </>
  )
}

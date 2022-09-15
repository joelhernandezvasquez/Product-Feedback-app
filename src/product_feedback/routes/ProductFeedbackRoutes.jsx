
import {Routes,Route} from 'react-router-dom';
import {SuggestionPage} from '../pages/SuggestionPage';


export const ProductFeedbackRoutes = () => {
  return (
   <Routes>

    <Route path="/" element={<SuggestionPage/>}/>
   
   </Routes>
  )
}

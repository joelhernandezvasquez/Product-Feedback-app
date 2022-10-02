
import {Routes,Route,Navigate} from 'react-router-dom';
import {SuggestionPage} from '../pages/SuggestionPage';

export const ProductFeedbackRoutes = () => {
  return (
   <Routes>

    <Route path="/" element={<SuggestionPage/>}/>
    <Route path='/*' element={<Navigate to ="/"/>} />
   
   </Routes>
  )
}

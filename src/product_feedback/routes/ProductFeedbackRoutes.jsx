
import {Routes,Route,Navigate} from 'react-router-dom';
import { Feedback } from '../pages/Feedback';
import { FeedbackDetail } from '../pages/FeedbackDetail';
import {SuggestionPage} from '../pages/SuggestionPage';


export const ProductFeedbackRoutes = () => {
  return (
   <Routes>

    <Route path="/" element={<SuggestionPage/>}/>
    <Route path="/feedback" element = {<Feedback/>}/>
    <Route path="/feedback-detail/:id" element =  {<FeedbackDetail/>} />
    <Route path='/*' element={<Navigate to ="/"/>} />
    
   
   </Routes>
  )
}

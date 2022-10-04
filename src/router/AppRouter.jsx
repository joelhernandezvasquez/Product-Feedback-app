
import { Route, Routes,Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { UseAuth } from "../hooks/UseAuth";
import { ProductFeedbackRoutes } from "../product_feedback/routes/ProductFeedbackRoutes";


export const AppRouter = () => {
  
  const status = UseAuth();

  if(status ==='checking') {
    return <h1>Loading</h1>
  }
 

  return (
    <Routes>
      { status==='authenticated' ? 
      <Route path="/*" element ={<ProductFeedbackRoutes/>} />
      :
      <Route path="/auth/*" element ={<AuthRoutes/>} />
    }
    
     <Route path='/*' element={<Navigate to ="/auth/login"/>} />
     
    </Routes>
  )
}

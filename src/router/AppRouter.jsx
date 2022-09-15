import { Route, Routes,Navigate } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { ProductFeedbackRoutes } from "../product_feedback/routes/ProductFeedbackRoutes";

export const AppRouter = () => {
  return (
   
    <Routes>
     <Route path="/auth/*" element ={<AuthRoutes/>} />
     <Route path="/*" element ={<ProductFeedbackRoutes/>} />
    </Routes>
  )
}

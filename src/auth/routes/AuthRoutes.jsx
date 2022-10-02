import { Route, Routes,Navigate } from "react-router-dom"
import  {LoginPage } from "../pages/LoginPage";
import  {RegisterPage}  from "../pages/RegisterPage";

export const AuthRoutes = () => {
  return (
   <Routes>
    <Route path="login" element = {<LoginPage/>}/>
    <Route path="register" element = {<RegisterPage/>}/>
    
     {/* User will be redirect to the login page if user is not in login or register */}
     <Route path="/*" element ={<Navigate to="/auth/login"/>}/>
   </Routes>
  )
}

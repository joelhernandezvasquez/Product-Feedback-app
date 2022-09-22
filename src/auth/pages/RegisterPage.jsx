import { AuthLayout } from "../layout/AuthLayout";
import { CreateAccountForm } from "./account/CreateAccountForm";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
   <AuthLayout>
     <div className="auth-container">
      <h1 className="text-center">Create an Account</h1>
      <CreateAccountForm/>
       <div className="text-center mt-10">
        <span>Do you have an account already?</span>
        <Link to={"/auth/login"}> log In</Link>
       </div>
     </div>
   </AuthLayout>
  )
}

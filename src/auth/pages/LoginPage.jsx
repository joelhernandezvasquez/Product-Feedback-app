import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { FaGoogle} from "react-icons/fa";

export const LoginPage = () => {
  return (
   <AuthLayout>
    <div className="auth-container">
     <h1 className="text-center">Log in</h1>

      <form className="auth-logIn-form">
       <label className="d-block" htmlFor="email" aria-label="email">
         <input type="email" name="email" id="emailInput"  placeholder="demo@gmail.com"/>
       </label>
       

       <label className="d-block" htmlFor="password"  aria-label="password">
          <input type="password" name="password" id="password-input" />
       </label>
       
       <button className="btn-blue" type="submit">Log in</button>
     </form>

     <span className="d-block text-center uppercase fs-smallest mt-20">or</span>

     <button className="btn-black btn-google mt-25">
      <FaGoogle/>
       Continue with Google
       </button>

      <Link className="d-block mt-20 text-center" to={"/register"}> Can’t log in? Create an account?</Link>

    </div>
   </AuthLayout>
  )
}

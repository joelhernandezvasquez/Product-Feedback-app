
import { AuthLayout } from "../layout/AuthLayout";
import { LoginForm } from "./Login/LoginForm";
import { startGoogleSignIn } from "../../store/auth/thunks";
import { useDispatch,useSelector } from "react-redux";
import { UseAuth } from "../../hooks/UseAuth";
import { Link } from "react-router-dom";
import { FaGoogle} from "react-icons/fa";

export const LoginPage = () => {
  const {status} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  const {isAuthenticated} = UseAuth(status);

  const handleSignInGoogle = () =>{
     dispatch(startGoogleSignIn());
  }
  
  
  return (
   <AuthLayout>
    <div className="auth-container">
     <h1 className="text-center">Log in</h1>
       <LoginForm/>
     <span className="d-block text-center uppercase fs-smallest mt-20">or</span>
      <button className="btn-black btn-google mt-25"
      onClick={handleSignInGoogle}
      disabled={isAuthenticated}
      >
      <FaGoogle/>
       Continue with Google
       </button>
       
        <Link className="d-block mt-20 text-center" to={"/auth/register"}> Can’t log in? Create an account</Link>

    </div>
   </AuthLayout>
  )
}

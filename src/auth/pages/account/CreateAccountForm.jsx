import { useMemo } from "react";
import { useDispatch,useSelector } from "react-redux"; 
import { UseForm } from "../../../hooks/UseForm";
import {Error} from '../../../error/Error';
import { isFound} from "../../../helpers/isFound";
import { startCreatingUserWithEmailAndPassword } from "../../../store/auth/thunks";

const formData = {fullName:'',email:'',password:''};
const requiredFields = {
    fullName:{},
    email:{},
    password:{
        isValid:(value) => /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value) && value.length > 6,
        message:'must be minimun 6 characters long and contains a special character'
    }
}

export const CreateAccountForm = () => {
   const dispatch = useDispatch();
   const {errorMessage,status} = useSelector((state)=> state.auth);
   const {fullName,email,password,handleChange,validateForm,errors} = UseForm(formData,requiredFields);
   const isAuthenticated = useMemo((status) => status ==='checking',[status]);
   
   const handleSubmit = (e) =>{
     e.preventDefault();
     if(validateForm() && errorMessage!==''){
       dispatch(startCreatingUserWithEmailAndPassword(email,password,fullName))
     }
    }

   return (
    <form className="auth-form" onSubmit={handleSubmit}>

    {errors?.length > 0 &&
      <Error cssStyling={'error-message-container'}>
        <p id="errors" className="fw-700">Error: Please correct the following issues</p>
        <ul aria-describedby="errors">
        {errors.map((error,index)=>{
          const errorMessage = Object.values(error);
          return <li key={index}>{errorMessage}</li>
         })}
        </ul>
        
      </Error>
      }

     <label className="d-block capitalize" htmlFor="fullName" >
      full name
      <input type="text" 
       name="fullName" 
      className={`form-input ${errors.length > 0 && fullName==='' && isFound(errors,'fullName') && 'error-input'}`}
       id="fullNameInput" 
       value={fullName}
       aria-required='true' 
       onChange={handleChange}
       />
    </label>

    <label className="d-block capitalize" htmlFor="email" >
      email
      <input type="email" 
       name="email" 
       className={`form-input ${errors.length > 0 && email==='' &&  isFound(errors,'email') && 'error-input'}`}
       id="emailInput" 
        value={email}
       aria-required='true' 
       onChange={handleChange}
       />
    </label>

    <label className="d-block capitalize" htmlFor="password" >
      password
      <input type="password" 
       name="password" 
       className={`form-input ${errors.length > 0 && password==='' &&  isFound(errors,'password') && 'error-input'}`}
       id="passwordInput" 
       value={password}
       aria-required='true' 
       onChange={handleChange}
       />
    </label>

    {errorMessage && errors.length ===0 && (
           <Error> 
              <p className="text-center"> {errorMessage} </p>
           </Error>)
      }

    <button className="btn-blue capitalize" 
    type="submit"
    disabled={isAuthenticated}
    >
      create an account 
    </button>
    
    </form>
  )
}

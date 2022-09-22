
import { UseForm } from "../../../hooks/UseForm";
import {Error} from '../../../error/Error';
import { isFound} from "../../../helpers/isFound";

const formData = {fullName:'',email:'',password:''};
const requiredFields = {
    fullName:{},
    email:{},
    password:{
        isValid:(value) => value.length >=6,
        message:'password must be minimun 6 characters long'
    }
}

export const CreateAccountForm = () => {
   
   const {fullName,email,password,handleChange,validateForm,errors} = UseForm(formData,requiredFields);
  
   const handleSubmit = (e) =>{
     e.preventDefault();
     validateForm();
   }
   return (
    <form className="auth-form" onSubmit={handleSubmit}>

    {errors?.length > 0 &&
      <Error>
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
      <input type="text" 
       name="password" 
       className={`form-input ${errors.length > 0 && password==='' &&  isFound(errors,'password') && 'error-input'}`}
       id="passwordInput" 
       value={password}
       aria-required='true' 
       onChange={handleChange}
       />
    </label>

    <button className="btn-blue capitalize" type="submit">create an account </button>
    
    </form>
  )
}

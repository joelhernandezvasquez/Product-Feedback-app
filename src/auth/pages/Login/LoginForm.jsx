
import { UseForm } from "../../../hooks/UseForm";
import {Error} from '../../../error/Error';
import { isFound} from "../../../helpers/isFound";

export const LoginForm = () => {
    const formData = {email:'',password:''};
    const requiredFields = {email:{},password:{}};
    
    const {email,password,handleChange,validateForm,errors=[]} = UseForm(formData,requiredFields);

    const handleSubmit = (e) =>{
     e.preventDefault();
       validateForm();
    }


  return (
    <form className="auth-logIn-form" onSubmit = {handleSubmit}>
    <label className="d-block capitalize" htmlFor="email" >
      email
      <input type="email" 
       name="email" 
       className={`form-input ${errors.length > 0 && email==='' &&  isFound(errors,'email') && 'error-input'}`}
       id="emailInput" 
       value={email}
       aria-required='true' 
       placeholder="demo@gmail.com"
       onChange={handleChange}
       />
      
    </label>
    

    <label className="d-block capitalize" htmlFor="password">
      password
       <input 
       type="password" 
       name="password" 
       className={`form-input ${errors.length > 0 && password==='' &&  isFound(errors,'password') && 'error-input'}`}
       id="password-input" 
       aria-required='true' 
       value={password}
       onChange={handleChange}
       />
    </label>
    
    <button className="btn-blue" type="submit">Log in</button>
    
     {errors?.length > 0 &&
      <Error>
         {errors.map((error,index)=>{
          const errorMessage = Object.values(error);
          return <p key={index}>{errorMessage}</p>
         })}
      </Error>
      }
  </form>
  )
}

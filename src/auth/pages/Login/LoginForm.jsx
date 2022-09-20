
import { UseForm } from "../../../hooks/UseForm";
import {Error} from '../../../error/Error';

export const LoginForm = () => {
    const formData = {email:'',password:''};
    const requiredFields = {email:{},password:{}};
    
    const {email,password,handleChange,validateForm,errors} = UseForm(formData,requiredFields);

    const handleSubmit = (e) =>{
     e.preventDefault();
       validateForm();
    }

  return (
    <form className="auth-logIn-form" onSubmit = {handleSubmit}>
    <label className="d-block" htmlFor="email" >
      <input type="email" 
       name="email" 
       id="emailInput" 
       value={email}
       aria-label="email"  
       aria-required='true' 
       placeholder="demo@gmail.com"
       onChange={handleChange}

       />
    </label>
    

    <label className="d-block" htmlFor="password">
       <input 
       type="password" 
       name="password" 
       id="password-input" 
       aria-label="password" 
       aria-required='true' 
       value={password}
       onChange={handleChange}
       />
    </label>
    
    <button className="btn-blue" type="submit">Log in</button>
     
     {errors?.length > 0 &&
      <Error>
         {errors.map((error)=>{
          return <p className="capitalize" key={error}> {error}</p>
         })}
      </Error>
      }
  </form>
  )
}

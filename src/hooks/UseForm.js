
import {useState}from 'react';
import { firstLetterUppercase } from '../helpers';

export const UseForm = (initialState = {},formValidation = {}) => {
  
    const[values,setValues] = useState(initialState);
    const [errors,setErrors] = useState([]);

    const handleChange = ({target}) =>{
        setValues({...values,[target.name]:target.value });
    }

    const resetForm = () =>{
        setValues(initialState)
    }

    const validateForm = () =>{
        const errors = [];
        let isFormValid = true;
  
     for(const formField in formValidation){
        
        if(values[formField] === ''){
            const fieldName = firstLetterUppercase(formField);
            errors.push({[formField]:`${fieldName} cannot be blank`});
            isFormValid = false;
            
           }

            if(formValidation[formField]?.isValid && values[formField] !==''){
                const ruleValidation = formValidation[formField]?.isValid;
                if(!ruleValidation(values[formField])){
                    const fieldName = firstLetterUppercase(formField);
                   errors.push({[formField]:`${fieldName} ${formValidation[formField]?.message}`})
                   isFormValid = false;
                }
            }
       }

       setErrors(errors);
       return isFormValid;

    }

    return{
      ...values,
        values,
        errors,
        handleChange,
        resetForm,
        validateForm
    }

}

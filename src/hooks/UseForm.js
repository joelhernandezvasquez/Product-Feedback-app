
import {useState}from 'react';

export const UseForm = (initialState = {},formValidation = {}) => {
  
    const[values,setValues] = useState(initialState);
    const [errors,setErrors] = useState([]);

    const handleChange = ({target}) =>{
        setValues({...values,[target.name]:target.value })
    }

    const resetForm = () =>{
        setValues(initialState)
    }

    const validateForm = () =>{
        const errors = [];
  
     for(const formField in formValidation){
        
        if(values[formField] === ''){
            const fieldName = formField[0].toUpperCase().concat(formField.slice(1));
            errors.push({[formField]:`${fieldName} cannot be blank`});
           }

            // if(formValidation[formField]?.isValid){
            //     const ruleValidation = formValidation[formField]?.isValid;
            //     console.log(ruleValidation('ddfd'))
            // }
       }


       setErrors(errors);

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

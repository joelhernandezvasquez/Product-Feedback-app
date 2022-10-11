import {useState} from 'react';

export const UseToogle = (initialValue = false) => {
  
    const[isToggle,setToogle] = useState(initialValue);

     const toggle = () =>{
        setToogle((c)=> !isToggle);
     }

     const handleToogle = (value) =>{
        setToogle(value);
     }
   
    return {
        isToggle,
        toggle,
        handleToogle
    }

}


export const isFound = (array,key) =>{

    for(let value of array){
      const obj = value;

      if(obj.hasOwnProperty(key)){
        
         return true;
   }
}

  return false;
}
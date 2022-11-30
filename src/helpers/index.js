

export const firstLetterUppercase = (str) =>{
   return str[0].toUpperCase().concat(str.slice(1))
}

export const getBasePathURL = (pathname) =>{
   return pathname.slice(0,pathname.lastIndexOf("/"));
}

export const setBorderStatus = (status) =>{
 
   let borderColor = '';

   if(status==='Planned') 
      borderColor = '#F49F85';
   
   else if(status === 'In-Progress') 
     borderColor = '#AD1FEA';

   else if (status ==='Live') 
     borderColor = "#62BCFA";
   
   else throw new Error('status parameter does not meet the criteria');

 return{
   borderTop:`6px solid ${borderColor}`,
   borderRadius: '5px 5px 0px 0px'
 }    
}

export const setBackgroundStatus = (status) => {
  let background = '';
  
  if(status==='Planned') 
   background = '#F49F85';

else if(status === 'In-Progress') 
 background = '#AD1FEA';

else if (status ==='Live') 
 background= "#62BCFA";

else throw new Error('status parameter does not meet the criteria');
 return {backgroundColor:`${background}`};
}
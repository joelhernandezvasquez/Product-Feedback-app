

export const firstLetterUppercase = (str) =>{
   return str[0].toUpperCase().concat(str.slice(1))
}

export const getBasePathURL = (pathname) =>{
   return pathname.slice(0,pathname.lastIndexOf("/"));
}

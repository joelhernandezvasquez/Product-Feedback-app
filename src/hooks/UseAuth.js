import {useMemo} from 'react'

export const UseAuth = (status) => {
 
    const isAuthenticated = useMemo((status) => status ==='checking',[status]);
    
    return{
        isAuthenticated
    }
}

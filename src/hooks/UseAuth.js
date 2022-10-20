
import {useEffect} from 'react'
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingFeedbacks } from '../store/feedback-product/thunks';

export const UseAuth = () => {
 
    const dispatch = useDispatch();
    const {status} = useSelector((state)=> state.auth);
   
   
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth,async (user)=>{
         
           if(!user) return dispatch(logout())
    
           const {uid,email,displayName,photoURL} = user;
           dispatch(login({uid,email,displayName,photoURL}));
          dispatch(startLoadingFeedbacks());
        })
      },[])

    return status
   
}

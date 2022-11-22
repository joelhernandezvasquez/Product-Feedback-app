import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { resetFeedbackMessage } from "../store/feedback-product/feedbackSlice";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const UseToast = (message,resetForm) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        if(message.length > 0){
            Swal.fire(
              'Good Job',
             `${message}!`,
              'success'
            )
            dispatch(resetFeedbackMessage())
            if(resetForm)
             resetForm();
        }
    },[message])
}

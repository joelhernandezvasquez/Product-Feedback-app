import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startDeletingFeedback } from '../../../store/feedback-product/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


export const DeleteFeedback = ({feedbackId}) => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteFeedback = (e) =>{
        e.preventDefault();
         Swal.fire({
           title: 'Are you sure you want to delete the feedback?',
           text: "You won't be able to revert this!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#D73737',
           cancelButtonColor: '#656EA3',
           confirmButtonText: 'Yes, delete it!'
         }).then((result)=>{
           if(result.isConfirmed){
             dispatch(startDeletingFeedback(feedbackId));
             Swal.fire(
              'Good Job',
              'Feedback has been deleted',
              'success'
             )
             navigate("/");

           }
         })


        }
  return (
<>
<button className="capitalize btn-red" onClick={deleteFeedback}> delete </button>
</>
  )
}

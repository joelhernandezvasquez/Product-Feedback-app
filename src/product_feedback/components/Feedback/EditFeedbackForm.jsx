import { useRef,useState,useEffect} from "react";
import { useParams,useNavigate, Navigate} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { getFeedback } from '../../../helpers/getFeedback';
import { DropdownFilterWrapper } from "../DropdownFilterWrapper/DropdownFilterWrapper";
import  iconEditFeedback from '../../../assets/icon-edit-feedback.svg';
import { statusCategory,categoryDropdown } from "../../../constant";
import { startDeletingFeedback, startEditingFeedback } from "../../../store/feedback-product/thunks";
import { UseToast } from "../../../hooks/UseToast";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const EditFeedbackForm = () => {
    const {id} = useParams();
    const {feedbacks,feedbackMessage} = useSelector((state)=> state.feedback);
    const optionFilterRef = useRef();
    const statusFilterRef = useRef();
    const [feedbackValues,setFeedbackValues] = useState();
    const dispatch = useDispatch();
    UseToast(feedbackMessage);
    const navigate = useNavigate();

    useEffect(() => {
        setFeedbackValues(getFeedback(feedbacks,id));
    },[feedbacks])

  
    const handleChange = ({target}) =>{
      setFeedbackValues({...feedbackValues,[target.name]:target.value})
    }

    const saveChanges = (event) =>{
       event.preventDefault();
        dispatch(startEditingFeedback(
          {feedbackId:id,title:feedbackValues.title,category:optionFilterRef.current,status:statusFilterRef.current,detail:feedbackValues.detail}));
    }
   

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
          dispatch(startDeletingFeedback(id));
        }
      })
      
    }

    const cancelChanges = () =>{
      navigate("/");
    }
    
  return (
    <form className='feedback-form primary-border-radius'>

      <img className="icon-feedback" src={iconEditFeedback} alt=""/>
      <h1 className="feedback-form-title fw-700">Editing `{feedbackValues?.title}`</h1>
      <div className="feedback-input-field">
        <label htmlFor="feedback-title">  Feedback Title <p>Add a short, descriptive headline</p> </label>
       <input 
       className={`feedback-input`} 
       type="text" 
       id="feedback-title" 
       name="title" 
       aria-required='true'
       value = {feedbackValues?.title} 
       onChange = {(e) => handleChange(e)}
       />
      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-category"> Category <p>Choose a category for your feedback</p>
      </label>

      {feedbackValues?.category && 
      <DropdownFilterWrapper 
      optionFilterRef = {optionFilterRef} 
      statusCategory = {feedbackValues?.category} 
      menuOptions = {categoryDropdown}
      />
      } 

      </div>

      <div className="feedback-input-field">
      <label htmlFor="feedback-comment">Update Status<p>Change feature state</p>
      </label>

     {feedbackValues?.status && 
      <DropdownFilterWrapper
     optionFilterRef={statusFilterRef}
     statusCategory = {feedbackValues?.status}
     menuOptions = {statusCategory}
   />
     }

      </div>

      <div className="feedback-input-field">
        <label htmlFor="feedback-comment">  Feedback Detail <p>Include any specific comments on what should be improved, added, etc.</p>
      </label>
       <textarea 
       name="detail" 
       className={`feedback-comment form-input`}
       aria-required='true' 
       value={feedbackValues?.detail}
       onChange = {(e)=> handleChange(e)}
       >
       </textarea>
       
      </div>

      <div className="feedback-form-edit-btn-containers">
        <div>
        <button className="capitalize" onClick={saveChanges}> save changes</button>
        <button className="capitalize btn-black" onClick={cancelChanges}> cancel</button>
        </div>
      
        <button className="capitalize btn-red" onClick={deleteFeedback}> delete </button>
      </div>
    </form>
  )
}

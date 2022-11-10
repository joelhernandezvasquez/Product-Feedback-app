import { createSlice } from '@reduxjs/toolkit';

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
       isSaving:false,
       currentCategory:'All',
       feedbacks:[],
       feedbackFiltered:[],
       feedbackMessage:'',
       errorMessage:null
    },
    reducers: {
       getFeedbacks:(state,{payload}) =>{
        state.isSaving = false,
        state.feedbacks = payload
       },
       addNewFeedback:(state,{payload}) =>{
         state.isSaving = false,
         state.feedbacks = [...state.feedbacks,payload];
         state.feedbackMessage = 'Feedback has been saved'
       },
       updateFeedback:(state,{payload})=>{
         state.isSaving = false,
        state.feedbacks = state.feedbacks.map((feedback)=> feedback.id === payload.feedbackId ? payload.updatedFeedbackSelected:feedback);
        state.feedbackMessage = 'Comment has been saved'
      },

       setSaving:(state) =>{
        state.isSaving = true;
        state.feedbackMessage = '';
       },
       filterFeedback:(state,{payload})=>{
        state.feedbackFiltered = payload;
       },
       setCategory:(state,{payload}) =>{
         state.currentCategory = payload
       },
       errorMessage:(state,{payload}) =>{
         state.isSaving = false,
         state.errorMessage = payload
       },
       resetFeedbackMessage:(state) =>{
        state.feedbackMessage = '';
       }
    }
});


// Action creators are generated for each case reducer function
export const
 { getFeedbacks,
  filterFeedback,
  setCategory,
  errorMessage,
  setSaving,
  addNewFeedback,
  updateFeedback,
  resetFeedbackMessage} = feedbackSlice.actions;
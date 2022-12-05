import { createSlice } from '@reduxjs/toolkit';

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
       isSaving:false,
       currentCategory:'All',
       currentFilterOption:'Most Upvotes',
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
        state.feedbackMessage = `${payload.message}`
      },

      deleteFeedback:(state,{payload})=>{
        state.feedbacks = state.feedbacks.filter((feedback)=> feedback.id !== payload.feedbackId)
     
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
       sortFilterFeedback:(state,{payload}) =>{
         state.currentFilterOption = payload;
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
  deleteFeedback,
  sortFilterFeedback,
  resetFeedbackMessage} = feedbackSlice.actions;
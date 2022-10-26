import { createSlice } from '@reduxjs/toolkit';

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
       isSaving:false,
       currentCategory:'All',
       feedbacks:[],
       feedbackFiltered:[],
       errorMessage:null
    },
    reducers: {
       getFeedbacks:(state,{payload}) =>{
        state.isSaving = false,
        state.feedbacks = payload
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
       }
    }
});


// Action creators are generated for each case reducer function
export const { getFeedbacks,filterFeedback,setCategory,errorMessage } = feedbackSlice.actions;
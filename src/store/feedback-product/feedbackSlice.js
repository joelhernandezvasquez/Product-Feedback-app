import { createSlice } from '@reduxjs/toolkit';

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
       isSaving:false,
       currentCategory:'All',
       feedbacks:[],
       errorMessage:null
    },
    reducers: {
       getFeedbacks:(state,{payload}) =>{
        state.isSaving = false,
        state.feedbacks = payload
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
export const { getFeedbacks,setCategory,errorMessage } = feedbackSlice.actions;
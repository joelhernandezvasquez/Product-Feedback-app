import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from './auth/authSlice';
import { feedbackSlice } from "./feedback-product/feedbackSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        feedback:feedbackSlice.reducer
    },
})
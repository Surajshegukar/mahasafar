// redux toolkit

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import itineraryReducer from './itinerarySlice';


export const store = configureStore({
    reducer: {
        auth : authReducer,
        itinerary: itineraryReducer,
    },
    });

export default store;

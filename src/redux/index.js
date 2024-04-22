import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/Auth/services/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

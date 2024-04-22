import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: 0,
    name: '',
    email: '',
  },
  authorization: {
    token: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, {payload}) {
      state = payload;
    },
  },
});

export const {setUserData} = authSlice.actions;

export default authSlice.reducer;

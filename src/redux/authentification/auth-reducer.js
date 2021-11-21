import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {name: '', email: ''},
  token: null,
  isLoggedIn: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signup.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state, _) {
      state.user = {name: '', email: ''};
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refresh.fulfilled](state, action) {
      state.user = {...action.payload};
      state.isLoggedIn = true;
    },
    [authOperations.refresh.rejected](state, action) {
      state.error = action.payload;
    }
  }
});

export default authSlice.reducer;